import "./App.css";
import Header from "./MyComponents/Header";
import { Todo } from "./MyComponents/Todo";


let todos =[
  {
  id : 1,
  title : 'go to market',
  desc : 'you have to go to market for job done',
},
{
  id : 2,
  title : 'go to market',
  desc : 'you have to go to market for job done',
},
{
  id : 3,
  title : 'go to market',
  desc : 'you have to go to market for job done',
},

]

function App() {
  return (
    <div className="App">
      <Header title="ToDo Application" />
      <Todo todos ={todos}/>
      {/* <footer/> */}
    </div>
  );
}

export default App;
