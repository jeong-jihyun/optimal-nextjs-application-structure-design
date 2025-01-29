import clsx from "clsx";

interface BoundaryProps {
  children: React.ReactNode;
  label?: string[];
  size?: "small" | "default";
  color?: "default" | "pink" | "blue" | "violet" | "orange" | "cyan";
  animateRerendering?: boolean;
}

export const Boundary = ({
  children,
  label = ["children"],
  size = "default",
  color = "default",
  animateRerendering = true,
}: BoundaryProps) => {
  return (
    <div
      className={clsx("relative rounded-lg border border-dashed", {
        "p-3 lg:p-5": size === "small",
        "p-4 lg:p-9": size === "default",
        "border-gray-300": color === "default",
        "border-vercel-pink": color === "pink",
        "border-vercel-blue": color === "blue",
        "border-vercel-cyan": color === "cyan",
        "border-vercel-violet": color === "violet",
        "border-vercel-orange": color === "orange",
        "text-vercel-pink animate-[rerender_1s_ease-in-out_1]":
          animateRerendering,
      })}
    >
      <div
        className={clsx(
          "absolute -top-2.5 flex gap-x-1 text-[9px] uppercase leading-4 tracking-widest",
          {
            "left-3 lg:left-5": size === "small",
            "left-4 lg:left-9": size === "default",
          }
        )}
      >
        {label.map((label) => {
          return (
            <Label
              key={label}
              color={color}
              animateRerendering={animateRerendering}
            >
              바운더리: {label}
            </Label>
          );
        })}
      </div>
      {children}
    </div>
  );
};

type LabelProps = {
  children: React.ReactNode;
  animateRerendering?: boolean;
  color: "default" | "pink" | "blue" | "violet" | "orange" | "cyan";
};

const Label = ({ children, animateRerendering, color }: LabelProps) => {
  return (
    <div
      className={clsx("rounded-full px-1.5 shadow-[0_0_1px_1px_gray]", {
        "bg-gray-100 text-gray-600": color === "default",
        "bg-vercel-pink text-white": color === "pink",
        "bg-vercel-blue text-white": color === "blue",
        "bg-vercel-cyan text-white": color === "cyan",
        "bg-vercel-violet text-violet-100": color === "violet",
        "bg-vercel-orange text-white": color === "orange",
        "animate-[highlight_1s_ease-in-out_1]": animateRerendering,
      })}
    >
      {children}
    </div>
  );
};
