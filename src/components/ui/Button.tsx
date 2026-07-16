import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const baseStyles =
  "inline-flex items-center justify-center rounded-full transition-all duration-150 active:scale-[0.98]";

const variantOuterStyles: Record<Variant, string> = {
  primary:
    "p-px bg-gradient-to-b from-white/90 via-black/10 to-black/30 btn-glossy max-w-full",
  secondary:
    "border-2 border-outline-variant bg-white px-md py-sm text-body-md font-bold text-on-surface hover:border-on-surface/30 max-w-full sm:px-lg",
  ghost: "px-md py-xs text-body-md font-semibold text-on-surface-variant hover:text-on-surface",
};

function GlossyInner({ children }: { children: ReactNode }) {
  return (
    <span className="btn-glossy-inner relative flex w-full items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap rounded-full bg-gradient-to-b from-[#fcfcfc] to-[#e4e4ea] px-sm py-xs sm:gap-2 sm:px-lg sm:py-sm">
      <span className="btn-texture pointer-events-none absolute inset-0 opacity-[0.08]" />
      <span className="relative z-10 text-center text-body-sm font-bold uppercase tracking-normal text-[#333] [text-shadow:0_1px_0_rgba(255,255,255,0.9)] sm:text-body-md sm:tracking-wide">
        {children}
      </span>
    </span>
  );
}

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
  const classes = cn(baseStyles, variantOuterStyles[variant], className);
  const content = variant === "primary" ? <GlossyInner>{children}</GlossyInner> : children;

  if (props.as === "link") {
    const { as: _as, ...linkProps } = props;
    return (
      <Link className={classes} {...linkProps}>
        {content}
      </Link>
    );
  }

  if (props.as === "a") {
    const { as: _as, ...anchorProps } = props;
    return (
      <a className={classes} {...anchorProps}>
        {content}
      </a>
    );
  }

  const { as: _as, ...buttonProps } = props as ButtonAsButtonProps;
  return (
    <button className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
