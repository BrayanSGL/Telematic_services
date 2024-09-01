import './App.css';

function App() {
  return (
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img
            className="tw-followCard-avatar" 
            src="https://unavatar.io/kikobeats" 
            alt="Avatar"/>
            <div className='tw-followCard-info'>
                <strong>El perro ese</strong>
                <span className='tw-followCard-info-userName'>@perro</span>
            </div>
        </header>
        <aside>
            <button className='tw-followCard-button'>
                Seguir
            </button>
        </aside>
    </article>
  );
}

export default App;