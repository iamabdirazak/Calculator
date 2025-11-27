import "./Display.css";

interface DisplayProps {
  value: string;
}

export default function Display({ value }: DisplayProps) {
  return <div className="display">
    <div className="result">
        {value}
    </div>
    </div>;
}