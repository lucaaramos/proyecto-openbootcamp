import React from 'react'

import Task from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task'

const TaskList = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

    const changeState = (id) => {
        console.log('todo: cambiar estado')
    }

  return (
    <div>
    <div>

        <h1>
            Your tasks:

        </h1>
    </div>
        {/* TODO: aplicar un for/map para renderizar un lista */}
        <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
}



export default TaskList
