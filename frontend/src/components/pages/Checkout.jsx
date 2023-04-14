import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../utils/context/index';
import { useNavigate } from 'react-router-dom';

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f5f5f5;
`;

const FormTitle = styled.h3`
  margin-bottom: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const FormSection = styled.div`
  margin-bottom: 30px;
`;

const StyledLabel = styled.label`
  margin-bottom: 5px;
  display: block;
`;

const StyledInput = styled.input`
  margin-bottom: 20px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;

  @media (min-width: 768px) {
    width: 48%;
  }
`;


const CardDetails = styled.div`
  margin-bottom: 20px;
`;


const StyledSelect = styled.select`
  margin-bottom: 20px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;

  @media (min-width: 768px) {
    width: 48%;
  }
`;

const StyledButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const Checkout = () => {
    const { orderInfos, setOrderInfos } = useContext(CartContext);
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [billingAddressOption, setBillingAddressOption] = useState('same');
    const navigate = useNavigate();

    const setCustomerInfo = (field, value) => {
        setOrderInfos({
        ...orderInfos,
        [field]: value,
        });
    };

    const setAddressInfo = (type, field, value) => {
        setOrderInfos({
        ...orderInfos,
        [type]: { ...orderInfos[type], [field]: value },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form data and make API calls as needed
        navigate('/thank-you');
    };

    const addressFields = (type) => (
        <FormRow>
        <FormGroup>
            <StyledLabel htmlFor={`${type}Street`}>Street</StyledLabel>
            <StyledInput
            type="text"
            id={`${type}Street`}
            value={orderInfos[type].street}
            onChange={(e) => setAddressInfo(type, 'street', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <StyledLabel htmlFor={`${type}City`}>City</StyledLabel>
            <StyledInput
            type="text"
            id={`${type}City`}
            value={orderInfos[type].city}
            onChange={(e) => setAddressInfo(type, 'city', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <StyledLabel htmlFor={`${type}State`}>State</StyledLabel>
            <StyledInput
            type="text"
            id={`${type}State`}
            value={orderInfos[type].state}
            onChange={(e) => setAddressInfo(type, 'state', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <StyledLabel htmlFor={`${type}Zip`}>ZIP Code</StyledLabel>
            <StyledInput
            type="text"
            id={`${type}Zip`}
            value={orderInfos[type].zipCode}
            onChange={(e) => setAddressInfo(type, 'zipCode', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <StyledLabel htmlFor={`${type}Country`}>Country</StyledLabel>
            <StyledInput
            type="text"
            id={`${type}Country`}
            value={orderInfos[type].country}
            onChange={(e) => setAddressInfo(type, 'country', e.target.value)}
            />
        </FormGroup>
        </FormRow>
    );

    const cardDetails = () => (
        <CardDetails>
        <FormRow>
            <FormGroup>
                <StyledLabel htmlFor="cardNumber">Card Number</StyledLabel>
                <StyledInput type="text" id="cardNumber" />
            </FormGroup>
            <FormGroup>
                <StyledLabel htmlFor="expirationDate">Expiration Date</StyledLabel>
                <StyledInput type="text" id="expirationDate" />
            </FormGroup>
            <FormGroup>
                <StyledLabel htmlFor="securityCode">Security Code</StyledLabel>
                <StyledInput type="text" id="securityCode" />
            </FormGroup>
        </FormRow>
        </CardDetails>
    );

    return (
        <CheckoutContainer>
            <form onSubmit={handleSubmit}>
                <FormSection>
                <FormTitle>Contact Information</FormTitle>
                <FormRow>
                    <FormGroup>
                    <StyledLabel htmlFor="name">Name</StyledLabel>
                    <StyledInput
                        type="text"
                        id="name"
                        value={orderInfos.name}
                        onChange={(e) => setCustomerInfo('name', e.target.value)}
                    />
                    </FormGroup>
                    <FormGroup>
                    <StyledLabel htmlFor="email">Email</StyledLabel>
                    <StyledInput
                        type="email"
                        id="email"
                        value={orderInfos.email}
                        onChange={(e) => setCustomerInfo('email', e.target.value)}
                    />
                    </FormGroup>
                </FormRow>
                </FormSection>
                <FormSection>
                <FormTitle>Shipping Address</FormTitle>
                {addressFields('shippingAddress')}
                </FormSection>
                <FormSection>
                <FormTitle>Billing Address</FormTitle>
                <FormRow>
                    <FormGroup>
                    <StyledLabel htmlFor="billingAddressOption">Billing Address</StyledLabel>
                    <StyledSelect
                        id="billingAddressOption"
                        value={billingAddressOption}
                        onChange={(e) => setBillingAddressOption(e.target.value)}
                    >
                        <option value="same">Same as shipping address</option>
                        <option value="different">Use a different billing address</option>
                    </StyledSelect>
                    </FormGroup>
                </FormRow>
                {billingAddressOption === 'different' && addressFields('billingAddress')}
                </FormSection>
                <FormSection>
                <FormTitle>Payment Method</FormTitle>
                <FormRow>
                    <FormGroup>
                    <StyledLabel htmlFor="paymentMethod">Payment Method</StyledLabel>
                    <StyledSelect
                        id="paymentMethod"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                        <option value="card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                    </StyledSelect>
                    </FormGroup>
                </FormRow>
                {paymentMethod === 'card' && cardDetails()}
                </FormSection>
                <FormSection>
                <StyledButton type="submit">Place Order</StyledButton>
                </FormSection>
            </form>
            </CheckoutContainer>
    );
      
};

export default Checkout;