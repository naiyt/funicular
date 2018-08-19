class Bullet extends Phaser.GameObjects.Sprite {
  public body: Phaser.Physics.Arcade.Body;
  private speed: number;

  constructor(scene: Phaser.Scene, x: number, y: number, key: string) {
    super(scene, x, y, key);
    this.speed = 500;
  }

  update() {
    this.body.setVelocity(0, -this.speed);
  }
}

export default Bullet;
