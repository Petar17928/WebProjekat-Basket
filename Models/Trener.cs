using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Trener")]
    public class Trener 
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
        [Range(0,100)]
        public int Iskustvo { get; set; }
        
        [JsonIgnore]
        public Tim Tim { get; set; }

        
        

    }
}