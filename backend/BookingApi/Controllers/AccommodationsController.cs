using Microsoft.AspNetCore.Mvc;
using BookingApi.Services;
using BookingApi.Models;

namespace BookingApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccommodationsController : ControllerBase
    {
        private readonly MongoService _mongoService;

        public AccommodationsController(MongoService mongoService)
        {
            _mongoService = mongoService;
        }

        // GET: api/accommodations
        [HttpGet]
        public async Task<ActionResult<List<Accommodation>>> Get()
        {
            var accommodations = await _mongoService.GetAccommodationsAsync();
            return Ok(accommodations);
        }

        // POST: api/accommodations
        [HttpPost]
        public async Task<ActionResult> Post(Accommodation accommodation)
        {
            await _mongoService.CreateAccommodationAsync(accommodation);
            return CreatedAtAction(nameof(Get), new { id = accommodation.Id }, accommodation);
        }
        [HttpDelete("{id}")]
public async Task<IActionResult> Delete(string id)
{
    await _mongoService.DeleteAccommodationAsync(id);
    return NoContent();
}
    }
}
