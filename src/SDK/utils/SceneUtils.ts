import Phaser from 'phaser'

export namespace SceneUtils
{
    export function GetWidth(scene: Phaser.Scene): number {
        return scene.game.scale.width;
    };

    export function GetHeight(scene: Phaser.Scene): number {
        return scene.game.scale.height;
    };
}