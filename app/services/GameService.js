import store from "../store.js";

class GameService {
  updateCount() {
    if (store.State.clickUpgrades.run.quantity > 0) {
      store.State.count +=
        store.State.clickUpgrades.run.quantity *
        store.State.clickUpgrades.run.multiplier;
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
      store.State.clickUpgrades.run.price * 2;
    }
  }

  threePointsClick() {
    if (store.State.count >= store.State.clickUpgrades.toy.price) {
      store.State.count -= store.State.clickUpgrades.toy.price;
      store.State.clickUpgrades.toy.quantity++;
      store.State.clickUpgrades.toy.price * 2;
    }
  }

 setMyInterval() {
    setInterval(function() {
    store.State.count+= store.State.countps;
          }, 2000);
  }

  slowAuto() {
    if (!timerSet) {
      setMyInterval();
      timerSet = true;
    }
  let my
}

const GAMESERVICE = new GameService();

export default GAMESERVICE;
