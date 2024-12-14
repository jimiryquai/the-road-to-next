export interface Ticket {
    id: number;
    title: string;
    description: string;
}

export const initialTickets: Ticket[] = [
    {
        id: 1,
        title: "Bug in production",
        description: "Users are experiencing slow loading times"
    },
    {
        id: 2,
        title: "Feature request",
        description: "Add dark mode support"
    },
    {
        id: 3,
        title: "Database optimization",
        description: "Need to improve query performance"
    }
];