import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = {
  variants: {
    menuButton:
      "hover:bg-neutral-100 w-8 h-8 flex justify-center items-center rounded-full",
  },
};

type ButtonProps = ComponentProps<"button">;

export function MenuButton({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles.variants.menuButton, className)}
    />
  );
}
