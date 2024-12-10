const States = {
    MAIN: 'MAIN',
    MENU: 'MENU',
    CONFIGURATIONS: 'CONFIGURATIONS',
    ABOUT: 'ABOUT',
    VERSION: 'VERSION',
    TUNER: 'TUNER',
    EQUALIZER: 'EQUALIZER',
    DETECTION: 'DETECTION',
    FREQUENCY: 'FREQUENCY',
    POWER: 'POWER',
    CLARITY: 'CLARITY'
};

const Triggers = {
    MAIN: 'goToMain',
    MENU: 'goToMenu',
    CONFIGURATIONS: 'goToConfigurations',
    ABOUT: 'goToAbout',
    VERSION: 'goToVersion',
    TUNER: 'goToTuner',
    EQUALIZER: 'goToEqualizer',
    DETECTION: 'goToDetection',
    FREQUENCY: 'goToFrequency',
    POWER: 'goToPower',
    CLARITY: 'goToClarity'
}

export {
    States,
    Triggers
}