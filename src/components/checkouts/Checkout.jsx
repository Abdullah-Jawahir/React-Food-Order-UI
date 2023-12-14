import { Charges } from './Charges';
import { CheckoutButtons } from './CheckoutButtons';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const Checkout = ({ totalPrice, delCharge, setCharge, onPlaceOrderClick, onCancelOrderClick }) => {

    const isTotalPriceValid = !isNaN(totalPrice);

    if (!isTotalPriceValid) {
        console.error('Invalid totalPrice:', totalPrice);
    }

    const validTotalPrice = isTotalPriceValid ? totalPrice : 0;

    useEffect(() => {
        if (validTotalPrice > 3) {
            setCharge(1);
        } else if (validTotalPrice <= 3) {
            setCharge(0);
        }
    }, [validTotalPrice, setCharge]);

    const billAmount = useRef(0);




    return (

        <>
            <div className='checkout'>
                <h2 className="sub-head">checkout</h2>
                <Charges title='Total Price' amount={validTotalPrice} />
                <Charges title='Delivery Charges' amount={delCharge} />
                <div className="charges">
                    <p className="bold">bill amount</p>
                    <p className="bold amount" ref={billAmount}>${validTotalPrice + delCharge}</p>
                </div>

                <CheckoutButtons
                    name={'Place Order'}
                    id={'place-btn'}
                    onClicked={() => {
                        const billAmountVal = billAmount.current.innerText.slice(1)
                        billAmountVal > 0 ? onPlaceOrderClick() : alert('Please Order any Food!');
                    }}

                />
                <CheckoutButtons
                    name={'Cancel Order'}
                    id={'cancel-btn'}
                    onClicked={onCancelOrderClick}
                />
            </div>
        </>
    )
};

Checkout.propTypes = {
    totalPrice: PropTypes.number.isRequired,
    delCharge: PropTypes.number.isRequired,
    setCharge: PropTypes.func.isRequired,
    onPlaceOrderClick: PropTypes.func.isRequired,
    onCancelOrderClick: PropTypes.func.isRequired,
};
