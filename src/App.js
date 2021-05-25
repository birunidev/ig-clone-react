import RouterComponent from './router';

function App() {
  return (
    <div className="App">
      <div className="render-app">
        <RouterComponent />
      </div>
      <div className="desktop-alert">
        <p>Open this app on mobile device</p>
      </div>
    </div>
  );
}

export default App;
