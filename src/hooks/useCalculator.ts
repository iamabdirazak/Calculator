import { useState } from "react";
import type {CalculatorState, Operator } from "../types/calculator";

export default function useCalculator() {
  const [state, setState] = useState<CalculatorState>({
    current: "0",
    previous: "",
    operator: null,
  });

  const inputDigit = (digit: string) => {
    setState((s) => ({
      ...s,
      current: s.current === "0" ? digit : s.current + digit,
    }));
  };

  const inputDot = () => {
    setState((s) => {
      if (s.current.includes(".")) return s;
      return { ...s, current: s.current + "." };
    });
  };

  const chooseOperator = (op: Operator) => {
    setState((s) => ({
      previous: s.current,
      current: "0",
      operator: op,
    }));
  };

  const clear = () => {
    setState({
      current: "0",
      previous: "",
      operator: null,
    });
  };

  const del = () => {
    setState((s) => ({
      ...s,
      current: s.current.length > 1 ? s.current.slice(0, -1) : "0",
    }));
  };

  const calculate = () => {
    setState((s) => {
      if (!s.previous || !s.operator) return s;

      const prev = parseFloat(s.previous);
      const curr = parseFloat(s.current);
      let result = 0;

      switch (s.operator) {
        case "+":
          result = prev + curr;
          break;
        case "-":
          result = prev - curr;
          break;
        case "*":
          result = prev * curr;
          break;
        case "/":
          result = curr === 0 ? 0 : prev / curr;
          break;
        default:
          result = curr;
      }

      return {
        current: String(result),
        previous: "",
        operator: null,
      };
    });
  };

  return {
    state,
    inputDigit,
    inputDot,
    chooseOperator,
    clear,
    del,
    calculate,
  };
}