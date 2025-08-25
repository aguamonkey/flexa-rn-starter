import { useState } from 'react';
import { getEnv } from '../services/env';
import { flexaClient } from '../services/flexaClient';

export default function useSpend() {
  const env = getEnv();
  const [status, setStatus] = useState<'idle'|'sent'|'error'>('idle');

  const onMockSpend = () => {
    if (env.MOCK) {
      setStatus('sent');
    } else {
      try {
        // await flexaClient.spend()
        setStatus('sent');
      } catch {
        setStatus('error');
      }
    }
  };

  return { status, onMockSpend };
}
