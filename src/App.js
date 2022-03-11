import React, { useState } from 'react'
import Filter from './Components/Filter/Filter'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import { usePosts } from './Hooks/usePosts'
import './Style/App.css'

const App = () => {
  let [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Exporto cuano' },
    { id: 2, title: 'Golang', body: 'Loutao suo' },
    { id: 3, title: 'Ruby', body: 'Sterru' },
    { id: 4, title: 'Java', body: 'Buent helloga' },
    { id: 5, title: 'PHP', body: 'Exporto vertia' },
    { id: 6, title: 'Kotlin', body: 'Sercumo berrado helloga' },
  ])
  let [filter, setFilter] = useState({ sort: '', query: '' })
  let searchedAndSelectedPosts = usePosts(posts, filter.sort, filter.query)

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  return (
    <div className="App">
      <Form addPost_Func={addNewPost} />

      <Filter filter={filter} setFilter={setFilter} />

      {searchedAndSelectedPosts.length ? (
        <List posts={searchedAndSelectedPosts} removePost={removePost} />
      ) : (
        <h2 className="App_titleWarning">No posts</h2>
      )}
    </div>
  )
}

export default App
