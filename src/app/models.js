import { Model, fk, attr } from 'redux-orm';


class Auctioner extends Model {
    toString() {
        return `Auctioner: ${this.address}`;
    }

    static get modelName() {
        return 'Auctioner';
    }

    gretting() {
        return `hey ${this.address}! Nice to see you.`;
    }
}
Auctioner.fields = {
    id: attr(),
    address: attr(),
};

class Auction extends Model {
    toString() {
        return `Auction: ${this.address}`;
    }
}

class Bet extends Model {
    toString() {
        return `$${this.value}`;
    }

    displayAsDollars() {
        return `$${this.value}`
    }
}

Auction.fields = {
    id: attr(),
    address: attr(),
    balance: attr(),
    isClosed: attr(),
    description: attr(),
    auctionerId: fk({
        to: 'Auctioner',
        as: 'auctioner',
        relatedName: 'all_auctions',
    }),
}
Auction.modelName = "Auction"

Bet.fields = {
    id: attr(),
    auctionId: fk({
        to: 'Auction',
        as: 'auction',
        relatedName: 'auction',
    }),
    value: attr(),
}
Bet.modelName = "Bet"

export { Bet, Auction, Auctioner }
