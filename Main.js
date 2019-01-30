import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {BackGround} from "./js/scences/BackGround.js";
import {DataStore} from "./js/base/DataStore.js";
import {Director} from "./js/Director.js";
import {Land} from "./js/scences/Land.js";
import {Bird} from "./js/player/Bird.js";
import {Button} from "./js/player/Button.js";
import {Score} from "./js/player/Score.js";

// 初始化各种类
export class Main {
    constructor() {
        this.canvas = wx.createCanvas();

        this.ctx = this.canvas.getContext("2d");
        this.dataStore = DataStore.simple_instance();
        this.director = Director.simple_instance();
        // 资源加载器
        this.loader = new ResourceLoader();
        this.loader.wait_load_complete(map => this.load_success(map));
    }

    // 素材加载完成
    load_success(map) {
        // 永久保存的变量
        this.dataStore.canvas = this.canvas;
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;  // 折腾人啊

        this.registerEvent();
        this.save_init_data();
    }

    save_init_data() {
        //　存储数据
        this.dataStore.set("background", BackGround).set("land", Land)
            .set("pencils", []).set("bird", Bird).set("start_button", Button)
            .set("score", Score);
        // 预先创建一组铅笔
        this.director.create_pencil();
        this.director.isGameover = false;
        this.director.run();
    }

    registerEvent() {
        wx.onTouchStart(e => {
            if (this.director.isGameover) {
                this.save_init_data();
            } else {
                this.dataStore.get("bird").fly();
            }
        })
    }
}