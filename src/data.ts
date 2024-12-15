export interface Ticket {
    id: number;
    title: string;
    description: string;
    status: "new" | "open" | "in-progress" | "closed" | "resolved";
}

export const initialTickets: Ticket[] = [
    {
        id: 1,
        title: "Bug in production",
        description: "Users are experiencing slow loading times",
        status: "open" as const
    },
    {
        id: 2,
        title: "Feature request",
        description: "Add dark mode support",
        status: "closed" as const
    },
    {
        id: 3,
        title: "Database optimization",
        description: "Need to improve query performance",
        status: "in-progress" as const
    }
];