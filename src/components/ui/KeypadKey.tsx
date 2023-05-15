import { KeypadKeyType } from "../../types";

type KeypadKeyProps = {
  keyData: KeypadKeyType;
};

export function KeypadKey({ keyData }: KeypadKeyProps) {
  const style =
    keyData.type === "blank"
      ? {
          backgroundColor: "transparent",
          cursor: "initial",
        }
      : undefined;
  const content = keyData.type === "blank" ? "" : `${keyData.value}`;

  return (
    <div className="keypad-key" style={style}>
      {content}
    </div>
  );
}
