import { FormEvent, useRef } from 'react';

export default function index() {
  const emailRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value;

    console.log(email);
  };

  return (
    <div className='max-w-md mx-auto '>
      <h1 className='text-center text-2xl'>Login page</h1>
      <div className='h-2'></div>
      <div className='flex flex-col p-8 border rounded'>
        <form className='flex flex-col gap-8' onSubmit={submitHandler}>
          <div className='flex flex-col'>
            <label htmlFor='email'>Email</label>
            <input
              ref={emailRef}
              className='border bg-gray-50 py-1 text-xl px-2 rounded'
              type='email'
              name='email'
              id='email'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 text-lg text-white rounded-lg p-2 text-center'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
