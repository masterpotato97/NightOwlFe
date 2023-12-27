
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch } from "react-redux"
import { chooseAuthorName, chooseBookTitle, chooseBookLength, chooseIsbn } from "../redux/slices/RootSlice"

interface BookFormProps {
  id?: string[]
}

const BookForm = ( props:BookFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();

 


  const onSubmit = async (data: any, event: any) => {

    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
      event.target.reset()
    } else {
      dispatch(chooseAuthorName(data.author_name));
      dispatch(chooseBookTitle(data.book_title));
      dispatch(chooseBookLength(data.book_len));
      dispatch(chooseIsbn(data.isbn));
  

      
      await server_calls.create(data);
      event.target.reset();

    }
   window.location.reload();
  }

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

export default BookForm