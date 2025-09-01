import sound from "../assets/sound";

const playSound = (src) => new Audio(src).play();

// Individual sound functions
export const playBetSound = () => playSound(sound.bet);
export const playGem1Sound = () => playSound(sound.gem1);
export const playGem2Sound = () => playSound(sound.gem2);
export const playGem3Sound = () => playSound(sound.gem3);
export const playIdleSound = () => playSound(sound.idle);
export const playInstantLoseSound = () => playSound(sound.instantLose);
export const playLoseSound = () => playSound(sound.lose);
export const playMineSound = () => playSound(sound.mine);
export const playMoveSound = () => playSound(sound.move);
export const playSelectedSound = () => playSound(sound.selected);
export const playSpinSound = () => playSound(sound.spin);
export const playSpinInstantSound = () => playSound(sound.spinInstant);
export const playStarSound = () => playSound(sound.star);
export const playStarShineSound = () => playSound(sound.starShine);
export const playTearSound = () => playSound(sound.tear);
export const playWin1Sound = () => playSound(sound.win1);
export const playWin2Sound = () => playSound(sound.win2);
