export interface BorrowRequest {
  requesterId: string;
  requesterName: string;
  ownerId: string;
  ownerName: string;
  bookId: string;
  dateRequested: string;
  status: string;
}
