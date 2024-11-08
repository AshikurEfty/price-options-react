import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-3 hover:bg-yellow-500 hover:text-black px-6 py-5 font-bold cursor-pointer">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;