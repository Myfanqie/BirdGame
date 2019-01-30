import {DataStore} from "./base/DataStore.js";
import {UpPencil} from "./scences/UpPencil.js";
import {DownPencil} from "./scences/DownPencil.js";


// 游戏逻辑
export class Director {
    constructor() {
        this.dataStore = DataStore.simple_instance();
    }

    static simple_instance() {
        if (!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }

    create_pencil() {
        // 设置铅笔的随机高度
        const min_top = DataStore.simple_instance().canvas.height / 8;
        const max_top = DataStore.simple_instance().canvas.height / 2;
        const pencil_top = min_top + (max_top - min_top) * Math.random();
        this.dataStore.get("pencils").push(new UpPencil(pencil_top));
        this.dataStore.get("pencils").push(new DownPencil(pencil_top));
    }

    draw_pencil() {
        this.pencils = this.dataStore.get("pencils");
        // 出现过一组铅笔且超过屏幕的1/2，再次创建一组铅笔(第一组铅笔刚刚销毁，第三组铅笔刚要出现，第二组处在屏幕正中央)
        if (this.pencils[0].dx < (DataStore.simple_instance().canvas.width - this.pencils[0].dw) * 0.5 &&
            this.pencils.length === 2) {
            this.create_pencil();
        }
        // 超出屏幕左边界且出现过２组铅笔，销毁铅笔
        if (this.pencils[0].dx + this.pencils[0].sw < 0 && this.pencils.length === 4) {
            this.pencils.shift();
            this.pencils.shift();
        }

        for (let pencil of this.pencils) {
            pencil.draw();
        }
    }

    run() {
        if (this.isGameover === false) {
            // 绘制背景
            this.dataStore.get("background").draw();

            // 绘制铅笔
            this.draw_pencil();

            // 绘制陆地
            const land = this.dataStore.get("land");
            land.draw();

            // 绘制小鸟
            this.bird = this.dataStore.get("bird");
            this.bird.draw();

            // 小鸟和铅笔碰撞检测
            // for (let pencil of this.pencils){
            //     console.log(pencil.top + pencil.dh)
            //     if (this.bird.dy < pencil.top+pencil.dh){
            //         this.isGameover = true;
            //     }
            // }

            // 碰到陆地，游戏结束
            if (this.bird.dy + this.bird.dh - 20 >= land.dy) {
                this.isGameover = true;
            }

            // 计分
            const score = this.dataStore.get("score");
            score.draw();
            if (this.bird.dx === this.pencils[0].dx + this.pencils[0].dw) {
                score.score_num++;
            }

            // 根据浏览器的帧率进行渲染
            this.timer = requestAnimationFrame(() => this.run());
        } else {
            const button = this.dataStore.get("start_button");
            button.draw();
            // 游戏结束
            cancelAnimationFrame(this.timer);
            this.dataStore.destroy_all();
        }
    }
}