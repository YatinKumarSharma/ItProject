using System.ComponentModel.DataAnnotations;

namespace AngularAuthAPI.Models
{
    public class Query
    {
        [Key]
        public int Id { get; set; }
        public String Email { get; set; }
        public String Name { get; set; }
        public String Reason { get; set; }
    }
}
