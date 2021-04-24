import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styled from 'styled-components';

const CustomLoader = () => {
    return (
        <Wrapper>
            <Loader
                type="Grid"
                color="#ff1a1a"
                height={80}
                width={80}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

export default CustomLoader;
