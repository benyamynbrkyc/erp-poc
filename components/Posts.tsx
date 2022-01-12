import { gql, useQuery } from '@apollo/client';
import Post from './Post';

const POSTS = gql`
  query Posts {
    posts {
      id
      createdAt
      body
      user {
        id
        name
        email
        isAdmin
        age
      }
    }
  }
`;

export interface IPost {
  id: string;
  createdAt: string;
  body: string;
  user: IUser;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  age: number;
}

export default function Posts() {
  const { loading, error, data } = useQuery(POSTS);
  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        Error :( <br />
        <pre>{JSON.stringify(error, undefined, 2)}</pre>
      </p>
    );
  return (
    <div className='flex flex-col gap-4'>
      {data.posts.map((post: IPost) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
