using BookingApi.Models;
using MongoDB.Driver;

namespace BookingApi.Services;

public class MongoService
{
    private readonly IMongoCollection<Accommodation> _accommodations;

    public MongoService(IConfiguration configuration)
    {
        var connectionString = configuration["MongoDb:ConnectionString"];
        var mongoClient = new MongoClient(connectionString);

        var database = mongoClient.GetDatabase(configuration["MongoDb:DatabaseName"]);
        _accommodations = database.GetCollection<Accommodation>("accommodations");
    }

    public async Task<List<Accommodation>> GetAccommodationsAsync()
    {
        return await _accommodations.Find(_ => true).ToListAsync();
    }

    public async Task CreateAccommodationAsync(Accommodation accommodation)
    {
        await _accommodations.InsertOneAsync(accommodation);
    }
    public async Task DeleteAccommodationAsync(string id)
{
    await _accommodations.DeleteOneAsync(a => a.Id == id);
}

}
