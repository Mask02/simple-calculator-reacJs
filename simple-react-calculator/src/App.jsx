import "./styles.css";

function App() {
  return (
    <div className="main-container">
      <div className="screen-container">
        <div className="previous-operands">1122+</div>
        <div className="current-operands">53636</div>
      </div>

      <button className="span-2">AC</button>
      <button>DEL</button>
      <button>÷</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>×</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>0</button>
      <button>.</button>
      <button className="span-2">=</button>
    </div>
  );
}

export default App;
