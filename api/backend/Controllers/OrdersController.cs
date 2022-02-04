using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly AppDbContext _db;
        private readonly ILogger<OrdersController> _logger;


        public OrdersController(AppDbContext db, ILogger<OrdersController> logger)
        {
            _db = db;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> Get(){

            try
            {
                var orders = await _db.Orders.Include(o => o.OrderItems).ToListAsync();
                var ordersResponse = orders.Select(o => new OrderResponse(o));
                return new OkObjectResult(ordersResponse);
                
                
            }
            catch (Exception e)
            {
                _logger.LogCritical($"SQL Read error. It is likely that there is no database connection established. ${e.Message}");
                throw;
            }

        }

        [HttpPost]
         public async Task<IActionResult> Post(OrderRequest orderRequest)
        {

            try
            {
                var paintingIds = orderRequest.OrderItems.Select(p => p.PaintingId);
                var paintings = await _db.Paintings.Where(p => paintingIds.Contains(p.Id)).ToListAsync();
                Order order = new Order
                {
                    UserEmail = orderRequest.UserEmail,
                    Total = (decimal)Math.Round(orderRequest.OrderItems.Sum(item => paintings.Find(p => p.Id == item.PaintingId).Price * item.Quantity), 2),
                    OrderItems = orderRequest.OrderItems.Select(item => new OrderItem
                    {
                        PaintingId = item.PaintingId,
                        Quantity = item.Quantity,
                    }).ToList(),
                    OrderTimeStamp = DateTime.UtcNow,
                    OrderNumber = DateTime.UtcNow.ToString("yyyyMMddhhmmssfff"),
                };
                _db.Orders.Add(order);
                await _db.SaveChangesAsync();

                var newOrderCreated = new OrderResponse(order);

                return new CreatedResult("api/orderConfirmation", newOrderCreated);
            }
            catch (Exception e)
            {
                _logger.LogCritical($"Error occured while creating the object. ${e.Message}");
                throw;
            }

        }
    }
}



