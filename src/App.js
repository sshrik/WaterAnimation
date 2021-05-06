import './App.css';
import SquashButton from './component/SquashButton';
import SquashDiv from './component/SquashDiv';

function App() {
    return(
        <div style={{width: 1000, height: 500, backgroundColor: "#f7f6f3", display: 'flex', justifyContent: "center", alignItems: "center"}}>
            <SquashDiv startY={-400} style={{width: 500, height: 50, backgroundColor: "#1e1e1e", display: 'flex', justifyContent: "center", alignItems: "center"}}>
                <p style={{color: "#f7f6f3"}}>HELLO!!!</p>
            </SquashDiv>
        </div>
    )
}

export default App;
