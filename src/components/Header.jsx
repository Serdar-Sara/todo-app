
export function Header(props){

    const {todos} =props
    const todosLength=todos.length
    const isTaskPlural= todos.length !=1
    const taskOrTasks= isTaskPlural ? 'tasks' : 'task'
    return (

        <header>
            <h1 className="text-gradient"> you have {todosLength} open {taskOrTasks}.</h1>
        </header>
    )
}