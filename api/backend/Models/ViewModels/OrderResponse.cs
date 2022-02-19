using System.ComponentModel.DataAnnotations;

namespace backend.Models

{
    public class OrderResponse
    {
        public string OrderNumber { get; set; }

        public string UserEmail { get; set; }

        public decimal Total { get; set; }

        public string OrderDate { get; set; }

        public IEnumerable<OrderRequestItem> OrderItems { get; set; }

        public OrderResponse(Order order)
        {
            OrderNumber = order.OrderNumber;
            UserEmail = order.UserEmail;
            Total = order.Total;
            OrderDate = (order.OrderTimeStamp).ToString("dddd, dd MMMM yyyy");
            OrderItems = order.OrderItems.Select(item => new OrderRequestItem
            {
                PaintingId = item.PaintingId,
                Quantity = item.Quantity,

            });
        }
    }
}
