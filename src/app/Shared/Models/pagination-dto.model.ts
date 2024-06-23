export interface PaginationDto<T> {
  value: T[];
  pageNumber: number;
  totalCount: number;
}




export interface INavigationParams {
  component: string,
  rowIndex: number,
  pageSize: number
}