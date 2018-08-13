import Ship from "../objects/ship";

class MainScene extends Phaser.Scene {
  private player: Ship;

  constructor() {
    super({ key: "MainScene" });
  }

  create() {
    // Without `any`, I'm getting this:
    // Property 'sys' is missing in type '{ scene: this; }'.
    // Some sort of issue with the Phaser.GameObjects.Graphics
    // type definition maybe
    const args: any = { scene: this, options: {} };
    this.player = new Ship(args);
  }

  update() {
    this.player.update();
  }
}

export default MainScene;
