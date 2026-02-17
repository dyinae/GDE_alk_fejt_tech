using BookingApi.Services;   // <-- EZ HIÁNYZOTT
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// CORS (dev módban teljesen engedélyezve)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

// MongoService regisztrálása DI-be
builder.Services.AddSingleton<MongoService>();

var app = builder.Build();

app.UseCors("AllowAll");

app.MapControllers();

app.Run();
