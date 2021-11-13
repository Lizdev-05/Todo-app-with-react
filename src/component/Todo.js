import React from "react";

  const Todo = ({ todo, setTodo, setEditTodo}) => {

    const handleComplete = (todo) =>{
      setTodo(
        todo.map((item) =>{
          if(item.id === todo.id){
            return{ ...item, completed: !item.completed }
          }
          return item;
        })
      );
    };

   const handleEdit = ({id}) =>{
       const findTodo = todo.find((todo) => todo.id === id);
       setEditTodo(findTodo)
   }

    const handleDelete = ({id}) =>{
      setTodo(todo.filter((todo) => todo.id !== id))
    }

 
  return (
    <div className= "todoItem">
      {todo.map((todo) => (
        <li className="todo-list" key={todo.id}>
           <div className= "todoItem">
           <input
           type="text"
           value={todo.title}
           onChange={(e) => e.preventDefault()}
           />
          
             <button className="button-complete task-button" onClick={()=> handleComplete(todo)}>
              <i className="fa fa-check-circle"></i>
             </button>
             <button className="button-edit task-button" onClick={()=> handleEdit(todo)}>
              <i className="fa fa-edit"></i>
             </button>
             <button className="button-delete task-button" onClick={()=> handleDelete(todo)}>
              <i className="fa fa-trash"></i>
             </button>
           </div>
           
        </li>

      ))}
       
    </div>
    
  )
};

export default Todo;
