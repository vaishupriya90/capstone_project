using System.ComponentModel.DataAnnotations;

namespace backend.Models

{
    public class CartItem
    {
        [Key]
        public long Id { get; set; }
        public long PaintingId { get; set; }
        public int Quantity { get; set; }
        public virtual Painting Painting { get; set; }
    }
}
