using HomeWork0506.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using HomeWork0506.Web.Models;

namespace HomeWork0506.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private string _connectionString;

        public OrdersController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("addorder")]
        public void AddOrder(Order order)
        {
            var repo = new OrdersRepository(_connectionString);
            repo.AddOrder(order);
        }

        [HttpGet]
        [Route("getall")]
        public List<Order> GetAll()
        {
            var repo = new OrdersRepository(_connectionString);
            return repo.GetAll();
        }


        [HttpGet]
        [Route("getorderinfo")]
        public Order GetOrderInfo(int id)
        {
            var repo = new OrdersRepository(_connectionString);
            return repo.GetById(id);
        }
    }
}
