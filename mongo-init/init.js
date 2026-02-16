db = db.getSiblingDB('bookingdb');

db.accommodations.insertMany([
  {
    name: "Hotel Atraides",
    address: "Arraken, Muadib út 10",
    availableRooms: 5,
    price: 250.000,
    currency: "HUF"
  },
  {
    name: "Hotel Duncan",
    address: "Tabr Sietch, Arany út 22 ",
    availableRooms: 8,
    price: 180.000,
    currency: "HUF"
  },
  {
    name: "Birodalmi hotel",
    address: "Halál Csillag, Császár utca 3",
    availableRooms: 3,
    price: 225.000,
    currency: "HUF"
  },
  {
    name: "Pajkos Póni",
    address: "Bree, Brill utca 12",
    availableRooms: 6,
    price: 150.000,
    currency: "HUF"
  },
  {
    name: "Mélység Hotel",
    address: "Moria, főcsarnok utca 8",
    availableRooms: 4,
    price: 170.000,
    currency: "HUF"
  },
  {
    name: "Cadia Stands",
    address: "Cadia, Birodalmi út 2",
    availableRooms: 2,
    price: 220.000,
    currency: "HUF"
  },
  {
    name: "Vörös Hotel",
    address: "Baal, Szentély utca 1",
    availableRooms: 5,
    price: 190.000,
    currency: "HUF"
  },
  {
    name: "Erdő mélye",
    address: "Tanith, első utca 1",
    availableRooms: 7,
    price: 210.000,
    currency: "HUF"
  },
  {
    name: "Tündeház",
    address: "Völgyzugoly, Erdő utca 4",
    availableRooms: 9,
    price: 110.000,
    currency: "HUF"
  },
  {
    name: "Lovas Hotel",
    address: "Rohan, mező út 6",
    availableRooms: 3,
    price: 160.000,
    currency: "HUF"
  }
]);
