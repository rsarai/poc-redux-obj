
import { ORM } from "redux-orm";
import { Bet, Auction, Auctioner } from "./models";
import { Model, attr } from 'redux-orm';


const orm = new ORM({
  stateSelector: state => state.entities,
});

orm.register(Bet, Auction, Auctioner);

export { orm };
