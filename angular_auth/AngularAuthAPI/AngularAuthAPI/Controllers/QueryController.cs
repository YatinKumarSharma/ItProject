using AngularAuthAPI.Context;
using AngularAuthAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularAuthAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QueryController : Controller
    {
        private readonly AppDbContext _authContext;
        public QueryController(AppDbContext appDbContext)
        {
            _authContext = appDbContext;
        }
        [HttpPost("ask")]
        public async Task<IActionResult> askQuery([FromBody] Query queryObj)
        {
            if (queryObj == null)
                return BadRequest();

            


            
            await _authContext.Queries.AddAsync(queryObj);
            await _authContext.SaveChangesAsync();
            return Ok(new
            {
                Message = "Query Registerd"
            });


        }

    }
}
