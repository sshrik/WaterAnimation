import './App.css';
import SquashButton from './component/SquashButton';

function App() {
    return(
        <div style={{width: 1000, height: 500, backgroundColor: "#f7f6f3", display: 'flex', justifyContent: "center", alignItems: "center"}}>
            <SquashButton startY={-400} style={{width: 500, height: 50, backgroundColor: "#1e1e1e"}} />
        </div>
    )
}

export default App;
