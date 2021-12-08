namespace backend.Models
{
    public class Painting
    {
        public long Id { get; set; }
        public string? Name { get; set; }

        public Painting(string name)
        {
            Name = name;
        }
    }
}