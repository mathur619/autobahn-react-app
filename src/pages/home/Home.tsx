import React, { useEffect, useState } from "react";
import Post, { IPost } from "../../components/Post/Post";
import PostList from "../../components/RenderList/RenderList";

function Home() {
  const [data, setData] = useState<Array<IPost> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=10`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          setData(null);
        }
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return <div>Loding Data...</div>;
  }

  if (data?.length) {
    return (
      <div>
        <PostList postArray={data} />
      </div>
    );
  }

  return <> </>;
}

export default Home;
