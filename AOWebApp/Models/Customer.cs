using Microsoft.AspNetCore.Cors;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AOWebApp.Models;

public partial class Customer
{
    public int CustomerId { get; set; }

    [Display(Name = "First Name")]
    public string FirstName { get; set; } = null!;

    [Display(Name = "Last Name")]
    public string LastName { get; set; } = null!;

    [NotMapped]
    [Display(Name = "Customer Name")]
    public string Fullname => FirstName + " " + LastName;

    [NotMapped]
    [Display(Name = "Contact Number")]
    public string ContactNumber
    {
        get
        {
            var contact = "";
            if (!string.IsNullOrEmpty(MainPhoneNumber)) { contact = MainPhoneNumber; }
            if (!string.IsNullOrEmpty(SecondaryPhoneNumber)) { contact += (contact.Length > 0 ? "<br />" : "") + SecondaryPhoneNumber; }
            return contact;
        }
    }

    [Display(Name = "Email")]
    public string Email { get; set; } = null!;

    [Display(Name = "Main Phone Number")]
    public string MainPhoneNumber { get; set; } = null!;

    [Display(Name = "Secondary Phone Number")]
    public string? SecondaryPhoneNumber { get; set; }

    [Display(Name = "Address Id")]
    public int AddressId { get; set; }

    [Display(Name = "Address")]
    public virtual Address? Address { get; set; } = null!;

    [Display(Name = "Customer Orders")]
    public virtual ICollection<CustomerOrder> CustomerOrders { get; set; } = new List<CustomerOrder>();

    [Display(Name = "Reviews")]
    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();
}
