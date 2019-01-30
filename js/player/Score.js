import {DataStore} from "../base/DataStore.js";


export class Score{
    constructor(){
        this.score_num = 0;
        this.ctx = DataStore.simple_instance().ctx;
    }
    draw(){
        this.ctx.font="20px Arial";
        this.ctx.fillStyle = "#ff342e";
        this.ctx.fillText(this.score_num,10,30);
    }
}