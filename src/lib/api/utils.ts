import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export async function apiGetRequest<T>(
  url: string
): Promise<T | undefined> {
  try {
    const response = await apiClient.get(url);

    return response.data;
  } catch (error) {
    if (error) {
      console.log(error);
    }
    throw error;
  }
}

export default apiGetRequest;
