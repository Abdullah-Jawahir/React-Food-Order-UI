import PropType from 'prop-types';

export const CheckoutButtons = ({ name, onClicked, id }) => {

    return (
        <>
            <button
                id={id}
                onClick={onClicked}
            >
                {name}
            </button >
        </>
    )
}

CheckoutButtons.defaultProps = {

    btnCol: '#22E4AC',
}

CheckoutButtons.propTypes = {

    name: PropType.string.isRequired,
    onClicked: PropType.func.isRequired,
    id: PropType.string.isRequired,
}
