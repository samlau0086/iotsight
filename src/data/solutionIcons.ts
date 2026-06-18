import type { LucideIcon } from 'lucide-react';
import { Droplets, ShieldCheck, Sprout, Sun, ThermometerSnowflake, Zap } from 'lucide-react';

export const solutionIconsByKey: Record<string, LucideIcon> = {
  zap: Zap,
  sun: Sun,
  droplets: Droplets,
  sprout: Sprout,
  snowflake: ThermometerSnowflake,
  shield: ShieldCheck,
};

export const defaultSolutionIcon = Zap;
