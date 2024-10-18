class HotelRoom {
    constructor(
        public roomId: number,
        public roomType: string,
        public pricePerNight: number,
        public availableNights: number
    ) {}
}

class Reservation {
    constructor(
        public room: HotelRoom,
        public nights: number
    ) {}

    calculateTotalCost(): number {
        return this.room.pricePerNight * this.nights;
    }
}

class Hotel {
    private rooms: HotelRoom[] = [];

    addRoom(room: HotelRoom): void {
        this.rooms.push(room);
    }

    displayAvailableRooms(): void {
        console.log("Available Rooms:");
        this.rooms.forEach(room => {
            if (room.availableNights > 0) {
                console.log(`Room ID: ${room.roomId}, Type: ${room.roomType}, Price: $${room.pricePerNight} per night, Available Nights: ${room.availableNights}`);
            }
        });
    }

    reserveRoom(roomId: number, nights: number): Reservation | string {
        const room = this.rooms.find(r => r.roomId === roomId);
        if (room) {
            if (room.availableNights >= nights) {
                room.availableNights -= nights;
                return new Reservation(room, nights);
            } else {
                return "Not enough available nights.";
            }
        }
        return "Room not found.";
    }
}

const hotel = new Hotel();

hotel.addRoom(new HotelRoom(1, "Single", 100, 5));
hotel.addRoom(new HotelRoom(2, "Double", 150, 3));
hotel.addRoom(new HotelRoom(3, "Suite", 250, 2));

hotel.displayAvailableRooms();

const reservation1 = hotel.reserveRoom(1, 3);
if (typeof reservation1 === 'string') {
    console.log(reservation1);
} else {
    console.log(`Reservation successful! Total Cost: $${reservation1.calculateTotalCost()}`);
}

const reservation2 = hotel.reserveRoom(2, 4);
if (typeof reservation2 === 'string') {
    console.log(reservation2);
} else {
    console.log(`Reservation successful! Total Cost: $${reservation2.calculateTotalCost()}`);
}
