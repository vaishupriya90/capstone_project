using System.ComponentModel.DataAnnotations;

namespace backend.Models

{
    public class CartItem
    {
        [Key]
        public int Id { get; set; }
        public int PaintingId { get; set; }
        public int Quantity { get; set; }
        public virtual Painting Painting { get; set; }
    }
}
