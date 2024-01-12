import {
  Pane,
  Paragraph,
  BanCircleIcon,
  IconButton,
  Tooltip,
} from 'evergreen-ui';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoCheckbox from './TodoCheckbox';
import UpdateDialogTodo from './UpdateDialogTodo';

const Todo = ({ todo }) => {
  const { deleteTodo } = useContext(TodoContext);
  return (
    <Pane
      key={todo.id}
      display="flex"
      elevation={0}
      paddingLeft={20}
      paddingRight={20}
      alignItems="center"
      justifyContent="space-between"
    >
      <Pane display="flex" alignItems="center" gap="10px">
        <Tooltip content="Edit">
          <TodoCheckbox todo={todo} />
        </Tooltip>

        <Paragraph fontStyle="italic" fontSize="0.6rem">
          {todo.createdAt}
        </Paragraph>

        <Paragraph fontWeight="bold">{todo.title}</Paragraph>
      </Pane>

      <Pane display="flex" alignItems="center" gap="5px">
        {/* <Tooltip content="Edit">
          <IconButton icon={EditIcon} intent="success" />
        </Tooltip> */}
        <UpdateDialogTodo todo={todo} />
        <Tooltip content="Delete">
          <IconButton
            icon={BanCircleIcon}
            intent="danger"
            onClick={() => deleteTodo(todo.id)}
          />
        </Tooltip>
      </Pane>
    </Pane>
  );
};

export default Todo;
