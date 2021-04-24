import "./Home.css";
import MessageListItem from "../components/MessageListItem";
import { useState, useEffect } from "react";
import {
  getDistributorList,
  DistributorInfo,
  setDistributorList,
} from "../data/messages";
import axios from "axios";
import CONSTANTS from "../constants";
import Disclaimer from "../components/Disclaimer";

import data, { disclaimerMessage } from "../data/static";
import Loader from "../components/Loader/Loader";
import Select from "react-select";

import {
  IonContent,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";

const Home: React.FC = () => {
  const [city, setCity] = useState<any>();
  const [medicine, setMedicine] = useState<any>();
  const [state, setState] = useState<any>();
  const [distributor, setDistributor] = useState<DistributorInfo[]>([]);
  const [showLoader, setShowLoader] = useState<Boolean>(false);

  const [cityOptions, setCityOptions] = useState<any>([]);

  const fetchDistributorList = () => {
    setShowLoader(true);
    const params = {
      medicine: `'${medicine.value}'`,
      city: `'${city.value}'`,
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

  useEffect(() => {
    if (state && medicine) {
      const params = {
        medicine: `'${medicine.value}'`,
        state: `'${state.value}'`,
      };
      axios
        .get(`${CONSTANTS.API.BASEURL}${CONSTANTS.API.fetchCities}`, {
          params,
        })
        .then((res: any) => {
          const {
            data: { response },
          } = res;
          setCityOptions(response);
          setShowLoader(false);
        })
        .catch((err) => {
          console.error(err);
          setShowLoader(false);
          setDistributor(getDistributorList());
        });
    }
  }, [state, medicine]);

  if (showLoader) {
    return <Loader />;
  }

  return (
    <IonPage id="home-page">
      <IonHeader mode="ios">
        <IonToolbar mode="ios" color="primary">
          <IonTitle>CoviConnect</IonTitle>
          <section slot="end" style={{ marginRight: "10px" }}>
            <Disclaimer content={disclaimerMessage} />
          </section>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="action_bar">
          <Select
            value={state}
            onChange={(e: any) => setState(e)}
            options={data.states}
            placeholder="Select State"
            className="custom_select"
            classNamePrefix="custom_select"
          />
          <Select
            value={medicine}
            onChange={(e: any) => setMedicine(e)}
            options={data.medicine}
            placeholder="Select Resource"
            className="custom_select"
            classNamePrefix="custom_select"
          />
          <Select
            value={city}
            onChange={(e: any) => setCity(e)}
            options={cityOptions}
            placeholder="Select city"
            className="custom_select"
            classNamePrefix="custom_select"
          />
          <IonButton
            expand="block"
            color="primary"
            fill="solid"
            mode="ios"
            onClick={() => fetchDistributorList()}
            disabled={city && medicine ? false : true}
          >
            Search Distributor
          </IonButton>
        </div>

        {distributor.length ? (
          <IonList>
            <IonListHeader lines="inset">
              <IonLabel>Found {distributor.length} Distriubtors</IonLabel>
            </IonListHeader>

            {distributor.map((m) => (
              <MessageListItem key={m.distributorID} {...m} />
            ))}
          </IonList>
        ) : (
          <p>No distributor found</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
