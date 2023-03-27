import React, { useState } from 'react';
import classNames from 'classnames';

function TodoList() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddItem = () => {
        if (inputValue.trim() === '') {
            return;
        }

        setItems([...items, inputValue]);
        setInputValue('');
    };

    const handleToggleItem = (index) => {
        const newItems = [...items];
        newItems[index] = newItems[index].startsWith('✅ ') ? newItems[index].slice(2) : `✅ ${newItems[index]}`;
        setItems(newItems);
    };

    const incompleteTasks = items.filter((item) => !item.startsWith('✅ ')).length;
    const totalTasks = items.length;

    return (
        <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Todo List</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} style={{ padding: '10px', borderRadius: '5px', border: 'none', marginRight: '10px', width: '70%' }} />
                <button onClick={handleAddItem} style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>Add</button>
            </div>
            <ul style={{ listStyle: 'none', padding: '0' }}>
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={classNames({ 'is-done': item.startsWith('✅ ') })}
                        onClick={() => handleToggleItem(index)}
                        style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginBottom: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                        <span style={{ flex: '1' }}>{item}</span>
                        <span style={{ marginLeft: '10px', cursor: 'pointer' }}>{item.startsWith('✅ ') ? '❌' : '✅'}</span>
                    </li>
                ))}
            </ul>
            <div className="task-counter" style={{ textAlign: 'center', marginTop: '20px' }}>{`${incompleteTasks} remaining out of ${totalTasks} tasks`}</div>
        </div>
    );
}

export default TodoList;
