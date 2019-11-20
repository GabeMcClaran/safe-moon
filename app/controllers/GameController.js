import store from "../store.js";
import GameService from "../services/GameService.js";

//PRIVATE PARTS
let _countElem = document.getElementById("count");

function _draw() {
  //update the UI
  _countElem.innerText = store.State.count.toString();
}

export default class GameController {
  // PUBLIC PARTS

  mine() {
    console.log("ARE WE MINING");
    GameService.updateCount();
    _draw();
  }

  button() {
    console.log("hola");
    GameService.twoPointsClick();
    _draw();
  }

  fastbutton() {
    GameService.threePointsClick();
    _draw();
  }

  slowauto() {
    GameService.slowAuto();
    _draw();
  }
}
