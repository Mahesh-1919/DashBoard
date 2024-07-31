import { atom } from "recoil";

type SettingsData = {
  [key: string]: boolean;
};

export const settingsData = atom<SettingsData>({
  key: "settingsData",
  default: {
    passedStudents: true,
    placedStudents: true,
    LineChart: true,
    Branches: true,
  },
});
