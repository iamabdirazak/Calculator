import "./Button.css";

interface Props {
  label: string;
  onClick: () => void;
  variant?: "operator" | "action" | "default";
}

export default function Button({ label, onClick, variant = "default" }: Props) {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}