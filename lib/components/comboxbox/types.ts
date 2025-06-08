export interface OptionType {
  id: string | number;
  name: string;
}

export interface ApiResponse<T> {
  data: T[];
  page: number;
  totalPages: number;
}
