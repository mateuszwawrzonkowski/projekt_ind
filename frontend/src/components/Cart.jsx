import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";

// import { Header, Loading } from "../components";
// import { CartItem, BookTrips } from "../containers";

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;

export default function Cart() {
  const { data, loading, error } = useQuery(GET_CART_ITEMS);

  if (loading) return <p>loading</p>;
  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <>
      <h1>My Cart</h1>
      {data?.cartItems.length === 0 ? (
        <p data-testid="empty-message">No items in your cart</p>
      ) : (
        <>
          {/* {data?.cartItems.map((launchId) => (
            <CartItem key={launchId} launchId={launchId} />
          ))}

          <BookTrips cartItems={data?.cartItems || []} /> */}
        </>
      )}
    </>
  );
}
