import React from 'react';

// Define the shape of your props and state
type Props = {
  children: (props: { fetchKey: number }) => React.ReactNode;
  fallback: React.ReactNode | ((props: { error: Error | null; retry: () => void }) => React.ReactNode);
};

type State = {
  error: Error | null;
  fetchKey: number;
};

class ErrorBoundaryWithRetry extends React.Component<Props, State> {
  state: State = { error: null, fetchKey: 0 };

  static getDerivedStateFromError(error: Error): State {
    return { error, fetchKey: 0 };
  }

  private _retry = () => {
    this.setState((prev) => ({
      error: null,
      fetchKey: prev.fetchKey + 1
    }));
  };

  render() {
    const { children, fallback } = this.props;
    const { error, fetchKey } = this.state;
    if (error) {
      return typeof fallback === 'function' ? fallback({ error, retry: this._retry }) : fallback;
    }
    return children({ fetchKey });
  }
}

export default ErrorBoundaryWithRetry;
