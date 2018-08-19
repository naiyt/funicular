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

  outOfBounds() {
    return this.x < 0 || this.y < 0 || this.x > this.scene.sys.canvas.width || this.y > this.scene.sys.canvas.height;
  }
}

export default Bullet;
