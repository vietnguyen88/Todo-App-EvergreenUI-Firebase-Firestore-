import { useContext, useState } from 'react';
import { Pane, Tablist, Tab, Heading } from 'evergreen-ui';

import Todo from './Todo';
import { TodoContext } from '../context/TodoContext';

function TodosList() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tabs] = useState(['In Progress', 'Completed']);
  const { todos } = useContext(TodoContext);
  return (
    <Pane height={120}>
      <Tablist
        marginBottom={16}
        marginTop={10}
        flexBasis={240}
        marginRight={24}
      >
        {tabs.map((tab, index) => (
          <Tab
            aria-controls={`panel-${tab}`}
            isSelected={index === selectedIndex}
            key={tab}
            onSelect={() => setSelectedIndex(index)}
          >
            {tab}
          </Tab>
        ))}
      </Tablist>
      <Pane background="tint1" flex="1">
        {tabs.map((tab, index) => {
          const filterd = todos.filter((todo) =>
            tab === 'Completed' ? todo.completed : !todo.completed
          );

          return (
            // <div>
              <Pane
                elevation={2}
                aria-labelledby={tab}
                aria-hidden={index !== selectedIndex}
                display={index === selectedIndex ? 'block' : 'none'}
                key={tab}
                role="tabpanel"
              >
                {filterd.length > 0 ? (
                  filterd.map((todo) => <Todo key={todo.id} todo={todo} />)
                ) : (
                  <Pane
                    display="flex"
                    elevation={0}
                    paddingLeft={20}
                    alignItems="center"
                  >
                    <Heading
                      marginRight={20}
                      marginTop={16}
                      marginBottom={16}
                      size={200}
                    >
                      No Task :({' '}
                    </Heading>
                  </Pane>
                )}
              </Pane>
            // </div>
          );
        })}
      </Pane>
    </Pane>
  );
}

export default TodosList;
