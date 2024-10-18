var HotelRoom = /** @class */ (function () {
    function HotelRoom(roomId, roomType, pricePerNight, availableNights) {
        this.roomId = roomId;
        this.roomType = roomType;
        this.pricePerNight = pricePerNight;
        this.availableNights = availableNights;
    }
    return HotelRoom;
}());
var Reservation = /** @class */ (function () {
    function Reservation(room, nights) {
        this.room = room;
        this.nights = nights;
    }
    Reservation.prototype.calculateTotalCost = function () {
        return this.room.pricePerNight * this.nights;
    };
    return Reservation;
}());
var Hotel = /** @class */ (function () {
    function Hotel() {
        this.rooms = [];
    }
    Hotel.prototype.addRoom = function (room) {
        this.rooms.push(room);
    };
    Hotel.prototype.displayAvailableRooms = function () {
        console.log("Available Rooms:");
        this.rooms.forEach(function (room) {
            if (room.availableNights > 0) {
                console.log("Room ID: ".concat(room.roomId, ", Type: ").concat(room.roomType, ", Price: $").concat(room.pricePerNight, " per night, Available Nights: ").concat(room.availableNights));
            }
        });
    };
    Hotel.prototype.reserveRoom = function (roomId, nights) {
        var room = this.rooms.find(function (r) { return r.roomId === roomId; });
        if (room) {
            if (room.availableNights >= nights) {
                room.availableNights -= nights;
                return new Reservation(room, nights);
            }
            else {
                return "Not enough available nights.";
            }
        }
        return "Room not found.";
    };
    return Hotel;
}());
// Example Usage
var hotel = new Hotel();
hotel.addRoom(new HotelRoom(1, "Single", 100, 5));
hotel.addRoom(new HotelRoom(2, "Double", 150, 3));
hotel.addRoom(new HotelRoom(3, "Suite", 250, 2));
hotel.displayAvailableRooms();
var reservation1 = hotel.reserveRoom(1, 3);
if (typeof reservation1 === 'string') {
    console.log(reservation1);
}
else {
    console.log("Reservation successful! Total Cost: $".concat(reservation1.calculateTotalCost()));
}
var reservation2 = hotel.reserveRoom(2, 4);
if (typeof reservation2 === 'string') {
    console.log(reservation2);
}
else {
    console.log("Reservation successful! Total Cost: $".concat(reservation2.calculateTotalCost()));
}
