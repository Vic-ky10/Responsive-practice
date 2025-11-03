import React, { useEffect, useState } from 'react'
import './Feed.css'

function Feed() {
    const[posts ,setPosts] = useState ([])

    useEffect (() => {

        setPosts ( [ 
             {
        id: 1,
        username: "nature_lover",
        userImage: "https://randomuser.me/api/portraits/women/5.jpg",
        postImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        caption: "Nature is not a place to visit, it's home 🍃",
      },
      {
        id: 2,
        username: "urban_explorer",
        userImage: "https://randomuser.me/api/portraits/men/7.jpg",
        postImage: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
        caption: "Exploring the city lights ✨",
      },
      {
        id: 3,
        username: "tech_enthusiast",
        userImage: "https://randomuser.me/api/portraits/men/4.jpg",
        postImage: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        caption: "Code. Coffee. Repeat ☕💻",
      },
        ])
    } ,[])

  return (
    <div>
        <div className="feed-container">
            {posts.map(post => (
                <div key={post.id} className='post-card'>
                    <div className="post-header">
                        <img src={post.userImage} alt={post.postImage}  className='user-avatar'/>
                         <h6>{post.username}</h6>
                        </div> 
                      <img src={post.postImage} alt="post" className='post-img' />
                      <p className="caption">{post.caption}</p>
                 </div>
            ))}
        </div>

    </div>
  )
}

export default Feed