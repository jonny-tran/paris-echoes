interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="label-archival">{number}</span>
      <span className="h-px w-12 bg-tertiary/60" />
      <span className="label-archival">{label}</span>
    </div>
  );
}
