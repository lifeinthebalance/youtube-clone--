const buttonVariants = {
  menu: "hover:bg-neutral-100 p-2 w-10 h-10 flex justify-center items-center",
};

export function LightButton({ ...props }) {
  return <button {...props} className={buttonVariants.menu} />;
}
