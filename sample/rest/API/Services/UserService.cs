namespace API.Services
{
    using System;
    using System.Collections.Generic;
    using API.Models;
    using System.Linq;
    using DTOs;
    using System.Web.Http;
    using System.Net;
    using Helpers;

    public class UserService : IUserService
    {
        private static IList<User> Users;
        static UserService()
        {
            UserService.Users = new List<User>();
        }

        public User CreateUser(CreateUserRequest request)
        {
            this.Validate(request);
            User user = new User(request.FirstName, request.LastName, request.UserName);
            UserService.Users.Add(user);
            return user;
        }

        private void Validate(CreateUserRequest request)
        {
            if (request == null)
            {
                HttpHelper.Throw("Invalid request", HttpStatusCode.BadRequest);
            }
            if (String.IsNullOrWhiteSpace(request.FirstName))
            {
                HttpHelper.Throw("First name was invalid", HttpStatusCode.BadRequest);
            }

            if (String.IsNullOrWhiteSpace(request.LastName))
            {
                HttpHelper.Throw("Last name was invalid", HttpStatusCode.BadRequest);
            }

            if (String.IsNullOrWhiteSpace(request.UserName) || this.GetUserByUserName(request.UserName) != null)
            {
                HttpHelper.Throw("User name was invalid", HttpStatusCode.BadRequest);
            }
        }

        private User GetUserByUserName(string userName)
        {
            return UserService.Users.FirstOrDefault(user => user.UserName == userName);
        }

        public User GetUser(Guid userId)
        {
            return UserService.Users.FirstOrDefault(user => user.Id == userId);
        }

        public IList<User> GetUsers()
        {
            return UserService.Users;
        }

        public void UpdateUser(UpdateUserRequest request)
        {
            this.Validate(request);
            User user = this.GetUser(request.UserId);
            user.FirstName = request.FirstName;
            user.LastName = request.LastName;
            user.UserName = request.UserName;
        }

        private void Validate(UpdateUserRequest request)
        {
            if (request == null)
            {
                HttpHelper.Throw("Invalid request", HttpStatusCode.BadRequest);
            }

            if (this.GetUser(request.UserId) == null)
            {
                HttpHelper.Throw("UserId was invalid", HttpStatusCode.BadRequest);
            }
            if (String.IsNullOrWhiteSpace(request.FirstName))
            {
                HttpHelper.Throw("First name was invalid", HttpStatusCode.BadRequest);
            }

            if (String.IsNullOrWhiteSpace(request.LastName))
            {
                HttpHelper.Throw("Last name was invalid", HttpStatusCode.BadRequest);
            }
            User existedUser = this.GetUserByUserName(request.UserName);
            if (existedUser != null && existedUser.Id != request.UserId)
            {
                HttpHelper.Throw("User name was invalid", HttpStatusCode.BadRequest);
            }
        }
    }
}