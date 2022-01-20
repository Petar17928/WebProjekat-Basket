using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Tim")]
    public class Tim 
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [MaxLength(20)]
        [RegularExpression("\\w+")]
        public string Naziv { get; set; }

        [Required]
        [MaxLength(20)]
        public string Grad { get; set; }

        [Required]
        public int Kapital { get; set; }
        
        [JsonIgnore]
        public List<Igrac> Igraci { get; set; }

        public Trener Trener { get; set; }

        public int TrenerForeignKey { get; set; }
        
        [JsonIgnore]
        public List<Utakmica> Utakmice { get; set; }

        

    }
}