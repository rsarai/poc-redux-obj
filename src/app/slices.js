/**
 * Auction
 *  - many Bets
 *  - Auctioneer
 */

import { createSlice } from "@reduxjs/toolkit"
import { orm } from "app/orm"


const initialState = orm.getDefaultState();

export const auctionerReducer = createSlice({
  "name": "auctioner",
  initialState,
  reducers: {
    placeBet: (state, action) => {
        const session = orm.session(state);
        const {Bet} = session;
        Bet.create(action.payload)
        return session.state;
    },
    createAuction: (state, action) => {
      const session = orm.session(state);
      const {Auction} = session;
      Auction.create(action.payload)
      return session.state;
    },
    createAuctioner: (state, action) => {
      const session = orm.session(state);
      const {Auctioner} = session;
      Auctioner.create(action.payload)
      return session.state;
    },
  }
})

export const {
  placeBet,
  createAuction,
  createAuctioner
} = auctionerReducer.actions

export default auctionerReducer.reducer
