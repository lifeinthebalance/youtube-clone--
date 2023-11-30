import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
  variants: {
    menu: "hover:bg-neutral-100 w-8 h-8 flex justify-center items-center rounded-full",
  },
});

type ButtonVariants = VariantProps<typeof button> & ComponentProps<"button">;

// interface ButtonProps extends ButtonVariants {
//   children: React.ReactNode;
// }

export function Button({ className, ...props }: ButtonVariants) {
  return (
    <button {...props} className={twMerge(button.variants.menu, className)} />
  );
}
