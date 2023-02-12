import { RotatingLines } from 'react-loader-spinner';
import { Wrapper } from './Spinner.styled';

const Spinner = () => {
  return (
    <Wrapper>
      <RotatingLines
        strokeColor="orangered"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Wrapper>
  );
};

export default Spinner;
