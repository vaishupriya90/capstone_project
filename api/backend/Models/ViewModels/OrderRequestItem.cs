using System.ComponentModel.DataAnnotations;

namespace backend.Models

{
    public class OrderRequestItem
    {
        public int PaintingId {get;set;}
        public int Quantity {get;set;}
        
    }
}
