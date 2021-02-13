export interface ITodo {
  id: string;
  userId: string;
  title: string;
  completed: boolean;
  createdAt?: FirebaseFirestore.Timestamp;
  updatedAt?: FirebaseFirestore.Timestamp;
}

export enum ITodoStatusEnum {
  ALL = "All",
  ACTIVE = "Active",
  COMPLETED = "Completed",
}
