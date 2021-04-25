import { useState } from "react";
import { getDistributor, DistributorInfo } from "../data/messages";
import { CallNumber } from "@ionic-native/call-number";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
  IonAvatar,
  IonFooter,
  IonTitle,
} from "@ionic/react";
import styled from "styled-components";
import { useParams } from "react-router";
import "./ViewMessage.css";
import { IonButton, useIonToast } from "@ionic/react";
import data from "../data/static";
import Loader from "../components/Loader/Loader";
import axios from "axios";
import CONSTANTS from "../constants";

function ViewMessage() {
  const [message, setMessage] = useState<DistributorInfo>();
  const [feedbackList, setFeedbackList] = useState<any>([]);
  const [showLoader, setShowLoader] = useState<Boolean>(false);
  const [present, dismiss] = useIonToast();

  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const msg = getDistributor(parseInt(params.id, 10));
    setMessage(msg);
  });

  const handleFeedbackBtnOnClick = (value: any) => {
    if (feedbackList.includes(value)) {
      const updatedFeedbackList = feedbackList.filter(
        (item: any) => item !== value
      );
      setFeedbackList(updatedFeedbackList);
    } else {
      setFeedbackList([...feedbackList, value]);
    }
    console.log(feedbackList);
  };

  const submitFeedbackHandler = () => {
    const param: any = {
      distributorId: params.id,
      feedbackCodes: feedbackList,
    };
    axios
      .post(`${CONSTANTS.API.BASEURL}${CONSTANTS.API.submitFeedback}`, param)
      .then((_res: any) => {
        present({
          message: "Feedback has been submitted successfully...",
          duration: 3000,
        });
        setShowLoader(false);
      })
      .catch((err) => {
        console.error(err);
        setShowLoader(false);
      });
  };

  if (showLoader) {
    return <Loader />;
  }

  return (
    <IonPage id="view-message-page">
      <IonHeader mode="ios" translucent color="primary">
        <IonToolbar mode="ios">
          <IonButtons>
            <IonBackButton
              text="Distributor Details"
              defaultHref="/home"
            ></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {message ? (
          <>
            <IonItem lines="none">
              <IonLabel className="ion-text-wrap">
                <h2>
                  <IonNote>Name</IonNote>
                </h2>
                <h3>{message.distributorName}</h3>
              </IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>
                <h2>
                  <IonNote>Medicine</IonNote>
                </h2>
                <h3>{message.medicineName}</h3>
              </IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonLabel style={{ whiteSpace: "normal" }}>
                <h2>
                  <IonNote>Address</IonNote>
                </h2>
                <h3>{message.address}</h3>
              </IonLabel>
            </IonItem>
            {message.phoneNumber.length &&
              message.phoneNumber.map(
                (item, index) =>
                  item && (
                    <IonItem
                      lines="none"
                      key={item}
                      onClick={() => CallNumber.callNumber(item, false)}
                    >
                      <IonLabel>
                        <h2>
                          <IonNote>Contact-{index + 1}</IonNote>
                        </h2>
                        <h3>{item}</h3>
                      </IonLabel>
                      <a href={`tel:${item}`}>
                        <IonAvatar slot="end">
                          <img src="https://images.vexels.com/media/users/3/137415/isolated/preview/0e475bb9b17b3fa4f94f31fba1635b8f-telephone-call-icon-logo-by-vexels.png" />
                        </IonAvatar>
                      </a>
                    </IonItem>
                  )
              )}
          </>
        ) : (
          <div>Distributor not found</div>
        )}
        <FeedbackContainer>
          {data.feedbackCodes.map((item: any) => (
            <IonButton
              fill="outline"
              shape="round"
              size="small"
              mode="ios"
              color={feedbackList.includes(item.code) ? 'success' : 'primary'}
              className={feedbackList.includes(item.code) ? 'selected' : ''}
              onClick={() => handleFeedbackBtnOnClick(item.code)}
            >
              {item.label}
            </IonButton>
          ))}
        </FeedbackContainer>
        <IonButton
          fill="solid"
          expand="block"
          shape="round"
          mode="ios"
          className="submit-feedback-btn"
          disabled={feedbackList.length ? false : true}
          onClick={() => submitFeedbackHandler()}
        >
          Submit feedback
        </IonButton>
      </IonContent>
    </IonPage>
  );
}

const FeedbackContainer = styled.div`
  display: "flex";
`;

export default ViewMessage;
