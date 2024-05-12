import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { CatalogueState } from "../types/initialEntity";

axios.defaults.baseURL = "https://663a4db61ae792804beed5bb.mockapi.io";

export const getCatalogue = createAsyncThunk<CatalogueState[]>(
  "catalogue",
  async () => {
    try {
      const response = await axios.get(
        "https://663a4db61ae792804beed5bb.mockapi.io/campers"
      );
    //   console.log("catalogue", response.data);
      // const catalogue: CatalogueState[] = response.data
      // return catalogue
      return response.data;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }
);

export const getLocations = createAsyncThunk<string[]>(
  "locations",
  async () => {
    try {
      const response = await axios.get(
        "https://663a4db61ae792804beed5bb.mockapi.io/locations"
      );
    //   console.log("locations", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }
);

// [
//   {
//     _id: "1",
//     location: "Ukraine, Kyiv",
//   },
//   {
//     _id: "2",
//     location: "Ukraine, Kharkiv",
//   },
//   {
//     _id: "3",
//     location: "Ukraine, Odesa",
//   },
//   {
//     _id: "4",
//     location: "Ukraine, Dnipro",
//   },
//   {
//     _id: "5",
//     location: "Ukraine, Donetsk",
//   },
//   {
//     _id: "6",
//     location: "Ukraine, Lviv",
//   },
//   {
//     _id: "7",
//     location: "Ukraine, Zaporizhzhia",
//   },
//   {
//     _id: "8",
//     location: "Ukraine, Kryvyi Rih",
//   },
//   {
//     _id: "9",
//     location: "Ukraine, Mykolaiv",
//   },
//   {
//     _id: "10",
//     location: "Ukraine, Sevastopol",
//   },
//   {
//     _id: "11",
//     location: "Ukraine, Mariupol",
//   },
//   {
//     _id: "12",
//     location: "Ukraine, Luhansk",
//   },
//   {
//     _id: "13",
//     location: "Ukraine, Vinnytsia",
//   },
//   {
//     _id: "14",
//     location: "Ukraine, Makiivka",
//   },
//   {
//     _id: "15",
//     location: "Ukraine, Simferopol",
//   },
//   {
//     _id: "16",
//     location: "Ukraine, Chernihiv",
//   },
//   {
//     _id: "17",
//     location: "Ukraine, Kherson",
//   },
//   {
//     _id: "18",
//     location: "Ukraine, Poltava",
//   },
//   {
//     _id: "19",
//     location: "Ukraine, Khmelnytskyi",
//   },
//   {
//     _id: "20",
//     location: "Ukraine, Cherkasy",
//   },
//   {
//     _id: "21",
//     location: "Ukraine, Chernivtsi",
//   },
//   {
//     _id: "22",
//     location: "Ukraine, Zhytomyr",
//   },
//   {
//     _id: "23",
//     location: "Ukraine, Sumy",
//   },
//   {
//     _id: "24",
//     location: "Ukraine, Rivne",
//   },
//   {
//     _id: "25",
//     location: "Ukraine, Horlivka",
//   },
//   {
//     _id: "26",
//     location: "Ukraine, Ivano-Frankivsk",
//   },
//   {
//     _id: "27",
//     location: "Ukraine, Kamianske",
//   },
//   {
//     _id: "28",
//     location: "Ukraine, Ternopil",
//   },
// ]
