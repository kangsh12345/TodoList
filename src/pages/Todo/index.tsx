import axios from 'axios';
import { atom, selector, useRecoilValue } from 'recoil';

import { IndexContainer } from '~/containers/IndexContainer';

const todoIdState = atom({
  key: 'todoIdState',
  default: 1,
});

const todoItemQuery = selector({
  key: 'todoItemQuery',
  get: async ({ get }) => {
    const id = get(todoIdState);

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    );

    return response.data;
  },
});

export default function index() {
  const data = useRecoilValue(todoItemQuery);

  return (
    <div>
      {data.title}
      {data.useId}
    </div>
  );
}
