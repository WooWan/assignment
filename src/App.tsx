import ErrorUI from './components/ErrorUI';
import ErrorBoundaryWithRetry from './components/Errorboundary';
import Feeds from './components/Feeds';

function App() {
  return (
    <ErrorBoundaryWithRetry fallback={({ error, retry }) => <ErrorUI error={error} retry={retry} />}>
      {({ fetchKey }) => {
        return <Feeds fetchKey={fetchKey} />;
      }}
    </ErrorBoundaryWithRetry>
  );
}

export default App;
