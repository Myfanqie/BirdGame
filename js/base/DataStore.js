// 存放临时加载的数据
export class DataStore {
    constructor() {
        // 字典存储数据
        this.map = new Map();
    }

    static simple_instance() {
        if (!DataStore.instance) {
            DataStore.instance = new DataStore();
        }
        return DataStore.instance;
    }

    set(key, value) {
        // 初始化时不用使用new
        if (typeof value == "function"){
            value = new value();
        }
        this.map.set(key, value);
        return this;
    }

    get(key) {
        return this.map.get(key);
    }
    // 销毁所有临时数据
    destroy_all() {
        for (let value of this.map.values()) {
            value = null;
        }
        this.map.clear();
    }
}