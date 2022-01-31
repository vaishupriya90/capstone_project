using System.ComponentModel.DataAnnotations;

namespace backend.Models

{
    public class Order
    {
        [Key]
        public int Id { get; set; }
        
        public string OrderNumber { get; set; }
        
        public string UserEmail { get; set; }
        
        public decimal Total { get; set; }

        public DateTime OrderTimeStamp { get; set; }

        public ICollection<OrderItem> OrderItems { get; set; }
    }
}
