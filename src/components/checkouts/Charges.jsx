import PropType from 'prop-types';

export const Charges = ({ title, amount }) => {
    return (
        <div className="charges">
            <p>{title}</p>
            <p className="bold amount">${amount}</p>
        </div>
    )
}


Charges.propTypes = {

    title: PropType.string.isRequired,
    amount: PropType.number.isRequired,
}