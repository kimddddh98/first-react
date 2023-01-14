import './App.css';
import HeaderTest from './component/HeaderTest'
import src from './logo.svg'

function App() {
  const arr = [
    {title:"js"},
    {title:"vue"},
    {title:"react"},
  ]
  return (
    <div className="App">
    <HeaderTest src={src}/>
    <ComponentTest title="react" arr={arr}/>
    </div>
  );
};
function ComponentTest(props){
  const list = props.arr.map((item, index) =>(<li key={index}>{item.title}</li>))

  return <ul>
    <li>{list}</li>
  </ul> 
}

export default App;
