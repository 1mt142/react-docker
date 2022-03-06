import "./App.css";
import command from "./../src/assets/docker.jpeg";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>build react app with #Docker</p>
        <img style={{ width: "100%" }} src={command} alt="docker-command" />
        <a
          className="App-link"
          href="https://dev.to/bahachammakhi/dockerizing-a-react-app-with-nginx-using-multi-stage-builds-1nfm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docker Test
        </a>
      </header>
    </div>
  );
}

export default App;
