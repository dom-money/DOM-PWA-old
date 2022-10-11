import React from 'react';
import styled from 'styled-components';

import HeaderGoBack from './HeaderGoBack';
import TotalBalance from './TotalBalance';
import AddressInput from './AddressInput';
import AmountInput from './AmountInput';
import Button from './Button';
import Loading from './Loading';

interface SendToWalletPageRenderProps {
  /**
   * Should component display loading skeleton?
   */
  isLoading?: false;
  /**
   * Available Balance Amount
   */
  availableBalance: number;
  /**
   * Input amount
   */
  inputAmount?: string;
  /**
   * Amount input on change handler function
   */
  onInputAmountChange?: ({ formattedValue, value }: onInputChangeType) => void;
  /**
   * Input address
   */
  inputAddress: string;
  /**
   * Address input on change handler function
   */
  onInputAddressChange?: (addressValue: string) => void;
  /**
   * Address input on focus handler function
   */
  onInputAddressFocus?: (prefill?: string) => void;
  /**
   * Amount input validation error message
   */
  inputAmountErrorMessage?: string;
  /**
   * Are inputs valid for submission?
   */
  areInputsValid: boolean;
  /**
   * Is Component in the process of submitting data?
   */
  isSubmitting?: boolean;
  /**
   * 'Send' Button Click Handler
   */
  sendButtonOnClick?: () => void;
  /**
   * 'Clear' Button Click Handler
   */
  clearButtonOnClick?: () => void;
  /**
   * 'Get Contact' Button Click handler
   */
  getContactOnClick?: () => void;
  /**
   * 'Scan QR' Button Click handler
   */
  scanQROnClick?: () => void;
};

interface LoadingProps {
  /**
   * Should component display loading skeleton?
   */
  isLoading: true;
  availableBalance?: never;
  inputAmount?: never;
  onInputAmountChange?: never;
  inputAddress?: never;
  onInputAddressChange?: never;
  onInputAddressFocus?: never;
  inputAmountErrorMessage?: never;
  areInputsValid?: never;
  isSubmitting?: never;
  sendButtonOnClick?: never;
  clearButtonOnClick?: never;
  getContactOnClick?: never;
  scanQROnClick?: never;
};

type Props = LoadingProps | SendToWalletPageRenderProps;

interface onInputChangeType {
  formattedValue: string,
  value: string
};

const Wrapper = styled.div`
  padding: 1.625rem 0.313rem;
`;

const HeaderWithMargin = styled(HeaderGoBack)`
  margin: 0 2.25rem 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.375rem;
`;

const SendToWalletPageRender = ({
  availableBalance,
  inputAmount,
  onInputAmountChange,
  inputAddress,
  onInputAddressChange,
  onInputAddressFocus,
  inputAmountErrorMessage = '',
  areInputsValid = false,
  isSubmitting,
  getContactOnClick,
  scanQROnClick,
  sendButtonOnClick,
  clearButtonOnClick,
  isLoading,
}: Props) => {
  if (isLoading) {
    return (
      <Wrapper>
        <HeaderWithMargin
          href={'/'}
        />
        <TotalBalance
          isLoading
          asAvailableBalance
        />
        <form>
          <AddressInput
            label='Enter Or Choose Address'
            inputID='send-to-address-input'
            addressValue=''
            disabled
          />
          <AmountInput
            label='Enter Amount To Transfer'
            inputID='amount-to-transfer-input'
            disabled
            autoFocus={false}
          />
          <ButtonContainer>
            <Button
              label='Send'
              primary
              disabled={true}
            />
            <Button
              label='Clear'
              disabled={true}
            />
          </ButtonContainer>
        </form>
      </Wrapper>
    );
  };

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    if (!sendButtonOnClick) {
      return;
    }
    sendButtonOnClick();
  };

  return (
    <>
      <Wrapper>
        <HeaderWithMargin
          href={'/'}
        />
        <TotalBalance
          amount={availableBalance}
          asAvailableBalance
        />
        <form onSubmit={handleSubmit}>
          <AddressInput
            label='Enter Or Choose Address'
            inputID='send-to-address-input'
            addressValue={inputAddress}
            onValueChange={onInputAddressChange}
            onFocus={onInputAddressFocus}
            getContactOnClick={getContactOnClick}
            scanQROnClick={scanQROnClick}
          />
          <AmountInput
            label='Enter Amount To Transfer'
            inputID='amount-to-transfer-input'
            amount={inputAmount}
            onInputChange={onInputAmountChange}
            errorMessage={inputAmountErrorMessage}
            autoFocus={false}
          />
          <ButtonContainer>
            <Button
              label='Send'
              primary
              disabled={!areInputsValid || isSubmitting}
              type='submit'
              onClick={sendButtonOnClick}
            />
            <Button
              label='Clear'
              onClick={clearButtonOnClick}
            />
          </ButtonContainer>
        </form>
      </Wrapper>
      {
        isSubmitting &&
        <Loading ariaLabel='Transaction is in progress' primary />
      }
    </>
  );
};

export default SendToWalletPageRender;
