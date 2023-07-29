export type Category = {
  alias:string,
  title:string,
}

export type Restaurant = {
  alias: string,
  name: string,
  image_url: string,
  is_closed: boolean,
  url: string,
  review_count: number,
  categories: Array<Category>,
  rating: number,
  coordinates: { latitude: number, longitude: number },
  transactions: [],
  price: string,
  location: {
    address1: string,
    address2: string,
    address3: string,
    city: string,
    zip_code: string,
    country: string,
    state: string,
    display_address: Array<any>
  },
  phone: string,
  display_phone: string,
  distance: number
}

export type ErrorData = {
  message: string,
  code: string
}
