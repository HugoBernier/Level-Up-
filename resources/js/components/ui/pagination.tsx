import React from 'react';

type PaginationMeta = {
  prev_page_url: string | null;
  next_page_url: string | null;
};

export function InertiaPagination({ meta }: { meta: PaginationMeta }) {
  return (
    <div className="flex gap-2">
      {meta.prev_page_url && (
        <a href={meta.prev_page_url} className="px-3 py-1 bg-accent rounded">Précédent</a>
      )}
      {meta.next_page_url && (
        <a href={meta.next_page_url} className="px-3 py-1 bg-accent rounded">Suivant</a>
      )}
    </div>
  );
} 