import { Model, fk, many, attr } from 'redux-orm';


class Auctioner extends Model {
    toString() {
        return `Auctioner: ${this.address}`;
    }
}

class Auction extends Model {
    toString() {
        return `Auction: ${this.address}`;
    }
}

class Bet extends Model {
    toString() {
        return `Auction: ${this.address}`;
    }
}

Auctioner.fields = {
    id: attr(),
    address: attr(),
};

Auction.fields = {
    id: attr(),
    address: attr(),
    balance: attr(),
    isClosed: attr(),
    auctionerId: fk({
        to: 'Auctioner',
        as: 'auctioner',
        relatedName: 'auctions',
    }),
}

Bet.fields = {
    id: attr(),
    auctionerId: fk({
        to: 'Auctioner',
        as: 'auctioner',
        relatedName: 'auctions',
    }),
}



export default Book;
