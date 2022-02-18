import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Display value of the label
   */
  label: string;
  /**
   * Size of the label
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Label capitalized
   */
  allCaps?: boolean;
  /**
   * Color of the label
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Custom color of the label
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = "No label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
