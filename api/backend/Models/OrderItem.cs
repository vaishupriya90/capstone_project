using System.ComponentModel.DataAnnotations;

namespace backend.Models

{
    public class OrderItem
    {
        [Key]
        public int Id { get; set; }
        public int PaintingId { get; set; }

        public int OrderId { get; set; }
        public int Quantity { get; set; }
        public virtual Painting Painting { get; set; }

        public virtual Order Order { get; set; }
    }
}
