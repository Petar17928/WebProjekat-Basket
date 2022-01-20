using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class WebProjContext:DbContext
    {
        public DbSet<Igrac> Igraci { get; set; }
        public DbSet<Tim> Timovi { get; set; }
        public DbSet<Trener> Treneri { get; set; }
        public DbSet<Utakmica> Utakmice { get; set; }

        public WebProjContext(DbContextOptions options):base(options)
        {

        }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Tim>()
                        .HasMany<Utakmica>(p => p.Utakmice)
                        .WithOne(p => p.Tim1);

            modelBuilder.Entity<Tim>()
                        .HasOne(p => p.Trener)
                        .WithOne(p => p.Tim)
                        .HasForeignKey<Tim>(p => p.TrenerForeignKey);

                        
        }
    }
}