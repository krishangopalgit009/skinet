using System;
using System.Linq.Expressions;
using Core.Entities.OrderAggregate;

namespace Core.Specifications
{
    public class OrdersWithItemsAndOrderingSpecification : BaseSpecification<Order>
    {
        public OrdersWithItemsAndOrderingSpecification(string email) : base(o => o.BuyerEmail == email)
        {
            AddInclude(o => o.OrderItem);
            AddInclude(o => o.DeliveryMethod);
            AddOrderByDecending(o => o.OrderDate);
        }

        public OrdersWithItemsAndOrderingSpecification(int id, string email) :
            base(O => O.Id == id && O.BuyerEmail == email)
        {
            AddInclude(o => o.OrderItem);
            AddInclude(o => o.DeliveryMethod);
        }
    }
}