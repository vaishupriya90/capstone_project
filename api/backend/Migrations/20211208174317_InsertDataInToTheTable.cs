using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    public partial class InsertDataInToTheTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                "Paintings",
                new string[] { "Name", "Description", "Image" }, 
                new object[] { 
                    "The Lonely Boat", 
                    "Some Description", 
                    "https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                });

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                "Paintings",
                new string[] { "Name", "Description", "Image" }, 
                new object[] { 
                    "The Lonely Boat", 
                    "Some Description", 
                    "https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                });

        }
    }
}
