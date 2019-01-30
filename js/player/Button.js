import {SpriteBase} from "../base/SpriteBase.js";
import {DataStore} from "../base/DataStore.js";

export class Button extends SpriteBase {
    constructor() {
        const image = Button.get_image("start_button");
        super(image, 0, 0, image.width, image.height,
            (DataStore.simple_instance().canvas.width - image.width) * 0.5, (DataStore.simple_instance().canvas.height - image.height) * 0.5,
            image.width, image.height)
    }
}