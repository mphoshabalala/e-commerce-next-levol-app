import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "https://fakestoreapi.com";
const ItemsContext = createContext();

function ItemsProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [categories, setCategories] = useState([]);
  const [failedToFetch, setFailedToFetch] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [electronicItems, setElectronicItems] = useState([]);
  const [womensClothes, setWomensClothes] = useState([]);
  const [mensClothes, setMensClothes] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [allClothes, setAllClothes] = useState([]);

  useEffect(() => {
    async function getItems() {
      setIsLoading(true);

      try {
        const res = await fetch(`${BASE_URL}/products`);
        const data = await res.json();
        setItems(data);
        setCategories([...new Set(data.map((item) => item.category))]);
        //set electronic items
        setElectronicItems(
          data.filter((item) => item.category === "electronics")
        );

        //setwomens'clothes
        setWomensClothes(
          data.filter((item) => item.category === "women's clothing")
        );

        //set mens clothes
        setMensClothes(
          data.filter((item) => item.category === "men's clothing")
        );

        // set jewelery
        setJewelery(data.filter((item) => item.category === "jewelery"));
        //set all clothes
        setAllClothes(
          data.filter(
            (item) =>
              item.category === "men's clothing" ||
              item.category === "women's clothing"
          )
        );
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
        setFailedToFetch(true);
      }
    }

    getItems();
  }, []);

  async function getItem(id) {
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/products/${id}`);
      const data = await res.json();
      setCurrentItem(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <ItemsContext.Provider
      value={{
        currentItem,
        isLoading,
        getItem,
        categories,
        setCurrentItem,
        items,
        electronicItems,
        womensClothes,
        mensClothes,
        jewelery,
        allClothes,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

function useItems() {
  const context = useContext(ItemsContext);
  if (context === undefined) {
    throw new Error("Item context was used outside the ItemProvider");
  }
  return context;
}

export { ItemsProvider, useItems };
