import { InterfaceCartElement } from "../Interfaces/InterfaceCartElement";

//S.O.L.I.D - SRP - Single Responsibility Principle
//Fetching data

export const fetchData = async (dataUrl: string): Promise<InterfaceCartElement[]> => {
  try {
    const response = await fetch(dataUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};


