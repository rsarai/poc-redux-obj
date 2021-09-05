import { createSelector } from "redux-orm";
import { orm } from "app/orm";

export const selectAuctioner = createSelector(orm.Auctioner);
