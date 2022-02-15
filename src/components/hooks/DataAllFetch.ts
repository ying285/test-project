import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

const DataFetch = (url: string) => {
  const [getData, setGetData] = useState("");
  const token = useSelector((state: RootState) => state.login.token);
  console.log(token);

  useEffect(() => {
    if (token) {
      fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setGetData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token, url]);

  return getData;
};

export default DataFetch;
