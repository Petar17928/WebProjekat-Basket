using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    [Table("Igrac")]
    public class Igrac 
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [Range(1000,9999)]
        public int RegBroj { get; set; }

        [Required]
        [RegularExpression("\\w+")]
        [MaxLength(20)]
        public string Ime { get; set; }

        [Required]
        [RegularExpression("\\w+")]
        [MaxLength(20)]
        public string Prezime { get; set; }

        [Required]
        [Range(20,99)]
        public int Starost { get; set; }

        [Required]
        [Range(0,100)]
        public int Ocena { get; set; }

        [Required]
        public int Cena { get; set; }
        
        public Tim Tim { get; set; }

        

    }
}