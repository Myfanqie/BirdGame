import {PencilBase} from "./PencilBase.js";

export class DownPencil extends PencilBase {
    constructor(top) {
        const image = DownPencil.get_image("down_pencil");
        super(image, top);
        let gap = 150;  // 设置铅笔间隔
        this.top = this.top + gap;
    }
}