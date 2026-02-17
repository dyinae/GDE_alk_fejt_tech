using BookingApi.Services;

var builder = WebApplication.CreateBuilder(args);

// SERVICES REGISZTRÁLÁSA
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddSingleton<MongoService>();
builder.Services.AddSingleton<UserService>();

// APP BUILD
var app = builder.Build();

// MIDDLEWARE
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
