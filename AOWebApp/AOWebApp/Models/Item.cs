using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AOWebApp.Models;

public partial class Item
{
    [Key]
    public int ItemID { get; set; }

    [Required]
    [Display(Name = "Item Name")]
    [StringLength(150, ErrorMessage = "The item name must be less than 100 characters")]
    public string ItemName { get; set; } = null!;

    [Required]
    public string ItemDescription { get; set; } = null!;

    [Required]
    [Range(1, 9999999999)]
    [Display(Name = "Cost")]
    [DataType(DataType.Currency)]
    [Column(TypeName = "decimal(10, 2)")]
    public decimal ItemCost { get; set; }

    [Required]
    public string ItemImage { get; set; } = null!;

    public int CategoryId { get; set; }

    public virtual ItemCategory Category { get; set; } = null!;

    public virtual ICollection<ItemMarkupHistory> ItemMarkupHistories { get; set; } = new List<ItemMarkupHistory>();

    public virtual ICollection<ItemsInOrder> ItemsInOrders { get; set; } = new List<ItemsInOrder>();

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();
}
