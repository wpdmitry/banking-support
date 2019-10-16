import React from "react";
import ReactPopup from "reactjs-popup";

// const popupOverlayStyle = {
//   zIndex: 1000000
// };

const popupContentStyle = {
  zIndex: 1000001,
  boxShadow:
    "1px 0 3px 0 rgba(151, 158, 178, 0.4), -1px 0 3px 0 rgba(151, 158, 178, 0.4)",
  width: "auto",
  padding: 0,
  border: "none",
  borderRadius: "5px"
};

type Position = 'top left' | 'top center' | 'top right' |
  'right top' | 'right center' | 'right bottom' |
  'bottom left' | 'bottom center' | 'bottom right' |
  'left top' | 'left center' | 'left bottom' |
  'center center';

type PopupProps = {
  trigger?: JSX.Element | ((isOpen: boolean) => JSX.Element);
  position: Position;
  children: JSX.Element | ((close: () => void, isOpen: boolean) => JSX.Element);
};

function Popup({
  trigger,
  position,
  children
}: PopupProps) {
  return (
    <ReactPopup
      trigger={trigger}
      position={position}
      contentStyle={popupContentStyle}
    >
      {children}
    </ReactPopup>
  );
}

export default Popup;
