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
    }
}