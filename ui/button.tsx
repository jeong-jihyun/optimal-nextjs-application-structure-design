import clsx from "clsx";

export default function Button({
  kind = "default",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: "default" | "important" | "reference" | "error";
}) {
  return (
    // Tailwind CSS IntelliSense 설치 필요
    <button
      className={clsx(`rounded-lg px-3 py-1 text-sm font-medium m-1`, {
        "bg-gray-500 text-white hover:bg-gray-700": kind === "default",
        "bg-red-500 text-white hover:bg-red-700":
          kind === "important" || kind === "error",
        "bg-blue-500 text-white hover:bg-blue-700": kind === "reference",
      })}
      {...props}
    />
  );
}
