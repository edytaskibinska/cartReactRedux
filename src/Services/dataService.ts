// services/dataService.ts
import { InterfaceCartElement } from "../Interfaces/InterfaceCartElement";

export const fetchDataService = async (dataUrl: string): Promise<InterfaceCartElement[]> => {
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

  