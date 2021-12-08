using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    public partial class InsertMoreValuesInToTheTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                "Paintings",
                new string[] { "Name", "Description", "Image" },
                new object[] {
                    "Peacock",
                    "Some Description",
                    "https://media.istockphoto.com/photos/portrait-of-peacock-watercolor-picture-id872927220?b=1&k=20&m=872927220&s=170667a&w=0&h=vbRQncIMsgjELbxqhm6OrWUfVkV5iK47btDr0_T_ovs="
                });
            migrationBuilder.InsertData(
                "Paintings",
                new string[] { "Name", "Description", "Image" },
                new object[] {
                    "Silhouette house",
                    "Some Description",
                    "https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                });

            migrationBuilder.InsertData(
                "Paintings",
                new string[] { "Name", "Description", "Image" },
                new object[] {
                    "Black bird perched on tree",
                    "Some Description",
                    "https://images.unsplash.com/photo-1588522943401-6ba285f692de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                });

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                "Paintings",
                new string[] { "Name", "Description", "Image" },
                new object[] {
                    "Peacock",
                    "Some Description",
                    " https://media.istockphoto.com/photos/portrait-of-peacock-watercolor-picture-id872927220?b=1&k=20&m=872927220&s=170667a&w=0&h=vbRQncIMsgjELbxqhm6OrWUfVkV5iK47btDr0_T_ovs="
                });
            migrationBuilder.DeleteData(
                "Paintings",
                new string[] { "Name", "Description", "Image" },
                new object[] {
                    "Silhouette house",
                    "Some Description",
                    "https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"

                });
            migrationBuilder.DeleteData(
                "Paintings",
                new string[] { "Name", "Description", "Image" },
                new object[] {
                    "Black bird perched on tree",
                    "Some Description",
                    " https://images.unsplash.com/photo-1588522943401-6ba285f692de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                });

        }
    }
}
