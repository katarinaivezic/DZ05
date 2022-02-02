export class Room {
    roomNumber: string;
    name: string;
    brOsoba: number;
    price: number;

    constructor(roomNumber: string, name: string, brOsoba: number , price: number) {
        this.roomNumber = roomNumber;
        this.name = name;
        this.brOsoba = brOsoba;
        this.price = price;
    }

}