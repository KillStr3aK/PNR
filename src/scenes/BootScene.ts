import Phaser from "phaser";
import { BaseScene } from "../../SDK";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Boot',
};

// TODO: ez nem ilyen lesz csak most nem ezzel foglalkozok
const assets: Map<string, string> = new Map();
assets.set("garfield", "images/9fb5a15e7f8f744375fb7bcd3a2cddaa.jpg");

export class BootScene extends BaseScene {
    constructor() {
        super(sceneConfig)
    }

    public preload = (): void => {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        const progressBar = this.add.graphics();
        const progressBox = this.add.graphics();

        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(width / 2 - 160, height / 2, 320, 50);

        const loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace'
            }
        });

        loadingText.setOrigin(0.5, 0.5);

        const percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
            }
        });

        percentText.setOrigin(0.5, -1.25);

        const assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
            }
        });

        assetText.setOrigin(0.5, -0.5);

        this.load.on('progress', (value: number) => {
            percentText.setText((value * 100).toFixed(2) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(width / 2 - 150, height / 2 + 10, 300 * value, 30);
        });

        this.load.on('fileprogress', (file: any) => {
            assetText.setText('Loading asset: ' + file.key);
        });

        this.load.on('complete', () => {
            // TODO: ez sem ilyen lesz csak most mással foglalkozom
            setTimeout(() => {
                progressBar.destroy();
                progressBox.destroy();
                loadingText.destroy();
                percentText.destroy();
                assetText.destroy();

                this.scene.start('MainMenu');
            }, 1500);
        });

        assets.forEach((path: string, name: string) => {
            this.load.image(name, path);
        });
    }
}
