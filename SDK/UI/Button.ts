import * as Phaser from "phaser";
import { IComponent } from "../Models";

const padding = 10;
const minimumWidth = 200;
const minimumHeight = 50;

export class Button extends Phaser.GameObjects.Rectangle implements IComponent {
    private Label: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene, x: number, y: number, text: string, onClick?: () => void) {
        super(scene, x, y);
        scene.add.existing(this);
        this.setOrigin(0, 0);

        this.Label = scene.add
            .text(x + padding, y + padding, text)
            .setFontSize(18)
            .setAlign("center");

        const labelWidth = this.Label.width + padding;
        const labelHeight = this.Label.height + padding;

        this.width = labelWidth >= minimumWidth ? labelWidth : minimumWidth;
        this.height = labelHeight >= minimumHeight ? labelHeight : minimumHeight;

        this.setInteractive({ useHandCursor: true })
            .on("pointerover", this.enterMenuButtonHoverState)
            .on("pointerout", this.enterMenuButtonRestState)
            .on("pointerdown", this.enterMenuButtonActiveState)
            .on("pointerup", this.enterMenuButtonHoverState);

        if (onClick) {
            this.on("pointerup", onClick);
        }

        this.enterMenuButtonRestState();
    }

    private enterMenuButtonHoverState() {
        this.Label.setColor("#000000");
        this.setFillStyle(0x888888);
    }

    private enterMenuButtonRestState() {
        this.Label.setColor("#FFFFFF");
        this.setFillStyle(0x888888);
    }

    private enterMenuButtonActiveState() {
        this.Label.setColor("#BBBBBB");
        this.setFillStyle(0x444444);
    }

    Destroy(): void {
        this.Label.destroy();
    }
}