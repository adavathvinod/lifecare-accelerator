import React from "react";

interface IconProps {
  className?: string;
}

export const HeartPlusIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="currentColor"
      fillOpacity="0.2"
    />
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12 7v6M9 10h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const BrainIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 4c-1.5 0-2.8.5-3.8 1.3C7.2 4.5 6 4 4.8 4.5c-1.5.6-2.3 2-2.3 3.5 0 1 .3 2 .8 2.8-.5.8-.8 1.8-.8 2.7 0 2.5 2 4.5 4.5 4.5.5 0 1-.1 1.5-.2.8 1.3 2.2 2.2 3.8 2.2s3-.9 3.8-2.2c.5.1 1 .2 1.5.2 2.5 0 4.5-2 4.5-4.5 0-.9-.3-1.9-.8-2.7.5-.8.8-1.8.8-2.8 0-1.5-.8-2.9-2.3-3.5-1.2-.5-2.4 0-3.4.8C15.4 4.5 13.5 4 12 4z"
      fill="currentColor"
      fillOpacity="0.2"
    />
    <path
      d="M12 4c-1.5 0-2.8.5-3.8 1.3C7.2 4.5 6 4 4.8 4.5c-1.5.6-2.3 2-2.3 3.5 0 1 .3 2 .8 2.8-.5.8-.8 1.8-.8 2.7 0 2.5 2 4.5 4.5 4.5.5 0 1-.1 1.5-.2.8 1.3 2.2 2.2 3.8 2.2s3-.9 3.8-2.2c.5.1 1 .2 1.5.2 2.5 0 4.5-2 4.5-4.5 0-.9-.3-1.9-.8-2.7.5-.8.8-1.8.8-2.8 0-1.5-.8-2.9-2.3-3.5-1.2-.5-2.4 0-3.4.8C15.4 4.5 13.5 4 12 4z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M12 4v16M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const BoneIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.5 3.5c-1.1-1.1-2.9-1.1-4 0-.7.7-.9 1.7-.7 2.6L7.6 12.3c-.9-.2-1.9 0-2.6.7-1.1 1.1-1.1 2.9 0 4s2.9 1.1 4 0c.4-.4.7-.9.8-1.4.1-.5.1-1-.1-1.5l6.2-6.2c.5.2 1 .2 1.5.1.5-.1 1-.4 1.4-.8 1.1-1.1 1.1-2.9-.3-3.7z"
      fill="currentColor"
      fillOpacity="0.2"
    />
    <path
      d="M18.5 3.5c-1.1-1.1-2.9-1.1-4 0-.7.7-.9 1.7-.7 2.6L7.6 12.3c-.9-.2-1.9 0-2.6.7-1.1 1.1-1.1 2.9 0 4s2.9 1.1 4 0c.4-.4.7-.9.8-1.4.1-.5.1-1-.1-1.5l6.2-6.2c.5.2 1 .2 1.5.1.5-.1 1-.4 1.4-.8 1.1-1.1 1.1-2.9-.3-3.7z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="6" cy="6" r="1.5" fill="currentColor" />
    <circle cx="18" cy="18" r="1.5" fill="currentColor" />
  </svg>
);

export const BabyIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="10" r="6" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="10" cy="9" r="1" fill="currentColor" />
    <circle cx="14" cy="9" r="1" fill="currentColor" />
    <path d="M10 12c.5.5 1.5 1 2 1s1.5-.5 2-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 16c.5 2 1.5 4 3 4s2.5-2 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6.5 8c-1-.5-2-1-2-2s1-2 2-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17.5 8c1-.5 2-1 2-2s-1-2-2-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const DropletIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2.69l.66.73c2.34 2.58 4.84 5.77 4.84 8.58a5.5 5.5 0 01-11 0c0-2.81 2.5-6 4.84-8.58L12 2.69z"
      fill="currentColor"
      fillOpacity="0.2"
    />
    <path
      d="M12 2.69l.66.73c2.34 2.58 4.84 5.77 4.84 8.58a5.5 5.5 0 01-11 0c0-2.81 2.5-6 4.84-8.58L12 2.69z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9 13a3 3 0 005.12 2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const StethoscopeIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.8 2.3A.7.7 0 005 3v5.5a4 4 0 008 0V3a.7.7 0 00.2-.7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path d="M9 8.5v1a4 4 0 004 4h0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="19" cy="13" r="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M19 15v3a4 4 0 01-4 4h-2a4 4 0 01-4-4v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="5" cy="3" r="1" fill="currentColor" />
    <circle cx="13" cy="3" r="1" fill="currentColor" />
  </svg>
);

export const MicroscopeIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="3" width="6" height="8" rx="1" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 11v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <ellipse cx="12" cy="17" rx="4" ry="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 21h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 17v4M16 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="6" r="1.5" fill="currentColor" />
  </svg>
);

export const ScissorsIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6" cy="18" r="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8.12 8.12L18 18M8.12 15.88L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const LungsIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M12 12c-2 0-4 1-5 3-1.5 3-1 6 1 7h4"
      fill="currentColor"
      fillOpacity="0.2"
    />
    <path
      d="M12 12c2 0 4 1 5 3 1.5 3 1 6-1 7h-4"
      fill="currentColor"
      fillOpacity="0.2"
    />
    <path
      d="M12 12c-2 0-4 1-5 3-1.5 3-1 6 1 7h4M12 12c2 0 4 1 5 3 1.5 3 1 6-1 7h-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9 8h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const HeartBeatIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="currentColor"
      fillOpacity="0.2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M3 12h4l2-3 3 6 2-3h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ActivityIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="16" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 12h4l2-4 3 8 2-4h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PillIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect
      x="4.93"
      y="4.93"
      width="14.14"
      height="7"
      rx="3.5"
      transform="rotate(45 12 12)"
      fill="currentColor"
      fillOpacity="0.2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M9.17 14.83l5.66-5.66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
