import React,{useState} from 'react'

const App = () => {

  const [title,setTitle] = useState('')
  const [details,setdetails] = useState('')

  const[task,setTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault();
    //console.log(title,details)

    const copyTask = [...task];
    copyTask.push({title,details});
    //console.log(copyTask)
    setTask(copyTask)

    setTitle('')
    setdetails('')
  }

  const deleteNote = (idx) =>{
     const copyTask = [...task];
     copyTask.splice(idx,1);
     setTask(copyTask);
  }
  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e)=>{ 
        submitHandler(e);
      }} className='flex gap-4 lg:w-1/2 justify-between flex-col items-start p-10'>
        <h1>Add Notes</h1>
        <input 
        type="text" 
        placeholder='Enter Notes Heading'
        className='px-5 py-2 w-full font-medium border-2 rounded outline-none'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
       <textarea
       type="text"
       className='px-5 py-2 h-32 w-full flex items-start font-medium  border-2 rounded outline-none'
       placeholder="Write Details here"
       value={details}
       onChange={(e)=>{
        setdetails(e.target.value)
       }}
      ></textarea>
        <button className='bg-white active:bg-gray-300 text-black w-full px-5 py-2 rounded'>
          Add Note
          </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
      <h1 className='text-4xl fonr-bold'>Recent Notes</h1>
      <div className='flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto'>
       {task.map(function(elem,idx){
        return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl text-black bg-cover p-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
          <div>
            <h3 className="leading-tight text-xl font-bold mt-3">{elem.title}</h3>
            <p className="mt-2 leading-right font-medium text-gray-500">{elem.details}</p>
          </div>
          <button onClick={()=>{
            deleteNote(idx)
          }} className="bg-red-500 cursor-pointer active:scale-95 w-full text-white py-1 text-xs rounded font-bold">Delete</button>
        </div>
       })}
      </div>
      </div>
    </div>
  )
}

export default App
