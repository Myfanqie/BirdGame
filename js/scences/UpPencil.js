import {PencilBase} from "./PencilBase.js";

export class UpPencil extends PencilBase {
    constructor(top) {
        const image = UpPencil.get_image("up_pencil");
        super(image, top);
        this.top = this.top - this.image.height; // top记录笔尖的位置
    }
}