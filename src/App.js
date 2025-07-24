import './App.css';

function App() {
  const title = "Welcome to Meerkat Blog";
  const likes = 10000;
  // const person = { name: 'Titus', age: 300 };
  const link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        {/* <p>{ person }</p> */}

        <p>YAY</p>
        <a href={ link }>Curious Link</a>

      </div>
    </div>
  );
}

export default App;
