import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TodoContextProvider } from './context/TodoContext';
import { App } from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </StrictMode>
);
