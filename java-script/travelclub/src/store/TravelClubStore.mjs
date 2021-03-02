import mapStorage from "./MapStorage.mjs";

// import TravelClub from "../entity/TravelClub.mjs"; // for test

class TravelClubStore {

    constructor() {
        this._clubMap = mapStorage.clubMap;
    }

    // 저장된 TravelClub 수를 반환
    count() {
        return this._clubMap.size;
    }

    exist(name) {
        // Map(k, v) => (travelClub.name, travelClub)
        return this._clubMap.has(name);
    }

    store(newClub) {
        if (this.exist(newClub.name)) {
            return null;
        }
        this._clubMap.set(newClub.name, newClub);
        return newClub.name;
    }

    retrieve(name) {
        return this._clubMap.get(name);
    }

    retrieveAll() {
        return this._clubMap.values();
    }

    update(newClub) {
        this._clubMap.set(newClub.name, newClub);
    }

    delete(name) {
        this._clubMap.delete(name);
    }

}

/*
// 테스트 코드

let newClub = new TravelClub('TestClub', 'test intro');
let travelClubStore = new TravelClubStore();

travelClubStore.store(newClub);
console.log(travelClubStore.count());
console.log(travelClubStore.retrieve('TestClub'));
console.log(travelClubStore.retrieveAll());
console.log(travelClubStore.exist('TestClub'));

travelClubStore.store(new TravelClub('TestClub01', 'second intro'));
travelClubStore.delete('TestClub01');
console.log(travelClubStore.retrieve('TestClub01'));

travelClubStore.update(new TravelClub('TestClub', 'new club'));
console.log(travelClubStore.retrieveAll());
*/

export default TravelClubStore;