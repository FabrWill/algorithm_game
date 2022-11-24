export default class Settings {
    private static instance: Settings;

    constructor() {
        if (!Settings.instance) {
            Settings.instance = this;
        }

        return Settings.instance;
    }

    gridSize: number = 32;

    width: number = 600;
    height: number = 600;

    frameRate: number = 6;
    frameCount: number = 0;
}