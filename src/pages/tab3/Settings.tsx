import { 
  IonContent, 
  IonHeader, 
  IonIcon,
  IonItem,
  IonItemGroup,
  IonItemDivider,
  IonLabel,
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonToggle,
 } from '@ionic/react';
  import { 
    cloudUploadOutline,
    heart,
    star, 
    laptopOutline, 
    key,
    lockClosed,
    logoWhatsapp,
    information,
    notifications,
  } from 'ionicons/icons';
import CardHolder from '../../components/CardHolder';
import './Tab3.css';

const Settings: React.FC = () => {
  const toggleDarkModeHandler = () => document.body.classList.toggle('dark');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
          <CardHolder 
            name='Daphnie Ejonavi' 
            photo='https://img.freepik.com/premium-vector/black-woman-portrait-vector-illustration-black-girl-avatar-image-black-history-month-poster_610881-10.jpg?w=1380'
            bio='Building  great stuff'
          />
          <IonItemGroup>
            <IonItemDivider />
            <IonItem>
              <IonLabel>Dark Mode</IonLabel>
              <IonToggle slot="end" name="darkMode" onIonChange={toggleDarkModeHandler} />
            </IonItem>
          </IonItemGroup>
          <IonItemGroup>
            <IonItemDivider/>
            <IonItem detail button>
              <IonIcon color='primary' icon={star} slot='start'></IonIcon>
              <IonLabel>Starred Messages</IonLabel>
            </IonItem>
            <IonItem detail>
              <IonIcon color='primary' icon={laptopOutline} slot='start'></IonIcon>
              <IonLabel>Linked devices</IonLabel>
            </IonItem>
          </IonItemGroup>

          <IonItemGroup>
            <IonItemDivider/>
            <IonItem  detail>
              <IonIcon color='primary' icon={key} slot='start'></IonIcon>
              <IonLabel>Account</IonLabel>
            </IonItem>
            <IonItem detail>
              <IonIcon color='primary' icon={lockClosed} slot='start'></IonIcon>
              <IonLabel>Privacy</IonLabel>
            </IonItem>
            <IonItem  detail>
              <IonIcon color='primary' icon={logoWhatsapp} slot='start'></IonIcon>
              <IonLabel>Chats</IonLabel>
            </IonItem>
            <IonItem detail>
              <IonIcon color='primary' icon={notifications} slot='start'></IonIcon>
              <IonLabel>Notification</IonLabel>
            </IonItem>
            <IonItem  detail>
              <IonIcon color='primary' icon={cloudUploadOutline} slot='start'></IonIcon>
              <IonLabel>Storage and Data</IonLabel>
            </IonItem>
          </IonItemGroup>

          <IonItemGroup>
            <IonItemDivider/>
            <IonItem  detail>
              <IonIcon color='primary' icon={information} slot='start'></IonIcon>
              <IonLabel>Help</IonLabel>
            </IonItem>
            <IonItem detail>
              <IonIcon color='primary' icon={heart} slot='start'></IonIcon>
              <IonLabel>Tell a Friend</IonLabel>
            </IonItem>
          </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
