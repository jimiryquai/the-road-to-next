import Link from 'next/link';
import {initialTickets as tickets} from '../../data';

const TicketsPage = () => {
    return (
      <div>
        {tickets.map((ticket) => (
          <div key={ticket.id}>
            <h2 className='text-lg'>{ticket.title}</h2>
            <Link href={`/tickets/${ticket.id}`} className='underline'>Go To Ticket</Link>
          </div>
        ))}
      </div>
    );
  };
  
  export default TicketsPage;