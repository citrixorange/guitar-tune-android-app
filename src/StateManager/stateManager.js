import { createMachine } from 'xstate';
import { States } from './states.js';

const stateMachine = createMachine({
    id: 'guitar-tune-state-manager',
    initial: States.MAIN,
    states: {
        MAIN: {
            on: {
                goToMenu: States.MENU,
                goToTuner: States.TUNER
            }
        },
        MENU: {
            on: {
                goToMain: States.MAIN,
                goToConfigurations: States.CONFIGURATIONS,
                goToAbout: States.ABOUT,
                goToVersion: States.VERSION
            }
        },
        CONFIGURATIONS: {
            on: {
                goToMenu: States.MENU,
                goToDetection: States.DETECTION,
                goToEqualizer: States.EQUALIZER,
                goToFrequency: States.FREQUENCY
            }
        },
        ABOUT: {
            on: {
                goToMenu: States.MENU
            }
        },
        VERSION: {
            on: {
                goToMenu: States.MENU
            }
        },
        TUNER: {
            on: {
                goToMenu: States.MENU
            }
        },
        EQUALIZER: {
            on: {
                goToMenu: States.MENU
            }
        },
        DETECTION: {
            on: {
                goToConfigurations: States.CONFIGURATIONS,
                goToPower: States.POWER,
                goToClarity: States.CLARITY
            }
        },
        FREQUENCY: {
            on: {
                goToConfigurations: States.CONFIGURATIONS
            }
        },
        POWER: {
            on: {
                goToPower: States.POWER,
                goToDetection: States.DETECTION
            }
        },
        CLARITY: {
            on: {
                goToClarity: States.CLARITY,
                goToDetection: States.DETECTION
            }
        }
    }
});

export {
    stateMachine
};