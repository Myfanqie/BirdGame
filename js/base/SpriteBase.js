import {DataStore} from "./DataStore.js";

export class SpriteBase {
    // s表示裁剪图片的位置，ｘ表示放置在画布上的位置
    constructor(image = null, sx = 0, sy = 0, sw = 0, sh = 0, dx = 0, dy = 0, dw = 0, dh = 0) {
        this.dataStore = DataStore.simple_instance();
        this.ctx = this.dataStore.ctx;
        this.image = image;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.dx = dx;
        this.dy = dy;
        this.dw = dw;
        this.dh = dh;
    }

    // 读取图片
    static get_image(image_name) {
        return DataStore.simple_instance().res.get(image_name);
    }

    // 便于修改位置
    draw(dx = this.dx, dy = this.dy, dw = this.dw, dh = this.dh, sx=this.sx, sy=this.sy, sw=this.sw, sh=this.sh) {
        this.ctx.drawImage(this.image, sx, sy, sw, sh, dx, dy, dw, dh);
    }
}
