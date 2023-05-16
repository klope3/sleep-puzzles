import { KeypadKeyCallback, KeypadKeyType } from "../../types";

type KeypadKeyProps = {
  keyData: KeypadKeyType;
  onKeyPressed: KeypadKeyCallback;
};

export function KeypadKey({ keyData, onKeyPressed }: KeypadKeyProps) {
  const style =
    keyData.type === "blank"
      ? {
          backgroundColor: "transparent",
          cursor: "initial",
        }
      : undefined;
  const content = keyData.type === "blank" ? "" : `${keyData.value}`;

  return (
    <div
      className="keypad-key prevent-select"
      style={style}
      onClick={() => onKeyPressed(keyData)}
    >
      {content}
    </div>
  );
}
