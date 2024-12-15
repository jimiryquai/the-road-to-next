import Link from 'next/link';
import { ticketsPath } from '@/paths';

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Home Page!</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Welcome to the Road to Next.js App!
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <Link href={ticketsPath} className="underline">Go To Tickets</Link>
      </div>
    </div>
  );
};

export default HomePage;