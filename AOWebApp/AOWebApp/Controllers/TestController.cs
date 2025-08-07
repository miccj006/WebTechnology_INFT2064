using Microsoft.AspNetCore.Mvc;

namespace AOWebApp.Controllers
{
    public class TestController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult RazorTest(int? id, string text)
        {
            ViewBag.id = id;
            ViewBag.searchText = text;

            return View();
        }
    }
}
