class Store {
  id!: number | string;
  name!: string;
  address!: string;
  open?: string;
  phone?: string;
  images?: Array<string>;
  like?: boolean;
}

export default Store;