import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, PointerEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Disc = {
  id: string;
  artist: string;
  track: string;
  mood: string;
  x: number;
  y: number;
  size: number;
  colorA: string;
  colorB: string;
  accent: string;
  notes: number[];
  identity?: boolean;
};

type AudioRuntime = {
  context: AudioContext;
  gain: GainNode;
  oscillators: OscillatorNode[];
  intervalId: number;
  timeoutId?: number;
};

type DragState = {
  pointerId: number;
  startX: number;
  startY: number;
  offsetX: number;
  offsetY: number;
  moved: boolean;
};

const TILE_WIDTH = 1080;
const TILE_HEIGHT = 700;
const REPEATS = [-2, -1, 0, 1, 2];

const discs: Disc[] = [
  {
    id: 'kuldeep',
    artist: 'Kuldeep Singh',
    track: 'Applied AI Engineer',
    mood: 'deterministic systems',
    x: 70,
    y: 44,
    size: 180,
    colorA: '#ff3b17',
    colorB: '#d9ff3f',
    accent: '#111111',
    notes: [196, 247, 294, 370],
    identity: true
  },
  {
    id: 'joji',
    artist: 'Joji',
    track: 'Glimpse of Us',
    mood: 'soft static, late night',
    x: 430,
    y: 95,
    size: 210,
    colorA: '#2d3a6f',
    colorB: '#e4d2c4',
    accent: '#ff6f91',
    notes: [174.61, 220, 261.63, 329.63]
  },
  {
    id: 'radiohead',
    artist: 'Radiohead',
    track: 'Weird Fishes',
    mood: 'fractured rhythm, green glow',
    x: 620,
    y: 390,
    size: 235,
    colorA: '#d9ff3f',
    colorB: '#233021',
    accent: '#ff3b17',
    notes: [164.81, 207.65, 246.94, 329.63]
  },
  {
    id: 'frank',
    artist: 'Frank Ocean',
    track: 'Pink + White',
    mood: 'warm chords, sunset grain',
    x: 965,
    y: 360,
    size: 205,
    colorA: '#ffb4a2',
    colorB: '#9ed0ff',
    accent: '#fff7df',
    notes: [185, 233.08, 277.18, 349.23]
  },
  {
    id: 'marias',
    artist: 'The Marias',
    track: 'No One Noticed',
    mood: 'dream pop, velvet synth',
    x: 820,
    y: 610,
    size: 195,
    colorA: '#c7b6ff',
    colorB: '#ff6da8',
    accent: '#2b1738',
    notes: [207.65, 261.63, 311.13, 392]
  }
];

const wrapOffset = (value: number, size: number) => {
  const half = size / 2;
  return ((((value + half) % size) + size) % size) - half;
};

const clampWheelDelta = (value: number) => Math.max(-90, Math.min(90, value));

const getEdgeStrength = (value: number) => {
  const edgeStart = 0.31;
  const distance = Math.abs(value);

  if (distance < edgeStart) {
    return 0;
  }

  return Math.sign(value) * Math.min(1, (distance - edgeStart) / (0.5 - edgeStart));
};

