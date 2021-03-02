
class TravelClub {

    /**
     * 구성요소
     * 1. 데이터 속성
     * 2. 메소드
     * 3. 초기화 메소드 -> 생성자
     */
    constructor(name, intro) {
        this._name = name;
        this._intro = intro;
        this._foundedDate = new Date();
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get intro() {
        return this._intro;
    }

    set intro(intro) {
        this._intro = intro;
    }
}

/*

// examples of using getters and setters

let newClub = new TravelClub('TestClub', 'TestIntro');
console.log(newClub.name); // getter
console.log(newClub);

newClub.name = 'New name'; // setter
console.log(newClub);

 */

export default TravelClub;