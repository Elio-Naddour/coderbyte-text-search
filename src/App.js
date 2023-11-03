import { useRef, useState ,useCallback} from 'react';
import './App.css';

function App() {
  const data=['William Shakespeare (1564-1616) ',  'Jane Austen (1775-1817) ',  'Charles Dickens (1812-1870) ',  'Leo Tolstoy (1828-1910) ',  'George Orwell (1903-1950) ',  'Gabriel García Márquez (1927-2014) ',  'Haruki Murakami (b. 1949)  ',  'J.K. Rowling (b. 1965) ',  'Chimamanda Ngozi Adichie (b. 1977) ',  'Toni Morrison (1931-2019)'];
  const [list,setList]=useState(data)
  const inputRef=useRef()

  const search=useCallback(()=>{
    setList(data?.filter((text)=> {return text.toLocaleLowerCase().includes(inputRef.current.value); }))

  },[inputRef])
  return (
    <div className="App">
      <input ref={inputRef} onChange={search} className='searchBar'/>
      <div className='list'>
      { list?.length > 0 ? list?.map((text)=>{return <div className='item'>{text}</div>})  : <div className='item'>No Results</div> }
      </div>
    </div>
  );
}

export default App;
