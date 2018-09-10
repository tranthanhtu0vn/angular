namespace API.DTOs
{
    using System;
    [Serializable()]
    public class CreateUserRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
    }
}