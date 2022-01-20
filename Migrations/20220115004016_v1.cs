using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebProj.Migrations
{
    public partial class v1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Trener",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RegBroj = table.Column<int>(type: "int", nullable: false),
                    Ime = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Prezime = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Iskustvo = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trener", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Tim",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Grad = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Kapital = table.Column<int>(type: "int", nullable: false),
                    TrenerForeignKey = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tim", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Tim_Trener_TrenerForeignKey",
                        column: x => x.TrenerForeignKey,
                        principalTable: "Trener",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Igrac",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RegBroj = table.Column<int>(type: "int", nullable: false),
                    Ime = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Prezime = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Starost = table.Column<int>(type: "int", nullable: false),
                    Ocena = table.Column<int>(type: "int", nullable: false),
                    Cena = table.Column<int>(type: "int", nullable: false),
                    TimID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Igrac", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Igrac_Tim_TimID",
                        column: x => x.TimID,
                        principalTable: "Tim",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Utakmica",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Datum = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Domacin = table.Column<bool>(type: "bit", nullable: false),
                    Tim1ID = table.Column<int>(type: "int", nullable: false),
                    Tim2ID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Utakmica", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Utakmica_Tim_Tim1ID",
                        column: x => x.Tim1ID,
                        principalTable: "Tim",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Utakmica_Tim_Tim2ID",
                        column: x => x.Tim2ID,
                        principalTable: "Tim",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Igrac_TimID",
                table: "Igrac",
                column: "TimID");

            migrationBuilder.CreateIndex(
                name: "IX_Tim_TrenerForeignKey",
                table: "Tim",
                column: "TrenerForeignKey",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Utakmica_Tim1ID",
                table: "Utakmica",
                column: "Tim1ID");

            migrationBuilder.CreateIndex(
                name: "IX_Utakmica_Tim2ID",
                table: "Utakmica",
                column: "Tim2ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Igrac");

            migrationBuilder.DropTable(
                name: "Utakmica");

            migrationBuilder.DropTable(
                name: "Tim");

            migrationBuilder.DropTable(
                name: "Trener");
        }
    }
}
