import React from 'react'

const Post = ({ data }) => {
  return data ? (
    <li>
      <h3>{data.title}</h3>
      <p>{data.title}</p>
    </li>
  ) : null
}

export default Post
