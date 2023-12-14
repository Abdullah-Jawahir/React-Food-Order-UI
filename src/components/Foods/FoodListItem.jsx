import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export const FoodListItem = ({ fdImg, fdImgAlt, fdName, fdPrice, onItemCountChange, resetCount }) => {

    const [localCount, setLocalCount] = useState(0);

    useEffect(() => {
        setLocalCount(0);
    }, [resetCount]);

    const handleDecrement = () => {
        if (localCount > 0) {
            setLocalCount((prevCount) => prevCount - 1);
            onItemCountChange(fdPrice, -1);

        }
    }

    const handleIncrement = () => {
        setLocalCount((prevCount) => prevCount + 1);
        onItemCountChange(fdPrice, 1);

    }


    return (
        <li className="item">
            <div className="image">
                <img src={fdImg} alt={fdImgAlt} />
            </div>
            <div className="name-price">
                <p className="food-name">{fdName}</p>
                <p className="price amount">${fdPrice}</p>
            </div>
            <div className="counter">
                <i className="fa fa-minus-circle" onClick={handleDecrement}></i>
                <p className="food-count amount">{localCount}</p>
                <i className="fa fa-plus-circle" onClick={handleIncrement}></i>
            </div>
        </li>
    )
}


FoodListItem.propTypes = {
    fdImg: PropTypes.string.isRequired,
    fdImgAlt: PropTypes.string.isRequired,
    fdName: PropTypes.string.isRequired,
    fdPrice: PropTypes.number.isRequired,
    onItemCountChange: PropTypes.func.isRequired,
    resetCount: PropTypes.number.isRequired,
};