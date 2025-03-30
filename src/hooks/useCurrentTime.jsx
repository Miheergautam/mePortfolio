import axios from "axios";
import { useEffect, useState } from "react";

export default function useCurrentTime() {
  const [currentTime, setCurrentTime] = useState("");
  const [timeInterval] = useState(60000);

  const fetchTime = async () => {
    try {
      const response = await axios.get(
        "http://worldtimeapi.org/api/timezone/Asia/Kolkata"
      );
      const zone = response.data.timezone.split("/")[0];
      const time = response.data.datetime
        .split("T")[1]
        .split(".")[0]
        .slice(0, 5);
      setCurrentTime(`${zone}, ${time}`);
    } catch (error) {
      console.log("Error fetching time:", error);
    }
  };

  useEffect(() => {
    fetchTime(); 
    const intervalId = setInterval(fetchTime, timeInterval); 

    return () => clearInterval(intervalId);
  }, [timeInterval]); 

  return { currentTime };
}
