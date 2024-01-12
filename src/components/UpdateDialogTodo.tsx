import React, { useState } from 'react';

import {
  Pane,
  EditIcon,
  IconButton,
  Tooltip,
  Dialog,
  TextInputField,
} from 'evergreen-ui';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function UpdateDialogTodo({ todo }) {
  const { updateTodo } = useContext(TodoContext);
  const [isShown, setIsShown] = React.useState(false);
  const [title, setTitle] = useState('');

  const handleUpdate = (close: Function) => {
    updateTodo(todo.id, { ...todo, title });
    close();
  };
  return (
    <Pane>
      <Dialog
        isShown={isShown}
        title="Update To-do"
        onCloseComplete={() => setIsShown(false)}
        confirmLabel="Update"
        preventBodyScrolling
        onConfirm={(close) => handleUpdate(close)}
      >
        <TextInputField
          hint="You can type anything."
          placeholder="Type your todo here..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          isInvalid={title === '' ? true : false}
        />
      </Dialog>

      <Tooltip content="Edit">
        <IconButton
          icon={EditIcon}
          intent="success"
          onClick={() => setIsShown(true)}
        />
      </Tooltip>
    </Pane>
  );
}

export default UpdateDialogTodo;
