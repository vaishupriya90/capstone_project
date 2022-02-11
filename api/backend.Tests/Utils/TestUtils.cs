using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

namespace backend.Tests.Utils
{
    public static class TestUtils
    {
        public static readonly string PAINTING_NAME = "Peacock";
        public static readonly string DESCRIPTION = "some description";
        public static readonly string IMAGE = "peacock.image";
        public static readonly double PRICE = 100;
        public static readonly int AVAILABLE_QUANTITY = 2;
        
        public static async Task<AppDbContext> GetTestDbContext()
        {
            var db = new AppDbContext(CreateOptions());
            await db.Database.EnsureDeletedAsync();
            await db.Database.EnsureCreatedAsync();

            //Paintings
            var painting = new Painting(PAINTING_NAME, DESCRIPTION, IMAGE, PRICE, AVAILABLE_QUANTITY);
            db.Paintings.Add(painting);

            var painting2 = new Painting("Boat", "description", "Boat.image", 200, 3);

            db.Paintings.Add(painting2);

             await db.SaveChangesAsync();
            
            return db;
        }

private static DbContextOptions<AppDbContext> CreateOptions()
{
    var connection = new SqliteConnection("Filename=:memory:");
    connection.Open();

    var builder = new DbContextOptionsBuilder<AppDbContext>();
    builder.UseSqlite(connection);

    builder.ConfigureWarnings(x => x.Ignore(Microsoft.EntityFrameworkCore.Diagnostics.RelationalEventId.AmbientTransactionWarning));

    return builder.Options;
}
    }
}