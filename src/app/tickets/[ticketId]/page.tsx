import {initialTickets as tickets} from '../../../data';

type TicketPageProps = {
    params: Promise<{
      ticketId: string;
    }>;
  };
  
const TicketPage = async ({ params }: TicketPageProps) => {
    const { ticketId } = await params;
    const ticket = tickets.find((ticket) => ticket.id === Number(ticketId));

    if (!ticket) {
      return (
        <div>
          <h2 className="text-lg">Ticket not found</h2>
        </div>
      );
    }
  
    return (
      <div>
          <h2 className="text-lg">{ticket.title}</h2>
          <p className="text-sm">{ticket.description}</p>
      </div>
    );
  };
  
  export default TicketPage;