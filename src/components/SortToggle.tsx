import type { SortOrder } from "@/hooks/useTagFilter";

export function SortToggle({
  sortOrder,
  onChange,
}: {
  sortOrder: SortOrder;
  onChange: (order: SortOrder) => void;
}) {
  return (
    <div className="inline-flex items-center bg-iudpr-surface border border-iudpr-fg/10 rounded-full p-1 text-sm">
      {(["newest", "oldest"] as const).map((order) => (
        <button
          key={order}
          type="button"
          onClick={() => onChange(order)}
          className={`px-4 py-1.5 rounded-full font-medium capitalize transition-colors ${
            sortOrder === order
              ? "bg-iudpr-accent-solid text-white"
              : "text-iudpr-muted hover:text-iudpr-fg"
          }`}
        >
          {order}
        </button>
      ))}
    </div>
  );
}
