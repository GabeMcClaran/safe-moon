///WHERE WE KEEP ALL OF OUR DATA!!!!

let _state = {
  count: 0,
  countps:0,
  timerset:false,
  clickUpgrades: {
    run: {
      price: 5,
      quantity: 0,
      multiplier: 2
    },
    toy: {
      price: 10,
      quantity: 0,
      multiplier: 4
    }
  } 
  autoUpgrades : {
    run: {
      increment: 1
    },
    squirrels: {
      price: 20,
      quantity: 0,
      multiplier: 5
    },
    cats: {
      price: 30,
      quantity: 0,
      multiplier: 10
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
