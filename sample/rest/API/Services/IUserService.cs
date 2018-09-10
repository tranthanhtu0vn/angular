namespace API.Services
{
    using Models;
    using System.Collections.Generic;
    using System;
    using DTOs;

    public interface IUserService
    {
        IList<User> GetUsers();
        User GetUser(Guid userId);
        User CreateUser(CreateUserRequest request);
        void UpdateUser(UpdateUserRequest request);
    }
}