"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Clapperboard,
  Copy,
  Mail,
  Play,
  Volume2,
  VolumeX,
  Zap
} from "lucide-react";

const featuredVideos = [
  {
    title: "Kodak: O Futuro que Destruiu um Império",
    youtubeId: "pXXc9D6f8ik"
  },
  {
    title: "Create Your AI Clone",
    youtubeId: "Ae_NlQpOE_8"
  },
  {
    title: "Diana Gameplay: Agurin",
    youtubeId: "RchtjI7tmMo"
  },
  {
    title: "League of Legends Edit",
    youtubeId: "q8OcQeZ6SaU"
  },
  {
    title: "I'm 40: I Wasted My Life",
    youtubeId: "noiReS6ecTY"
  },
  {
    title: "Odontologia Hospitalar",
    youtubeId: "wW4sqQoD124"
  }
];

const shortVideos = [
  {
    title: "Lancheira Saudável",
    youtubeId: "EehuuC-DYEM"
  },
  {
    title: "Marvel Rivals",
    youtubeId: "4T6sZv_nz_Y"
  },
  {
    title: "Your Heroes Are Full of Shit",
    youtubeId: "LsHC1xAXc1M"
  },
  {
    title: "Iman Ghadzi Edit",
    youtubeId: "NKMlHVvfCO0"
  },
  {
    title: "Agurin Short",
    youtubeId: "O4NOYzLIfVA"
  },
  {
    title: "Criança e Pasta de Dente",
    youtubeId: "UQbpf2iJ_Vo"
  }
];

const services = [
  {
    title: "YouTube Editing",
    points: ["Storytelling", "Retention focused", "SFX"],
    icon: Clapperboard
  },
  {
    title: "Short Form Content",
    points: ["Shorts", "Reels", "TikTok"],
    icon: Play
  },
  {
    title: "Content Optimization",
    points: ["Hooks", "Pacing", "Audience retention"],
    icon: Zap
  }
];

const contacts = [
  {
    platform: "Twitter/X",
    value: "@editwithsant",
    href: "https://x.com/editwithsant",
    icon: XIcon
  },
  {
    platform: "Discord",
    value: "santiago.renan",
    href: "https://discord.com/users/688952710879248465",
    icon: DiscordIcon
  },
  {
    platform: "Email",
    value: "editwithsant@gmail.com",
    href: "mailto:editwithsant@gmail.com?subject=Projeto%20de%20edi%C3%A7%C3%A3o%20de%20v%C3%ADdeo",
    icon: Mail
  }
];

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 127.14 96.36"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.37-4.51-51.11-18.9-72.15ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.9 2h3.68l-8.04 9.18L24 22h-7.42l-5.81-7.6L4.12 22H.44l8.6-9.83L0 2h7.61l5.25 6.94L18.9 2Zm-1.29 18.1h2.04L6.5 3.8H4.31L17.61 20.1Z" />
    </svg>
  );
}

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="SANTIAGO home">
      <span className="grid h-12 w-12 place-items-center rounded-lg border border-white/15 bg-white/[0.06] shadow-neon transition group-hover:border-cobalt/60">
        <svg
          viewBox="0 0 64 64"
          className="h-9 w-9 overflow-visible"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M45 12C34 7 16 15 17 29c1 10 17 10 26 17 8 6-3 15-16 13-9-1-11-5-4-10 7-5 19-8 29-17"
            stroke="url(#santiagoLogoGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-[0_0_10px_rgba(19,167,255,0.75)]"
          />
          <path
            d="M45 12C34 7 16 15 17 29c1 10 17 10 26 17 8 6-3 15-16 13-9-1-11-5-4-10 7-5 19-8 29-17"
            stroke="white"
            strokeOpacity="0.18"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="santiagoLogoGradient" x1="14" y1="53" x2="51" y2="12" gradientUnits="userSpaceOnUse">
              <stop stopColor="#13A7FF" />
              <stop offset="0.55" stopColor="#8D4DFF" />
              <stop offset="1" stopColor="#E8F1FF" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block font-display text-sm font-semibold tracking-[0.18em] text-white">
          SANTIAGO
        </span>
        <span className="block text-xs text-white/58">Edit with Intent</span>
      </span>
    </a>
  );
}

function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        top: `${(index * 53) % 100}%`,
        delay: (index % 9) * 0.45,
        duration: 7 + (index % 6)
      })),
    []
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-cobalt/70 shadow-[0_0_18px_rgba(19,167,255,0.8)]"
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [-18, 18, -18], opacity: [0.15, 0.85, 0.15] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

