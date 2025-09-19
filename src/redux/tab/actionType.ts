import { SET_TAB } from "./action";

export const setTab = (tabindex: number) => ({
    type: SET_TAB,
    payload: tabindex
});