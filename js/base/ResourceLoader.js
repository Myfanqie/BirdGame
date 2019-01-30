import {Resources} from "./Resources.js";

export class ResourceLoader {
    constructor(){
        this.map = new Map(Resources);
        // 修改本地图片路径为<img>标签
        for (let [key, value] of this.map) {
            let image = wx.createImage();
            image.src = value;
            this.map.set(key, image);
        }
    }

    // 等待所有素材加载完成，执行回调函数
    wait_load_complete(callback){
        let count = 0;
        for (const value of this.map.values()){
            value.onload = ()=>{
                count++;
                if(count === this.map.size){
                    callback(this.map);
                }
            }
        }
    }
}