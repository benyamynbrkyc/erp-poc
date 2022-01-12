export default function index() {
  return (
    <div>
      <h1>Login page</h1>
      <div className='flex flex-col p-8 border rounded'>
        <label htmlFor='email'></label>
        <input type='email' name='email' id='email' />
      </div>
    </div>
  );
}
