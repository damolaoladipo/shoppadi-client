import { ChangeEvent, ReactNode, RefObject } from "react"
import { IProduct } from "./freshcart.util"

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