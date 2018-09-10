namespace API.Models
{
    using System;
    [Serializable()]
    public class User
    {
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public User()
        {
            this.Id = Guid.NewGuid();
        }
        public User(string firstName, string lastName, string userName):this()
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.UserName = userName;
        }


    }
}