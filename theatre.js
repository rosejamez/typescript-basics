var Theatre = /** @class */ (function () {
    function Theatre(rows, columns) {
        this.seats = Array.from({ length: rows }, function () { return Array(columns).fill(null); });
    }
    Theatre.prototype.displaySeats = function () {
        console.log("Seating Arrangement:");
        this.seats.forEach(function (row, index) {
            var rowDisplay = row.map(function (seat) { return (seat ? 'X' : 'O'); }).join(' ');
            console.log("Row ".concat(index + 1, ": ").concat(rowDisplay));
        });
    };
    Theatre.prototype.bookSeat = function (row, column, user) {
        if (this.seats[row][column] === null) {
            this.seats[row][column] = user;
            console.log("Seat booked at Row ".concat(row + 1, ", Column ").concat(column + 1));
        }
        else {
            console.log("Seat at Row ".concat(row + 1, ", Column ").concat(column + 1, " is already booked."));
        }
    };
    Theatre.prototype.cancelSeat = function (row, column) {
        if (this.seats[row][column] !== null) {
            this.seats[row][column] = null;
            console.log("Seat at Row ".concat(row + 1, ", Column ").concat(column + 1, " has been canceled."));
        }
        else {
            console.log("No booking found at Row ".concat(row + 1, ", Column ").concat(column + 1, "."));
        }
    };
    return Theatre;
}());
var theatre = new Theatre(5, 5);
theatre.displaySeats();
theatre.bookSeat(0, 0, "Alice");
theatre.bookSeat(0, 1, "Bob");
theatre.displaySeats();
theatre.cancelSeat(0, 0);
theatre.displaySeats();
theatre.cancelSeat(0, 1);
theatre.displaySeats();
