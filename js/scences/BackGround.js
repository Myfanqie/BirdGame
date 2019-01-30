import {SpriteBase} from "../base/SpriteBase.js";
import {DataStore} from "../base/DataStore.js";

export class BackGround extends SpriteBase{
    constructor(){
        const image = BackGround.get_image("background");
        super(image, 0, 0, image.width, image.height, 0, 0, DataStore.simple_instance().canvas.width, DataStore.simple_instance().canvas.height);
        // DataStore
    }
}