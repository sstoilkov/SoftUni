import { TaskContext } from "../contexts/TaskContext"
import { useEffect, useContext } from "react"

import styles from './TaskItem.module.css'

export const TaskItem = ({
    task
}) => {

    const { taskDeleteHandler, toggleTask } = useContext(TaskContext)
    useEffect(() => {

    }, [])

    return (
        <li>
            <span className={task.isCompleted ? styles.completed : ''}
                onClick={() => toggleTask(task._id)}
            >
                {task.title}
            </span>
            <button onClick={() => taskDeleteHandler(task._id)}>x</button>
        </li>
    )
}