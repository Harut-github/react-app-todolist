import React from 'react';

const Completedtodo = ({todolists, onClearToggle}) => {
    
    const countisToggl = todolists.filter((todolist) =>todolist.isToggle).length;
      
    return (
        <div>
            <div className="todolist__footer">
                <div className="todolist__completed">
                    {countisToggl}/{todolists.length} Completed
                </div>
                <button className="todolist__clear btn" onClick={onClearToggle}>Clear Completed</button>
            </div>
        </div>
    );
};

export default Completedtodo;