import { useState } from "react";
import { KeypadKeyType, MathProblemType } from "../../../types";
import { Keypad } from "../../ui/Keypad";
import { MathExerciseDisplay } from "./MathExerciseDisplay";
import "./MathExercise.css";

export function MathExercise() {
  const [problem, setProblem] = useState(getRandomProblem());
  const [answer, setAnswer] = useState("");

  function getRandomProblem() {
    const nums = Array.from({ length: 2 }, () =>
      Math.floor(Math.random() * 999)
    );
    nums.sort((a, b) => a - b);
    const problem: MathProblemType = {
      firstNumber: nums[1],
      secondNumber: nums[0],
      type: "addition",
    };
    return problem;
  }

  function onKeyPressed(pressedKey: KeypadKeyType) {
    if (pressedKey.type === "backspace") {
      setAnswer(answer.substring(1));
    }
    if (pressedKey.type === "number") {
      const newAnswer = pressedKey.value + answer;
      if (newAnswer.length <= 4) setAnswer(newAnswer);
    }
    if (pressedKey.type === "submit") {
      const correctAnswer =
        problem.type === "addition"
          ? problem.firstNumber + problem.secondNumber
          : problem.firstNumber - problem.secondNumber;
      if (+answer === correctAnswer) {
        setProblem(getRandomProblem());
        setAnswer("");
      }
    }
  }

  return (
    <div className="math-exercise">
      <MathExerciseDisplay problem={problem} answer={answer} />
      <Keypad onKeyPressed={onKeyPressed} />
    </div>
  );
}
