class Ship extends Phaser.GameObjects.Graphics {
  private currentScene: Phaser.Scene;
  private shipSize: number;

  /* Lifecycle */

  constructor(params: any) {
    super(params.scene, params.options);

    this.currentScene = params.scene;
    this.shipSize = 30;
    this.initShip();
  }

  update() {

  }

  /* Setup */

  private initShip() {
    this.x = this.currentScene.sys.canvas.width / 2;
    this.y = this.currentScene.sys.canvas.height / 2;

    this.lineStyle(1, 0xffffff);

    this.strokeTriangle(
      -this.shipSize,
      this.shipSize,
      this.shipSize,
      this.shipSize,
      0,
      -this.shipSize,
    );

    this.currentScene.add.existing(this);
  }
}

export default Ship;
