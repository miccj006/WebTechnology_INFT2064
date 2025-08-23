using Microsoft.AspNetCore.Mvc.Rendering;
using System.ComponentModel.DataAnnotations;

namespace AOWebApp.Models.ViewModel
{
    public class CustomerSearchViewModel
    {
        [Required(ErrorMessage = "You must provide a Customer Name")]
        public string SearchText { get; set; }
        public string Suburb { get; set; }
        public SelectList SuburbList { get; set; }
        public List<Customer> CustomerList { get; set; }
    }
}
