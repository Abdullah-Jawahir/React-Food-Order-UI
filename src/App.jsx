import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { FoodList } from './components/Foods/FoodList';
import { Checkout } from './components/checkouts/Checkout';
import { ThanksWrapper } from './components/ThanksWrapper';

function App() {

  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryCharge, setDeilveryCharge] = useState(0);
  const [isPlaceOrderClicked, setIsPlaceOrderClicked] = useState(false);
  const [resetCount, setResetCount] = useState(0);

  const handleItemCountChange = (price, quantityChange) => {
    // Update the total price
    setTotalPrice((prevTotalPrice) => prevTotalPrice + (price * quantityChange));

  };

  const resetValues = () => {
    setTotalPrice(0);
    setResetCount((prevResetCount) => prevResetCount + 1);
  };

  const handlePlaceOrderClick = () => {
    setIsPlaceOrderClicked(true);

    setTimeout(() => {
      setIsPlaceOrderClicked(false);
    }, 2600);
    resetValues();
  };


  return (
    <div className='orders'>
      <ThanksWrapper isPlaceOrderClicked={isPlaceOrderClicked} />
      <Header />
      <FoodList
        onItemCountChange={handleItemCountChange}
        resetCount={resetCount}
      />
      <Checkout
        totalPrice={totalPrice}
        delCharge={deliveryCharge}
        setCharge={setDeilveryCharge}
        onPlaceOrderClick={handlePlaceOrderClick}
        onCancelOrderClick={resetValues}

      />
    </div>
  );
}

export default App;
