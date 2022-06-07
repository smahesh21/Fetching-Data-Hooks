import {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
  const [posts, setPost] = useState([])
  const [id, setId] = useState(1)
  const [getIdByButtonClick, setIdByClickingButton] = useState(1)
  const fetchNameBasedOnClick = () => {
    setIdByClickingButton(id)
  }
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${getIdByButtonClick}`)
      .then(response => {
        console.log(response)
        setPost(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [getIdByButtonClick])

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type="button" onClick={fetchNameBasedOnClick}>
        Fetch Post Name
      </button>
      {/*
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
       */}
      <p>{posts.title}</p>
    </div>
  )
}
export default DataFetching
