import React, { useState } from 'react';
import { IonContent, IonInput, IonItem, IonLabel, IonButton, IonText, IonTitle } from '@ionic/react';
import './Home.css'

const Home: React.FC = () => {
  const [quetzales, setQuetzales] = useState<number>();
  const [dolares, setDolares] = useState<number>();

  const convertir = () => {
    if (quetzales !== undefined) {
      setDolares(quetzales / 8);
    }
  };

  return (
    <IonContent className="ion-padding">
      <IonItem>
        <h1> DivisApp 23003920</h1>
        <IonLabel position="floating">Cantidad en Quetzales</IonLabel>
        <IonInput type="number" value={quetzales} onIonChange={e => setQuetzales(parseFloat(e.detail.value!))}></IonInput>
      </IonItem>
      <IonButton expand="full" onClick={convertir}>Convertir</IonButton>
      {dolares !== undefined && (
        <IonText>
          <h2>Equivalente en Dólares: ${dolares.toFixed(2)}</h2>
        </IonText>
      )}
    </IonContent>
  );
};

export default Home;
