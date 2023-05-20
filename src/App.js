import React, { lazy, Suspense } from 'react';

const Resource = () => (
  <div className="box">
    <h1>React Lazy</h1>
    <p>This component loaded after 3 seconds using React Lazy and Suspense.</p>
  </div>
);

const LazyComponent = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ default: Resource });
    }, 3000);
  })
);

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

export default App;
