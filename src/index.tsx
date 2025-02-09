import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "antd/dist/reset.css";
import { AuthContextProvider } from "./context/Auth/AuthState";
import { CartProvider } from "./context/Cart/CartState";
import { AddressProvider } from "./context/Address/AddrssState";
import { OrderItemProvider } from "./context/OrderItem/OrderItemState";
import { OrderProvider } from "./context/Order/OrderState";
import { ProductProvider } from "./context/Product/ProductState";
import { TransactionProvider } from "./context/Transaction/TransactionState";
import { ShipmentProvider } from "./context/Shipment/ShipmentState";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <ShipmentProvider>
      <TransactionProvider>
        <OrderProvider>
          <OrderItemProvider>
            <AddressProvider>
              <CartProvider>
                <ProductProvider>
                  <AuthContextProvider>
                    <QueryClientProvider client={queryClient}>
                      <App />
                    </QueryClientProvider>
                  </AuthContextProvider>
                </ProductProvider>
              </CartProvider>
            </AddressProvider>
          </OrderItemProvider>
        </OrderProvider>
      </TransactionProvider>
    </ShipmentProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
