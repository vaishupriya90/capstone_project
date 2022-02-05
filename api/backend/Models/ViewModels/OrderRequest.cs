using System.ComponentModel.DataAnnotations;

namespace backend.Models

{
    public class OrderRequest
    {
        public string UserEmail {get;set;}
        public IEnumerable<OrderRequestItem> OrderItems {get;set;}
        
    }
}
