using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace ArtShopApi.Models
{
    public class PaintingContext : DbContext
    {
        public PaintingContext(DbContextOptions<PaintingContext> options)
            : base(options)
        {
        }

        public DbSet<Painting> Paintings { get; set; } = null!;
    }
}