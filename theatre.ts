class Theatre {
    private seats: (string | null)[][];

    constructor(rows: number, columns: number) {
        this.seats = Array.from({ length: rows }, () => Array(columns).fill(null));
    }

    displaySeats(): void {
        console.log("Seating Arrangement:");
        this.seats.forEach((row, index) => {
            const rowDisplay = row.map(seat => (seat ? 'X' : 'O')).join(' ');
            console.log(`Row ${index + 1}: ${rowDisplay}`);
        });
    }

    bookSeat(row: number, column: number, user: string): void {
        if (this.seats[row][column] === null) {
            this.seats[row][column] = user;
            console.log(`Seat booked at Row ${row + 1}, Column ${column + 1}`);
        } else {
            console.log(`Seat at Row ${row + 1}, Column ${column + 1} is already booked.`);
        }
    }

    cancelSeat(row: number, column: number): void {
        if (this.seats[row][column] !== null) {
            this.seats[row][column] = null;
            console.log(`Seat at Row ${row + 1}, Column ${column + 1} has been canceled.`);
        } else {
            console.log(`No booking found at Row ${row + 1}, Column ${column + 1}.`);
        }
    }
}

const theatre = new Theatre(5, 5);
theatre.displaySeats();
theatre.bookSeat(0, 0, "Alice");
theatre.bookSeat(0, 1, "Bob");
theatre.displaySeats();
theatre.cancelSeat(0, 0);
theatre.displaySeats();
theatre.cancelSeat(0, 1);
theatre.displaySeats();
