import './App.css';
import SquashButton from './component/SquashButton';

function App() {
    return(
        <div style={{width: 1000, height: 500, backgroundColor: "#23AC4E", display: 'flex', justifyContent: "center", alignItems: "center"}}>
            <SquashButton startY={-100} style={{}}/>
        </div>
    )
}

export default App;