const getAudioContext = () => {
  const AudioContextConstructor =
    window.AudioContext ??
    (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

  return AudioContextConstructor ? new AudioContextConstructor() : null;
};

const InteractiveSignalGarden = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [pointer, setPointer] = useState({ x: 0, y: 0, active: false });
  const [activeDisc, setActiveDisc] = useState<Disc>(discs[0]);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<AudioRuntime | null>(null);
  const dragRef = useRef<DragState | null>(null);
  const planeRef = useRef<HTMLElement | null>(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const reduceMotion = useReducedMotion();

  const repeatedDiscs = useMemo(
    () =>
      REPEATS.flatMap((repeatX) =>
        REPEATS.flatMap((repeatY) =>
          discs.map((disc) => ({
            ...disc,
            instanceId: `${disc.id}-${repeatX}-${repeatY}`,
            left: TILE_WIDTH * 2 + repeatX * TILE_WIDTH + disc.x,
            top: TILE_HEIGHT * 2 + repeatY * TILE_HEIGHT + disc.y
          }))
        )
      ),
    []
  );

  const stopLoop = useCallback(() => {
    const runtime = audioRef.current;

    if (!runtime) {
      return;
    }

    window.clearInterval(runtime.intervalId);
    if (runtime.timeoutId) {
      window.clearTimeout(runtime.timeoutId);
    }

    const now = runtime.context.currentTime;
    runtime.gain.gain.cancelScheduledValues(now);
    runtime.gain.gain.setTargetAtTime(0, now, 0.03);

    runtime.timeoutId = window.setTimeout(() => {
      runtime.oscillators.forEach((oscillator) => {
        oscillator.stop();
        oscillator.disconnect();
      });
      runtime.gain.disconnect();
      void runtime.context.close();
    }, 180);

    audioRef.current = null;
    setPlayingId(null);
  }, []);

  const playDisc = useCallback(
    async (disc: Disc) => {
      if (playingId === disc.id) {
        stopLoop();
        return;
      }

      stopLoop();

      const context = getAudioContext();

      if (!context) {
        return;
      }

      await context.resume();

      const gain = context.createGain();
      gain.gain.setValueAtTime(0, context.currentTime);
      gain.gain.linearRampToValueAtTime(0.055, context.currentTime + 0.18);
      gain.connect(context.destination);

      const oscillators = ['sine', 'triangle'].map((type, index) => {
        const oscillator = context.createOscillator();
        oscillator.type = type as OscillatorType;
        oscillator.frequency.setValueAtTime(disc.notes[index] ?? disc.notes[0], context.currentTime);
        oscillator.detune.setValueAtTime(index === 0 ? -6 : 8, context.currentTime);
        oscillator.connect(gain);
        oscillator.start();
        return oscillator;
      });

      let step = 0;
      const intervalId = window.setInterval(() => {
        const note = disc.notes[step % disc.notes.length];
        const now = context.currentTime;
        oscillators[0].frequency.exponentialRampToValueAtTime(note, now + 0.12);
        oscillators[1].frequency.exponentialRampToValueAtTime(note * 1.5, now + 0.16);
        step += 1;
      }, 430);

      audioRef.current = { context, gain, oscillators, intervalId };
      setPlayingId(disc.id);
    },
    [playingId, stopLoop]
  );

  useEffect(() => stopLoop, [stopLoop]);

  useEffect(() => {
    const plane = planeRef.current;

    if (!plane) {
      return undefined;
    }

    const velocity = { x: 0, y: 0 };
    let frameId: number | null = null;

    const tick = () => {
      if (Math.abs(velocity.x) < 0.08 && Math.abs(velocity.y) < 0.08) {
        frameId = null;
        velocity.x = 0;
        velocity.y = 0;
        return;
      }

      setOffset((current) => ({
        x: current.x - velocity.x,
        y: current.y - velocity.y
      }));

      velocity.x *= 0.84;
      velocity.y *= 0.84;
      frameId = window.requestAnimationFrame(tick);
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      const deltaModeMultiplier = event.deltaMode === 1 ? 18 : 1;
      velocity.x += clampWheelDelta(event.deltaX * deltaModeMultiplier);
      velocity.y += clampWheelDelta(event.deltaY * deltaModeMultiplier);

      if (frameId === null) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    plane.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      plane.removeEventListener('wheel', handleWheel);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    let frameId: number;
    let previousTime = performance.now();

    const tick = (time: number) => {
      const elapsedSeconds = Math.min(0.05, (time - previousTime) / 1000);
      previousTime = time;

      const currentPointer = pointerRef.current;

      if (currentPointer.active && !dragRef.current) {
        const strengthX = getEdgeStrength(currentPointer.x);
        const strengthY = getEdgeStrength(currentPointer.y);

        if (strengthX !== 0 || strengthY !== 0) {
          const speed = 430;

          setOffset((current) => ({
            x: current.x - strengthX * speed * elapsedSeconds,
            y: current.y - strengthY * speed * elapsedSeconds
          }));
        }
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [reduceMotion]);

  const updatePointer = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    const nextPointer = {
      x: (event.clientX - bounds.left) / bounds.width - 0.5,
      y: (event.clientY - bounds.top) / bounds.height - 0.5,
      active: true
    };

    pointerRef.current = nextPointer;
    setPointer(nextPointer);
  };

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      offsetX: offset.x,
      offsetY: offset.y,
      moved: false
    };
  };

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    updatePointer(event);

    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) {
      return;
    }

    const nextX = drag.offsetX + event.clientX - drag.startX;
    const nextY = drag.offsetY + event.clientY - drag.startY;
    drag.moved = Math.abs(nextX - drag.offsetX) + Math.abs(nextY - drag.offsetY) > 8;
    setOffset({ x: nextX, y: nextY });
  };

  const handlePointerUp = (event: PointerEvent<HTMLElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    window.setTimeout(() => {
      dragRef.current = null;
    }, 0);
  };

  const wrappedX = wrapOffset(offset.x, TILE_WIDTH);
  const wrappedY = wrapOffset(offset.y, TILE_HEIGHT);

  return (
    <section
      ref={planeRef}
      className="vinyl-plane relative min-h-[620px] overflow-hidden rounded-[2rem] border-2 border-gray-950 bg-[#fbfaf4] shadow-[12px_12px_0_rgba(17,17,17,0.14)] dark:border-white/15 dark:bg-[#f7f3ea] dark:text-gray-950 dark:shadow-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={(event) => {
        handlePointerUp(event);
        pointerRef.current = { ...pointerRef.current, active: false };
        setPointer((current) => ({ ...current, active: false }));
      }}
      data-cursor-hover
    >
      <div className="vinyl-name-tag">
        <p className="abstract-mono text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Kuldeep Singh</p>
        <h1 className="mt-3 max-w-xl text-5xl font-extrabold leading-[0.9] tracking-tight text-gray-950 sm:text-6xl md:text-7xl">
          Applied AI Engineer
        </h1>
      </div>

      <motion.div
        className="vinyl-plane-board"
        animate={
          reduceMotion
            ? { x: wrappedX, y: wrappedY }
            : {
                x: wrappedX + (pointer.active ? pointer.x * -18 : 0),
                y: wrappedY + (pointer.active ? pointer.y * -14 : 0)
              }
        }
        transition={{ type: 'spring', stiffness: 80, damping: 24 }}
      >
        {repeatedDiscs.map((disc, index) => {
          const isPlaying = playingId === disc.id;

          return (
            <motion.article
              key={disc.instanceId}
              className={`vinyl-card absolute ${disc.identity ? 'vinyl-card-identity' : ''}`}
              style={{
                left: disc.left,
                top: disc.top,
                width: disc.size + 64
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: reduceMotion ? 0 : [0, index % 2 === 0 ? -8 : 8, 0] }}
              transition={{
                opacity: { delay: Math.min(index * 0.015, 0.45), duration: 0.25 },
                y: { duration: 7 + (index % 5), repeat: Infinity, ease: 'easeInOut' }
              }}
              onPointerEnter={() => setActiveDisc(disc)}
              onFocus={() => setActiveDisc(disc)}
            >
              <button
                type="button"
                className={`vinyl-disc ${isPlaying ? 'vinyl-disc-playing' : ''}`}
                style={{
                  width: disc.size,
                  height: disc.size,
                  '--disc-a': disc.colorA,
                  '--disc-b': disc.colorB,
                  '--disc-accent': disc.accent
                } as CSSProperties}
                aria-label={`${isPlaying ? 'Pause' : 'Play'} ${disc.artist} inspired loop`}
                onClick={(event) => {
                  event.stopPropagation();
                  if (dragRef.current?.moved) {
                    return;
                  }
                  setActiveDisc(disc);
                  void playDisc(disc);
                }}
                data-cursor-hover
              >
                <span className="vinyl-cover">
                  <span>{disc.identity ? 'KS' : disc.artist.slice(0, 2).toUpperCase()}</span>
                </span>
                <span className="vinyl-hole" />
              </button>

              <div className="vinyl-copy">
                <p className="abstract-mono text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500">
                  {isPlaying ? 'Playing loop' : 'Tap disc'}
                </p>
                <h2>{disc.artist}</h2>
                <p>{disc.track}</p>
                <span>{disc.mood}</span>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      <div className="vinyl-status">
        <p className="abstract-mono text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
          {playingId ? 'Now playing' : ""}
        </p>
        <p>{activeDisc.artist}</p>
        <span>{activeDisc.track}</span>
      </div>
    </section>
  );
};

export default InteractiveSignalGarden;
