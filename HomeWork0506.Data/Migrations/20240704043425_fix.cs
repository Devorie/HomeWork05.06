using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HomeWork0506.Data.Migrations
{
    /// <inheritdoc />
    public partial class fix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Toppings",
                table: "Orders",
                newName: "ToppingString");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ToppingString",
                table: "Orders",
                newName: "Toppings");
        }
    }
}
