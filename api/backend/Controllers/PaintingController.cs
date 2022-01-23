using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaintingController : ControllerBase
    {
        private readonly AppDbContext _db;
        private readonly ILogger<PaintingController> _logger;


        public PaintingController(AppDbContext db, ILogger<PaintingController> logger)
        {
            _db = db;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            Painting painting = null;

            try
            {
                painting = await _db.Paintings.FirstOrDefaultAsync();
            }
            catch (Exception e)
            {
                _logger.LogCritical($"SQL Read error. It is likely that there is no database connection established. ${e.Message}");
                throw;
            }

            if (painting == null)
            {
                return new NotFoundResult();
            }

            return new OkObjectResult(painting);
        }

        


        // // GET: api/Painting
        // [HttpGet]
        // public async Task<ActionResult<IEnumerable<Painting>>> GetPaintings()
        // {
        //     return await _context.Paintings.ToListAsync();
        // }

        //     // GET: api/Painting/5
        //     [HttpGet("{id}")]
        //     public async Task<ActionResult<Painting>> GetPainting(long id)
        //     {
        //         var painting = await _context.Paintings.FindAsync(id);

        //         if (painting == null)
        //         {
        //             return NotFound();
        //         }

        //         return painting;
        //     }

        //     // PUT: api/Painting/5
        //     // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //     [HttpPut("{id}")]
        //     public async Task<IActionResult> PutPainting(long id, Painting painting)
        //     {
        //         if (id != painting.Id)
        //         {
        //             return BadRequest();
        //         }

        //         _context.Entry(painting).State = EntityState.Modified;

        //         try
        //         {
        //             await _context.SaveChangesAsync();
        //         }
        //         catch (DbUpdateConcurrencyException)
        //         {
        //             if (!PaintingExists(id))
        //             {
        //                 return NotFound();
        //             }
        //             else
        //             {
        //                 throw;
        //             }
        //         }

        //         return NoContent();
        //     }

        //     // POST: api/Painting
        //     // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //     [HttpPost]
        //     public async Task<ActionResult<Painting>> PostPainting(Painting painting)
        //     {
        //         _context.Paintings.Add(painting);
        //         await _context.SaveChangesAsync();

        //         return CreatedAtAction("GetPainting", new { id = painting.Id }, painting);
        //     }

        //     // DELETE: api/Painting/5
        //     [HttpDelete("{id}")]
        //     public async Task<IActionResult> DeletePainting(long id)
        //     {
        //         var painting = await _context.Paintings.FindAsync(id);
        //         if (painting == null)
        //         {
        //             return NotFound();
        //         }

        //         _context.Paintings.Remove(painting);
        //         await _context.SaveChangesAsync();

        //         return NoContent();
        //     }

        //     private bool PaintingExists(long id)
        //     {
        //         return _context.Paintings.Any(e => e.Id == id);
        //     }
    }
}
