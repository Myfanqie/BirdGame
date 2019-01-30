import {SpriteBase} from "../base/SpriteBase.js";
import {DataStore} from "../base/DataStore.js";

export class Land extends SpriteBase{
    constructor(){
        const image = Land.get_image("land");
        super(image, 0, 0, image.width, image.height,
            // DataStore
            0, DataStore.simple_instance().canvas.height-image.height, image.width, image.height);
        this.speed = -1;
    }
    draw() {
        super.draw();
        this.dx += this.speed; // 移动
        if (-this.dx>(this.image.width-DataStore.simple_instance().canvas.width)){
            this.dx = 0;
        }
    }
}