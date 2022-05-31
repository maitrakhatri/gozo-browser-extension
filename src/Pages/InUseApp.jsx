import {Weather, Clock, Greetings, MainFocus, Quote, Firefox, ToDoList} from "../Components"
import { useTask } from "../Context/TaskContext"

export function InUseApp() {

    const {showTodoList, setShowTodoList} = useTask()

    return (
        <div className="InUseApp">
            <Firefox />
            <Weather />
            <div className="center">
            
              <Clock />
              <Greetings />
              {showTodoList && <ToDoList/> }
              {!showTodoList && <button id="openToDo" onClick={() => setShowTodoList(true)}>To Do List</button>}
              <MainFocus />
              <Quote />
            </div>
        </div>
    )
}