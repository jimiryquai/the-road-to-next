import clsx from 'clsx';
import Link from 'next/link';
import {initialTickets as tickets} from '@/data';
import { ticketPath } from '@/paths';

const CheckIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    </svg>
  );
}

const PencilIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
  );
}

const CloseIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

const OpenIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );
}

const NewIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
} 

const TICKET_ICONS = {
  new: <NewIcon />,
  open: <OpenIcon />,
  "in-progress": <PencilIcon />,
  closed: <CloseIcon />, 
  resolved: <CheckIcon />
};

const TicketsPage = () => {
    return (
      <div className="flex-1 flex flex-col gap-y-8 animate-fade-in-from-top">
        <div>
        <h1 className="text-3xl font-bold tracking-tight">Tickets Page!</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          View and manage your tickets
        </p>
      </div>
        <div className="flex-1 flex flex-col items-center gap-y-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="mb-4 p-4 border rounded min-w-full">
              <h2 className='text-lg font-semibold truncate'>{ticket.title}</h2>
              <p className={clsx('text-slate-500 text-sm truncate', {'line-through': ticket.status === 'closed'})} title={ticket.description} >{ticket.description}</p>  
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