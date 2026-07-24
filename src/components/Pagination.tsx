import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-14">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        aria-label="Previous page"
        className="w-9 h-9 rounded-full flex items-center justify-center text-iudpr-fg border border-iudpr-fg/10 hover:border-iudpr-accent/40 disabled:opacity-30 disabled:pointer-events-none transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-current={n === page ? "page" : undefined}
          className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
            n === page
              ? "bg-iudpr-accent-solid text-white"
              : "text-iudpr-fg hover:bg-iudpr-fg/5"
          }`}
        >
          {n}
        </button>
      ))}

      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        aria-label="Next page"
        className="w-9 h-9 rounded-full flex items-center justify-center text-iudpr-fg border border-iudpr-fg/10 hover:border-iudpr-accent/40 disabled:opacity-30 disabled:pointer-events-none transition-colors"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
