import Link from 'next/link';
import {initialTickets as tickets} from '@/data';
import { ticketPath } from '@/paths';

const TICKET_ICONS = {
  new: "🆕",
  open: "🔑",
  "in-progress": "🔧",
  closed: "🔒",
  resolved: "✅",
};

const TicketsPage = () => {
    return (
      <div className="flex-1 flex flex-col gap-y-8">
        <div>
        <h1 className="text-3xl font-bold tracking-tight">Tickets Page!</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          View and manage your tickets
        </p>
      </div>
        <div className="flex-1 flex flex-col items-center gap-y-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="mb-4 p-4 border rounded min-w-full">
              <h2 className='text-lg font-bold'>{ticket.title}</h2>
              <p className="text-gray-600 text-sm mt-2 truncate">{ticket.description}</p>
              <div className="flex items-center mt-2">
                <span className="mr-2">{TICKET_ICONS[ticket.status]}</span>
                <span>{ticket.status}</span>
              </div>
              <Link href={ticketPath(ticket.id)} className='underline mt-2 inline-block'>Go To Ticket</Link>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TicketsPage;