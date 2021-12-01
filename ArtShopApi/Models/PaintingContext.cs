using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace ArtShopApi.Models
{
    public partial class PaintingContext : DbContext
    {
        public PaintingContext() { }
        public PaintingContext(DbContextOptions<PaintingContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Painting> Paintings { get; set; }
    }
}