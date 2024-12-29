import React, { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
}

function DataFetcher() {
  const [data, setData] = useState<Post[]>([]); // Specify the type of the state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: Post[]) => { // Specify the expected type of data
        setData(data); // Update the state with fetched data
        setLoading(false); // Set loading to false
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li> // No more errors
        ))}
      </ul>
    </div>
  );
}

export default DataFetcher;
