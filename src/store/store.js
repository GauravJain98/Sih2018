import { createStore } from "redux";
import { gameChanger } from './reducer';
var store = createStore(gameChanger, { headList: [] });
store.subscribe(() => {
    console.log(store.getState());
});
export default store;
