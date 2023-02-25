import { createAnimation, IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonNav, IonPage, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { headsetOutline, homeOutline, personOutline, receiptOutline } from 'ionicons/icons'
import './Home.css';
import { useState } from 'react';
import Beranda from '../components/Beranda'
import Order from '../components/Order'
import Akun from '../components/Akun'
import Bantuan from '../components/Bantuan'
import { FCM } from '@capacitor-community/fcm'
import { Keyboard } from '@capacitor/keyboard'
import Profil from '../components/Profil';

const Main: React.FC = () => {
    const [page, setPage] = useState(String(localStorage.getItem('lastMenu')))
    const [isMenu, setIsMenu] = useState(true)
    function doClickMenu(val:any){
        localStorage.setItem('lastMenu', String(val))
        setPage(val)
        updateFCM()
    }
    document.addEventListener('backbutton', function(event){
        event.stopImmediatePropagation()
        event.stopPropagation()
    }, false)
   
    function updateFCM(){
        let data = new FormData()
        data.append('user_id', String(localStorage.getItem('userid')))
        data.append('fcm', String(localStorage.getItem('fcm')))
        $.ajax({
            type:"POST",
            url: "https://xpdcargo.id/login/Callback/apiUpdateFCMToken",
            data: data,
            processData:false,
            contentType:false,
            dataType: "JSON",
        })
        setTimeout(() => {
            updateFCM()
        }, 30000);
    }
    Keyboard.addListener('keyboardWillShow',()=>{
        setIsMenu(false)
    })
    Keyboard.addListener('keyboardWillHide',()=>{
        setIsMenu(true)
    })
  return(
    <IonPage>
      <IonContent>
        {(page === 'Beranda')?<Beranda />:''}
        {(page === 'Order')?<Order />:''}
        {(page === 'Bantuan')?<Bantuan />:''}
        {(page === 'Akun')?<Akun />:''}
      </IonContent>
      <IonFooter mode='ios' style={{background:"#F9F9F9", transition:"all 0.35s", transform:(isMenu)?"translateY(0)":"translateY(150%)"}} id="mainMenu">
        <IonGrid>
          <IonRow>
            <IonCol size='12'>
              <IonSegment value={page} scrollable={false} mode='ios' onIonChange={(e)=>{doClickMenu(String(e.detail.value))}} id='segMenu'>
                <IonSegmentButton value='Beranda' mode='ios' id='segMenu'>
                  <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                    <IonIcon icon={homeOutline} style={{fontSize:"20px", margin:"0 auto"}} />
                    <span style={{fontSize:"10px", margin:"5px 0 0 0"}}>Beranda</span>
                  </IonText>
                </IonSegmentButton>
                <IonSegmentButton value='Order' mode='ios' id='segMenu'>
                  <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                    <IonIcon icon={receiptOutline} style={{fontSize:"20px", margin:"0 auto"}} />
                    <span style={{fontSize:"10px", margin:"5px 0 0 0"}}>Order List</span>
                  </IonText>
                </IonSegmentButton>
                <IonSegmentButton value='Bantuan' mode='ios' id='segMenu'>
                  <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                    <IonIcon icon={headsetOutline} style={{fontSize:"20px", margin:"0 auto"}} />
                    <span style={{fontSize:"10px", margin:"5px 0 0 0"}}>Bantuan</span>
                  </IonText>
                </IonSegmentButton>
                <IonSegmentButton value='Akun' mode='ios' id='segMenu'>
                  <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                    <IonIcon icon={personOutline} style={{fontSize:"20px", margin:"0 auto"}} />
                    <span style={{fontSize:"10px", margin:"5px 0 0 0"}}>Akun</span>
                  </IonText>
                </IonSegmentButton>
              </IonSegment>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  )
};

export default Main;
