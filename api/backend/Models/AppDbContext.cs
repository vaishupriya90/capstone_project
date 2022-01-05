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
        public virtual DbSet<CartItem> CartItems { get; set; }

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
                    Image = "https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                },
                new
                {
                    Id = 2,
                    Name = "Peacock",
                    Description = "Some Description",
                    Price = 99.0,
                    Image = "https://media.istockphoto.com/photos/portrait-of-peacock-watercolor-picture-id872927220?b=1&k=20&m=872927220&s=170667a&w=0&h=vbRQncIMsgjELbxqhm6OrWUfVkV5iK47btDr0_T_ovs="
                },
                new
                {
                    Id = 3,
                    Name = "Silhouette house",
                    Description = "Some Description",
                    Price = 120.0,
                    Image = "https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                },

                new
                {
                    Id = 4,
                    Name = "Black bird perched on tree",
                    Description = "Some Description",
                    Price = 87.0,
                    Image = "https://images.unsplash.com/photo-1588522943401-6ba285f692de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                }
            );
        }
    }
}