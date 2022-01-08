using System.ComponentModel.DataAnnotations;

namespace backend.Models

{
    public class Painting
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }

        public double Price { get; set; }

        public int AvailableQuantity { get; set; }


        public Painting(string name, string description, string image, double price, int availableQuantity)
        {
            Name = name;
            Description = description;
            Image = image;
            Price = price;
            AvailableQuantity = availableQuantity;
        }

        public Painting(string name)
        {
            Name = name;
        }
    }
}