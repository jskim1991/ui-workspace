
let uniqueInstance;

class MapStorage {

    constructor() {
        if (uniqueInstance) {
            return uniqueInstance;
        }
        this._clubMap = new Map();
        uniqueInstance = this;
    }

    get clubMap() {
        return this._clubMap;
    }
}

/*
// 싱글턴 테스트 코드
let map01 = new MapStorage();
let map02 = new MapStorage();

console.log(map01 === map02);
console.log(map01.clubMap == map02.clubMap);
*/
export default new MapStorage();