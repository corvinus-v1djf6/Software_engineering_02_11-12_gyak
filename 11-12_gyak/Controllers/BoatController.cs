using Microsoft.AspNetCore.Mvc;

namespace _11_12_gyak.Controllers
{
    //Route("api/[controller]")
    [ApiController]

    public class BoatController : Controller  //ide lehet kell a Base
    {
        [HttpGet]
        [Route("questions/all")]

        public IActionResult MindegyHogyHivjak()
        {
            Models.HajosContext context = new Models.HajosContext();
            var kérdések = from x in context.Questions select x.Question1;

            return Ok(kérdések);
        }
    }
}
