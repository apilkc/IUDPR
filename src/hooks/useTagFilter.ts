import { useMemo, useState } from "react";

const PAGE_SIZE = 6;
const ALL = "All";

export type SortOrder = "newest" | "oldest";

export function useTagFilter<T>(
  items: T[],
  getTag: (item: T) => string,
  getDate: (item: T) => string,
) {
  const [activeTag, setActiveTagState] = useState<string>(ALL);
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [page, setPage] = useState(1);

  const tags = useMemo(
    () => [ALL, ...Array.from(new Set(items.map(getTag)))],
    [items, getTag],
  );

  const filtered = useMemo(() => {
    const base =
      activeTag === ALL ? items : items.filter((item) => getTag(item) === activeTag);
    const sorted = [...base].sort((a, b) => getDate(a).localeCompare(getDate(b)));
    return sortOrder === "newest" ? sorted.reverse() : sorted;
  }, [items, activeTag, getTag, getDate, sortOrder]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  function setActiveTag(tag: string) {
    setActiveTagState(tag);
    setPage(1);
  }

  function changeSortOrder(order: SortOrder) {
    setSortOrder(order);
    setPage(1);
  }

  return {
    tags,
    activeTag,
    setActiveTag,
    sortOrder,
    setSortOrder: changeSortOrder,
    page: currentPage,
    setPage,
    totalPages,
    pageItems,
  };
}
