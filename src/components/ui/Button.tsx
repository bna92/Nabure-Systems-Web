import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const variantStyles: Record<Variant, string> = {
  primary: "bg-secondary text-white hover:bg-on-secondary-fixed-variant shadow-lg shadow-secondary/20",
  secondary:
    "bg-white text-on-surface border-2 border-outline-variant hover:border-secondary hover:text-secondary",
  ghost: "text-on-surface-variant hover:text-secondary",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-lg py-sm text-body-md font-bold transition-all duration-150 active:scale-[0.97]";

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button";
  variant?: Variant;
  children: ReactNode;
}

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as: "a";
  variant?: Variant;
  children: ReactNode;
}

interface ButtonAsLinkProps extends LinkProps {
  as: "link";
  variant?: Variant;
  children: ReactNode;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps | ButtonAsLinkProps;

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if (props.as === "link") {
    const { as: _as, ...linkProps } = props;
    return (
      <Link className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  if (props.as === "a") {
    const { as: _as, ...anchorProps } = props;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as: _as, ...buttonProps } = props as ButtonAsButtonProps;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
