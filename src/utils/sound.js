import sound from "../assets/sound";

const playSound = (src) => new Audio(src).play();

export const playChipChange = () => playSound(sound.chip_change);
