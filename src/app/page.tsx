import Link from 'next/link';
import { ticketsPath } from '@/paths';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-lg">Home Page!</h1>

      <Link href={ticketsPath} className="underline">Go To Tickets</Link>
    </div>
  );
};

export default HomePage;