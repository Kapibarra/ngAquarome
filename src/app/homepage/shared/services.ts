
export class Service {
    name: string;
    description: string;
    fromPrice: string;
    image: string;
    imageLoaded: boolean = false;
  constructor(service: Service) {
    this.name = service.name;
    this.description = service.description;
    this.fromPrice = service.fromPrice;
    this.image = service.image
  }
}

// this.name = service.name;
// this.timesWithPrices = service.timesWithPrices;
// this.selectedTime = service.timesWithPrices[0];
// this.categories = service.categories;
// this.description = service.description;
// this.id = service.id;
// this.image = `https://firebasestorage.googleapis.com/v0/b/my-thai-ac925.appspot.com/o/service%2F${service.id}.png?alt=media`;
// this.popularity = service.popularity;

// name: string;
// categories: Category[];
// description: string;
// timesWithPrices: AmountWithPrice[];
// imageLoad: boolean = false;
// selectedTime?: AmountWithPrice;
// id: number;
// image: string;
// popularity: number;