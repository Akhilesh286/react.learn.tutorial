import { useEffect, useState } from "react"

function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // ✅ Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [width, height];
}

export default useWindowSize;
