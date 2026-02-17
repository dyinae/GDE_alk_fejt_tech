using BookingApi.Models;
using MongoDB.Driver;

namespace BookingApi.Services;

public class UserService
{
    private readonly IMongoCollection<User> _users;

    public UserService(IConfiguration configuration)
    {
        var connectionString = configuration["MongoDb:ConnectionString"];
        var databaseName = configuration["MongoDb:DatabaseName"];

        var mongoClient = new MongoClient(connectionString);
        var database = mongoClient.GetDatabase(databaseName);

        _users = database.GetCollection<User>("users");
    }

    public async Task<List<User>> GetUsersAsync()
    {
        return await _users.Find(_ => true).ToListAsync();
    }

    public async Task<User?> GetByUsernameAsync(string username)
    {
        return await _users.Find(u => u.Username == username).FirstOrDefaultAsync();
    }

    public async Task CreateUserAsync(User user)
    {
        await _users.InsertOneAsync(user);
    }

    public async Task<User?> LoginAsync(string username, string password)
    {
        var user = await _users.Find(u => u.Username == username).FirstOrDefaultAsync();

        if (user == null)
            return null;

        if (user.Password != password)
            return null;

        return user;
    }
}
