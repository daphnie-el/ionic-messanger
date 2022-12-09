import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import CardHolder from '../../components/CardHolder';
import './Tab1.css';
import Users from '../../utils/db.json'
 const { users } = Users
 
 
const Chat: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chat</IonTitle>
        </IonToolbar>
        <IonToolbar>
        <IonSearchbar></IonSearchbar>
      </IonToolbar>

      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Chats</IonTitle>
          </IonToolbar>
        </IonHeader>
        {
          users && users.map(user => {
            return (
              <CardHolder 
              name={user.name} 
              photo={user.photo}
              bio={user.bio}
              messageCount={user.messageCount}
              key={user.id}
            />
            )
          })
        }
        
      </IonContent>
    </IonPage>
  );
};

export default Chat;
