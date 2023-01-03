export enum ApiStatus {
  PENDING,
  FULFILLED,
  REJECTED,
}

export interface ApiResponseInterface<T> {
  data?: T;
  status?: ApiStatus;
}

export interface UserEntity {
  id: number;
  email: string;
  first_name: string;
  avatar: string;
  last_name: string;
}
