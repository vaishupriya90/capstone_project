using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;


namespace backend.Models
{
    public partial class AppDbContext : DbContext
    {
        public AppDbContext() { }
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Painting> Paintings { get; set; }
        public virtual DbSet<OrderItem> OrderItems { get; set; }

        public virtual DbSet<Order> Orders { get; set; }

        protected override void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)
        {
            configurationBuilder.Properties<decimal>()
                .HavePrecision(18, 6);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {


            modelBuilder.Entity<Painting>()
            .HasData(
                new
                {
                    Id = 1,
                    Name = "The Lonely Boat",
                    Description = "Some Description",
                    Price = 200.0,
                    AvailableQuantity = 10,
                    Image = "https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                },
                new
                {
                    Id = 2,
                    Name = "Peacock",
                    Description = "Some Description",
                    Price = 99.0,
                    AvailableQuantity = 7,
                    Image = "https://media.istockphoto.com/photos/portrait-of-peacock-watercolor-picture-id872927220?b=1&k=20&m=872927220&s=170667a&w=0&h=vbRQncIMsgjELbxqhm6OrWUfVkV5iK47btDr0_T_ovs="
                },
                new
                {
                    Id = 3,
                    Name = "Silhouette house",
                    Description = "Some Description",
                    Price = 120.0,
                    AvailableQuantity = 15,
                    Image = "https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                },

                new
                {
                    Id = 4,
                    Name = "Black bird perched on tree",
                    Description = "Some Description",
                    Price = 87.0,
                    AvailableQuantity = 5,
                    Image = "https://images.unsplash.com/photo-1588522943401-6ba285f692de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                },
                new
                {
                    Id = 5,
                    Name = "Abstarct art",
                    Description = "Some Description",
                    Price = 299.0,
                    AvailableQuantity = 5,
                    Image = "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80"
                },
                new
                {
                    Id = 6,
                    Name = "Arts & Culture",
                    Description = "Some Description",
                    Price = 87.0,
                    AvailableQuantity = 5,
                    Image = "https://images.unsplash.com/photo-1584285405429-136bf988919c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
                },
                new
                {
                    Id = 7,
                    Name = "Twin birds",
                    Description = "Some Description",
                    Price = 164.0,
                    AvailableQuantity = 5,
                    Image = "https://images.unsplash.com/photo-1578763460789-324a7fcc0ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80"
                },
                new
                {
                    Id = 8,
                    Name = "WaterFall",
                    Description = "Some Description",
                    Price = 99.0,
                    AvailableQuantity = 5,
                    Image = "https://i.pinimg.com/474x/2b/17/2d/2b172d14b9352972de753e04b853bf9b.jpg"
                },
                new
                {
                    Id = 9,
                    Name = "Black bird perched on tree",
                    Description = "Some Description",
                    Price = 87.0,
                    AvailableQuantity = 5,
                    Image = "https://images.unsplash.com/photo-1588522943401-6ba285f692de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                },
                new
                {
                    Id = 10,
                    Name = "Red Umbrella",
                    Description = "Some Description",
                    Price = 120.0,
                    AvailableQuantity = 5,
                    Image = "https://blogger.googleusercontent.com/img/a/AVvXsEgui3Zr0h5jHPi86tbI7mtTU8-NRuGjchaLyisjIEhWBAdB29fX-bOKOwJCIkotiMNdREYZDAhVxwFyqnSN3xy2PIJlqE_7_zjQjP7Z5WC6ndNwWLD8l45jGFb11CSIDTr2n251OREkSfgPXopiCK_e6wfDU45WwV29LC133uhrTi6WmNn6yL9v1OxQ=s320"
                },
                new
                {
                    Id = 11,
                    Name = "Sunset Swing",
                    Description = "Some Description",
                    Price = 225.0,
                    AvailableQuantity = 5,
                    Image = "https://www.artisticaly.com/assets/Easy-Acrylic-Paintings-Ideas-for-Beginners-32.jpg"
                },
                new
                {
                    Id = 12,
                    Name = "Aurora",
                    Description = "Some Description",
                    Price = 95.0,
                    AvailableQuantity = 5,
                    Image = "https://www.artisticaly.com/assets/Easy-Acrylic-Paintings-Ideas-for-Beginners-14.jpg"
                }

            );
        }
    }
}