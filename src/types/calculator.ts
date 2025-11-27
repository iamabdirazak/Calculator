export type Operator = '+' | '-' | '*' | '/' | null;

export interface CalculatorState {
    current: string;
    previous: string;
    operator: Operator;
}