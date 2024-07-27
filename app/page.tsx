// Components
import { Navbar } from '@/src/components/nav/Navbar';

export default async function Home() {
  return (
    <div className='h-screen'>
      <div className='grid grid-rows-reg h-full w-full'>
        <Navbar />
        <main className='text-secondary-colour bg-main-colour'>HOME PAGE</main>
      </div>
    </div>
  );
}
