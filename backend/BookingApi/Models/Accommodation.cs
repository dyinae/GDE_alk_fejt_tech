using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BookingApi.Models;

public class Accommodation
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("name")]
    public string Name { get; set; } = null!;

    [BsonElement("address")]
    public string Address { get; set; } = null!;

    [BsonElement("availableRooms")]
    public int AvailableRooms { get; set; }

    [BsonElement("price")]
    public decimal Price { get; set; }

    [BsonElement("currency")]
    public string Currency { get; set; } = null!;
}
