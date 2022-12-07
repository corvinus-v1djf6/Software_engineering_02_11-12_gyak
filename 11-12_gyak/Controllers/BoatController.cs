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

        [HttpGet]
        [Route("questions/{sorszám}")]
        public ActionResult M2(int sorszám)
        {
            Models.HajosContext context = new Models.HajosContext();
            var kérdés = (from x in context.Questions
                          where x.QuestionId == sorszám
                          select x).FirstOrDefault();

            if (kérdés == null) return BadRequest("Nincs ilyen sorszámú kérdés");

            return new JsonResult(kérdés);
        }

    }
}
