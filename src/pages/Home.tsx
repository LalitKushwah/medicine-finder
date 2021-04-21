import MessageListItem from "../components/MessageListItem";
import { useState, useEffect } from "react";
import {
  getDistributorList,
  DistributorInfo,
  setDistributorList,
} from "../data/messages";
import axios from "axios";
import CONSTANTS from "../constants";

import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRefresher,
  IonSelect,
  IonSelectOption,
  IonPage,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonRefresherContent,
} from "@ionic/react";

import "./Home.css";
import data from "../data/static";
import Loader from "../components/Loader/Loader";

const Home: React.FC = () => {
  const [city, setCity] = useState<string[]>([]);
  const [medicine, setMedicine] = useState<string[]>([]);
  const [distributor, setDistributor] = useState<DistributorInfo[]>([]);
  const [showLoader, setShowLoader] = useState<Boolean>(false);

  const fetchDistributorList = () => {
    setShowLoader(true);
    const params = {
      medicine: `'${medicine}'`,
      city: `'${city}'`,
    };
    axios
      .get(`${CONSTANTS.API.BASEURL}${CONSTANTS.API.fetchDistributors}`, {
        params,
      })
      .then((res: any) => {
        const {
          data: { response },
        } = res;
        setDistributor(response);
        setDistributorList(response);
        setShowLoader(false);
      })
      .catch((err) => {
        console.error(err);
        setShowLoader(false);
        setDistributor(getDistributorList());
      });
  };

  if (showLoader) {
    return <Loader />;
  }

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Medicine Finder</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonLabel>City</IonLabel>
          <IonSelect
            value={city}
            multiple={false}
            cancelText="Nah"
            okText="Okay!"
            onIonChange={(e) => setCity(e.detail.value)}
          >
            {data.city.map((item) => (
              <IonSelectOption value={item} key={item}>
                {item}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel>Medicine</IonLabel>
          <IonSelect
            value={medicine}
            multiple={false}
            cancelText="Cancel"
            okText="Okay!"
            onIonChange={(e) => setMedicine(e.detail.value)}
          >
            {data.medicine.map((item) => (
              <IonSelectOption value={item} key={item}>
                {item}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>
        <IonButton
          expand="full"
          color="primary"
          fill="solid"
          onClick={() => fetchDistributorList()}
          disabled={city.length && medicine.length ? false : true}
        >
          Search Distributor
        </IonButton>
        {distributor.length > 0 && (
          <IonList>
            <IonListHeader lines="inset">
              <IonLabel>Found {distributor.length} Distriubtors</IonLabel>
            </IonListHeader>

            {distributor.map((m) => (
              <MessageListItem key={m.distributorID} {...m} />
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
