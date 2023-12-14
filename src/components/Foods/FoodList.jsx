import { FoodListItem } from './FoodListItem';
import PropTypes from 'prop-types';

export const FoodList = ({ onItemCountChange, resetCount }) => {

    return (
        <>
            <ul id='item-list'>
                <FoodListItem
                    fdImg='https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    fdImgAlt='pizza'
                    fdName='pizza'
                    fdPrice={2}
                    onItemCountChange={onItemCountChange}
                    resetCount={resetCount}

                />
                <FoodListItem
                    fdImg='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    fdImgAlt='pancake'
                    fdName='pancake'
                    fdPrice={3}
                    onItemCountChange={onItemCountChange}
                    resetCount={resetCount}

                />
                <FoodListItem
                    fdImg='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    fdImgAlt='burger'
                    fdName='burger'
                    fdPrice={5}
                    onItemCountChange={onItemCountChange}
                    resetCount={resetCount}

                />
            </ul>
        </>
    )
}

FoodList.propTypes = {
    onItemCountChange: PropTypes.func.isRequired,
    resetCount: PropTypes.number.isRequired,
};
