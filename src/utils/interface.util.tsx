import { ChangeEvent, ReactNode, RefObject } from "react"
import { 
  IAddress, 
  ICartItem, 
  IOrder, 
  IOrderItem, 
  IProduct, 
  IShipment, 
  ITransaction 
} from "./freshcart.util"

export interface IStorage {
    keepData(key: string, data: object | string ): void
    fetchData(key: string): string | null
}

export interface ITitle {
    text: string,
    size?: string,
    color?: string
    margin?: {
        top?: string
        bottom?: string
    }

}

export interface ITextInput{
    type: 'email' | 'text'
    ref?: RefObject<HTMLInputElement>
    showFocus?: boolean
    className?: string
    defaultValue?: string
    readonly?: boolean
    id?: string
    hasIcon?: boolean
    icon?: string
    name?: string
    placeholder?: string
    autoComplete?: boolean
    onChange(e: ChangeEvent<HTMLInputElement>): void
}

export interface IPasswordInput{
    ref?: RefObject<HTMLInputElement>
    showFocus?: boolean
    className?: string
    defaultValue?: string
    readonly?: boolean
    id?: string
    hasIcon?: boolean
    icon?: string
    name?: string
    placeholder?: string
    autoComplete?: boolean
    onChange(e: ChangeEvent<HTMLInputElement>): void
}


export interface IRadioInput{
    name: string
    options?: { 
        label: string, 
        value: string 
    } []
    defaultValue?: string
    className?: string
    id?: string
    emailText?: string;
    phoneNumber?: string;
    onChange(e: ChangeEvent<HTMLInputElement>): void
}

export interface IButton{
    text: string
    onClick(e: any): void
}

export interface IIconButton {
    width?: string
    height?: string
    icon: {
        type: 'web' | 'image'
        name?: string
        url?: string
        width?: string
        height?: string
    }
}

export interface ICheckbox {
  label: string;
  checked: boolean;
  onChange(e: ChangeEvent<HTMLInputElement>): void
}

export interface ILogo {
  src: string;
  alt: string;
  className?: string;
}

export interface ITag {
  label: string;
  className?: string;
  onRemove?: () => void;
}

export interface IHeading {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export interface IProgressTracker {
  steps: string[];
  currentStep: number;
}

export interface IBreadcrumbs {
  links: { to: string; label: string }[];
}

export interface INavLink {
  to: string;
  label: string;
}

export interface INavigation {
  links: { to: string; label: string }[];
}

export interface IMenu {
  items: string[];
}

export interface IVideo {
  src: string;
  controls?: boolean;
  autoPlay?: boolean;
}

export interface IAuthState {
  user: Record<string, any> | null;
}

export interface IAuthProvider {
  children: ReactNode;
}

export interface IProductState {
    products: IProduct[];
    selectedProduct: IProduct | null;
    loading: boolean;
    error: string | null;
  }
  
export interface IProductProvider {
    children: ReactNode;
  }

export interface ICartState {
    items: ICartItem[];
    totalAmount: number;
    totalItems: number;
  }

export interface ICartProvider {
    children: ReactNode;
  }

export interface IOrderProvider {
    children: ReactNode;
  }

export interface IOrderState {
    orders: IOrder[];
    loading: boolean;
    error: string | null;
}

export interface IOrderitemProvider {
    children: ReactNode;
  }

export interface IOrderItemState {
    orderItems: IOrderItem[];
    loading: boolean;
    error: string | null;
}
export interface ITransactionProvider {
    children: ReactNode;
  }
export interface ITransactionState {
    transactions: ITransaction[];
    loading: boolean;
    error: string | null;
  }

export interface IShipmentState {
    shipments: IShipment[];
  }
export interface IAddressState {
    addresses: IAddress[];
  }

export interface IProvider {
    children: ReactNode;
  }

export interface ISignupForm {
    setSignupSuccess: (value: any) => void;
  }
  
export interface ISignupData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }


export interface ICountryOption {
  value: string;
  label: string;
}

export interface IStateOption {
  value: string;
  label: string;
}