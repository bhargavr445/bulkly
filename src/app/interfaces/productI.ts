export interface ProductI {
    actualPrice:      number;
    description:      string;
    name:             string;
    offerPrice:       number;
    orderCutOffDate:  string;
    ordersPlaced:     number;
    ordersRequired:   number;
    productId:        number;
    productLiveTime:  string;
    productMediaData: ProductMediaData;
}

interface ProductMediaData {
    gif:    any;
    images: any[];
    logo:   any;
    videos: string[];
}
