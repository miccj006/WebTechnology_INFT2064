using System.ComponentModel.DataAnnotations;

namespace AOWebApp.Models.ViewModel
{
    public class Item_ItemDetail
    {
        public Item TheItem { get; set; }
        public int ReviewCount { get; set; }
        public double AverageRating { get; set; }
    }
}
