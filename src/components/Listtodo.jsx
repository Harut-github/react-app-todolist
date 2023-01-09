import React, {useState} from 'react';

const Listtodo = ({todolists, addcheked, xDelete}) => {


    return (
        <div>
            {
                todolists.map((todolist) =>
                <div className="todolist__list" key={todolist.id}>
                    <div className="todolist__left">
                    <label className="todolist__label">
                        <input className="todolist__chek" 
                        type="checkbox" 
                        checked={todolist.isToggle ? 'checked': ''} 
                        onChange={(e) => {
                            addcheked({
                            ...todolist,
                            isToggle:e.target.checked
                        })
                        }}
                        />
                        <span className={todolist.isToggle ? 'todolist__text todolist__text--delete': 'todolist__text'} >{todolist.text}</span>
                    </label>
                    </div>
                    <div className="todolist__right">
                    <a className="todolist__x" href="#" onClick={(e)=>{
                        e.preventDefault();
                        xDelete(todolist);
                    }}>X</a>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Listtodo;