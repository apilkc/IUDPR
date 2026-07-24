export function TagFilter({
  tags,
  activeTag,
  onChange,
}: {
  tags: string[];
  activeTag: string;
  onChange: (tag: string) => void;
}) {
  if (tags.length <= 2) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onChange(tag)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTag === tag
              ? "bg-iudpr-accent-solid text-white"
              : "bg-iudpr-surface border border-iudpr-fg/10 text-iudpr-fg hover:border-iudpr-accent/40"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
