// src/components/Checkout.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Payment from './Payment';

const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f5f5f5;
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const AddressFields = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HalfWidthInput = styled(Input)`
  width: 48%;
`;

const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const Checkout = ({ order }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [shippingAddress, setShippingAddress] = useState({
        street: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
    });
    const [billingAddress, setBillingAddress] = useState({
        street: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
    });

    const handleInputChange = (setStateFn) => (e) => {
        setStateFn(e.target.value);
    };

    const handleAddressChange = (addressType, field) => (e) => {
        const newAddress = { ...addressType };
        newAddress[field] = e.target.value;
        if (addressType === shippingAddress) {
        setShippingAddress(newAddress);
        } else {
        setBillingAddress(newAddress);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Update contact information, shipping address, and billing address in your backend
        // You should implement the `updateCheckoutInfo` function
        //await updateCheckoutInfo(order._id, email, name, shippingAddress, billingAddress);
    };

    return (
        <>
        <CheckoutForm onSubmit={handleSubmit}>
            <SectionTitle>Contact Information</SectionTitle>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
            id="email"
            type="email"
            value={email}
            onChange={handleInputChange(setEmail)}
            required
            />
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
            id="name"
            type="text"
            value={name}
            onChange={handleInputChange(setName)}
            required
            />

            <SectionTitle>Shipping Address</SectionTitle>
            <AddressFields>
            <div>
                <InputLabel htmlFor="shippingStreet">Street</InputLabel>
                <HalfWidthInput
                id="shippingStreet"
                type="text"
                value={shippingAddress.street}
                onChange={handleAddressChange(shippingAddress, 'street')}
                required
            />
            </div>
            <div>
            <InputLabel htmlFor="shippingCity">City</InputLabel>
            <HalfWidthInput
                id="shippingCity"
                type="text"
                value={shippingAddress.city}
                onChange={handleAddressChange(shippingAddress, 'city')}
                required
            />
            </div>
        </AddressFields>
        <InputLabel htmlFor="shippingState">State</InputLabel>
        <Input
            id="shippingState"
            type="text"
            value={shippingAddress.state}
            onChange={handleAddressChange(shippingAddress, 'state')}
            required
        />
        <AddressFields>
            <div>
            <InputLabel htmlFor="shippingCountry">Country</InputLabel>
            <HalfWidthInput
                id="shippingCountry"
                type="text"
                value={shippingAddress.country}
                onChange={handleAddressChange(shippingAddress, 'country')}
                required
            />
            </div>
            <div>
            <InputLabel htmlFor="shippingZipCode">Zip Code</InputLabel>
            <HalfWidthInput
                id="shippingZipCode"
                type="text"
                value={shippingAddress.zipCode}
                onChange={handleAddressChange(shippingAddress, 'zipCode')}
                required
            />
            </div>
        </AddressFields>

        <SectionTitle>Billing Address</SectionTitle>
        <AddressFields>
            <div>
            <InputLabel htmlFor="billingStreet">Street</InputLabel>
            <HalfWidthInput
                id="billingStreet"
                type="text"
                value={billingAddress.street}
                onChange={handleAddressChange(billingAddress, 'street')}
                required
            />
            </div>
            <div>
            <InputLabel htmlFor="billingCity">City</InputLabel>
            <HalfWidthInput
                id="billingCity"
                type="text"
                value={billingAddress.city}
                onChange={handleAddressChange(billingAddress, 'city')}
                required
            />
            </div>
        </AddressFields>
        <InputLabel htmlFor="billingState">State</InputLabel>
        <Input
            id="billingState"
            type="text"
            value={billingAddress.state}
            onChange={handleAddressChange(billingAddress, 'state')}
            required
        />
        <AddressFields>
            <div>
            <InputLabel htmlFor="billingCountry">Country</InputLabel>
            <HalfWidthInput
                id="billingCountry"
                type="text"
                value={billingAddress.country}
                onChange={handleAddressChange(billingAddress, 'country')}
                required
            />
            </div>
            <div>
            <InputLabel htmlFor="billingZipCode">Zip Code</InputLabel>
            <HalfWidthInput
                id="billingZipCode"
                type="text"
                value={billingAddress.zipCode}
                onChange={handleAddressChange(billingAddress, 'zipCode')}
                required
            />
            </div>
        </AddressFields>
        <SubmitButton type="submit">Save Information</SubmitButton>
        </CheckoutForm>
        <Payment order={order} />
    </>
    );
};

export default Checkout;