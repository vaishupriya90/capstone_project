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

            // //OrderItems
            
            // var orderItem1 = new OrderRequestItem{PaintingId=1,Quantity=2};
            // var orderItem2 = new OrderRequestItem{PaintingId=2,Quantity=3};
            

            // //OrderRequest
            // var newOrder = new OrderRequest{UserEmail="test@test.com",OrderItems=orderItems};


            // //Order
            // var order = new Order
            //     {
            //         UserEmail = newOrder.UserEmail,
            //         Total = 300,
            //         OrderItems = newOrder.OrderItems.Select(item => new OrderItem
            //         {
            //             PaintingId = item.PaintingId,
            //             Quantity = item.Quantity,
            //         }).ToList(),
            //         OrderTimeStamp = DateTime.UtcNow,
            //         OrderNumber = DateTime.UtcNow.ToString("yyyyMMddhhmmssfff"),
            //     };

            // db.Orders.Add(order);


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