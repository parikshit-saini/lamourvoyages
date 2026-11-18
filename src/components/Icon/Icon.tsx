type IconProps = {
  name: string;
  size?: number;
  filled?: boolean;
  className?: string;
};

/** Material Symbols Outlined icon (font loaded in the root layout). */
export default function Icon({ name, size = 20, filled = false, className = "" }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined ${className}`.trim()}
      style={{
        fontSize: size,
        fontVariationSettings: filled ? "'FILL' 1" : undefined,
      }}
    >
      {name}
    </span>
  );
}
