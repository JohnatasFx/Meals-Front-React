import './styles/meals.css';
import { useEffect, useState } from 'react';
//import { api } from '../lib/api';
import Header from '../components/Header';


// const getBooks = async () => {
//   const response = await api.get('/book/all');
//   console.log(response.data);
//   return response.data;
// }

export default function Meals() {

//   const [books, setBooks] = useState<Book[]>([]);
//   const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
//   const [search, setSearch] = useState<string>("");

//   useEffect(() => {
//     const fetchBooks = async () => {
//       const response = await getBooks();
//       setBooks(response);
//       setFilteredBooks(response);
//     };
//     fetchBooks();
//   }, [])

//   const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(event.target.value);
//     if (event.target.value !== "") {
//       const results = books.filter((book) => {
//         return book.nomeLivro.toLowerCase().includes(event.target.value.toLowerCase());
//       });
//       setFilteredBooks(results);
//     } else {
//       setFilteredBooks(books);
//     }
//   }

  return (
    <main>
      <Header />
      <div id="content">
        <div className='title-content'>
          <h1>Refeição</h1>
        </div>

        <div className='book-content'>

        </div>
      </div>
    </main>
  )
}