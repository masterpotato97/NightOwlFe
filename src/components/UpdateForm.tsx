
import Button from './Button';
import Input from './Input';

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import {updateAuthorName, updateBookTitle,updateBookLength,updateIsbn } from "../redux/slices/UpdateSlice"

interface UpdateFormProp {
  id?: string;
}
const UpdateForm = (props: UpdateFormProp) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = async (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id);
    console.log(data);
  
    if (props.id) {
      await server_calls.update(props.id, data);
      console.log(`Updated: ${data.name} ${props.id}`);
    } else {
      dispatch(updateAuthorName(data.author_name));
      dispatch(updateBookTitle(data.book_title));
      dispatch(updateBookLength(data.book_len));
      dispatch(updateIsbn(data.isbn));
  
      await server_calls.create(store.getState());
    }
  
    event.target.reset();
  
   window.location.reload();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="author_name">Author Name</label>
          <Input {...register('author_name')} name='author_name' placeholder="Author Name" />
        </div>
        <div>
          <label htmlFor="book_title">Book Title</label>
          <Input {...register('book_title')} name='book_title' placeholder="Book title" />
        </div>
        <div>
          <label htmlFor="book_len">Book Length</label>
          <Input {...register('book_len')} name='book_len' placeholder="Book Length" />
        </div>
        <div>
          <label htmlFor="isbn">ISBN</label>
          <Input {...register('isbn')} name='isbn' placeholder="ISBN" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;