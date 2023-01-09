import React, {useState} from 'react';


const Addtodo = ({onAdd}) => {

    const [text, setText] = useState("");
    function todoformsend(e){
        e.preventDefault();
        if(text.length <= 3){
            alert("Please enter text min 4 word");
        }else{
            onAdd(text);
            setText("");
        }
    }
    function todoinpchange(e){
        setText(e.target.value);
        console.log(e.target.value);

    }

    return (
        <form onSubmit={todoformsend}>
            <div className="todolist__add">
                <input className="todolist__add-inp" 
                type="text" 
                placeholder="Add Todo"
                value={text}
                onChange={todoinpchange}
                />
                <button className="todolist__add-btn btn">Add</button>
            </div>
        </form>
    );
};

export default Addtodo;