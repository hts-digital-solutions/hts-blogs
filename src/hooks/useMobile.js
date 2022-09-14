import { useEffect, useState } from "react";

function useMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (navigator.userAgent.includes("Mobile")) {
      setIsMobile(true);
    }
  }, []);
  return { isMobile };
}

export default useMobile;
