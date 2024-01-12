import { createContext, useEffect, useState } from 'react';
import {
  doc,
  setDoc,
  getDocs,
  collection,
  onSnapshot,
  query,
  deleteDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export const TodoContext = createContext({
  todos: [
    {
      id: Date.now(),
      title: 'abc',
      completed: false,
      createdAt: new Date(Date.now()).toLocaleString('en-au', {
        month: 'numeric',
        year: 'numeric',
        day: 'numeric',
      }),
    },
  ],
  addTodo: (todo: Todo) => {},
  deleteTodo: (id: number) => {},
  updateTodo: (id: number, todo: Todo) => {},
  toggleComplete: (id: number) => {},
});

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
};

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let todos = [];
      const querySnapshot = await getDocs(collection(db, 'todos'));
      querySnapshot.forEach((doc) => {
        todos.push(doc.data());
      });
      return todos;
    };
    getData().then((dt) => setTodos(dt));

    //real time updates

    const q = collection(db, 'todos');
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let todos = [];
      snapshot.docs.forEach((doc) => todos.push(doc.data()));
      setTodos(todos);
    });

    return () => unsubscribe();
  }, []);

  const addTodo = async (todo: Todo) => {
    const res = await setDoc(doc(db, 'todos', todo.id.toString()), todo);
  };
  const deleteTodo = async (id: number) => {
    await deleteDoc(doc(db, 'todos', id.toString()));
    console.log('deleted');
  };

  const updateTodo = async (id: number, todo: Todo) => {
    // const updatedTodos = todos.map((oldTodo) =>
    //   todo.id === id ? todo : oldTodo
    // );
    // setTodos(updatedTodos);

    await updateDoc(doc(db, 'todos', id.toString()), {
      title: todo.title,
    });
  };

  const toggleComplete = async (id: number) => {
    let status: boolean;
    const q = query(collection(db, 'todos'), where('id', '==', id));
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => (status = doc.data().completed));
    console.log('snapshot', snapshot);
    console.log('status', status);

    await updateDoc(doc(db, 'todos', id.toString()), {
      completed: !status,
    });
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};
