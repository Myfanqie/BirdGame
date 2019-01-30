import {SpriteBase} from "../base/SpriteBase.js";
import {DataStore} from "../base/DataStore.js";

export class Bird extends SpriteBase {
    constructor() {
        const image = Bird.get_image("bird");
        // 小鸟的上下边距是10
        super(image, 0, 10, image.width / 3, image.height-10,
            DataStore.simple_instance().canvas.width / 3, DataStore.simple_instance().canvas.height / 3, image.width / 3, image.height-10);
        this.time_gap = 0;  // 设置小鸟切换的延迟
        this.up_fly_speed = 70;
        this.time = 0;
    }

    draw() {
        super.draw();
        this.time += 0.5;
        const g = 0.98 / 2;
        this.dy += 1 / 2 * g * (this.time ^ 2);  // 自由落体


        // 不断修改裁剪起始位置
        this.time_gap++;
        if (this.time_gap % 5 === 0) {
            this.sx += this.image.width * 1 / 3;
        }
        if (this.sx >= this.image.width) {
            this.sx = 0;
        }
    }

    fly() {
        this.time = 0; // 向上飞时不下落
        this.dy -= this.up_fly_speed;
        if (this.dy <= 0) {
            this.dy = 0;
        }
    }
}