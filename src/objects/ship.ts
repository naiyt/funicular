class Ship extends Phaser.GameObjects.Sprite {
  public body: Phaser.Physics.Arcade.Body;
  private cursors: CursorKeys;
  private speed: number;

  constructor(scene: Phaser.Scene, x: number, y: number, key: string) {
    super(scene, x, y, key);
    this.cursors = scene.input.keyboard.createCursorKeys();
    this.speed = 500;
  }

  update() {
    const velocity = this.getVelocity();
    this.body.setVelocity(velocity.x, velocity.y);
  }

  private getVelocity(): Phaser.Math.Vector2 {
    let horizontal = 0;
    let vertical = 0;
    let x = 0;
    let y = 0;

    if(this.cursors.left && this.cursors.left.isDown) {
      horizontal = -1;
    } else if(this.cursors.right && this.cursors.right.isDown) {
      horizontal = 1;
    }

    if(this.cursors.up && this.cursors.up.isDown) {
      vertical = -1;
    } else if (this.cursors.down && this.cursors.down.isDown) {
      vertical = 1;
    }

    const canMoveHorizontally = (horizontal < 0 && this.x >= 0) || (horizontal > 0 && this.x <= this.scene.sys.canvas.width);
    const canMoveVertically = (vertical < 0 && this.y >= 0) || (vertical > 0 && this.y <= this.scene.sys.canvas.width);

    if(canMoveHorizontally) {
      x = horizontal * this.speed;
    }

    if(canMoveVertically) {
      y = vertical * this.speed;
    }

    return new Phaser.Math.Vector2(x, y);
  }
}

export default Ship;
