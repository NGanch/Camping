export type initialStateCatalogueType = {
  catalogueList: CatalogueState[];
  locationsList: string[];
};

export type CatalogueState = {
  _id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  description: string;
  details: {
    airConditioner: number;
    bathroom: number;
    kitchen: number;
    beds: number;
    adults: number;
    children: number;
    engine: string;
    transmission: string;
    TV: number;
    CD: number;
    radio: number;
    shower: number;
    toilet: number;
    freezer: number;
    hob: number;
    microwave: number;
    gas: string;
    water: string;
  };
  gallery: string[];

  reviews: [
    {
      reviewer_name: string;
      reviewer_rating: number;
      comment: string;
    },
    {
      reviewer_name: string;
      reviewer_rating: number;
      comment: string;
    }
  ];
};

export type GoodsType = NonNullable<{
  _id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  description: string;
  details: {
    airConditioner: number;
    bathroom: number;
    kitchen: number;
    beds: number;
    adults: number;
    children: number;
    engine: string;
    transmission: string;
    TV: number;
    CD: number;
    radio: number;
    shower: number;
    toilet: number;
    freezer: number;
    hob: number;
    microwave: number;
    gas: string;
    water: string;
  };
  gallery: string[];
  reviews: {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }[];
}>;

// export type LicationsState = {

// }
