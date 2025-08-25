import { useState } from 'react';
import { getEnv } from '../services/env';
import { flexaClient } from '../services/flexaClient';

export default function useScan() {
  const env = getEnv();
  const [status, setStatus] = useState<'idle'|'scanned'|'error'>('idle');

  const onMockScan = () => {
    if (env.MOCK) {
      setStatus('scanned');
    } else {
      try {
        // await flexaClient.scan()
        setStatus('scanned');
      } catch {
        setStatus('error');
      }
    }
  };

  return { status, onMockScan };
}
