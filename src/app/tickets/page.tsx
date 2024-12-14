import Link from 'next/link';
import {initialTickets as tickets} from '@/data';
import { ticketPath } from '@/paths';

const TicketsPage = () => {
    return (
      <div>
        {tickets.map((ticket) => (
          <div key={ticket.id} className="mb-4 p-4 border rounded">
            <h2 className='text-lg font-bold'>{ticket.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{ticket.description}</p>
            <Link href={ticketPath(ticket.id)} className='underline mt-2 inline-block'>Go To Ticket</Link>
          </div>
        ))}
      </div>
    );
  };
  
  export default TicketsPage;