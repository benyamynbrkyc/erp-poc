import { IPost } from './Posts';
import formatAMPM from 'utils/formatAMPM';

export default function Post({ post }: { post: IPost }) {
  return (
    <div
      key={post.id}
      className='flex flex-col max-w-lg p-4 border rounded cursor-pointer hover:border-gray-700 hover:shadow-sm gap-2'>
      <span className='text-base'>{post.user.name}</span>
      <p className='text-2xl'>{post.body}</p>
      <div className='flex items-center text-base gap-1 opacity-60'>
        <span>{formatAMPM(new Date(Number(post.createdAt)))}</span>
        <span>·</span>
        <span>
          {new Date(Number(post.createdAt)).toLocaleDateString('sr-Latn-BA')}
        </span>
        <span>·</span>
        <span>{post.user.isAdmin ? 'Admin' : 'Korisnik'}</span>
      </div>
    </div>
  );
}

// {
//       "__typename": "Post",
//       "id": "1",
//       "createdAt": "1641995704188",
//       "body": "Ovo je moj prvi post",
//       "user": {
//         "__typename": "User",
//         "id": "1",
//         "name": "Benjamin",
//         "email": "benjamin@benjaminbrkic.com",
//         "isAdmin": true,
//         "age": 19
//       }
//     },
