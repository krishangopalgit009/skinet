using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class RegisterDto
    {
       [Required]
       public string DisplayName { get; set; } 

       [EmailAddress] 
       public string Email { get; set; }
       [Required]
    //    [RegularExpression("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\\]).{8,32}$",
    //    ErrorMessage = "Password must have 1 Uppercase, 1 Lowercase, number, 1 non alphanumeric and at least 6 characters")]
       public string Password { get; set; }
    }
}