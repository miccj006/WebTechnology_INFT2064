using AOWebApp.Data;
using AOWebApp.Models;
using Humanizer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace AOWebApp.Controllers
{
    public class ReportsController : Controller
    {
        private readonly AmazonDbContext _context;
        public ReportsController(AmazonDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {

            #region YearList
            var years = _context.CustomerOrders
                .Select(co => co.OrderDate.Year)
                .Distinct()
                .OrderBy(co => co)
                .ToList();
            #endregion

            return View("AnnualSalesReport", new SelectList(years));
        }
        [Produces("application/json")]
        public IActionResult AnnualSalesReportData(int Year)
        {
            if (Year > 0)
            {
                var orderSummary = _context.ItemsInOrders
                    .Where(iio => iio.OrderNumberNavigation.OrderDate.Year == Year)
                    .GroupBy(iio => new
                    {
                        iio.OrderNumberNavigation.OrderDate.Year,
                        iio.OrderNumberNavigation.OrderDate.Month
                    })
                    .Select(group => new
                    {
                        year = group.Key.Year,
                        monthNo = group.Key.Month,
                        monthName = System.Globalization.CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(group.Key.Month),
                        totalItems = group.Sum(iio => iio.NumberOf),
                        totalSales = group.Sum(iio => iio.TotalItemCost)
                    })
                    .OrderBy(data => data.monthNo);

                return Json(orderSummary);
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
