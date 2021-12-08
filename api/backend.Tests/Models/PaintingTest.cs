using System.Threading.Tasks;
using backend.Controllers;
using backend.Models;
using backend.Tests.Utils;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace backend.Tests.Models
{
    public class ProfileTest
    {
        [Fact]
        public void WhenPaintingConstructedWithNameThenNameIsSetCorrectly()
        {
            var expectedName = "My abstract painting";

            var result = new Painting(expectedName);

            result.Name.Should().Be(expectedName);
        }
    }
}
