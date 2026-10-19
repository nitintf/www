let context: AudioContext | null = null;

// A soft, short tick made on the fly. `on` is a touch higher, like a
// switch going down.
export function playClick(on: boolean) {
  try {
    context ??= new AudioContext();
    const ctx = context;
    const now = ctx.currentTime;

    const length = Math.floor(ctx.sampleRate * 0.012);
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / length) ** 4;
    }

    const tick = ctx.createBufferSource();
    tick.buffer = buffer;
    const tone = ctx.createBiquadFilter();
    tone.type = 'bandpass';
    tone.frequency.value = on ? 4200 : 3600;
    tone.Q.value = 2;
    const volume = ctx.createGain();
    volume.gain.value = 0.06;

    tick.connect(tone).connect(volume).connect(ctx.destination);
    tick.start(now);
  } catch {}
}
