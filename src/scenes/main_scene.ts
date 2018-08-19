import Ship from "../objects/ship";

class MainScene extends Phaser.Scene {
  private player: Ship;

  preload() {
    // TODO - pull out the sprite keys
    this.load.image("ship", "assets/ship.png");
    this.load.image("bullet", "assets/bullet.png");
  }

  create() {
    this.player = new Ship(
      this,
      this.scene.systems.canvas.width / 2,
      this.scene.systems.canvas.height / 2,
      "ship",
    );

    this.add.existing(this.player);
    this.physics.world.enable(this.player);
  }

  update() {
    this.player.update();
  }
}

export default MainScene;
