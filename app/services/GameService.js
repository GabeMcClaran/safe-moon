import store from "../store.js";

class GameService {
  updateCount() {
    if (store.State.clickUpgrades.run.quantity > 0) {
      store.State.count += store.State.clickUpgrades.run.quantity;
    }
    if (store.State.clickUpgrades.toy.quantity > 0) {
      store.State.count +=
        store.State.clickUpgrades.toy.quantity *
        store.State.clickUpgrades.toy.multiplier;
    } else {
      console.log("DID WE GET HERE?");
      // throw new Error("YOU SHALL NOT PASS")
      store.State.count += 1; //TODO: ADD MODS
      // store.State.count += store.State.clickUpgrades.run.quantity * 2;
      console.log("DID WE GET HERE?");
    }
  }

  twoPointsClick() {
    console.log("hola");
    if (store.State.count >= store.State.clickUpgrades.run.price) {
      store.State.count -= store.State.clickUpgrades.run.price;
      store.State.clickUpgrades.run.quantity++;
    }
  }

  threePointsClick() {
    store.State.count += store.State.clickUpgrades.toy.multiplier;
  }
}

const GAMESERVICE = new GameService();

export default GAMESERVICE;
