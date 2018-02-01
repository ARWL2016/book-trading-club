export interface BorrowRequest {
  id?: string;
  requesterId: string;
  requesterName: string;
  ownerId: string;
  ownerName: string;
  bookId: string;
  bookTitle: string;
  dateRequested: string;
  status: string;
}
