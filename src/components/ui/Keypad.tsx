import { KeypadKey } from "./KeypadKey";
import "./Keypad.css";
import { KeypadKeyCallback, KeypadKeyType } from "../../types";

const keys: KeypadKeyType[] = [
  {
    type: "number",
    value: 1,
  },
  {
    type: "number",
    value: 2,
  },
  {
    type: "number",
    value: 3,
  },
  {
    type: "number",
    value: 4,
  },
  {
    type: "number",
    value: 5,
  },
  {
    type: "number",
    value: 6,
  },
  {
    type: "number",
    value: 7,
  },
  {
    type: "number",
    value: 8,
  },
  {
    type: "number",
    value: 9,
  },
  {
    type: "backspace",
    value: "X",
  },
  {
    type: "number",
    value: 0,
  },
  {
    type: "submit",
    value: "✓",
  },
];

type KeypadProps = {
  onKeyPressed: KeypadKeyCallback;
};

export function Keypad({ onKeyPressed }: KeypadProps) {
  return (
    <div className="keypad">
      {keys.map((elem) => (
        <KeypadKey keyData={elem} onKeyPressed={onKeyPressed} />
      ))}
    </div>
  );
}
