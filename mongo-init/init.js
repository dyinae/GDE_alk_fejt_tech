db = db.getSiblingDB('bookingdb');

db.accommodations.insertMany([
  {
    Name: "Hotel Atraides",
    Address: "Arraken, Muadib út 10",
    AvailableRooms: 5,
    Price: 250000,
    Currency: "HUF"
  },
  {
    Name: "Hotel Duncan",
    Address: "Tabr Sietch, Arany út 22",
    AvailableRooms: 8,
    Price: 180000,
    Currency: "HUF"
  },
  {
    Name: "Birodalmi hotel",
    Address: "Halál Csillag, Császár utca 3",
    AvailableRooms: 3,
    Price: 225000,
    Currency: "HUF"
  },
  {
    Name: "Pajkos Póni",
    Address: "Bree, Brill utca 12",
    AvailableRooms: 6,
    Price: 150000,
    Currency: "HUF"
  },
  {
    Name: "Mélység Hotel",
    Address: "Moria, főcsarnok utca 8",
    AvailableRooms: 4,
    Price: 170000,
    Currency: "HUF"
  },
  {
    Name: "Cadia Stands",
    Address: "Cadia, Birodalmi út 2",
    AvailableRooms: 2,
    Price: 220000,
    Currency: "HUF"
  },
  {
    Name: "Vörös Hotel",
    Address: "Baal, Szentély utca 1",
    AvailableRooms: 5,
    Price: 190000,
    Currency: "HUF"
  },
  {
    Name: "Erdő mélye",
    Address: "Tanith, első utca 1",
    AvailableRooms: 7,
    Price: 210000,
    Currency: "HUF"
  },
  {
    Name: "Tündeház",
    Address: "Völgyzugoly, Erdő utca 4",
    AvailableRooms: 9,
    Price: 110000,
    Currency: "HUF"
  },
  {
    Name: "Lovas Hotel",
    Address: "Rohan, mező út 6",
    AvailableRooms: 3,
    Price: 160000,
    Currency: "HUF"
  }
]);
