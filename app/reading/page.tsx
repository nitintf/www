import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reading',
  description: 'Books Nitin has read or is currently reading.',
};

interface Book {
  title: string;
  author: string;
  url?: string;
  status: 'reading' | 'finished';
  note?: string;
}

const books: Book[] = [];

export default function ReadingPage() {
  return (
    <main className="flex flex-col" role="main" aria-label="Reading">
      <div className="w-full max-w-2xl mx-auto px-8 pt-5 pb-24 flex-1">
        <h1 className="sr-only">Reading — Nitin Panwar</h1>
        <header className="mb-12">
          <p className="text-ui-10 text-sm">
            Books I&apos;ve read or am currently reading.
          </p>
        </header>

        {books.length > 0 ? (
          <div className="space-y-1">
            {books.map((book) => (
              <div key={book.title} className="py-3 -mx-3 px-3 rounded-md">
                <div className="flex items-baseline justify-between gap-6">
                  <span className="text-ui-11 text-sm font-medium">
                    {book.url ? (
                      <a
                        href={book.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${book.title} by ${book.author}`}
                      >
                        {book.title}
                      </a>
                    ) : (
                      book.title
                    )}
                  </span>
                  <span className="text-ui-8 text-xs shrink-0">
                    {book.status === 'reading' ? 'reading' : 'finished'}
                  </span>
                </div>
                <p className="text-ui-10 text-xs mt-1 leading-relaxed">
                  {book.author}
                  {book.note && (
                    <>
                      <span aria-hidden="true"> — </span>
                      {book.note}
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-ui-10 text-sm italic">
            Nothing here yet. Probably still debugging the first draft.
          </p>
        )}
      </div>
    </main>
  );
}
