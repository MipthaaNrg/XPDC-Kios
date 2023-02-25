import { createAnimation, IonAccordion, IonAccordionGroup, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonLoading, IonMenuButton, IonModal, IonPage, IonProgressBar, IonRow, IonText, IonTitle, IonToast, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { alertCircleOutline, chevronBackOutline, chevronDownOutline, chevronForwardOutline, logoFacebook, logoGoogle, logoInstagram, logoTwitter, logoVimeo, logoWhatsapp, person, share } from 'ionicons/icons';
import $ from 'jquery';
import { useRef, useState } from 'react';

const Bantuan: React.FC = () => {
    const [isLoadingBar, setIsLoadingBar] = useState(false)
    const [isLoadingPop, setIsLoadingPop] = useState(false)
    const [isToast, setIsToast] = useState(false)
    const [isToastMessage, setIsToastMessage] = useState('')
    const [isToastColor, setIsToastColor] = useState('')
    const [isToastDuration, setIsToastDuration] = useState(Number)
    const [isToastPosition, setIsToastPosition] = useState()
    const [bantuanlist, setBantuanList] = useState([])
    const [isModalHelp, setIsModalHelp] = useState(false)
    const [isModalDetail, setIsModalDetail] = useState(false)
    const [isDataDetail, setIsDataDetail] = useState([])
    const isModalHelpRef = useRef<HTMLIonModalElement>(null)
    function showToast(message:any, color:any, duration:any, position:any){
        setIsToastMessage(message)
        setIsToastColor(color)
        setIsToastDuration(duration)
        setIsToastPosition(position)
        setIsToast(true)
    }
    const inAnimation = (baseEl: HTMLElement) => {
        const root = baseEl.shadowRoot;
    
        const backdropAnimation = createAnimation()
          .addElement(root?.querySelector('ion-backdrop')!)
          .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');
    
        const wrapperAnimation = createAnimation()
            .addElement(root?.querySelector('.modal-wrapper')!)
            .keyframes([
                { offset: 0, opacity: '0', transform: 'translateX(100%)' },
                { offset: 1, opacity: '0.99', transform: 'translateX(0)' },
            ]);
    
        return createAnimation()
          .addElement(baseEl)
          .easing('ease-out')
          .duration(250)
          .addAnimation([backdropAnimation, wrapperAnimation]);
    }
    const outAnimation = (baseEl: HTMLElement) => {
        return inAnimation(baseEl).direction('reverse');
    }
    useIonViewWillEnter(() => {
        getData()
    })
    function getData(){
        $.ajax({
            type: "GET",
            url: "https://xpdcargo.id/login/Callback/apiGetBantuan",
            dataType: "JSON",
            beforeSend:function(){
                setIsLoadingBar(true)
            },
            success:function(r:any){
                setIsLoadingBar(false)
                setBantuanList(r.data)
            },
            error:function(err){
                setIsLoadingBar(false)
                showToast('Gagal mengambil data bantuan', 'danger', 1200, 'midle')
            }
        })
    }
    function doHelp(){
        window.open('https://api.whatsapp.com/send?phone=+628117000133&text=Hi XPDC', '_blank')
    }
    function closeModalHelp(){
        isModalHelpRef.current?.setCurrentBreakpoint(0)
        setIsModalHelp(false)
    }
    function openModalDetail(detail:any){
        setIsDataDetail(detail)
        setIsModalDetail(true)
    }
  return (
        <IonPage>
            <IonHeader mode='ios'>
                <IonToolbar mode='ios'>
                    <IonTitle className='ion-text-center' style={{color:"#0000A0"}}>BANTUAN</IonTitle>
                    <IonButtons slot="end">
                        <IonButton mode='ios' fill='clear' color='dark' onClick={()=>{setIsModalHelp(true)}}>
                            <IonIcon icon={alertCircleOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
                {(isLoadingBar === true)?
                    <IonProgressBar type="indeterminate" mode='ios' color='primary'></IonProgressBar>
                :''}
            </IonHeader>
            <IonContent style={{padding:"10%"}}>
                <IonGrid style={{padding:"10px"}}>
                    {bantuanlist.map((a, index) => {
                        return(
                            <IonRow key={index} style={{borderBottom:"solid 1px #D9D9D9", padding:"5px"}} onClick={()=>{openModalDetail(a)}}>
                                <IonCol size='10'>
                                    <IonText mode='ios' style={{fontSize:"12px", color:"black"}}>
                                        {a['title']}
                                    </IonText>
                                </IonCol>
                                <IonCol size='2' style={{textAlign:"end"}}>
                                    <IonIcon icon={chevronForwardOutline} />
                                </IonCol>
                            </IonRow>
                        )
                    })}
                </IonGrid>
            </IonContent>

            <IonModal mode='ios' isOpen={isModalDetail} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
                <IonHeader mode='ios'>
                    <IonToolbar mode='ios'>
                        <IonButtons slot='start'>
                            <IonButton mode='ios' fill='clear' color='primary' onClick={()=>{setIsModalDetail(false)}}>
                                <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}} />
                                {isDataDetail['title']}
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen class='ion-padding'>
                    <IonText mode='ios' dangerouslySetInnerHTML={{__html:isDataDetail['message']}}></IonText>
                </IonContent>
            </IonModal>

            <IonModal mode='ios' isOpen={isModalHelp} onDidDismiss={()=>{closeModalHelp()}} animated={true} breakpoints={[0,0.45]} initialBreakpoint={0.45} id='modalHelp' ref={isModalHelpRef}>
                <IonContent fullscreen>
                    <IonGrid style={{margin:"10px"}}>
                        <IonRow>
                            <IonCol size='12' style={{textAlign:"center", padding:"20px 0"}}>
                                <IonText mode='ios' style={{fontSize:"22px", color:"black"}}>
                                Kontak Layanan
                                </IonText>  
                            </IonCol>
                            <IonCol size='12' style={{textAlign:"center"}}>
                                <IonText mode='ios' style={{fontSize:"18px", color:"black"}}>
                                CS kami beroperasi 24x6 termasuk akhir pekan (Kecuali pada hari minggu).
                                </IonText>
                            </IonCol>
                            <IonCol size='12'>
                                <IonButton mode='ios' expand='block' color="success" onClick={()=>{doHelp()}}>
                                Chat WhatsApp
                                <IonIcon icon={logoWhatsapp} slot='end' style={{margin:"0 5px", padding:0}}/>
                                </IonButton>
                            </IonCol>
                            <IonCol size='12'>
                                <IonButton mode='ios' expand='block' color="light" onClick={()=>{closeModalHelp()}}>
                                Tutup
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonModal>

            <IonToast
                mode='ios'
                isOpen={isToast}
                onDidDismiss={()=>{setIsToast(false)}}
                color={isToastColor}
                duration={isToastDuration}
                position={isToastPosition}
                message={isToastMessage}
            />

            <IonLoading 
                mode='ios'
                isOpen={isLoadingPop}
                spinner='circular'
            />
        </IonPage>
    );
};

export default Bantuan;
