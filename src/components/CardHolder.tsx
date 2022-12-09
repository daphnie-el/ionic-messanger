import { IonAvatar, IonBadge, IonItem, IonLabel } from '@ionic/react';

interface Props {
    name: string,
    photo: string,
    bio: string
    messageCount?: number
}
const CardHolder = ({ name, photo, bio, messageCount }: Props) => {
    return (
        <>
            <IonItem>
                <IonAvatar slot="start">
                    <img src={photo} alt={name} />
                </IonAvatar>
            
                <IonLabel>
                    <h3>{name}</h3>
                    <p>{bio}</p>
                </IonLabel>
                {
                    messageCount ? (
                        <IonBadge slot="end">{messageCount}</IonBadge>
                    ) : null
                } 
            </IonItem>
        </>
    )
}

export default CardHolder