class Store {
  id: number | string;
  name: string;
  address: string;
  open?: string;
  phone?: string;
  images?: Array<string>;
  like?: boolean;
  constructor(
    id: number | string,
    name: string,
    address: string,
    open?: string,
    phone?: string,
    images?: Array<string>,
    like?: boolean,
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.open = open;
    this.phone = phone;
    this.images = images;
    this.like = like;
  }

  static fromObject(object: Object): Store {
    return object as Store;
  }

  static fromJson(source: string): Store {
    return this.fromObject(JSON.parse(source));
  }
}

export default Store;