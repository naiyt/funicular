class Ship extends Phaser.GameObjects.Sprite {
  public body: Phaser.Physics.Arcade.Body;
  private cursors: CursorKeys;
  private speed: number;

  constructor(scene: Phaser.Scene, x: number, y: number, key: string) {
    super(scene, x, y, key);
    this.cursors = scene.input.keyboard.createCursorKeys();
    this.speed = 100;
  }

  update() {
    const velocity = this.getVelocity();
    this.body.setVelocity(velocity.x, velocity.y);
  }

  private getVelocity(): Phaser.Math.Vector2 {
    let x = 0;
    let y = 0;

    if(this.cursors.left && this.cursors.left.isDown) {
      x = -1 * this.speed;
    } else if(this.cursors.right && this.cursors.right.isDown) {
      x = this.speed;
    }

    if(this.cursors.up && this.cursors.up.isDown) {
      y = -1 * this.speed;
    } else if (this.cursors.down && this.cursors.down.isDown) {
      y = 1 * this.speed;
    }

    return new Phaser.Math.Vector2(x, y);
  }
}

export default Ship;
