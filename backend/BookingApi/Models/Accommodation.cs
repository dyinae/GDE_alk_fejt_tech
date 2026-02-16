using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BookingApi.Models;

public class Accommodation
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public string Name { get; set; } = null!;

    public string Address { get; set; } = null!;

    public int AvailableRooms { get; set; }

    public decimal Price { get; set; }

    public string Currency { get; set; } = null!;
}


