using System;
using System.Collections.Generic;

namespace Core.Entities.OrderAggregate
{
    public class Order: BaseEntity
    {
        public Order()
        {
        }

        public Order(IReadOnlyList<OrderItem> orderItem,string buyerEmail, Address shipToAddress,
        DeliveryMethod deliveryMethod,  decimal subTotal)
        {
            BuyerEmail = buyerEmail;
            ShipToAddress = shipToAddress;
            DeliveryMethod = deliveryMethod;
            OrderItem = orderItem;
            SubTotal = subTotal;
        }

        public string BuyerEmail { get; set; }
        public DateTimeOffset OrderDate { get; set; } = DateTimeOffset.Now;
        public Address ShipToAddress { get; set; }
        public DeliveryMethod DeliveryMethod { get; set; }
        public IReadOnlyList<OrderItem> OrderItem { get; set; }
        public decimal SubTotal { get; set; }
        public OrderStatus Status { get; set; } = OrderStatus.Pending;
        public string PaymentIntentId { get; set; }
        public decimal GetTotal () 
        {
            return SubTotal + DeliveryMethod.Price;
        }
    }
}