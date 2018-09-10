namespace API.DTOs
{
    using System;
    public class UpdateUserRequest: CreateUserRequest
    {
        public Guid UserId { get; set; }
    }
}