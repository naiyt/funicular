import "phaser";

import MainScene from "./scenes/main_scene";

const config: GameConfig = {
  type: Phaser.AUTO,
  parent: "phaser-typescript-example",
  width: 800,
  height: 800,
  scene: MainScene,
};

class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

window.onload = () => {
  const _game = new Game(config);
};
