import React from 'react'
import Container from '../components/container/container'
import PostForm from '../components/post-form/PostForm'

function AddPost() {
  return (
    <div className='py-6'>
      <Container>
        <PostForm />
      </Container>
    </div>
  )
}

export default AddPost
