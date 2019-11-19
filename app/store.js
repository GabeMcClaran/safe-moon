///WHERE WE KEEP ALL OF OUR DATA!!!!

let _state = {
  count: 0,
  clickUpgrades: {
    run: {
      price: 5,
      quantity: 0,
      multiplier: 1
    },
    toy: {
      price: 10,
      quantity: 0,
      multiplier: 2
    }
  }
};

class Store {
  get State() {
    return _state;
  }
}
const STORE = new Store();

export default STORE;
