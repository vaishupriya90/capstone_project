using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using backend.Controllers;
using backend.Models;
using backend.Tests.Utils;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace backend.Tests.Controllers
{
    public class OrdersControllerTest : IAsyncLifetime
    {
        private OrdersController testObject;
        private AppDbContext db;

        public async Task InitializeAsync()
        {
            db = await TestUtils.GetTestDbContext();
            testObject = new OrdersController(db, new Mock<ILogger<OrdersController>>().Object);
        }

        public async Task DisposeAsync()
        {
            await db.DisposeAsync();
        }

        public class Post : OrdersControllerTest
        {
            [Fact]
            public async void WhenNewOrderIsAdded_ReturnsOkObject()
            {
               
                var orderRequestItems = new List<OrderRequestItem>();

                var reqOrderItem1 = new OrderRequestItem { PaintingId = 1, Quantity = 2 };
                var reqOrderItem2 = new OrderRequestItem { PaintingId = 2, Quantity = 2 };
                orderRequestItems.Add(reqOrderItem1);
                orderRequestItems.Add(reqOrderItem2);

                var orderRequest = new OrderRequest
                {
                    UserEmail = "test@gamil.com",
                    OrderItems = orderRequestItems
                };
                
                var response = await testObject.Post(orderRequest);
                var result = (response as CreatedResult).Value as OrderResponse;
                result.UserEmail.Should().Be(orderRequest.UserEmail);
                result.OrderItems.Count().Should().Be(orderRequest.OrderItems.Count());
            }

        }
    }
}
