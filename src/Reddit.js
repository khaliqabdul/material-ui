import React, {useState, useEffect} from 'react';

function Reddit({subreddit}){
    const [posts, setPosts] = useState([])
    const [isfetching, setFetching] = useState(false)
    
    useEffect(()=>{
        async function getData() {
            setFetching(true)
            await fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(data => setPosts(data.data.children.map(c => c.data)))
            .catch(error => document.write(error))
            setFetching(false)
        }
        getData()
    },[subreddit])
    if (isfetching){
        return <div><h2>Loading Please Wait....</h2></div>
    }

    return(
        <div className="li">
            <h1>Reddit Posts (useEffect)</h1>
            <ol>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ol>
        </div>
    );
};
export default Reddit;