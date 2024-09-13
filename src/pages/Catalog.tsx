import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getCatalogue } from "../redux/catalogue/catalogue-operation";
import { CatalogueState } from "../redux/types/initialEntity";

import FilterSearch from "../components/FilterSearch/FilterSearch";
import Gallery from "../components/Gallery/Gallery";
import ButtonList from "../components/ButtonList/ButtonList";
import MainButton from "../components/Button/MainButton";
import SecondButton from "../components/Button/SecondButton";

import { MapPin, Heart, RedHeart } from "../assets/Social";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Filters = {
  locations: string;
  vehicleEquipments: Record<string, boolean>;
  vehicleTypes: string;
};

const Catalog = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const perPage = 4;
  const [isShowButton, setIsShowButton] = useState(false);

  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const catalogue: CatalogueState[] = useAppSelector((state) => {
    return state.catalogue.catalogueList;
  });

  const [filteredCatalogue, setFilteredCatalogue] = useState<CatalogueState[]>(
    []
  );

  const [filters, setFilters] = useState<Filters>({
    locations: "",
    vehicleEquipments: {
      AC: false,
      Automatic: false,
      Kitchen: false,
      TV: false,
      Bathroom: false,
    },
    vehicleTypes: "",
  });

  useEffect(() => {
    dispatch(getCatalogue());
  }, [dispatch]);

  console.log(catalogue);

  const applyFilters = useCallback((): CatalogueState[] => {
    let filtered = catalogue;

    if (filters.locations) {
      filtered = filtered.filter((item) => item.location === filters.locations);
    }

    filtered = filtered.filter((item) =>
      Object.entries(filters.vehicleEquipments).every(
        ([key, value]) => !value || item[key as keyof CatalogueState] === true
      )
    );

    return filtered;
  }, [catalogue, filters]);

  useEffect(() => {
    applyFilters(); // Застосовуємо фільтри до каталогу
  }, [catalogue, filters, applyFilters]);

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
    setPage(1); // Скидаємо сторінку при зміні фільтрів
  };

  useEffect(() => {
    const start = (page - 1) * perPage;
    const filteredData = applyFilters();
    const paginatedData = filteredData.slice(start, start + perPage);
    setFilteredCatalogue(paginatedData);
    setIsShowButton(filteredData.length > start + perPage);
  }, [catalogue, filters, page, applyFilters]);

  useEffect(() => {
    // Завантаження збереженого стану з локального сховища при першому рендері компонента
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "{}"
    );
    setFavorites(savedFavorites);
  }, []);

  const handleToggleFavorites = (category: string) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = {
        ...prevFavorites,
        [category]: !prevFavorites[category],
      };
      // Зберігання оновленого стану у локальному сховищі при кожній зміні
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const handleOnClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleClick = (id: string) => {
    navigate(`/campers/${id}`);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col">
          <div className="w-full flex flex-col xl:flex-row gap-[64px]">
            <FilterSearch onFilterChange={handleFilterChange} />
            <div>
              {filteredCatalogue.length > 0 ? (
                <ul className="flex flex-wrap flex-col md:flex-row  justify-center gap-[10px] lg:gap-[32px] ">
                  {filteredCatalogue.map(
                    ({
                      id,
                      name,
                      price,
                      rating,
                      location,
                      description,
                      gallery,
                    }) => (
                      <li
                        className="flex flex-col items-center xl:flex-row gap-[24px] p-[24px] w-full  md:w-[calc((100%-24px)/2)] xl:w-[888px] border-tritiaryLightGray border-solid border-[1px] rounded-[20px] "
                        key={id}
                      >
                        <Gallery gallery={gallery} count={1} />

                        <div className="flex flex-col w-full">
                          <div className="w-full flex justify-between items-center">
                            <h2 className="text-primaryBlack text-[18px] xl:text-[24px] font-[600] leading-[1.25] w-[130px] md:w-full ">
                              {name}
                            </h2>
                            <div className="flex items-center gap-[10px]">
                              <p className="text-primaryBlack w-full text-[16px] xl:text-[24px] font-[600] leading-[1.25] ">
                                €{price}
                              </p>
                              <button
                                type="button"
                                onClick={() => handleToggleFavorites(id)}
                                className="bg-transparent w-[30px] p-[2px] "
                              >
                                {favorites[id] ? <RedHeart /> : <Heart />}
                              </button>
                            </div>
                          </div>
                          <div className="w-full xl:w-[270px] flex justify-between items-center mt-[8px] gap-[16px]">
                            <div>
                              <p className="text-primaryBlack text-[16px] font-[400] leading-[1.5] ">
                                {rating}(Reviews)
                              </p>
                            </div>
                            <div className="flex">
                              <MapPin />
                              <p className="text-primaryBlack text-[16px] font-[400] leading-[1.5] ">
                                {location}
                              </p>
                            </div>
                          </div>
                          <p className="mt-[24px] mb-[24px] w-full lg:w-[525px] h-[24px] text-tritiaryGray text-[16px] font-[400] leading-[1.5] overflow-hidden">
                            {description}
                          </p>
                          <ButtonList width={20} height={20} count={6} />
                          <div className="self-center xl:self-start">
                            <MainButton
                              onClick={() => handleClick(id)}
                              type={"button"}
                              label={"Show more"}
                            />
                          </div>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              ) : (
                <p className="text-primaryBlack text-center">
                  Немає доступних карток
                </p>
              )}
            </div>
          </div>
          <div className="self-center">
            {isShowButton && (
              <SecondButton
                onClick={handleOnClick}
                type={"button"}
                label={"Load more"}
              />
            )}
          </div>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};
export default Catalog;
