import {SpriteBase} from "../base/SpriteBase.js";
import {DataStore} from "../base/DataStore.js";

export class PencilBase extends SpriteBase {
    constructor(image, top) {
        super(image, 0, 0, image.width, image.height,
            DataStore.simple_instance().canvas.width, 0, image.width, image.height);
        // top记录笔尖的位置
        this.top = top;
        this.speed = -1;
    }

    draw() {
        // DataStore
        this.dx += this.speed;
        super.draw(this.dx, this.top);
        if (this.dx > DataStore.simple_instance().canvas.width) {
            this.dx = DataStore.simple_instance().canvas.width;
        }
    }
}