import Hero from './Hero';
import Posts from 'components/Posts';

export default function Landing() {
  return (
    <div className='p-4 text-xl'>
      <Hero />
      <div className='h-6'></div>
      <Posts />
    </div>
  );
}
