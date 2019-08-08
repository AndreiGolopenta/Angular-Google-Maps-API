export interface Hotel {
  id: number;
  selected: boolean;
  displayInfo: boolean;
  name: string;
  image: {
    link: string;
    top: string;
    left: string;
    width: string;
    height: string;
  };
  stars: string;
  latitude: number;
  longitude: number;
  reviewsNumber: number;
  ratingNumber: number;
  address: string;
  plusCodes: string;
  website: string;
  phone: string;
  detail: string;
}
