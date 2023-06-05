import { useEffect, useState } from 'react';
import { getPostList } from '../api';
import PostListItem from '../components/PostListItem';
import { IResponsePostList } from '../api/types';
import NoPostList from '../components/NoPostList';

const Home = () => {
  const [posts, setPosts] = useState<IResponsePostList>([]);

  const fetchPostList = async () => {
    const { data } = await getPostList();
    setPosts(data);
  };

  useEffect(() => {
    fetchPostList();
  }, []);

  if (posts.length == 0) {
    return <NoPostList />;
  }

  return (
    <div>
      {posts.map(({ post }, index) => (
        <PostListItem key={index} id={post.id} title={post.title} contents={post.contents} tag={post.tag} />
      ))}
    </div>
  );
};

export default Home;
