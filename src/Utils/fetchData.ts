import { ICartElement } from "../Interfaces/ICartElement";

export const fetchData = async (): Promise<ICartElement[]> => {
  try {
    const response = await fetch("./fakeData.json");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
