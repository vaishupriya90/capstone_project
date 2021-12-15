using System.ComponentModel.DataAnnotations;

namespace backend.Models

{
    public class Painting
    {
        [Key]
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }

        public virtual ICollection<CartItem> CartItems { get; set; }

        public Painting(string name, string description, string image)
        {
            Name = name;
            Description = description;
            Image = image;
        }

        public Painting(string name)
        {
            Name = name;
        }
    }
}