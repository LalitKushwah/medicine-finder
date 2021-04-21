import { useState } from "react";
import { getDistributor, DistributorInfo } from "../data/messages";
import { CallNumber } from "@ionic-native/call-number";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
  IonAvatar,
} from "@ionic/react";
import { personCircle } from "ionicons/icons";
import { useParams } from "react-router";
import "./ViewMessage.css";

function ViewMessage() {
  const [message, setMessage] = useState<DistributorInfo>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const msg = getDistributor(parseInt(params.id, 10));
    setMessage(msg);
  });

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
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
            <IonItem>
              <IonLabel className="ion-text-wrap">
                <h2>
                  <IonNote>Name</IonNote>
                </h2>
                <h3>{message.distributorName}</h3>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <h2>
                  <IonNote>Medicine</IonNote>
                </h2>
                <h3>{message.medicineName}</h3>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
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
                      key={item}
                      onClick={() => CallNumber.callNumber(item, false)}
                    >
                      <IonLabel>
                        <h2>
                          <IonNote>Contact-{index + 1}</IonNote>
                        </h2>
                        <h3>{item}</h3>
                      </IonLabel>
                      <IonAvatar slot="end">
                        <img src="https://images.vexels.com/media/users/3/137415/isolated/preview/0e475bb9b17b3fa4f94f31fba1635b8f-telephone-call-icon-logo-by-vexels.png" />
                      </IonAvatar>
                    </IonItem>
                  )
              )}
          </>
        ) : (
          <div>Distributor not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewMessage;
