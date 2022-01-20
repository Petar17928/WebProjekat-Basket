using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    [Table("Utakmica")]
    public class Utakmica 
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public DateTime Datum { get; set; }

        [Required]
        public bool Domacin { get; set; }

        [Required]
        public Tim Tim1 { get; set; }

        [Required]
        public Tim Tim2 { get; set; }

    }
}