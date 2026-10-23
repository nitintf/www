export const CARD_SIZE = { width: 296, height: 380 };
export const CARD_GAP = 10;
export const VIEWPORT_GUTTER = 16;

// Hover intent, so passing over the word doesn't flash the card.
export const OPEN_DELAY_MS = 120;
export const CLOSE_DELAY_MS = 160;

// The border draws first; state lines and rivers fade in partway through.
export const BORDER_DRAW_S = 1.2;
export const DETAIL_DELAY_S = 0.5;
export const DETAIL_FADE_S = 0.45;

// One wave leaves the pin, grows and fades, then the pin rests.
export const PIN_WAVE = { duration: 2.6, rest: 0.8, scale: 3.2, opacity: 0.5 };
