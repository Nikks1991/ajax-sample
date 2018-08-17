import { fetchChallenge } from './challenges/challenges-api';
import { startChallenge1 }  from './challenges/challenge1';
import { startChallenge2 } from './challenges/challenge2';
import { startChallenge3 } from './challenges/challenge3';
import { startChallenge4 } from './challenges/challenge4';

// Executes any perticular challenge
const  Application = {

    // TODO: Accept input from command line to dynamically select challenge, for now you have to manually un-comment the challenge
    run: () => {
        fetchChallenge();
        // startChallenge1();
        // startChallenge2();
        // startChallenge3();
        // startChallenge4();
    }
};

export default Application;
