import PropTypes from 'prop-types';
import { IoIosCheckmarkCircle } from "react-icons/io";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center align-center'><IoIosCheckmarkCircle className="text-green-300 mr-2" />{feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;