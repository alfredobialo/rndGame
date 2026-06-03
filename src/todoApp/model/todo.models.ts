export interface TodoItem {
  id: string;
  title: string;
  tag: string;
  isDone: boolean;
}

export interface PaginatedResponse<T> {
  usePagination: boolean;
  pageSize: number;
  currentPage: number;
  totalRecord: number;
  totalPages: number;
  data: T[];
  success: boolean;
  message: string;
  hasErrors: boolean;
  errors: string[];
  code: number;
}

export type TodoResponse = PaginatedResponse<TodoItem>;
