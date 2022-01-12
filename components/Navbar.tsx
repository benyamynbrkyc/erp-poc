import Link from 'next/link';
import useStore from 'store';

export default function Navbar() {
  const { user } = useStore();

  return (
    <div className='flex justify-between px-6 py-2 text-2xl border shadow-md rounded-xl'>
      <Link href='/'>
        <a className='flex items-center'>Nav</a>
      </Link>
      <div className='flex items-center gap-3'>
        {user && <span>Logged in as {user}</span>}
        {!user && (
          <Link href='/login'>
            <a className='p-2 bg-blue-100 text-lg border rounded-lg'>Login</a>
          </Link>
        )}
      </div>
    </div>
  );
}
