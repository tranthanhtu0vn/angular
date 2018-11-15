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
    using TinyERP.Common.Helpers;
    using TinyERP.Common.Validation;

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
            IValidationException validator = ValidationHelper.Validate(request);
            User existedUser = this.GetUserByUserName(request.UserName);
            if (existedUser != null)
            {
                validator.Add(new ValidationError("security.addOrUpdateUser.userNameWasExisted", "USER_NAME", request.UserName));
            }
            validator.ThrowIfError();
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
            IValidationException validator = ValidationHelper.Validate(request);
            
            User existedUser = this.GetUserByUserName(request.UserName);
            if (existedUser != null && existedUser.Id != request.UserId)
            {
                validator.Add(new ValidationError("security.addOrUpdateUser.userNameWasExisted", "USER_NAME", request.UserName));
            }
            validator.ThrowIfError();
        }
    }
}