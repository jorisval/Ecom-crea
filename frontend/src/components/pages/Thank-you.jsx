import React, { useContext } from 'react';
import styled from 'styled-components';
import theme from '../utils/Variables';
import { CartContext } from '../utils/context';

const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: ${theme.layout.spaceBetween30};
  margin-bottom: ${theme.layout.spaceBetween30};
  width: 80%;
  padding: 20px;

  @media (min-width: ${theme.breakpoints.up.medium}) {
      width: 50%;
  }
`;

const ThankYouTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 800;
  color: ${theme.colors.titleH1};
  margin-bottom: ${theme.layout.spaceBetween20};

  @media (min-width: ${theme.breakpoints.up.medium}) {
      font-size: 1.75rem;
  }
`;

const ThankYouSubtitle = styled.h4`
  font-size: 1.125rem;
  font-weight: normal;
  argin-bottom: ${theme.layout.spaceBetween10};

  @media (min-width: ${theme.breakpoints.up.medium}) {
      font-size: 1.5rem;
  }
`;

const OrderSummary = styled.div`
  width: 100%;
  padding: ${theme.layout.spaceBetween20};;
  margin-bottom: ${theme.layout.spaceBetween20};
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f5f5f5;
`;

const OrderDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OrderDetail = styled.div`
  font-size: 1rem;
`;

const ThankYou = () => {
  const { orderInfos } = useContext(CartContext);

  return (
    <ThankYouContainer>
      <ThankYouTitle>Thank you for your order!</ThankYouTitle>
      <ThankYouSubtitle>Order Summary</ThankYouSubtitle>
      <OrderSummary>
        <OrderDetails>
          <OrderDetail>Order ID: {/*{order._id}*/}</OrderDetail>
          <OrderDetail>Date: {/*{new Date(order.createdAt).toLocaleDateString()}*/}</OrderDetail>
        </OrderDetails>
        <OrderDetails>
          <OrderDetail>Total Items: {orderInfos.orderItems.length}</OrderDetail>
          <OrderDetail>Total Amount: ${orderInfos.totalAmount}</OrderDetail>
        </OrderDetails>
      </OrderSummary>
      <p>Your order has been placed and will be shipped to you soon!</p>
    </ThankYouContainer>
  );
};

export default ThankYou;
