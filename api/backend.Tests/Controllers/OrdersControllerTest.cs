using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using backend.Controllers;
using backend.Models;
using backend.Tests.Utils;
using backend.ViewModels;
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
                IEnumerable<OrderRequestItem> orderItems = new IEnumerable();
                var newOrderItem = new OrderRequestItem{PaintingId=1,Quantity=2};
                orderItems.Add(newOrderItem);
                var newOrder = new OrderRequest { UserEmail = "testemail@test.com",OrderItems = orderItems};
                var response = await testObject.Post(newOrder);
                var result = (response as CreatedResult).Value as Order;
                result.Id.Should().BeGreaterThan(0);
                result.UserEmail.Should().Be(newOrder.UserEmail);
                result.OrderItems.Count().Should().Be(newOrder.OrderItems.Count());
            }
        }
    }
}