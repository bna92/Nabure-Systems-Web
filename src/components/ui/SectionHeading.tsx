interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-sm ${alignment}`}>
      {eyebrow && (
        <span className="text-label-md font-bold uppercase tracking-widest text-secondary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-headline-md text-on-surface">{title}</h2>
      {description && (
        <p className="text-body-lg text-on-surface-variant">{description}</p>
      )}
    </div>
  );
}
