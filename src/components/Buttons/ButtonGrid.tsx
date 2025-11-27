import Button from "./Button";
import "./ButtonGrid.css";
import type Operator from ".../types/calculator";

interface Props {
  onDigit: (d: string) => void;
  onDot: () => void;
  onOperator: (op: Operator) => void;
  onClear: () => void;
  onDelete: () => void;
  onEqual: () => void;
}

export default function ButtonGrid({
  onDigit,
  onDot,
  onOperator,
  onClear,
  onDelete,
  onEqual,
}: Props) {
  return (
    <div className="grid">
      <Button label="C" variant="action" onClick={onClear} />
      <Button label="DEL" variant="action" onClick={onDelete} />
      <Button label="." variant="action" onClick={onDot} />
      <Button label="÷" variant="operator" onClick={() => onOperator("/")} />

      <Button label="7" onClick={() => onDigit("7")} />
      <Button label="8" onClick={() => onDigit("8")} />
      <Button label="9" onClick={() => onDigit("9")} />
      <Button label="×" variant="operator" onClick={() => onOperator("*")} />

      <Button label="4" onClick={() => onDigit("4")} />
      <Button label="5" onClick={() => onDigit("5")} />
      <Button label="6" onClick={() => onDigit("6")} />
      <Button label="−" variant="operator" onClick={() => onOperator("-")} />

      <Button label="1" onClick={() => onDigit("1")} />
      <Button label="2" onClick={() => onDigit("2")} />
      <Button label="3" onClick={() => onDigit("3")} />
      <Button label="+" variant="operator" onClick={() => onOperator("+")} />

      <Button label="0" onClick={() => onDigit("0")} />
      <Button label="=" variant="operator" onClick={onEqual} />
    </div>
  );
}