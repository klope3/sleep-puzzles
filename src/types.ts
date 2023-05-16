export type AppMode = "math" | "modeSelect";
export type KeypadKeyType = {
  value: number | string | undefined;
  type: "number" | "backspace" | "submit" | "blank";
};
export type MathProblemType = {
  firstNumber: number;
  secondNumber: number;
  type: "addition" | "subtraction";
};
export type KeypadKeyCallback = (pressedKey: KeypadKeyType) => void;
