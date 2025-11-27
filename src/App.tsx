import Display from "./components/Display/Display";
import ButtonGrid from "./components/Buttons/ButtonGrid";
import useCalculator from "./hooks/useCalculator";
import "./index.css";
import "./App.css";

export default function App() {
  const {
    state,
    inputDigit,
    inputDot,
    chooseOperator,
    clear,
    del,
    calculate,
  } = useCalculator();

  return (
    <div className="app">
      <Display value={state.current} />
      <ButtonGrid
        onDigit={inputDigit}
        onDot={inputDot}
        onOperator={chooseOperator}
        onClear={clear}
        onDelete={del}
        onEqual={calculate}
      />
    </div>
  );
}