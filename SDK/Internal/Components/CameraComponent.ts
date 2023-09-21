import { Entity, ComponentData, IComponent } from "@SDK/Models";

export type CameraBounds = {
    X: number;
    Y: number;
    Width: number;
    Height: number;
    Center: boolean;
};

export class CameraComponent implements IComponent {
    public Camera: Phaser.Cameras.Scene2D.Camera;

    constructor(parent: Entity, data: ComponentData) {
        this.Camera = parent.scene.cameras.main;

        if (data.Bounds) {
            const bounds: CameraBounds = data.Bounds as CameraBounds;
            this.Camera.setBounds(bounds.X, bounds.Y, bounds.Width, bounds.Height);
        }

        if (data.FollowTarget) {
            this.Camera.startFollow(parent, data.RoundPixels);
        }
    }
}