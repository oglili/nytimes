import React, {useState} from 'react';

const SearchForm = ({searchText}) => {
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault();
      if (text) {
      searchText(text)
      }else {
        setInfo('Enter some text')
        setTimeout(()=> setInfo(''),3000)
      }
    }

    const handleChange = (e) => {
      setText(e.target.value)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='input' placeholder='e.g politics' className='py-1 px-2 rounded-l-lg' onChange={handleChange}/>
        <button type='submit' className='bg-slate-400 p-2 rounded-r-lg text-white'>Go</button>
      </form>
      <p className='small-size font-bold w-13 text-red-500'>{info}</p>
    </div>
  )
}

export default SearchForm