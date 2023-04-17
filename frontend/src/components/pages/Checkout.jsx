import React, { useState, useContext } from 'react';
import {
  CheckoutContainer,
  FormTitle,
  FormGroup,
  FormRow,
  FormSection,
  StyledLabel,
  StyledInput,
  CardDetails,
  StyledButton,
  StyledRadioWrapper,
  StyledRadioLabel,
  StyledRadioInput,
  FormSeparator,
} from '../styles/Checkout';
import { CartContext } from '../utils/context/index';
import { useNavigate } from 'react-router-dom';

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
                <StyledLabel htmlFor="cardNumber">Numero de carte</StyledLabel>
                <StyledInput type="text" id="cardNumber" />
            </FormGroup>
            <FormGroup>
                <StyledLabel htmlFor="expirationDate">Date d'expiration</StyledLabel>
                <StyledInput type="text" id="expirationDate" />
            </FormGroup>
            <FormGroup>
                <StyledLabel htmlFor="securityCode">Code de sécurité</StyledLabel>
                <StyledInput type="text" id="securityCode" />
            </FormGroup>
        </FormRow>
        </CardDetails>
    );

    return (
        <CheckoutContainer>
            <form onSubmit={handleSubmit}>
                <FormSection>
                <FormTitle>Information de contact</FormTitle>
                <FormRow>
                    <FormGroup>
                    <StyledLabel htmlFor="name">Nom</StyledLabel>
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
                <FormTitle>Adresse de livraison</FormTitle>
                {addressFields('shippingAddress')}
                </FormSection>
                <FormSection>
                <FormTitle>Adresse de Facturation</FormTitle>
                <StyledRadioWrapper>
                  <StyledRadioLabel>
                    <StyledRadioInput
                      type="radio"
                      name="billingAddressOption"
                      value="same"
                      checked={billingAddressOption === 'same'}
                      onChange={(e) => setBillingAddressOption(e.target.value)}
                    />
                    Même que l'adresse de livraison
                  </StyledRadioLabel>
                  <StyledRadioLabel>
                    <StyledRadioInput
                      type="radio"
                      name="billingAddressOption"
                      value="different"
                      checked={billingAddressOption === 'different'}
                      onChange={(e) => setBillingAddressOption(e.target.value)}
                    />
                    Utiliser une adresse différente
                  </StyledRadioLabel>
                </StyledRadioWrapper>
                {billingAddressOption === 'different' && addressFields('billingAddress')}
                <FormSeparator />
              </FormSection>
              <FormSection>
                <FormTitle>Methode de paiement </FormTitle>
                <StyledRadioWrapper>
                  <StyledRadioLabel>
                    <StyledRadioInput
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Carte de crédit
                  </StyledRadioLabel>
                  <StyledRadioLabel>
                    <StyledRadioInput
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    PayPal
                  </StyledRadioLabel>
                </StyledRadioWrapper>
                {paymentMethod === 'card' && cardDetails()}
                <FormSeparator />
              </FormSection>
              <FormSection style={{border: 'unset'}}>
                <StyledButton type="submit">Finaliser la commande</StyledButton>
              </FormSection>
            </form>
            </CheckoutContainer>
    );
      
};

export default Checkout;