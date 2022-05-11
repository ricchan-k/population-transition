import { useCallback, useState } from "react"
import axios from "axios";
import { Prefecture } from "../types/api/prefecrure";

const RESAS_API_BASE_URL = "https://opendata.resas-portal.go.jp";
const API_KEY = process.env.REACT_APP_RESAS_API_KEY || "";

export const useGetPrefectureList = () =>{

    const [prefectures, setPrefectures] = useState<Array<Prefecture>>([]);

    const getPrefectureList = useCallback(()=>{
      axios
      .get(RESAS_API_BASE_URL + "/api/v1/prefectures", {
        headers: {
          "X-API-KEY": API_KEY,
        },
        data: {},
      })
      .then((result) => {
        setPrefectures(result.data.result);
      })
      .catch((error) => {
        console.log(error);
      });      
    },[]);
    return {getPrefectureList, prefectures};
}