type Env = { MOCK: boolean; PUBLISHABLE_KEY: string; };

export function getEnv(): Env {
  return {
    MOCK: process.env.MOCK === '1' || process.env.MOCK === 'true',
    PUBLISHABLE_KEY: process.env.PUBLISHABLE_KEY || ''
  };
}
