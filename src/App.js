import react, {useState} from 'react';
import Header from './component/Header';
import Form from './component/Form';
import Todo from './component/Todo'
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState(" ")
  const [todo, setTodo]  = useState([])
  const [editTodo, setEditTodo] = useState(null)

  return (
    <div className="Container">
     <div className="div-wrapper">
       <div>
         <Header/>
       </div>
       <div>
        <Form 
        todo = {todo} 
        setTodo = {setTodo} 
        inputText = {inputText} 
        setInputText={setInputText}
        editTodo = {editTodo}
        setEditTodo = {setEditTodo}
        />
       </div>
       <div>
         <Todo todo={todo} setTodo={setTodo} setEditTodo={setEditTodo}/>
       </div>
     </div>
    </div>
  );
}

export default App;