function AmbientAudio() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [musicDucked, setMusicDucked] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [nodes, setNodes] = useState<{
    master: GainNode;
    oscillators: OscillatorNode[];
    noise: AudioBufferSourceNode;
    interval: number;
  } | null>(null);
  const musicBaseGain = 0.248;

  useEffect(() => {
    function hasAudibleVideo() {
      return Array.from(document.querySelectorAll("video")).some(
        (video) => !video.paused && !video.muted && video.volume > 0
      );
    }

    function syncMusicWithVideos() {
      if (!nodes || !audioContext) {
        return;
      }

      const shouldDuck = hasAudibleVideo();
      setMusicDucked(shouldDuck);
      nodes.master.gain.setTargetAtTime(
        shouldDuck ? 0 : musicBaseGain * volume,
        audioContext.currentTime,
        0.06
      );
    }

    document.addEventListener("play", syncMusicWithVideos, true);
    document.addEventListener("pause", syncMusicWithVideos, true);
    document.addEventListener("ended", syncMusicWithVideos, true);
    document.addEventListener("volumechange", syncMusicWithVideos, true);

    return () => {
      document.removeEventListener("play", syncMusicWithVideos, true);
      document.removeEventListener("pause", syncMusicWithVideos, true);
      document.removeEventListener("ended", syncMusicWithVideos, true);
      document.removeEventListener("volumechange", syncMusicWithVideos, true);
    };
  }, [audioContext, musicBaseGain, nodes, volume]);

  function createNoiseBuffer(context: AudioContext) {
    const buffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
    const data = buffer.getChannelData(0);

    for (let index = 0; index < data.length; index += 1) {
      data[index] = (Math.random() * 2 - 1) * 0.18;
    }

    return buffer;
  }

  async function startAmbient() {
    const context = audioContext ?? new AudioContext();
    if (context.state === "suspended") {
      await context.resume();
    }

    const master = context.createGain();
    const lowpass = context.createBiquadFilter();
    const delay = context.createDelay();
    const delayGain = context.createGain();
    const padNotes = [146.83, 174.61, 220, 277.18];

    const hasAudibleVideo = Array.from(document.querySelectorAll("video")).some(
      (video) => !video.paused && !video.muted && video.volume > 0
    );

    master.gain.value = hasAudibleVideo ? 0 : musicBaseGain * volume;
    setMusicDucked(hasAudibleVideo);
    lowpass.type = "lowpass";
    lowpass.frequency.value = 1750;
    delay.delayTime.value = 0.36;
    delayGain.gain.value = 0.18;

    lowpass.connect(delay);
    delay.connect(delayGain);
    delayGain.connect(lowpass);
    lowpass.connect(master);
    master.connect(context.destination);

    const oscillators = padNotes.map((frequency, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.type = index % 2 ? "triangle" : "sine";
      oscillator.frequency.value = frequency;
      gain.gain.value = index === 0 ? 0.035 : 0.018;
      oscillator.connect(gain);
      gain.connect(lowpass);
      oscillator.start();

      return oscillator;
    });

    const noise = context.createBufferSource();
    const noiseGain = context.createGain();
    const noiseFilter = context.createBiquadFilter();

    noise.buffer = createNoiseBuffer(context);
    noise.loop = true;
    noiseGain.gain.value = 0.03;
    noiseFilter.type = "lowpass";
    noiseFilter.frequency.value = 680;
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(lowpass);
    noise.start();

    const progression = [
      [220, 261.63, 329.63, 392],
      [196, 246.94, 293.66, 369.99],
      [174.61, 220, 261.63, 329.63],
      [146.83, 196, 233.08, 293.66]
    ];
    const bassLine = [110, 98, 87.31, 73.42];

    function playTone(
      frequency: number,
      duration: number,
      gainValue: number,
      type: OscillatorType,
      destination: AudioNode = lowpass
    ) {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const now = context.currentTime;

      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, now);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(gainValue, now + 0.018);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
      oscillator.connect(gain);
      gain.connect(destination);
      oscillator.start(now);
      oscillator.stop(now + duration + 0.04);
    }

    function playChord(chord: number[], accent = 1) {
      chord.forEach((frequency, noteIndex) => {
        window.setTimeout(() => {
          playTone(frequency, 0.42, 0.052 * accent, "triangle");
        }, noteIndex * 22);
      });
    }

    function playBass(frequency: number) {
      playTone(frequency, 0.32, 0.085, "sine", master);
    }

    function playKick() {
      const kick = context.createOscillator();
      const kickGain = context.createGain();
      const now = context.currentTime;

      kick.type = "sine";
      kick.frequency.setValueAtTime(82, now);
      kick.frequency.exponentialRampToValueAtTime(38, now + 0.16);
      kickGain.gain.setValueAtTime(0.18, now);
      kickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      kick.connect(kickGain);
      kickGain.connect(master);
      kick.start(now);
      kick.stop(now + 0.24);
    }

    function playRim() {
      const rim = context.createOscillator();
      const rimGain = context.createGain();
      const now = context.currentTime;

      rim.type = "triangle";
      rim.frequency.setValueAtTime(760, now);
      rimGain.gain.setValueAtTime(0.05, now);
      rimGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
      rim.connect(rimGain);
      rimGain.connect(master);
      rim.start(now);
      rim.stop(now + 0.08);
    }

    function playHat() {
      const hat = context.createBufferSource();
      const hatGain = context.createGain();
      const hatFilter = context.createBiquadFilter();
      const now = context.currentTime;

      hat.buffer = createNoiseBuffer(context);
      hatFilter.type = "highpass";
      hatFilter.frequency.value = 3800;
      hatGain.gain.setValueAtTime(0.052, now);
      hatGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      hat.connect(hatFilter);
      hatFilter.connect(hatGain);
      hatGain.connect(master);
      hat.start(now);
      hat.stop(now + 0.1);
    }

    let step = 0;
    const interval = window.setInterval(() => {
      const chordIndex = Math.floor(step / 4) % progression.length;

      if (step % 4 === 0) {
        playChord(progression[chordIndex], 1);
        playBass(bassLine[chordIndex]);
        playKick();
      }
      if (step % 4 === 2) {
        playChord(progression[chordIndex], 0.72);
      }
      if (step === 3 || step === 7 || step === 11 || step === 15) {
        playRim();
      }
      if ([1, 4, 6, 9, 12, 14].includes(step)) {
        playHat();
      }
      step = (step + 1) % 16;
    }, 285);

    setAudioContext(context);
    setNodes({ master, oscillators, noise, interval });
    setPlaying(true);
  }

  function stopAmbient() {
    if (!nodes) {
      return;
    }

    nodes.master.gain.setTargetAtTime(0, audioContext?.currentTime ?? 0, 0.08);
    window.clearInterval(nodes.interval);
    window.setTimeout(() => {
      nodes.oscillators.forEach((oscillator) => oscillator.stop());
      nodes.noise.stop();
      nodes.master.disconnect();
    }, 180);
    setNodes(null);
    setPlaying(false);
    setMusicDucked(false);
  }

  function updateVolume(value: number) {
    setVolume(value);
    if (nodes && audioContext) {
      nodes.master.gain.setTargetAtTime(
        musicDucked ? 0 : musicBaseGain * value,
        audioContext.currentTime,
        0.04
      );
    }
  }

  return (
    <div className="group fixed bottom-3 right-3 z-50 rounded-lg border border-white/12 bg-[#050812]/78 px-3 py-2 text-[11px] font-semibold text-white/72 shadow-glass backdrop-blur-xl transition hover:border-cobalt/50 hover:text-white sm:bottom-4 sm:right-4">
      <button
        type="button"
        onClick={() => {
          if (playing) {
            stopAmbient();
          } else {
            startAmbient();
          }
        }}
        className="inline-flex items-center gap-1.5"
        aria-label={playing ? "Turn music off" : "Turn music on"}
      >
        {playing ? <Volume2 className="h-3.5 w-3.5 text-cobalt" /> : <VolumeX className="h-3.5 w-3.5 text-cobalt" />}
        Music
      </button>
      <div className="grid max-h-0 overflow-hidden transition-all duration-200 group-hover:max-h-12">
        <label className="mt-2 flex items-center gap-2 text-[10px] text-white/55">
          <span>Vol</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(event) => updateVolume(Number(event.target.value))}
            className="h-1 w-24 accent-cobalt"
            aria-label="Music volume"
          />
        </label>
      </div>
    </div>
  );
}

