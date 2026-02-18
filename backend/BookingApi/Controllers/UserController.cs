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

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] User user)
    {
        if (string.IsNullOrWhiteSpace(user.Username) || 
            string.IsNullOrWhiteSpace(user.Password))
        {
            return BadRequest(new
            {
                success = false,
                message = "Username and password are required."
            });
        }

        var existingUser = await _userService.GetByUsernameAsync(user.Username);

        if (existingUser != null)
        {
            return BadRequest(new
            {
                success = false,
                message = "Username already exists."
            });
        }

        await _userService.CreateUserAsync(user);

        return Created("", new
        {
            success = true,
            message = "User registered successfully.",
            username = user.Username
        });
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Username) || 
            string.IsNullOrWhiteSpace(request.Password))
        {
            return BadRequest(new
            {
                success = false,
                message = "Username and password are required."
            });
        }

        var user = await _userService.LoginAsync(request.Username, request.Password);

        if (user == null)
        {
            return Unauthorized(new
            {
                success = false,
                message = "Invalid username or password."
            });
        }

        return Ok(new
        {
            success = true,
            message = "Login successful.",
            username = user.Username
        });
    }
}
