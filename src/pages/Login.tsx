import { createAnimation, IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonLabel, IonLoading, IonNav, IonPage, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle, IonToast, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { headsetOutline, homeOutline, personOutline, receiptOutline } from 'ionicons/icons'
import './Home.css';
import { useState } from 'react';
import $ from 'jquery'
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions'
import { Capacitor } from "@capacitor/core";
import { FCM } from '@capacitor-community/fcm';
import { PushNotifications, Token } from '@capacitor/push-notifications';

const Login: React.FC = () => {
    const [isFill, setIsFill] = useState(false)
    const [isUsername, setIsUsername] = useState('')
    const [isPassword, setIsPassword] = useState('')
    const [isLoadingPop, setIsLoadingPop] = useState(false)
    const [isToast, setIsToast] = useState(false)
    const [isToastMessage, setIsToastMessage] = useState('')
    const [isToastColor, setIsToastColor] = useState('')
    const [isToastDuration, setIsToastDuration] = useState(Number)
    const [isToastPosition, setIsToastPosition] = useState()
    useIonViewWillEnter(()=>{
        if(Capacitor.getPlatform() === 'android'){
            AndroidPermissions.checkPermission(AndroidPermissions.PERMISSION.BLUETOOTH).then((r) => {
                if(r.hasPermission === false){
                    console.log('Permission tidak diijinkan')
                    AndroidPermissions.requestPermission(AndroidPermissions.PERMISSION.BLUETOOTH).then((res) => {
                        console.log(`Permission BLUETOOTH status: ${res.hasPermission}`)
                    })
                }
            })
            AndroidPermissions.checkPermission(AndroidPermissions.PERMISSION.BLUETOOTH_CONNECT).then((r) => {
                if(r.hasPermission === false){
                    console.log('Permission tidak diijinkan')
                    AndroidPermissions.requestPermission(AndroidPermissions.PERMISSION.BLUETOOTH_CONNECT).then((res) => {
                        console.log(`Permission BLUETOOTH_CONNECT status: ${res.hasPermission}`)
                    })
                }
            })
            AndroidPermissions.checkPermission(AndroidPermissions.PERMISSION.BLUETOOTH_SCAN).then((r) => {
                if(r.hasPermission === false){
                    console.log('Permission tidak diijinkan')
                    AndroidPermissions.requestPermission(AndroidPermissions.PERMISSION.BLUETOOTH_SCAN).then((res) => {
                        console.log(`Permission BLUETOOTH_SCAN status: ${res.hasPermission}`)
                    })
                }
            })
            AndroidPermissions.checkPermission(AndroidPermissions.PERMISSION.BLUETOOTH_ADVERTISE).then((r) => {
                if(r.hasPermission === false){
                    console.log('Permission tidak diijinkan')
                    AndroidPermissions.requestPermission(AndroidPermissions.PERMISSION.BLUETOOTH_ADVERTISE).then((res) => {
                        console.log(`Permission BLUETOOTH_ADVERTISE status: ${res.hasPermission}`)
                    })
                }
            })
        }
    })
    function showToast(message:any, color:any, duration:any, position:any){
        setIsToastMessage(message)
        setIsToastColor(color)
        setIsToastDuration(duration)
        setIsToastPosition(position)
        setIsToast(true)
    }
    function onChange(val:any, type:any){
        if(type === 'username'){
            setIsUsername(val)
            if(val !== ''){
                if(isPassword !== ''){
                    setIsFill(true)
                }else{
                    setIsFill(false)
                }
            }else{
                setIsFill(false)
            }
        }
        if(type === 'password'){
            setIsPassword(val)
            if(val !== ''){
                if(isUsername !== ''){
                    setIsFill(true)
                }else{
                    setIsFill(false)
                }
            }else{
                setIsFill(false)
            }
        }
    }
    function getFCMToken(){
        if(Capacitor.getPlatform() === 'ios'){
            FCM.getToken()
            .then((r) => {
                localStorage.setItem('fcm', String(r.token))
                console.log(String(r.token))
            })
            .catch((err) => console.log(err));
        }else{
            PushNotifications.addListener('registration', (token: Token) => {
                localStorage.setItem('fcm', String(token.value))
                console.log(String(token.value))
            })
        }
        FCM.subscribeTo({ topic: "all" })
        .then((r) => console.log(`complete subscribe`))
        .catch((err) => console.log('Gagal Subscribe channel'));
    }
    function doLogin(){
        if(isFill === true){
            let data = new FormData()
            data.append('username', isUsername)
            data.append('password', isPassword)
            $.ajax({
                type: "POST",
                url: "https://xpdcargo.id/login/Callback/apiSingleLoginKios",
                data: data,
                processData: false,
                contentType: false,
                dataType: "JSON",
                beforeSend:function(){
                    setIsLoadingPop(true)
                },
                success:function(r:any){
                    setIsLoadingPop(false)
                    if(r.code === 200){
                        showToast('Login Berhasil', 'success', 1200, 'top')
                        getFCMToken()
                        localStorage.setItem('lastMenu', 'Beranda')
                        localStorage.setItem('isLogin', '1')
                        localStorage.setItem('username', r.nama)
                        localStorage.setItem('userphone', r.phone)
                        localStorage.setItem('useremail', r.email)
                        localStorage.setItem('userid', r.user_id)
                        localStorage.setItem('svc_id', r.service_center_id)
                        localStorage.setItem("verifyPhone", r.verify_phone)
                        localStorage.setItem("verifyEmail", r.verify_email)
                        window.open('/main', '_self')
                    }else{
                        showToast(r.message, 'danger', 1200, 'top')
                    }
                },
                error:function(err){
                    setIsLoadingPop(false)
                    showToast('Gagal login, silahkan coba kembali', 'danger', 1200, 'top')
                }
            })
        }else{
            showToast('harap lengkapi data dulu', 'danger', 1200, 'top')
        }
    }
    return(
        <IonPage>
            <IonContent fullscreen id='Login'>
                <IonGrid>
                    <IonRow style={{padding:"10vh 0 3vh 0"}}>
                        <IonCol size='12'>
                            <IonText mode='ios' style={{fontSize:"28px", fontWeight:"bold"}} color='light'>
                                MY XPDC KIOS
                            </IonText>
                        </IonCol>
                        <IonCol size='12'>
                            <IonText mode='ios' color='light'>
                                Silahkan login untuk masuk aplikasi
                            </IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size='12'>
                            <IonText mode='ios' style={{fontWeight:'bold'}} color='light'>Username</IonText>
                            <IonInput mode='ios' inputMode='text' style={{borderRadius:"5px", margin:"5px 0 0 0", background:"rgba(250, 250, 250, 0.7)", color:"black", padding:"0 0 0 10px"}} value={isUsername} onIonChange={(e)=>{onChange(String(e.detail.value), 'username')}} placeholder="Email/No. Hp" />
                        </IonCol>
                    </IonRow>
                    <IonRow style={{padding:"10px 0"}}>
                        <IonCol size='12'>
                            <IonText mode='ios' style={{fontWeight:'bold'}} color='light'>Kata Sandi</IonText>
                            <IonInput mode='ios' type='password' style={{borderRadius:"5px", background:"rgba(250, 250, 250, 0.7)", color:"black", width:"100%", padding:"10px 0 10px 2px", margin:"5px 0 0 0"}} value={isPassword} onIonChange={(e)=>{onChange(String(e.detail.value), 'password')}} placeholder='****'/>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size='12' style={{textAlign:"end"}}>
                            <IonText mode='ios' color='light' style={{fontSize:"18px", fontWeight:"bold"}}>
                                Lupa Kata Sandi?
                            </IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size='12'>
                            <IonButton mode='ios' expand='block' color={(isFill === true)?'success':'medium'} onClick={()=>{doLogin()}}>
                                Login
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonLabel mode='ios' style={{position:"absolute", bottom:0, margin:"15px auto", width:"100vw"}}>
                    <IonText mode='ios' style={{display:"flex", flexDirection:"column", textAlign:"center"}} color='light'>
                        <span style={{fontSize:"12px"}}>Powered by PT. XENTRA PLATFORM DIGITAL CARGO</span>
                        <span style={{fontSize:"10px"}}>Developer By Team IT XPDC @2023</span>
                    </IonText>
                </IonLabel>
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
            </IonContent>
        </IonPage>
    )
}
export default Login