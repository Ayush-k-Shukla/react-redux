import axios from 'axios';
import { UserEntity } from '../../core/core';

const baseUrl = `https://reqres.in/api/users`;

export const fetchAllUsers = async (): Promise<UserEntity[]> => {
  try {
    const response = await axios.get(`${baseUrl}?page=1`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchSingleUser = async (id: number): Promise<UserEntity> => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
