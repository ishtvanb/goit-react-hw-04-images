import { Div } from './Container.styled';
import PropTypes from 'prop-types';
const Container = ({ children }) => {
  return <Div>{children}</Div>;
};

Container.propTypes = {
  children: PropTypes.any.isRequired,
};
 
export default Container;
