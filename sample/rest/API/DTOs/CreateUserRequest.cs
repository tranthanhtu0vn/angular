namespace API.DTOs
{
    using System;
    using TinyERP.Common.Validation.Attribute;

    [Serializable()]
    public class CreateUserRequest
    {
        [Required("security.addOrUpdateUser.firstNameWasInvalid")]
        public string FirstName { get; set; }
        [Required("security.addOrUpdateUser.lastNameWasInvalid")]
        public string LastName { get; set; }
        [Required("security.addOrUpdateUser.userNameWasInvalid")]
        public string UserName { get; set; }
    }
}