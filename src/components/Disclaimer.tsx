import React, { useState } from "react";
import { IonPopover } from "@ionic/react";
import { FaInfoCircle } from "react-icons/fa";
import styled from "styled-components";

const Disclaimer = (props: any) => {
  const [popoverState, setShowPopover] = useState({
    showPopover: false,
    event: undefined,
  });

  return (
    <>
      <IonPopover
        cssClass="my-custom-class"
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() =>
          setShowPopover({ showPopover: false, event: undefined })
        }
      >
        <StyledContainer>
          <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
        </StyledContainer>
      </IonPopover>
      <FaInfoCircle
        style={{ paddingRight: "-5px" }}
        onClick={(e: any) => {
          e.persist();
          setShowPopover({ showPopover: true, event: e });
        }}
      ></FaInfoCircle>
    </>
  );
};

const StyledContainer = styled.div`
  padding: 10px;
  line-height: 1.2;
`;

export default Disclaimer;
