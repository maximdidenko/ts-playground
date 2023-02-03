import axios from 'axios';

const url = 'https://dummyjson.com/todos/random';

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const item = response.data as Todo;

  const id = item.id;
  const todo = item.todo;
  const completed = item.completed;

  logTodo(id, todo, completed);
});

const logTodo = (id: number, todo: string, completed: boolean) => {
  console.log(`
  ID: ${id}
  Todo: ${todo}
  Completed: ${completed}
`);
};
