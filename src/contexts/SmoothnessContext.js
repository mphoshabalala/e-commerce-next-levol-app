import { createContext, useContext, useEffect, useState } from "react";

const SmoothnessContext = createContext();

function SmoothnessProvider({ children }) {
  const [backgroundImageScale, setBackgroundImageScale] = useState({});

  useEffect(() => {
    function handleScroll(e) {
      const currentPosition = window.scrollY;

      if (e.target && e.target.classList.contains(".hoverable")) {
        const currentClass = e.target.className.split(" ")[0];
        const currentBody = document.querySelector(`.${currentClass}`);
        if (currentBody) {
          const containerRect = currentBody.getBoundingClientRect();

          if (
            containerRect.top <= currentPosition &&
            containerRect.bottom > currentPosition
          ) {
            setBackgroundImageScale((prevScale) => ({
              ...prevScale,
              [currentClass]: "scale(1.2)",
            }));
          } else {
            setBackgroundImageScale((prevScale) => ({
              ...prevScale,
              [currentClass]: "scale(1.0)",
            }));
          }
        }
      }
    }

    window.addEventListener("scroll", (e) => handleScroll(e));

    return () => {
      window.removeEventListener("scroll", (e) => handleScroll(e));
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <SmoothnessContext.Provider
      value={{
        backgroundImageScale,
      }}
    >
      {children}
    </SmoothnessContext.Provider>
  );
}

function useSmoothness() {
  const context = useContext(SmoothnessContext);
  if (context === undefined) {
    throw new Error("useSmoothness must be used within a SmoothnessProvider");
  }
  return context;
}

export { SmoothnessProvider, useSmoothness };