function FloatingTimelineElements() {
  const items = [
    { label: "KEYFRAME", type: "keyframe", className: "-left-[24%] -top-[10%] rotate-[-9deg]" },
    { label: "PLAYHEAD 00:42", type: "playhead", className: "-right-[48%] top-[18%] rotate-[8deg]" },
    { label: "AUDIO WAVE", type: "audio", className: "-left-[48%] bottom-[30%] rotate-[0deg]" },
    { label: "B-ROLL CLIP", type: "broll", className: "-right-[50%] bottom-[12%] rotate-[-8deg]" }
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          className={`glass absolute rounded-lg px-4 py-3 ${item.className}`}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="mb-2 flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-cobalt shadow-[0_0_16px_rgba(19,167,255,1)]" />
            {item.label}
          </div>
          {item.type === "keyframe" ? (
            <div className="relative h-10 w-40 overflow-hidden rounded-md border border-white/10 bg-black/25 px-3 py-2">
              <svg
                viewBox="0 0 150 36"
                className="h-full w-full overflow-visible text-cobalt"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 28 C26 28 28 8 48 8 S74 28 96 18 S120 7 146 7"
                  stroke="url(#keyframeCurve)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                {[4, 48, 96, 146].map((x, pointIndex) => (
                  <rect
                    key={x}
                    x={x - 3.5}
                    y={[28, 8, 18, 7][pointIndex] - 3.5}
                    width="7"
                    height="7"
                    rx="1"
                    transform={`rotate(45 ${x} ${[28, 8, 18, 7][pointIndex]})`}
                    fill={pointIndex % 2 ? "#8D4DFF" : "#13A7FF"}
                  />
                ))}
                <path d="M0 34H150" stroke="white" strokeOpacity=".12" />
                <path d="M0 18H150" stroke="white" strokeOpacity=".08" />
                <defs>
                  <linearGradient id="keyframeCurve" x1="4" y1="28" x2="146" y2="7" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#13A7FF" />
                    <stop offset="1" stopColor="#8D4DFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          ) : item.type === "playhead" ? (
            <div className="relative h-10 w-40 overflow-hidden rounded-md border border-white/10 bg-black/25 px-3 py-2">
              <div className="absolute inset-x-3 top-1/2 h-px bg-white/14" />
              <div className="absolute left-[48%] top-1 bottom-1 w-px bg-cobalt shadow-[0_0_14px_rgba(19,167,255,1)]">
                <span className="absolute -left-[5px] -top-1 h-3 w-3 rotate-45 rounded-sm bg-cobalt" />
              </div>
              <div className="grid h-full grid-cols-6 items-center gap-1">
                {Array.from({ length: 6 }).map((_, marker) => (
                  <span key={marker} className="h-5 rounded-sm border border-white/10 bg-white/[0.055]">
                    <span className="block h-full rounded-sm bg-gradient-to-r from-cobalt/35 to-violet/35" />
                  </span>
                ))}
              </div>
              <span className="absolute bottom-1 right-2 font-mono text-[8px] text-cobalt/90">00:42</span>
            </div>
          ) : item.type === "broll" ? (
            <div className="relative h-10 w-40 overflow-hidden rounded-md border border-white/10 bg-black/25 px-3 py-2">
              <div className="grid h-full grid-cols-[1.2fr_0.85fr_1fr] gap-1.5">
                {[
                  "from-cobalt/70 to-[#0a2b55]",
                  "from-violet/70 to-[#1d1242]",
                  "from-cobalt/55 to-violet/55"
                ].map((gradient, clip) => (
                  <span
                    key={gradient}
                    className={`relative overflow-hidden rounded-sm bg-gradient-to-br ${gradient}`}
                  >
                    <span className="absolute inset-x-1 top-1 h-2 rounded-sm bg-white/16" />
                    <span className="absolute bottom-1 left-1 right-1 h-1 rounded-full bg-black/30" />
                    {clip === 1 ? (
                      <span className="absolute inset-0 grid place-items-center">
                        <Play className="h-3.5 w-3.5 fill-white/75 text-white/75" />
                      </span>
                    ) : null}
                  </span>
                ))}
              </div>
              <div className="absolute inset-y-2 left-[43%] w-px bg-white/25" />
              <div className="absolute inset-y-2 left-[68%] w-px bg-white/25" />
            </div>
          ) : (
            <div className="flex h-8 w-36 items-end gap-1">
              {Array.from({ length: 18 }).map((_, bar) => (
                <span
                  key={bar}
                  className="w-1 rounded-full bg-gradient-to-t from-violet to-cobalt"
                  style={{ height: `${22 + ((bar * 17 + index) % 46)}%` }}
                />
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden px-5 pb-20 pt-6 sm:px-8">
      <ParticleField />
      <div className="mx-auto flex max-w-7xl items-center justify-between py-2">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm text-white/64 md:flex">
          {[
            { label: "About", href: "#about" },
            { label: "Vídeos", href: "#work" },
            { label: "Shorts", href: "#shorts" },
            { label: "Services", href: "#services" },
            { label: "Contact", href: "#contact" }
          ].map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 pt-16 lg:grid-cols-[1fr_0.9fr] lg:pt-20">
        <div className="relative z-10">
          <h1 className="neon-text max-w-4xl font-display text-5xl font-bold leading-[0.96] text-white sm:text-7xl lg:text-8xl">
            Helping Creators Turn Attention Into Growth
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Professional Video Editor specialized in YouTube content, Shorts, Reels,
            and high-retention storytelling.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#work"
              className="magnetic inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cobalt to-violet px-6 py-4 font-semibold text-white shadow-neon"
            >
              View My Work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="magnetic inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-6 py-4 font-semibold text-white hover:border-cobalt/50"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative isolate mx-auto aspect-square w-full max-w-[540px]">
          <FloatingTimelineElements />
          <motion.div
            className="absolute inset-[7%] z-20 rounded-full border border-cobalt/55 shadow-[0_0_58px_rgba(19,167,255,0.5),0_0_110px_rgba(141,77,255,0.38)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-[2%] z-20 rounded-full border border-violet/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-[8%] z-30 overflow-hidden rounded-full border border-white/15 bg-[#03040b] shadow-glass">
            <Image
              src="/profile-photo.png"
              alt="SANTIAGO profile visual"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const specialties = [
    "YouTube Videos",
    "Shorts",
    "Reels",
    "Hooks",
    "Storytelling Editing",
    "Pacing",
    "Retention Editing",
    "SFX"
  ];

  return (
    <section id="about" className="px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <h2 className="font-display text-4xl font-bold text-white sm:text-6xl">
            Editorial taste meets retention strategy.
          </h2>
        </div>
        <div className="glass rounded-lg p-6 sm:p-8">
          <p className="text-lg leading-8 text-white/72">
            Professional video editor focused on creating engaging content that
            increases retention and audience engagement.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
            {specialties.map((item) => (
              <span
                key={item}
                className="inline-flex h-14 w-full items-center justify-center rounded-full border border-white/12 bg-white/[0.055] px-4 py-2 text-center text-sm leading-tight text-white/76"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ParabolicCarousel() {
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [phase, setPhase] = useState(0);
  const videos = featuredVideos;

  useEffect(() => {
    if (paused) {
      return;
    }

    let frame = 0;
    let lastTime = performance.now();

    function loop(time: number) {
      const delta = (time - lastTime) / 1000;
      lastTime = time;
      setPhase((current) => (current + delta * 0.011) % 1);
      frame = requestAnimationFrame(loop);
    }

    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [paused]);

  return (
    <section id="work" className="overflow-hidden px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl font-bold text-white sm:text-6xl">
              Long-Form YouTube Edits
            </h2>
          </div>
        </div>
        <div className="relative h-[620px] overflow-hidden rounded-lg border border-white/10 bg-black/20 timeline-scan">
          <div aria-hidden="true" className="absolute left-1/2 top-[86%] h-[820px] w-[1420px] -translate-x-1/2 rounded-full border border-cobalt/20 shadow-[0_0_60px_rgba(19,167,255,0.08)]" />
          <div aria-hidden="true" className="absolute left-1/2 top-[92%] h-[660px] w-[1180px] -translate-x-1/2 rounded-full border border-violet/20" />
          <div aria-hidden="true" className="absolute left-1/2 top-[96%] h-16 w-16 -translate-x-1/2 rounded-full bg-cobalt/20 blur-2xl" />
          <div className="absolute inset-0 [mask-image:linear-gradient(90deg,transparent_0%,black_12%,black_88%,transparent_100%)]">
            {videos.map((video, index) => {
              const progress = (index / videos.length + phase) % 1;
              const angle = Math.PI + progress * Math.PI;
              const arcStrength = Math.sin(progress * Math.PI);
              const edgeFade = Math.min(1, Math.max(0, Math.min(progress / 0.14, (1 - progress) / 0.14)));
              const x = Math.cos(angle) * 840;
              const y = -arcStrength * 245 + (1 - edgeFade) * 42;
              const scale = 0.82 + arcStrength * 0.16;
              const opacity = (0.58 + arcStrength * 0.42) * edgeFade;
              const rotate = (progress - 0.5) * 12;
              const id = `${video.title}-${index}`;
              return (
                <motion.div
                  key={id}
                  onMouseEnter={() => {
                    setPaused(true);
                    setActive(id);
                  }}
                  onMouseLeave={() => {
                    setPaused(false);
                    setActive(null);
                  }}
                  className="absolute left-1/2 top-[445px]"
                  style={{
                    x,
                    y,
                    opacity,
                    zIndex: Math.round(arcStrength * 20)
                  }}
                  whileHover={{ scale: 1.08, zIndex: 40 }}
                >
                  <motion.article
                    className="group w-[380px] -translate-x-1/2 overflow-hidden rounded-lg border border-white/12 bg-white/[0.05] shadow-glass"
                    style={{ rotate, scale }}
                  >
                    <iframe
                      className="aspect-video h-full w-full opacity-85 transition group-hover:opacity-100"
                      src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1&playsinline=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </motion.article>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Shorts() {
  return (
    <section id="shorts" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-display text-4xl font-bold text-white sm:text-6xl">
            High-retention short-form editing for maximum engagement.
          </h2>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shortVideos.map((video) => (
            <motion.article
              key={video.title}
              className="group relative overflow-hidden rounded-lg border border-white/12 bg-white/[0.045] shadow-glass"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <iframe
                className="aspect-[9/16] w-full opacity-75 transition group-hover:opacity-100"
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${video.youtubeId}&controls=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-3xl font-display text-4xl font-bold text-white sm:text-6xl">
          Editing systems for creators who publish with intent.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                className="glass rounded-lg p-7"
                whileHover={{ y: -8 }}
              >
                <div className="mb-8 grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br from-cobalt to-violet shadow-neon">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
                <ul className="mt-5 space-y-3 text-white/66">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-cobalt" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [copyBlocked, setCopyBlocked] = useState<string | null>(null);

  function fallbackCopy(value: string) {
    const textArea = document.createElement("textarea");
    textArea.value = value;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      return document.execCommand("copy");
    } finally {
      document.body.removeChild(textArea);
    }
  }

  async function copyValue(value: string) {
    try {
      try {
        await navigator.clipboard?.writeText(value);
      } catch {
        const copiedWithFallback = fallbackCopy(value);
        if (!copiedWithFallback) {
          throw new Error("Copy blocked");
        }
      }

      setCopied(value);
      setCopyBlocked(null);
      window.setTimeout(() => setCopied(null), 1500);
    } catch {
      setCopied(null);
      setCopyBlocked(value);
      window.setTimeout(() => setCopyBlocked(null), 1800);
    }
  }

  function openContact(href: string) {
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <h2 className="font-display text-5xl font-bold text-white sm:text-7xl">
              Let&apos;s Work Together
            </h2>
          </div>
          <div className="grid gap-4">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <div
                  key={contact.platform}
                  onClick={() => openContact(contact.href)}
                  className="glass group flex cursor-pointer flex-col gap-4 rounded-lg p-5 transition hover:border-cobalt/45 hover:shadow-neon sm:flex-row sm:items-center sm:justify-between"
                >
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-w-0 items-center gap-4"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white/[0.07] text-cobalt">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-white/52">{contact.platform}</span>
                      <span className="block break-words font-display text-xl font-semibold">
                        {contact.value}
                      </span>
                    </span>
                  </a>
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      copyValue(contact.value);
                    }}
                    className="magnetic inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/[0.045] px-4 py-3 text-sm font-semibold text-white"
                    aria-label={`Copy ${contact.platform}`}
                  >
                    {copied === contact.value ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied === contact.value ? "Copied" : copyBlocked === contact.value ? "Blocked" : "Copy"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-white/54">Video Editor | Content Creator</p>
        </div>
        <div className="flex gap-3">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.platform}
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                aria-label={contact.platform}
                className="grid h-11 w-11 place-items-center rounded-lg border border-white/12 bg-white/[0.045] text-white/72 transition hover:border-cobalt/50 hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="noise relative">
      <AmbientAudio />
      <div className="relative z-10">
        <Hero />
        <About />
        <ParabolicCarousel />
        <Shorts />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
