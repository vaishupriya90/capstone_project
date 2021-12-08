using System;
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
    public class PaintingControllerTest : IAsyncLifetime
    {

        private PaintingController testObject;
        private AppDbContext db;

        public async Task InitializeAsync()
        {
            db = await TestUtils.GetTestDbContext();
            testObject = new PaintingController(db, new Mock<ILogger<PaintingController>>().Object);
        }

        public async Task DisposeAsync()
        {
            await db.DisposeAsync();
        }

        public class GetProfile : PaintingControllerTest
        {

            [Fact]
            public async void WhenDbConnection_ReturnsOkObjectContainingPainting()
            {
                var request = TestUtils.CreateMockRequest("GET");

                var response = await testObject.Get();

                response.Should().BeOfType<OkObjectResult>();
                var result = (response as OkObjectResult).Value as Painting;
                result.Name.Should().Be(TestUtils.PAINTNG_NAME);
            }
        }
    }
}
