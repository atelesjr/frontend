import React, { useEffect } from 'react';
import './index.css';

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from 'redux/actions/postsActions'

import Container from 'components/generics/Container'
import Spinner from 'components/generics/Spinner'
import UserCard from 'components/UserCard'


function App() {

  //Redux
  const dispatch = useDispatch();
  const { posts } = useSelector( state => state.posts );

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Container>
      <h1>Air Liquid</h1>

      { 
        posts 
        ? posts.map( (post, i) =>
          <UserCard post={ post } key={i}/>
        )
        : <Spinner size={'3rem'} />
      }
      
    </Container>
  );
}

export default App;


