const API = 'http://localhost:5008/categories';

export const categoriesService = async () => {
  try {
    const response = await fetch(API);
    if (!response.ok) {
      throw new Error('Failed to fetch tours data!');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
};
