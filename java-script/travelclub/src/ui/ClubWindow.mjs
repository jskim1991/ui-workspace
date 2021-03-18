import { question } from 'readline-sync';
import ClubCoordinator from "../service/ClubCoordinator.mjs";
import TravelClub from "../entity/TravelClub.mjs";

class ClubWindow {

    constructor() {
        this._clubCoordinator = new ClubCoordinator();
    }

    register() {
        let newClub = null;
        while(true) {
            let clubName = question('Enter club name (0 => Club Menu)   ');
            if (clubName === '0' || clubName === null || clubName === '') {
                break;
            }

            if (this._clubCoordinator.exist(clubName)) {
                console.log(`Club already exists => ${clubName}`);
                continue;
            }

            let intro = question('Enter club intro (0 => Club Menu)   ');
            if (intro === '0') {
                break;
            }

            newClub = new TravelClub(clubName, intro);
            this._clubCoordinator.register(newClub);
            console.log(`Successfully registered club ${clubName}`);
        }
    }

    findAll() {
        if (!this._clubCoordinator.hasClubs()) {
            console.log("No clubs yet");
            return;
        } else {
            let allClubs = this._clubCoordinator.findAll();
            console.log('.... Please wait ....');
            for (let value of allClubs) {
                this.printClub(value);
            }
        }
    }

    findOne() {
        let foundClub = null;
        if (!this._clubCoordinator.hasClubs()) {
            console.log("No clubs yet");
            return null;
        }

        while (true) {
            let clubName = question('Enter club name to find (0 => Club Menu)   ');
            if (clubName === '0') {
                break;
            }

            if (this._clubCoordinator.exist(clubName)) {
                foundClub = this._clubCoordinator.find(clubName);
                break;
            } else {
                console.log(`No such club ${clubName}`);
            }
        }
        return foundClub;
    }

    find() {
        let foundClub = this.findOne();
        if (foundClub) {
            this.printClub(foundClub);
        }
        // else {
        //     console.log(`No such club ${foundClub}`);
        // }
    }

    modify() {
        let targetClub = this.findOne();

        let newIntro = question('Enter new intro (0 => Club Menu)   ');
        if (newIntro === '0') {
            return;
        }

        this._clubCoordinator.modify(targetClub.name, newIntro);
        console.log(`Club intro has changed successfully...`);
    }

    remove() {
        let targetClub = this.findOne();
        let confirmString = question(`Remove club ${targetClub.name} ? (Y/N) `);
        if (confirmString.toLowerCase() === 'y' || confirmString.toLowerCase() === 'yes') {
            this._clubCoordinator.remove(targetClub.name);
            console.log(`Successfully removed club ${targetClub.name}`);
        } else {
            console.log(`Removing ${targetClub.name} has been cancelled`);
        }
    }

    printClub(club) {
        console.log("======");
        console.log(`Club Name : ${club.name}`);
        console.log(`Club Intro : ${club.intro}`);
        console.log(`Club Founded Date : ${club.foundedDate}`);
        console.log("======");
    }
}

export default ClubWindow;