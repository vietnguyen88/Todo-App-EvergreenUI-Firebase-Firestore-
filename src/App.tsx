import './style.css';

import TodosList from './components/TodosList';
import TodoInput from './components/TodoInput';

export const App = () => {
  return (
    <div>
      <h2>Todo - Evergreen UI - Firebase</h2>
      <TodoInput />
      <TodosList />
    </div>
  );
};
