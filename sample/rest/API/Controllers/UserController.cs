namespace API.Controllers
{
    using DTOs;
    using Models;
    using Services;
    using System;
    using System.Collections.Generic;
    using System.Web.Http;
    using TinyERP.Common.MVC;
    using TinyERP.Common.MVC.Attributes;

    [RoutePrefix("api/users")]
    public class UserController: BaseApiController
    {
        [Route("")]
        [HttpGet()]
        [ResponseWrapper()]
        public IList<User> GetUsers()
        {
            IUserService userService = new UserService();
            return userService.GetUsers();
        }

        [HttpGet()]
        [Route("{userId}")]
        [ResponseWrapper()]
        public User GetUser(Guid userId)
        {
            IUserService userService = new UserService();
            return userService.GetUser(userId);
        }

        [HttpPost()]
        [Route("")]
        [ResponseWrapper()]
        public User CreateUser(CreateUserRequest request)
        {
            IUserService userService = new UserService();
            return userService.CreateUser(request);
        }

        [HttpPut()]
        [Route("{userId}")]
        [ResponseWrapper()]
        public void UpdateUser(Guid userId, UpdateUserRequest request) {
            request.UserId = userId;
            IUserService userService = new UserService();
            userService.UpdateUser(request);
        }
    }
}