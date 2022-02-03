using System.ComponentModel.DataAnnotations;

namespace backend.Models

{
    public class OrderResponse
    {
        public string OrderNumber { get; set; }
        
        public string UserEmail { get; set; }
        
        public decimal Total { get; set; }

        public string OrderDate { get; set; }

        public ICollection<OrderItem> OrderItems { get; set; }
    }
}
