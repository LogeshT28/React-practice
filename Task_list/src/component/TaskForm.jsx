import React, { useState } from 'react'
import './TaskForm.css'
import Tag from './Tag';

const TaskForm = ({ setTasks }) => {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: [],
    });

    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag)
    }

    const selectTag = (tag) => {
        if (taskData.tags.some(item => item === tag)) {
            const filtertags = taskData.tags.filter(item => item !== tag)
            setTaskData(prev => {
                return { ...prev, tags: filtertags }
            })
        }
        else {
            setTaskData(prev => {
                return { ...prev, tags: [...prev.tags, tag] }
            })
        }
    };
    const handleChange = (e) => {

        const { name, value } = e.target;
        setTaskData(prev => {
            return { ...prev, [name]: value }
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskData);
        setTasks(prev => {
            return [...prev, taskData]
        })
        setTaskData({
            task: "",
            status: "todo",
            tags: [],
        });
    };
    return (
        <header className='app_header'>
            <form onSubmit={handleSubmit}>
                <input name="task" type="text" value={taskData.task} placeholder='Enter your task'
                    onChange={handleChange} />
                <div className='task_from_bottom_line'>
                    <div>
                        <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")} />
                        <Tag tagName="Css" selectTag={selectTag} selected={checkTag("Css")} />
                        <Tag tagName="JavaScript" selectTag={selectTag} selected={checkTag("JavaScript")} />
                        <Tag tagName="React" selectTag={selectTag} selected={checkTag("React")} />
                    </div>
                    <div>
                        <select name='status' className='task_status' value={taskData.status} onChange={handleChange}>
                            <option value="todo">ToDo</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                        <button type='submit' className='task_submit'>+ Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    );
};

export default TaskForm
