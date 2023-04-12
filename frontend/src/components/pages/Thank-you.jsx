// src/components/ThankYou.js
import React from 'react';
import styled from 'styled-components';

const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ThankYouTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ThankYouSubtitle = styled.h4`
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 10px;
`;

const OrderSummary = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f5f5f5;
`;

const OrderDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OrderDetail = styled.div`
  font-size: 16px;
`;

const ThankYou = ({ order }) => {
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
          <OrderDetail>Total Items: {/*{order.orderItems.length}*/}</OrderDetail>
          <OrderDetail>Total Amount: ${/*{order.totalAmount.toFixed(2)}*/}</OrderDetail>
        </OrderDetails>
      </OrderSummary>
      <p>Your order has been placed and will be shipped to you soon!</p>
    </ThankYouContainer>
  );
};

export default ThankYou;
