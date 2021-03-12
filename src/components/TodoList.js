import TodoItem from "./TodoItem"
import todos from '../data.js/todos'

console.log(todos)
const TodoList = () => {
    return (<ul>
        <TodoItem
            imgAfter={todos[0].imgAfter}
            imgBefore={todos[0].imgBefore}
            todo={todos[0].todo}
            bg={todos[0].bg}
            textDecoration={todos[0].textDecoration}
        />
        <TodoItem
            imgAfter={todos[1].imgAfter}
            imgBefore={todos[1].imgBefore}
            todo={todos[1].todo}
            bg={todos[1].bg}
            textDecoration={todos[1].textDecoration}
        />
        <TodoItem
            imgAfter={todos[2].imgAfter}
            imgBefore={todos[2].imgBefore}
            todo={todos[2].todo}
            bg={todos[2].bg}
            textDecoration={todos[2].textDecoration}
        />
        <TodoItem
            imgAfter={todos[3].imgAfter}
            imgBefore={todos[3].imgBefore}
            todo={todos[3].todo}
            bg={todos[3].bg}
            textDecoration={todos[3].textDecoration}
        />
        <TodoItem
            imgAfter={todos[4].imgAfter}
            imgBefore={todos[4].imgBefore}
            todo={todos[4].todo}
            bg={todos[4].bg}
            textDecoration={todos[4].textDecoration}
        />
        <TodoItem
            imgAfter={todos[5].imgAfter}
            imgBefore={todos[5].imgBefore}
            todo={todos[5].todo}
            bg={todos[5].bg}
            textDecoration={todos[5].textDecoration}
        />

    </ul>);
}

export default TodoList;