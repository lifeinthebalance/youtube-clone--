export function LightButton({ ...props }) {
  return (
    <button
      {...props}
      className="hover:bg-primary-hover rounded-full transition-colors"
    />
  );
}
