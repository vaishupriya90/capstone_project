using System;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PaintingsController : ControllerBase
    {
        private readonly AppDbContext _db;
        private readonly ILogger<PaintingsController> _logger;

        public PaintingsController(AppDbContext db, ILogger<PaintingsController> logger)
        {
            _db = db;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            List<Painting> paintings = new List<Painting>();

            try
            {
                paintings = await _db.Paintings.ToListAsync();
            }
            catch (Exception e)
            {
                _logger.LogCritical($"SQL Read error. It is likely that there is no database connection established. ${e.Message}");
                throw;
            }

            if (!paintings.Any())
            {
                return new NotFoundResult();
            }

            return new OkObjectResult(paintings);
        }
    }
}
