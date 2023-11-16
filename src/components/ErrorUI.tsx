import { IterationCcwIcon } from 'lucide-react';
import React from 'react';

type Props = {
  error: Error | null;
  retry: () => void;
};

function ErrorUI({ error, retry }: Props) {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-1">
      <h4 className="text-2xl font-bold text-gray-800">빠르게 원인을 파악 중이에요!</h4>
      <p className="text-lg text-gray-800">{error?.message}</p>
      <div className="flex items-center">
        Retry
        <button onClick={retry}>
          <IterationCcwIcon className="ml-1 h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

export default ErrorUI;
