import { Scrollbars } from "react-custom-scrollbars";

const CustomScrollbar = (props) => {
  return <Scrollbars autoHide>{props.children}</Scrollbars>;
};

export default CustomScrollbar;
