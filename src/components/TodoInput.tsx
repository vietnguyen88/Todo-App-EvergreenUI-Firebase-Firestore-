import React, { useContext, useState } from 'react';
import { Button, toaster, Pane, TextInput } from 'evergreen-ui';
import { TodoContext } from '../context/TodoContext';

function TodoInput() {
  const [value, setValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const { addTodo } = useContext(TodoContext);

  const handleAdd = () => {
    if (value !== '') {
      const newTodo = {
        id: Date.now(),
        title: value,
        createdAt: new Date(Date.now()).toLocaleString('en-au', {
          month: 'numeric',
          year: 'numeric',
          day: 'numeric',
        }),
        completed: false,
      };
      addTodo(newTodo);
      setValue('');
      setIsInvalid(false);
      toaster.success('Task added to list');
    } else {
      setIsInvalid(true);
      toaster.danger('This field is required');
    }
  };
  return (
    <Pane display="flex" gap="5px">
      <TextInput
        placeholder="Add new Todo"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        value={value}
        isInvalid={isInvalid}
      />
      <Button
        marginRight={16}
        appearance="primary"
        // validationMessage
        onClick={handleAdd}
      >
        Add
      </Button>
    </Pane>
  );
}

export default TodoInput;
