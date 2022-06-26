//imported React class from "react" library
//imported the {useState} method from the "react" library using the destructuring method
//also imported all the necessary components and connected the necessary 'css' file

import React, { useState, useRef } from 'react'
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';



function App() {

    const [posts, setPosts] = useState([
      {id: 1, title: 'JavaScript', body: 'Description'},
      {id: 2, title: 'Node JS', body: 'Description'}, 
      {id: 3, title: 'Java', body: 'Description'}, 
      {id: 4, title: 'C#', body: 'Description'}
    ])

    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  
    /* const bodyInputRef = useRef() */

    
return (
    <div className="App">
      
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}} />
      <div>
        <MySelect 
        value={selectedSort}
        onChange={sort => setSelectedSort(sort)}
        defaultValue="Сортировка по"
        options={
          [
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'}
          ]
        }
        />
      </div>
      {
        posts.length !=0 
        ? <PostList remove={removePost} posts={posts} title="Посты про backend"/> 
        :<h1 style={{textAlign: 'center'}}>Посты не были найдены!</h1>
      }
      
    </div>
  );
}

export default App;
