using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace HomeWork0506.Data
{
    public class OrdersRepository
    {
        private readonly string _connectionString;

        public OrdersRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddOrder(Order order)
        {
            using var context = new CheesecakeDataContext(_connectionString);
            context.Orders.Add(order);
            context.SaveChanges();
        }

        public List<Order> GetAll()
        {
            using var context = new CheesecakeDataContext(_connectionString);
            return context.Orders.ToList();
        }

        public Order GetById(int id)
        {
            using var context = new CheesecakeDataContext(_connectionString);
            return context.Orders.FirstOrDefault(o => o.Id == id);
        }


    }
}
