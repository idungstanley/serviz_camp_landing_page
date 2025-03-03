import Link from "next/link";

interface ButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button = ({ href, label, variant = "primary", className }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-lg text-center transition ${
        variant === "primary"
          ? "bg-[#60864a] text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      } ${className}`}
    >
      {label}
    </Link>
  );
};

export default Button;
