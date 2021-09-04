/**
 * Auction
 *  - many Bets
 *  - Auctioneer
 */

import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    "entities": {
        "auctioner": {
            "address": "",
            "auctions": [],
        },
        "auctions": {},
    },
}

export const auctionerReducer = createSlice({
    "name": "auctioner",
    initialState
})
