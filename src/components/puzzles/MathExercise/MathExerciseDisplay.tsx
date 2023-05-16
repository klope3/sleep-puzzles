import { MathProblemType } from "../../../types";

type MathExerciseDisplayProps = {
  problem: MathProblemType;
  answer: string;
};

export function MathExerciseDisplay({
  problem,
  answer,
}: MathExerciseDisplayProps) {
  return (
    <div className="math-exercise-display">
      <div>{problem.firstNumber}</div>
      <div>{problem.secondNumber}</div>
      <div className="math-symbol">
        {problem.type === "addition" ? "+" : "-"}
      </div>
      <div className="math-exercise-line"></div>
      <label htmlFor="answer">
        <input
          type="text"
          inputMode="numeric"
          name="answer"
          id="answer"
          disabled={true}
          value={answer}
        />
      </label>
    </div>
  );
}
