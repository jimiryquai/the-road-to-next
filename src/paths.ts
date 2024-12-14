/**
 * Constants for application routing paths
 */
export const homePath = "/";
export const ticketsPath = "/tickets";
export const ticketPath = (ticketId: number) => `${ticketsPath}/${ticketId}`;