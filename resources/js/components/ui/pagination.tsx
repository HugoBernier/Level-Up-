import React from 'react';

export function InertiaPagination({ meta }: { meta: any }) {
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