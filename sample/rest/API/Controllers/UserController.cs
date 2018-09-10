namespace API.Controllers
{
    using DTOs;
    using Models;
    using Services;
    using System;
    using System.Collections.Generic;
    using System.Web.Http;
    [RoutePrefix("api/users")]
    public class UserController: ApiController
    {
        [Route("")]
        [HttpGet()]
        public IList<User> GetUsers()
        {
            IUserService userService = new UserService();
            return userService.GetUsers();
        }

        [HttpGet()]
        [Route("{userId}")]
        public User GetUser(Guid userId)
        {
            IUserService userService = new UserService();
            return userService.GetUser(userId);
        }

        [HttpPost()]
        [Route("")]
        public User CreateUser(CreateUserRequest request)
        {
            IUserService userService = new UserService();
            return userService.CreateUser(request);
        }

        [HttpPut()]
        [Route("{userId}")]
        public void UpdateUser(Guid userId, UpdateUserRequest request) {
            request.UserId = userId;
            IUserService userService = new UserService();
            userService.UpdateUser(request);
        }
    }
}