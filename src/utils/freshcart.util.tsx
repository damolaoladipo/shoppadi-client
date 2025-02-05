import { ShipmentStatus } from "./enums.utils";


// Role Interface
export interface IRole {
  user: string;
  name: string;
  description: string;
  slug: string;
  users: Array<string | any>;
  permissions: Array<string>;
  createdAt: string;
  updatedAt: string;
  id: string;
}

// User Interface
export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  avatar: string;
  phoneNumber: string;
  phoneCode: string;
  countryPhone: string;
  userType: string;
  accountStatus: string;
  isSuper: boolean;
  isAdmin: boolean;
  isMerchant: boolean;
  isGuest: boolean;
  isUser: boolean;
  isActive: boolean;
  loginLimit: number;
  merchant: string | any;
  guest: string | any;
  role: string | any;
  cart: Array<string | any>;
  wishlist: Array<string | any>;
  address: Array<IAddress>;
  createdAt: string;
  updatedAt: string;
  id: string;
}

// Address Interface
export interface IAddress {
  user: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

// Result Interface
export interface IResult {
  error: boolean;
  message: string;
  code: number;
  data: any;
}

// Token Interface
export interface IToken {
  user: string;
  token: string;
  expiry: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

// Product Interface
export interface IProduct {
  discountedPrice?: any;
  name: string;
  description?: string;
  price: number;
  category?: string;
  tag?: string[];
  stockQuantity?: number;
  image: string;
  merchant?: string;
  inStock?: boolean;
  discount: number;
  count?: number;
  slug?: string;
  rating?: number
  createdAt?: string;
  updatedAt?: string;
  id: number | string;
  onAddToCart: (product: IProduct) => void;
  onClick: () => void;
}

// Cart Interface
export interface ICart {
  user: string;
  products: ICartProduct[];
  coupon: string | null;
  checkout: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface ICartProduct {
  id: string;
  quantity: number;
}

// Order Interface
export interface IOrder {
  user: string;
  address: IAddress;
  orderDate: string;
  status: string;
  totalAmount: number;
  cartItems: { productId: string; quantity: number }[];
  payment: {
    method: string;
    status: string;
    transactionId: string;
  };
  shipment: {
    carrier: string;
    trackingNumber: string;
    status: string;
    shipmentDate: string;
  };
  createdAt: string;
  updatedAt: string;
  id: string;
}

// Order Item Interface
export interface IOrderItem {
  user: string;
  product: string;
  order: string;
  quantity: number;
  pricePerUnit: number;
  totalPrice: number;
  discount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

// Transaction Interface
export interface ITransaction {
  user: string;
  order: string;
  amount: number;
  method: string;
  currency: string;
  paymentPartner: string;
  status: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

// Payment Partner Interface
export interface IPaymentPartner {
  name: string;
  apiKey: string;
  apiSecret: string;
  webhookUrl: string;
  supportedCurrencies: string[];
  settings: { [key: string]: any };
  slug: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

// Wishlist Interface
export interface IWishlist {
  user: string;
  products: Array<IProduct>;
  createdAt: string;
  updatedAt: string;
  id: string;
}

// Shipment Interface
export interface IShipment {
  user: string;
  order: string;
  carrier: string;
  address: IAddress;
  trackingNumber: string;
  status: ShipmentStatus;
  shipmentDate: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

// Notification Interface
export interface INotification {
  user: string;
  message: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface ICartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageURL: string;
}

export interface IBillingAddress {
  firstName: string;
  lastName: string;
  company: string;
  streetAddress: string;
  country: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  email: string; 
}