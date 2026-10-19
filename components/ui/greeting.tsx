const GREETINGS = [
  { word: 'hello', lang: 'en' },
  { word: 'नमस्ते', lang: 'hi' },
  { word: 'こんにちは', lang: 'ja' },
];

export function Greeting() {
  return (
    <p className="pb-3 text-base text-muted">
      {GREETINGS.map(({ word, lang }, i) => (
        <span key={lang} lang={lang}>
          {word}
          {i < GREETINGS.length - 1 && ', '}
        </span>
      ))}
    </p>
  );
}
