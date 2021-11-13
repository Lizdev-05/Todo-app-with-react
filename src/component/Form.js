import React, {useEffect} from "react";
import {v4 as uuid4} from "uuid"


const Form = ({ inputText, setInputText, todo, setTodo, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) =>{
    const newTodo = todo.map((todo) => 
      todo.id === id ? {title, id, completed} : todo
    )
    setTodo(newTodo);
    setEditTodo("")
  }

 useEffect(() =>{
   if(editTodo){
     setInputText(editTodo.title);
   }else{
     setInputText("")
   }
 }, [setInputText, editTodo]);

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value)
  };

   const onFormSubmit = (e) => {
       e.preventDefault();
       if(!editTodo){
        setTodo([
          ...todo, { title: inputText, completed: false, id: uuid4(),}
    ]);
    setInputText("");
    
       } else{
         updateTodo(inputText, editTodo.id, editTodo.completed)
       } 
      };
       


//   const submitTodohandler = (e) => {
//     e.preventDefault();
//     setTodo([
//         ...todo, { text: inputText, completed: false, id: Math.random() * 10000}
//     ]);
//     setInputText("")
//   };


  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
         value={inputText}
          onChange={inputTextHandler}
          required
          type="text"
          placeholder="Enter a Todo..."
          className="task-input"
          
        />
        <button
        //  onClick={submitTodohandler} 
         className="button-add" 
         type="submit">
          {editTodo ? "OK" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Form;
