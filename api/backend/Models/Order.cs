using System.ComponentModel.DataAnnotations;

namespace backend.Models

{
    public class Order
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public int Total { get; set; }

        public DateTime OrderTimeStamp {get;set;}

        public ICollection<OrderItem> orderItems { get; set; }
        public virtual User user { get; set; }
    }
}
