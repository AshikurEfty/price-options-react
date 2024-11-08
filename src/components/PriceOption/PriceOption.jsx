import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {option_name, price, features} = option;
    return (
        <div className="bg-blue-400 text-white p-5 cursor-pointer flex flex-col rounded-md ">
            <h2 className='text-center'>
                <span className="text-5xl font-bold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl text-center">{option_name}</h4>
            <div className='pl-6 flex-grow '>
            {
                features.map((feature,index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className="mt-12 bg-green-500 min-w-full rounded-md py-4 font-bold hover:bg-green-700">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;