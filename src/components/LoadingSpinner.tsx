import { Loader2Icon } from 'lucide-react';
import React from 'react';
import { cn } from '../lib/utils';

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

function LoadingSpinner({ className }: Props) {
  return <Loader2Icon className={cn('h-4 w-4 animate-spin', className)} />;
}

export default LoadingSpinner;
