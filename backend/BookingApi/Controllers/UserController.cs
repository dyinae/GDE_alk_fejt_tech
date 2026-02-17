using BookingApi.Models;
using BookingApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace BookingApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly UserService _userService;

    public UsersController(UserService userService)
    {
        _userService = userService;
    }

    // REGISTER
    [HttpPost("register")]
    public async Task<IActionResult> Register(User user)
    {
        var existingUser = await _userService.GetByUsernameAsync(user.Username);

        if (existingUser != null)
            return BadRequest("Username already exists.");

        await _userService.CreateUserAsync(user);
        return Ok("User registered successfully.");
    }

    // LOGIN
    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        var user = await _userService.LoginAsync(request.Username, request.Password);

        if (user == null)
            return Unauthorized("Invalid username or password.");

        return Ok("Login successful.");
    }
}
