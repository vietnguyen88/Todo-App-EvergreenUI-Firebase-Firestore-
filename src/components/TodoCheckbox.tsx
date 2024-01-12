import { useState, useContext } from 'react';
import { Checkbox, Tooltip, Position } from 'evergreen-ui';
import { TodoContext } from '../context/TodoContext';

const TodoCheckbox = ({ todo }) => {
  const [checked, setChecked] = useState(todo.completed);
  const { toggleComplete } = useContext(TodoContext);

  return (
    <Tooltip content="Set as Completed/ Incompleted" position={Position.TOP}>
      <Checkbox
        checked={checked}
        onChange={() => setChecked(!checked)}
        onClick={() => toggleComplete(todo.id)}
      />
    </Tooltip>
  );
};

export default TodoCheckbox;
