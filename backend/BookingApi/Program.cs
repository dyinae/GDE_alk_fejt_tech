using BookingApi.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddSingleton<UserService>();
builder.Services.AddSingleton<MongoService>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy
                .WithOrigins("http://localhost:30007")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

// CORS MINDENKÉPP a MapControllers előtt
app.UseCors("AllowFrontend");

app.MapControllers();

app.Run();