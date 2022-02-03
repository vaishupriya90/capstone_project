using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Controllers;
using backend.Models;
using backend.Tests.Utils;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace backend.Tests.Controllers
{
    public class PaintingsControllerTest : IAsyncLifetime
    {

        private PaintingsController testObject;
        private AppDbContext db;

        public async Task InitializeAsync()
        {
            db = await TestUtils.GetTestDbContext();
            testObject = new PaintingsController(db, new Mock<ILogger<PaintingsController>>().Object);
        }

        public async Task DisposeAsync()
        {
            await db.DisposeAsync();
        }

        public class Get : PaintingsControllerTest
        {
            [Fact]
            public async void WhenPaintingsExist_ReturnsOkObjectContainingListOfPaintings()
            {
                var response = await testObject.Get();

                response.Should().BeOfType<OkObjectResult>();
                var paintingResultList = (response as OkObjectResult).Value as IEnumerable<Painting>;

                paintingResultList.Count().Should().Be(db.Paintings.Count());

            }

            [Fact]
            public async void WhenNoPaintings_ReturnsEmptyList()
            {
                db.Paintings.RemoveRange(db.Paintings);
                await db.SaveChangesAsync();

                var response = await testObject.Get();

                response.Should().BeOfType<OkObjectResult>();
                var result = (response as OkObjectResult).Value as IEnumerable<Painting>;
                result.Any().Should().BeFalse();
            }

            [Fact]
            public async void WhenAnErrorOccursUsingDataBase_ThrowsError()
            {
                var mockDb = new Mock<AppDbContext>();

                mockDb.Setup(x => x.Paintings).Throws(new Exception("Something Broke"));

                var testObject = new PaintingsController(mockDb.Object, new Mock<ILogger<PaintingsController>>().Object);

                var exception = await Assert.ThrowsAsync<Exception>(() => testObject.Get());

                exception.Message.Should().Be("Something Broke");
            }
        }
    }
}