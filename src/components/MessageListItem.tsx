import { IonItem, IonLabel, IonNote } from "@ionic/react";
import { DistributorInfo } from "../data/messages";
import "./MessageListItem.css";

const MessageListItem: React.FC<DistributorInfo> = ({
  address,
  city,
  distributorID,
  distributorName,
  medicineName,
  phoneNumber,
  state,
}) => {
  return (
    <IonItem routerLink={`/message/${distributorID}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {distributorName}
          {/* <span className="date">
            <IonNote>Date</IonNote>
          </span> */}
        </h2>
        <h3>{city}</h3>
        <p>{address}</p>
      </IonLabel>
    </IonItem>
  );
};

export default MessageListItem;
