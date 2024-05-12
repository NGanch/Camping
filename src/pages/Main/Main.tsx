import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getCatalogue } from "../../redux/catalogue/catalogue-operation";
import { CatalogueState, GoodsType } from "../../redux/types/initialEntity";

import FilterSearch from "../../components/FilterSearch/FilterSearch";
import Gallery from "../../components/Gallery/Gallery";
import ButtonList from "../../components/ButtonList/ButtonList";
import InfoinModal from "../../components/InfoinModal/InfoinModal";
import MainButton from "../../components/Button/MainButton";

import { useToggle } from "../../redux/hooks/useToggle";
import { MapPin, Heart, RedHeart } from "../../assets/Icons";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  MainSection,
  Container,
} from "../../components/Container/Container.styled";

// type Props = {
//     isOpen: boolean;

//   };

const Main = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4);
  const [isShowButton, setIsShowButton] = useState(false);
  const { isOpen, open, close } = useToggle();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const catalogue: CatalogueState[] = useAppSelector((state) => {
    return state.catalogue.catalogueList;
  });
  const [displayedCatalogue, setDisplayedCatalogue] = useState<
    CatalogueState[]
  >([]);

  useEffect(() => {
    dispatch(getCatalogue());
  }, [dispatch]);

  useEffect(() => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    setDisplayedCatalogue(catalogue.slice(start, end));
    setIsShowButton(end < catalogue.length);
  }, [catalogue, page, perPage]);

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

  const handleToggleTitle = (category: string) => {
    setSelectedCategory(category);
  };

  const goodsData: GoodsType | null = selectedCategory
    ? (catalogue.find(
        (category) => category._id === selectedCategory
      ) as GoodsType)
    : null;

  return (
    <MainSection>
      <Container>
        <div className="flex gap-[64px]">
          <FilterSearch />
          <div>
            <ul className="flex flex-col justify-center gap-[32px] ">
              {displayedCatalogue.map(
                ({
                  _id,
                  name,
                  price,
                  rating,
                  location,
                  description,
                  gallery,
                  details,
                }) => (
                  <li
                    className="flex gap-[24px] p-[24px] w-[888px] border-tritiaryLightGray border-solid border-[1px] rounded-[20px] "
                    key={_id}
                    onClick={() => handleToggleTitle(_id)}
                  >
                    <Gallery gallery={gallery} count={1} />
                    <div>
                      <div className="flex justify-between items-center">
                        <h2 className="text-primaryBlack text-[24px] font-[600] leading-[1.25] ">
                          {name}
                        </h2>
                        <div className="flex items-center gap-[10px]">
                          <p className="text-primaryBlack text-[24px] font-[600] leading-[1.25] ">
                            €{price}
                          </p>
                          <button
                            type="button"
                            onClick={() => handleToggleFavorites(_id)}
                            className="bg-transparent w-[30px] p-[2px] "
                          >
                            {favorites[_id] ? <RedHeart /> : <Heart />}
                          </button>
                        </div>
                      </div>
                      <div className="mt-[8px] flex gap-[16px]">
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
                      <p className="mt-[24px] mb-[24px] w-[525px] h-[24px] text-tritiaryGray text-[16px] font-[400] leading-[1.5] overflow-hidden">
                        {description}
                      </p>
                      <ButtonList
                        details={details}
                        width={20}
                        height={20}
                        count={6}
                      />

                      <MainButton
                        onClick={open}
                        type={"button"}
                        label={"Show more"}
                      />
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        {isOpen && goodsData && (
          <InfoinModal
            isOpen={isOpen}
            handleClose={close}
            goodsData={goodsData}
          />
        )}
        {isShowButton && (
          <button
            className="flex ml-auto mt-[50px] w-[166px] p-[16px_40px] bg-transparent border-tritiaryGray hover:border-secondaryExoticPink focus:border-secondaryExoticPink border-solid border-[1px] rounded-[200px] text-[16px] text-primaryBlack font-[500] leading-[1.3] "
            onClick={handleOnClick}
          >
            Load more
          </button>
        )}
        <ToastContainer />
      </Container>
    </MainSection>
  );
};
export default Main;
