﻿// using Microsoft.EntityFrameworkCore.Migrations;

// #nullable disable

// namespace backend.Migrations
// {
//     public partial class CreateNewCartItem : Migration
//     {
//         protected override void Up(MigrationBuilder migrationBuilder)
//         {
//             migrationBuilder.CreateTable(
//                 name: "CartItems",
//                 columns: table => new
//                 {
//                     Id = table.Column<long>(type: "bigint", nullable: false)
//                         .Annotation("SqlServer:Identity", "1, 1"),
//                     PaintingId = table.Column<long>(type: "bigint", nullable: false),
//                     Quantity = table.Column<int>(type: "int", nullable: false)
//                 },
//                 constraints: table =>
//                 {
//                     table.PrimaryKey("PK_CartItems", x => x.Id);
//                     table.ForeignKey(
//                         name: "FK_CartItems_Paintings_PaintingId",
//                         column: x => x.PaintingId,
//                         principalTable: "Paintings",
//                         principalColumn: "Id",
//                         onDelete: ReferentialAction.Cascade);
//                 });

//             migrationBuilder.CreateIndex(
//                 name: "IX_CartItems_PaintingId",
//                 table: "CartItems",
//                 column: "PaintingId");
//         }

//         protected override void Down(MigrationBuilder migrationBuilder)
//         {
//             migrationBuilder.DropTable(
//                 name: "CartItems");
//         }
//     }
// }
