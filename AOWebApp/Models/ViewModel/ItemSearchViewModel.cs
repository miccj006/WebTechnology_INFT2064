using Microsoft.AspNetCore.Mvc.Rendering;

namespace AOWebApp.Models.ViewModel
{
    public class ItemSearchViewModel
    {
        public string SearchText { get; set; }
        public int? CategoryId { get; set; }
        public SelectList CategoryList { get; set; }
        public List<Item_ItemDetail> ItemList { get; set; }
    }
}
