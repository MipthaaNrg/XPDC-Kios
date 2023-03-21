import { createAnimation, IonBadge, IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonLabel, IonLoading, IonMenuButton, IonModal, IonNavLink, IonPage, IonProgressBar, IonRippleEffect, IonRow, IonSegment, IonSegmentButton, IonSlide, IonSlides, IonText, IonTitle, IonToast, IonToggle, IonToolbar } from "@ionic/react";
import { useEffect, useState } from "react";
import $ from 'jquery'
import { arrowForwardOutline, calculatorOutline, closeCircleOutline, informationCircleOutline, location, peopleCircleOutline, planetOutline, scanCircleOutline, searchCircleOutline } from "ionicons/icons";
import Reguler from './Reguler'

const Beranda: React.FC = () => {
// function Beranda(){
    const [isLoadingBar, setIsLoadingBar] = useState(false)
    const [isLoadingPop, setIsLoadingPop] = useState(false)
    const [isToast, setIsToast] = useState(false)
    const [isToastMessage, setIsToastMessage] = useState('')
    const [isToastColor, setIsToastColor] = useState('')
    const [isToastDuration, setIsToastDuration] = useState(Number)
    const [isToastPosition, setIsToastPosition] = useState()
    const [isMySaldo, setIsMySaldo] = useState('')
    const [isMyPin, setIsMyPin] = useState('')
    const [isMyVerifyPhone, setIsMyVerifyPhone] = useState(false)
    const [isMyCS, setIsMyCS] = useState('')
    const [isMyOrder, setIsMyOrder] = useState('')
    const [isMyName, setIsMyName] = useState('')
    const [isLokasiAsal, setIsLokasiAsal] = useState('')
    const [isLokasiTujuan, setIsLokasiTujuan] = useState('')
    const [isBerat, setIsBerat] = useState('')
    const [isDimensi, setIsDimensi] = useState(false)
    const [isPanjang, setIsPanjang] = useState('')
    const [isLebar, setIsLebar] = useState('')
    const [isTinggi, setIsTinggi] = useState('')
    const [isSvcAsal, setIsSvcAsal] = useState('')
    const [isSvcTujuan, setIsSvcTujuan] = useState('')
    const [isHubAsal, setIsHubAsal] = useState('')
    const [isHubTujuan, setIsHubTujuan] = useState('')
    const [dataNews, setDataNews] = useState([])
    const [dataLokasi, setDataLokasi] = useState([])
    const [dataLokasiOrigin, setDataLokasiOrigin] = useState([])
    const [isSelectType, setIsSelectType] = useState('')
    const [isSelectTracking, setIsSelectTracking] = useState('detail')
    const [isQLokasi, setIsQLokasi] = useState('')
    const [isModalLokasi, setIsModalLokasi] = useState(false)
    const [isModalTracking, setIsModalTracking] = useState(false)
    const [isModalOngkir, setIsModalOngkir] = useState(false)
    const [isInfiniteDisabled, setInfiniteDisabled] = useState(false)
    const [dataTracking, setDataTracking] = useState([])
    const [dataOngkir, setDataOngkir] = useState([])
    function showToast(message:any, color:any, duration:any, position:any){
        setIsToastMessage(message)
        setIsToastColor(color)
        setIsToastDuration(duration)
        setIsToastPosition(position)
        setIsToast(true)
    }
    useEffect(()=>{
        if(isMySaldo === ''){
            getData()
            getNews()
        }
    })
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
    function getData(){
        let data = new FormData()
        data.append('user_id', String(localStorage.getItem('userid')))
        $.ajax({
            type: "POST",
            url: "https://xpdcargo.id/login/Callback/apiGetDataKios",
            data: data,
            processData: false,
            contentType: false,
            dataType: "JSON",
            beforeSend:function(){
                setIsLoadingBar(true)
            },
            success:function(r:any){
                setIsLoadingBar(false)
                setIsMySaldo(r.saldo)
                setIsMyPin(r.pin)
                setIsMyVerifyPhone(r.phone)
                setIsMyCS(r.cs)
                setIsMyOrder(r.order)
                setIsMyName(r.name)
            },
            error:function(err){
                setIsLoadingBar(false)
                showToast('Gagal mendapatkan data, periksa koneksi internet kamu', 'danger', 1200, 'top')
            }
        })
    }
    function getNews(){
        $.ajax({
            type: "GET",
            url: "https://xpdcargo.id/login/Callback/apiGetDataNewsKios",
            dataType: "JSON",
            beforeSend:function(){
                setIsLoadingBar(true)
            },
            success:function(r:any){
                setIsLoadingBar(false)
                setDataNews(r.data)
            },
            error:function(err){
                console.log(err)
                setIsLoadingBar(false)
                showToast('Gagal mendapatkan data berita', 'medium', 1200, 'top')
            }
        })
    }
    function openModalLokasi(type:any){
        setIsSelectType(String(type))
        let data = new FormData()
        data.append('type', String(type))
        data.append('svc_id', String(localStorage.getItem('svc_id')))
        $.ajax({
            type: "POST",
            url: "https://xpdcargo.id/login/Callback/apiGetLokasiKios",
            data: data,
            processData:false,
            contentType:false,
            dataType:"JSON",
            beforeSend:function(){
                setIsLoadingBar(true)
            },
            success:function(r:any){
                setIsLoadingBar(false)
                setDataLokasiOrigin(r.data)
                setDataLokasi(r.data.slice(0, 15))
                setIsModalLokasi(true)
            },
            error:function(err){
                console.log(err)
                setIsLoadingBar(false)
                showToast('Gagal mendapatkan data lokasi, coba kembali', 'danger', 1200, 'top')
            }
        })
    }
    function closeModalLokasi(){
        setIsQLokasi('')
        setIsSelectType('')
        setIsModalLokasi(false)
        console.log('tutup modal')
    }
    function doDeleteLokasi(type:any){

    }
    function doCalculate(){
        let data = new FormData()
        data.append('user_id', String(localStorage.getItem('userid')))
        data.append('lokasiAsal', isLokasiAsal)
        data.append('svc_asal', isSvcAsal)
        data.append('hub_asal', isHubAsal)
        data.append('lokasiTujuan', isLokasiTujuan)
        data.append('svc_tujuan', isSvcTujuan)
        data.append('hub_tujuan', isHubTujuan)
        data.append('berat', isBerat)
        if(isDimensi === true){
            var volumeReguler = Math.ceil((Number(isPanjang) * Number(isLebar) * Number(isTinggi)) / 6000)
            var volumeExpress = Math.ceil((Number(isPanjang) * Number(isLebar) * Number(isTinggi)) / 4000)
            data.append('panjang', isPanjang)
            data.append('lebar', isLebar)
            data.append('tinggi', isTinggi)
            data.append('volumeExpress', String(volumeExpress))
            data.append('volumeReguler', String(volumeReguler))
        }else{
            data.append('volumeExpress', String(0))
            data.append('volumeReguler', String(0))
        }
        $.ajax({
            type: "POST",
            url: "https://xpdcargo.id/login/Callback/apiCekOngkir",
            data: data,
            processData: false,
            contentType: false,
            dataType: "JSON",
            beforeSend:function(){
                setIsLoadingPop(true)
            },
            success:function(r:any){
                setDataOngkir(r)
                setIsLoadingPop(false)
                console.log(r)
                setIsModalOngkir(true)
            },
            error:function(err){
                setIsLoadingPop(false)
                showToast('Gagal cek ongkir, coba kembali', 'danger', 1200, 'top')
            }
        })
    }
    const pushDataLokasi = () => {
        var max = dataLokasi.length + 10;
        var q = String($("ion-input[name='qLokasi']").val())
        if(q.trim() !== ''){
          var search = dataLokasiOrigin.filter((a) => {
            return String(a['lokasi']).toUpperCase().includes(String(q).toUpperCase())
          })
          setDataLokasi(search.slice(0,max))
        }else{
          setDataLokasi(dataLokasiOrigin.slice(0, max))
        }
      }
    const loadDataLokasi = (ev: any) => {
        setTimeout(() => {
            pushDataLokasi();
            ev.target.complete();
            if(dataLokasi.length === 1000){
                setInfiniteDisabled(true)
            }
        },500);
    }
    function doSelectLokasi(id:any, lokasi:any, svc_id:any, hub_id:any){
        if(isSelectType === 'asal'){
          setIsLokasiAsal(lokasi)
          setIsSvcAsal(svc_id)
          setIsHubAsal(hub_id)
        }else{
          setIsLokasiTujuan(lokasi)
          setIsSvcTujuan(svc_id)
          setIsHubTujuan(hub_id)
        }
        setIsModalLokasi(false)
        setIsQLokasi('')
        console.log('cari')
    }
    function doSearch(){
        var q = String($("ion-input[name='qLokasi']").val())
        if(q.trim() !== ''){
            var search = dataLokasiOrigin.filter((a) => {
                return String(a['lokasi']).toUpperCase().includes(String(q).toUpperCase())
            })
            if(search.length > 0){
                setDataLokasi(search.slice(0,15))
            }else{
                doSendRequestLokasi()
            }
        }else{
            setDataLokasi(dataLokasiOrigin.slice(0,15))
        }
    }
    function doSendRequestLokasi(){
        let data = new FormData()
        data.append('type', String(isSelectType))
        data.append('svc_id', '2')
        data.append('q', String($("ion-input[name='qLokasi']").val()))
        $.ajax({
            type: "POST",
            url: "https://xpdcargo.id/login/Callback/apiGetLokasiKios",
            data: data,
            processData:false,
            contentType: false,
            dataType: "JSON",
            beforeSend:function(){
                setIsLoadingBar(true)
            },
            success:function(r:any){
                setIsLoadingBar(false)
                setDataLokasiOrigin(r.data)
                setDataLokasi(r.data.slice(0,15))
            },
            error:function(err){
                setIsLoadingBar(false)
                showToast('Gagal mencari lokasi, coba kembali', 'danger', 1200, 'midle')
            }
        })
    }

    $("ion-input[name='qResi']").on('keyup', function (event) {
        if (event.keyCode === 13) {
           doTracking()
        }
    });
    function doTracking(){
        var q = String($("ion-input[name='qResi']").val())
        if(q.trim() !== ''){
          $.ajax({
            type: "POST",
            url: "https://xpdcargo.id/login/Callback/publicApiTracking",
            data: {no_tracking: `XPDC${q}`},
            dataType: "JSON",
            beforeSend:function(){
              setIsLoadingPop(true)
            },
            success:function(r:any){
              setIsLoadingPop(false)
              if(r.code === 200){
                setDataTracking(r)
                setIsModalTracking(true)
              }else{
                showToast('Nomot tracking tidak ditemukan, coba tracking lain', 'danger', 1200, 'bottom')
              }
              $("ion-input[name='qResi']").val('')
            },
            error:function(err){
              setIsLoadingPop(false)
            }
          })
        }
    }
    function openMenu(menu:any){
        window.open(`/${menu}`,'_self')
    }

    function openJobs(){
        window.open('/Jobs','_self')
    }

    return(
        <IonPage>
            <IonHeader mode='ios'>
                <IonToolbar mode='ios'>
                    <IonGrid style={{margin:0, padding:0}}>
                        <IonRow>
                            <IonCol size='1' style={{background:"rgba(108,122,137,0.15)", borderRadius:"10px 0 0 10px", padding:"1px 5px", margin:"3px 0"}}>
                                <IonButton mode='ios' fill='clear' color='primary' size='small'>
                                    <IonRippleEffect></IonRippleEffect>
                                    <IonIcon icon={scanCircleOutline} />
                                </IonButton>
                            </IonCol>
                            <IonCol size='2' style={{background:"rgba(108,122,137,0.15)", padding:"1px 0 1px 5px", margin:"3px 0"}}>
                                <IonInput mode='ios' inputMode='text' value={'XPDC'} style={{textAlign:"end", fontSize:"12px"}} readonly={true}/>
                            </IonCol>
                            <IonCol size='7' style={{background:"rgba(108,122,137,0.15)", padding:"1px 5px 1px 0", margin:"3px 0"}}>
                                <IonInput mode='ios' inputMode='numeric' placeholder='0000000001' style={{textAlign:"start", fontSize:"12px"}} name='qResi'/>
                            </IonCol>
                            <IonCol size='2' style={{background:"rgba(108,122,137,0.15)", borderRadius:"0 10px 10px 0", padding:"1px 5px", margin:"3px 0"}}>
                                <IonButton mode='ios' fill='clear' color='primary' size='small' onClick={()=>{doTracking()}}>
                                    <IonRippleEffect></IonRippleEffect>
                                    <IonIcon icon={arrowForwardOutline} />
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
                {(isLoadingBar === true)?
                    <IonProgressBar type="indeterminate" color='danger'></IonProgressBar>
                :""}
            </IonHeader>
            <IonContent id='Beranda'>
                <IonGrid style={{margin:0, padding:"15px"}}>
                    <IonRow style={{paddingRight:"15px"}}>
                        <IonCol size='10' style={{textAlign:"start"}}>
                            <IonText mode='ios' style={{display:"flex", flexDirection:"column", color:"#F9F9F9"}}>
                                <span style={{fontSize:"18px", fontWeight:"bold"}}>{isMySaldo}</span>
                                <span style={{fontSize:"12px"}}>Point Saya</span>
                            </IonText>
                        </IonCol>
                        <IonCol size='2'>
                            <IonButton onClick={()=>openJobs()}> Jobs</IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{padding:"15px 0 0 0"}}>
                        <IonCol size='6' style={{textAlign:"center"}}>
                            <IonText mode='ios' style={{display:"flex", flexDirection:"column", color:"#F9F9F9"}}>
                                <span style={{fontSize:"18px", fontWeight:"bold"}}>{isMyCS}</span>
                                <span style={{fontSize:"12px"}}>Referral Saya</span>
                            </IonText>
                        </IonCol>
                        <IonCol size='6' style={{textAlign:"center"}}>
                            <IonText mode='ios' style={{display:"flex", flexDirection:"column", color:"#F9F9F9"}}>
                                <span style={{fontSize:"18px", fontWeight:"bold"}}>{isMyOrder}</span>
                                <span style={{fontSize:"12px"}}>Pesanan Saya</span>
                            </IonText>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid id='Beranda'>
                    <IonRow style={{background:"#EFEFF0", borderRadius:"15px 15px 0 0", padding:"10px"}}>
                        <IonCol size='12'>
                            <IonText mode='ios'>
                                Halo {isMyName}, Selamat datang..
                            </IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{padding:"10px"}}>
                        <IonCol size='12' style={{margin:0, padding:0, textAlign:"start"}}>
                            <IonText mode='ios' style={{fontSize:"12px", color:"gray"}}>
                                <IonIcon icon={location} style={{margin:"0 2px", color:"red"}}/>
                                Lokasi Asal/Pengirim
                            </IonText>
                        </IonCol>
                        <IonCol size='10' style={{background:"rgba(108,122,137,0.15)", borderRadius:"10px 0 0 10px", padding:"1px 5px", margin:"3px 0"}} onClick={()=>{openModalLokasi('asal')}}>
                            <IonInput mode='ios' inputMode='text' placeholder='Cari lokasi' value={(isLokasiAsal !== '')?isLokasiAsal:''} style={{textAlign:"start", fontSize:"12px"}} readonly={true}/>
                        </IonCol>
                        <IonCol size='2' style={{background:"rgba(108,122,137,0.15)", borderRadius:"0 10px 10px 0", padding:"1px 5px", margin:"3px 0"}} onClick={()=>{(isLokasiAsal === '')?openModalLokasi('asal'):doDeleteLokasi('asal')}}>
                        {(isLokasiAsal === '')?
                            <IonButton mode='ios' fill='clear' color='primary' size='small'>
                                <IonRippleEffect></IonRippleEffect>
                                <IonIcon icon={searchCircleOutline} />
                            </IonButton>:
                            <IonButton mode='ios' fill='clear' color='danger' size='small'>
                                <IonRippleEffect></IonRippleEffect>
                                <IonIcon icon={closeCircleOutline} />
                            </IonButton>
                        } 
                        </IonCol>
                        <IonCol size='12' style={{margin:0, padding:0, textAlign:"start"}}>
                            <IonText mode='ios' style={{fontSize:"12px", color:"gray"}}>
                                <IonIcon icon={location} style={{margin:"0 2px", color:"green"}}/>
                                Lokasi Tujuan/Penerima
                            </IonText>
                        </IonCol>
                        <IonCol size='10' style={{background:"rgba(108,122,137,0.15)", borderRadius:"10px 0 0 10px", padding:"1px 5px", margin:"3px 0"}} onClick={()=>{openModalLokasi('tujuan')}}>
                            <IonInput mode='ios' inputMode='text' placeholder='Cari lokasi' value={(isLokasiTujuan !== '')?isLokasiTujuan:''} style={{textAlign:"start", fontSize:"12px"}} readonly={true}/>
                        </IonCol>
                        <IonCol size='2' style={{background:"rgba(108,122,137,0.15)", borderRadius:"0 10px 10px 0", padding:"1px 5px", margin:"3px 0"}} onClick={()=>{(isLokasiTujuan === '')?openModalLokasi('tujuan'):doDeleteLokasi('tujuan')}}>
                        {(isLokasiTujuan === '')?
                            <IonButton mode='ios' fill='clear' color='primary' size='small'>
                                <IonRippleEffect></IonRippleEffect>
                                <IonIcon icon={searchCircleOutline} />
                            </IonButton>:
                            <IonButton mode='ios' fill='clear' color='danger' size='small'>
                                <IonRippleEffect></IonRippleEffect>
                                <IonIcon icon={closeCircleOutline} />
                            </IonButton>
                        }
                        </IonCol>
                        <IonCol size='8' style={{background:"rgba(108,122,137,0.15)", borderRadius:"10px", padding:"1px 5px", margin:"2px 0", border:"solid 1px white"}}>
                            <IonInput mode='ios' inputMode='numeric' placeholder='Berat Box (Kg)' value={(isBerat !== '')?isBerat:''} style={{textAlign:"start", fontSize:"12px"}} onIonChange={(e)=>{setIsBerat(String(e.detail.value))}}/>
                        </IonCol>
                        <IonCol size='2' style={{borderRadius:"5px 0 0 5px", padding:"7px 5px 1px 5px", margin:"2px 0", textAlign:"start"}}>
                            <IonText mode='ios' style={{fontSize:"12px", color:"gray"}}>Dimensi</IonText>
                        </IonCol>
                        <IonCol size='2' style={{borderRadius:"0 5px 5px 0", padding:"2px 5px 1px 5px", margin:"2px 0", textAlign:"start"}}>
                            <IonToggle enableOnOffLabels={true} mode='ios' checked={isDimensi} onIonChange={(e)=>{setIsDimensi(e.detail.checked)}}></IonToggle>
                        </IonCol>
                        {(isDimensi === true)?
                        <IonCol size='4' style={{background:"rgba(108,122,137,0.15)", borderRadius:"10px", padding:"1px 5px", margin:"2px 0", border:"solid 1px white"}} className="anim-slide-down-d1 anim-linear">
                            <IonInput mode='ios' inputMode='numeric' placeholder='Panjang (cm)' value={(isPanjang !== '')?isPanjang:''} style={{textAlign:"start", fontSize:"12px"}} onIonChange={(e)=>{setIsPanjang(String(e.detail.value))}}/>
                        </IonCol>
                        :''}
                        {(isDimensi === true)?
                        <IonCol size='4' style={{background:"rgba(108,122,137,0.15)", borderRadius:"10px", padding:"1px 5px", margin:"2px 0", border:"solid 1px white"}} className="anim-slide-down-d1 anim-linear">
                            <IonInput mode='ios' inputMode='numeric' placeholder='Lebar (cm)' value={(isLebar !== '')?isLebar:''} style={{textAlign:"start", fontSize:"12px"}} onIonChange={(e)=>{setIsLebar(String(e.detail.value))}}/>
                        </IonCol>
                        :''}
                        {(isDimensi === true)?
                        <IonCol size='4' style={{background:"rgba(108,122,137,0.15)", borderRadius:"10px", padding:"1px 5px", margin:"2px 0", border:"solid 1px white"}} className="anim-slide-down-d1 anim-linear">
                            <IonInput mode='ios' inputMode='numeric' placeholder='Tinggi (cm)' value={(isTinggi !== '')?isTinggi:''} style={{textAlign:"start", fontSize:"12px"}} onIonChange={(e)=>{setIsTinggi(String(e.detail.value))}}/>
                        </IonCol>
                        :''}

                        <IonCol size='12' style={{padding:0, margin:0}}>
                            <IonButton mode='ios' expand='block' color='primary' disabled={(isLokasiAsal !== '' && isLokasiTujuan !== '' && isBerat !== '')?Boolean(false):Boolean(true)} onClick={()=>{doCalculate()}}>
                            <IonRippleEffect></IonRippleEffect>
                                CEK HARGA
                                <IonIcon icon={calculatorOutline} slot="end" style={{margin:"0 5px", padding:0}} />
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{padding:"20px 0"}}>
                        <IonCol size='12' style={{textAlign:"start", padding:"0 15px 5px 15px"}}>
                            <IonText mode='ios' style={{fontSize:"14px", fontWeight:"bold"}} color='primary'>
                                Layanan
                            </IonText>
                        </IonCol>
                        <IonCol size='3' style={{textAlign:"center"}}>
                            <IonText mode='ios' style={{display:"flex", flexDirection:"column"}} onClick={()=>{openMenu('Reguler')}}>
                                <IonImg src='assets/Reguler.png' style={{height:"8vh"}} />
                                <span style={{fontSize:"12px", margin:0}}>Kirim Reguler</span>
                            </IonText>
                        </IonCol>
                        <IonCol size='3' style={{textAlign:"center"}}>
                            <IonText mode='ios' style={{display:"flex", flexDirection:"column"}} onClick={()=>{openMenu('Express')}}>
                                <IonImg src='assets/Express.png' style={{height:"8vh"}} />
                                <span style={{fontSize:"12px", margin:0}}>Kirim Express</span>
                            </IonText>
                        </IonCol>
                        <IonCol size='3' style={{textAlign:"center"}}>
                            <IonText mode='ios' style={{display:"flex", flexDirection:"column"}} onClick={()=>{openMenu('KirimMotor')}}>
                                <IonImg src='assets/Motor.png' style={{height:"8vh"}} />
                                <span style={{fontSize:"12px", margin:0}}>Kirim Motor</span>
                            </IonText>
                        </IonCol>
                        <IonCol size='3' style={{textAlign:"center"}}>
                            <IonText mode='ios' style={{display:"flex", flexDirection:"column"}} onClick={()=>{openMenu('SewaTruck')}}>
                                <IonImg src='assets/Truck.png' style={{height:"8vh"}} />
                                <span style={{fontSize:"12px", margin:0}}>Sewa Truck</span>
                            </IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{padding:"10px 0"}}>
                        <IonCol size='12' style={{textAlign:"start", padding:"0 15px"}}>
                            <IonText mode='ios' style={{fontSize:"14px", fontWeight:"bold"}} color='primary'>
                                News & Tips
                            </IonText>
                        </IonCol>
                        <IonCol size='12'>
                            <IonSlides pager={true} options={{initialSlide: 0, speed: 1500, loop: true, autoplay: { delay: 1000, disableOnInteraction: false}}} mode='ios'>
                                {dataNews.map((a, index) => {
                                    return(
                                        <IonSlide key={index}>
                                            <IonImg src={a['image']} style={{width:"90vw", height:"20vh"}} />
                                        </IonSlide>
                                    )
                                })}
                                
                            </IonSlides>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>

            <IonModal mode='ios' isOpen={isModalLokasi} onDidDismiss={()=>{closeModalLokasi()}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
                <IonHeader mode='ios'>
                    <IonToolbar mode='ios'>
                        <IonButtons slot='start'>
                            <IonButton mode='ios' fill='clear' color='danger' onClick={()=>{closeModalLokasi()}}>
                                <IonIcon icon={closeCircleOutline} />
                            </IonButton>
                        </IonButtons>
                        <IonTitle>Cari Lokasi</IonTitle>
                    </IonToolbar>
                    {(isLoadingBar === true)?
                        <IonProgressBar type="indeterminate" color='danger'></IonProgressBar>
                    :""}
                </IonHeader>
                <IonContent fullscreen>
                    <IonGrid>
                        <IonRow>
                            {(dataLokasi.length > 0)?
                            dataLokasi.map((a, index) => {
                            return(
                                <IonCol size='12' style={{background:"rgba(200,200,200,0.15)", borderRadius:"5px", margin:"2px 0", border:"solid 1px rgb(200,200,200)", textAlign:"start"}} onClick={()=>{doSelectLokasi(a['id'], a['lokasi'], a['svc_id'], a['hub_id'])}} key={index}>
                                    <IonText mode='ios' style={{fontSize:"12px"}}>
                                        {a['lokasi']}
                                    </IonText>
                                </IonCol>
                            )
                            }):
                            <IonCol size='12' style={{background:"rgba(200,200,200,0.15)", borderRadius:"5px", margin:"5px 0", border:"solid 1px rgb(200,200,200)", textAlign:"start"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}}>
                                    Lokasi belum tersedia..
                                </IonText>
                            </IonCol>
                            }
                            <IonInfiniteScroll onIonInfinite={loadDataLokasi} threshold="100px" disabled={isInfiniteDisabled}>
                                <IonInfiniteScrollContent loadingSpinner="crescent" loadingText="Memuat data.."></IonInfiniteScrollContent>
                            </IonInfiniteScroll>
                        </IonRow>
                    </IonGrid>
                </IonContent>
                <IonFooter mode='ios' style={{background:"white", padding:"5px 10px"}}>
                    <IonGrid>
                        <IonRow>
                            <IonCol size='10' style={{background:"rgba(108,122,137,0.25)", borderRadius:"10px 0 0 10px", padding:"1px 5px", margin:"3px 0"}}>
                                <IonInput mode='ios' inputMode='text' placeholder='Provinsi/kota/kecamatan/kelurahan/kode pos' value={(isQLokasi !== '')?isQLokasi:''} style={{textAlign:"start", fontSize:"12px", color:"black"}} name='qLokasi' onIonChange={(e)=>{setIsQLokasi(String(e.detail.value))}}/>
                            </IonCol>
                            <IonCol size='2' style={{background:"rgba(45,85,255,0.95)", borderRadius:"0 10px 10px 0", padding:"1px 5px", margin:"3px 0"}} onClick={()=>{doSearch()}}>
                                <IonButton mode='ios' fill='clear' color='light' size='small'>
                                    <IonRippleEffect></IonRippleEffect>
                                    <IonIcon icon={searchCircleOutline} />
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonFooter>
            </IonModal>

            <IonModal mode='ios' isOpen={isModalTracking} onDidDismiss={()=>{setIsModalTracking(false)}} animated={true}>
                <IonHeader mode='ios' style={{background:"white"}}>
                    <IonToolbar mode='ios'>
                        <IonButtons slot='start'>
                            <IonButton mode='ios' color='danger' onClick={()=>{setIsModalTracking(false)}}>
                                <IonRippleEffect></IonRippleEffect>
                                <IonIcon icon={closeCircleOutline} />
                            </IonButton>
                        </IonButtons>
                        <IonTitle>
                            CEK RESI
                        </IonTitle>
                    </IonToolbar>
                    <IonGrid style={{background:"white", padding:"2px 50px"}}>
                        <IonRow>
                            <IonCol size='12'>
                                <IonSegment value={isSelectTracking} mode='ios' onIonChange={(e)=>{setIsSelectTracking(String(e.detail.value))}}>
                                    <IonSegmentButton value="detail" mode='ios'>
                                        <IonLabel mode='ios' color='dark'>
                                            DETAIL
                                        </IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value="history" mode='ios'>
                                        <IonLabel mode='ios' color='dark'>
                                            HISTORY
                                        </IonLabel>
                                    </IonSegmentButton>
                                </IonSegment>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonHeader>
                <IonContent fullscreen>
                    {(isSelectTracking === 'detail')?
                    <IonGrid style={{color:"black", background:"white", border:"solid 1px black", borderRadius:"10px", margin:"5px 10px"}}>
                        <IonRow>
                            <IonCol size='6' style={{textAlign:"start", background:"rgb(108,122,137)", borderRadius:"10px 0 0 10px", padding:"10px"}}>
                                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:"16px", color:"#E8ECF1", fontWeight:"bold"}}>{String(dataTracking['no_tracking']).toUpperCase()}</span>
                                    <span style={{fontSize:"12px", color:"#E8ECF1"}}>{dataTracking['created_at']}</span>
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"end", background:"rgb(108,122,137)", borderRadius:"0 10px 10px 0", padding:"10px"}}>
                                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:"16px", color:"#E8ECF1"}}>{String(dataTracking['layanan']).toUpperCase()}</span>
                                    <span style={{fontSize:"12px", color:"#E8ECF1"}}>{dataTracking['status']}</span>
                                </IonText>
                            </IonCol>
                            <IonCol size='12' style={{textAlign:"start", padding:"10px"}}>
                                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:"12px"}}>PENGIRIM</span>
                                    <span style={{fontSize:"14px", fontWeight:"bold"}}>{String(dataTracking['nama_pengirim']).toUpperCase()}</span>
                                    <span style={{fontSize:"13px"}}>{dataTracking['alamat_pengirim']}</span>
                                    <span style={{fontSize:"13px"}}>{dataTracking['lokasi_pengirim']}</span>
                                </IonText>
                            </IonCol>
                            <IonCol size='12' style={{textAlign:"start", padding:"10px", borderTop:"dashed 1px gray"}}>
                                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:"12px"}}>PENERIMA</span>
                                    <span style={{fontSize:"14px", fontWeight:"bold"}}>{String(dataTracking['nama_penerima']).toUpperCase()}</span>
                                    <span style={{fontSize:"13px"}}>{dataTracking['alamat_penerima']}</span>
                                    <span style={{fontSize:"13px"}}>{dataTracking['lokasi_penerima']}</span>
                                </IonText>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    :
                    <IonGrid style={{padding:"10px 10px"}}>
                        <IonRow>
                        {dataTracking['data'].map((a, index) => {
                            return(
                            <IonCol size='12' key={index} style={{border:"solid 1px #0000A0", margin:"5px 0", borderRadius:"10px"}}>
                                <IonText mode='ios' style={{textAlign:"start", display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:"12px", display:"flex", justifyContent:"space-between"}}>
                                        {a['tanggal']} - {a['waktu']}
                                    </span>
                                    <span style={{fontSize:"15px"}}>
                                        {a['history']}
                                    </span>
                                    <span style={{fontSize:"12px"}}>
                                        <IonBadge mode='ios' color="medium">
                                            {a['provinsi']}, {a['kota']}
                                        </IonBadge>
                                    </span>
                                    <span style={{fontSize:"12px"}}>
                                        <IonBadge mode='ios' color={(a['status'] === 'Diterima')?'success':(a['status'] === 'Dalam Pengiriman')?'warning':'danger'} style={{margin:"2px"}}>
                                            {a['status']}
                                        </IonBadge>
                                    </span>
                                </IonText>
                            </IonCol>
                            )
                        })}
                        </IonRow>
                    </IonGrid>
                    }
                </IonContent>
            </IonModal>

            <IonModal mode='ios' isOpen={isModalOngkir} onDidDismiss={()=>{setIsModalOngkir(false)}} breakpoints={[0, 0.45]} initialBreakpoint={0.45} backdropBreakpoint={0} animated={true}>
                <IonContent fullscreen>
                    <IonGrid>
                        <IonRow>
                            <IonCol size='12' style={{textAlign:"center", padding:"10px"}}>
                            <IonText mode='ios' style={{fontSize:"18px", fontWeight:"bold"}}>
                                LAYANAN
                            </IonText>
                            </IonCol>
                        </IonRow>
                        {(String(dataOngkir['priceExpress']) !== '')?
                        <IonRow className='isExpress'>
                            <IonCol size='12' style={{textAlign:"start"}}>
                            <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                <span style={{fontSize:"16px", fontWeight:"bold"}}>
                                EXPRESS
                                <IonIcon icon={planetOutline} slot='end' style={{margin:"0 5px"}}/>
                                <sup style={{color:"red"}}>(Free Pickup)</sup>
                                </span>
                                <span style={{fontSize:"14px"}}>Estimasi Pengiriman {dataOngkir['transitExpress']}</span>
                                <span style={{fontSize:"14px"}}>Estimasi Harga <b>Rp{Number(dataOngkir['priceExpress']).toLocaleString(undefined, {maximumFractionDigits:2})}</b></span>
                            </IonText>
                            </IonCol>
                        </IonRow>
                        :""}
                            
                        <IonRow className='isReguler'>
                            <IonCol size='12' style={{textAlign:"start"}}>
                            <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                <span style={{fontSize:"16px", fontWeight:"bold"}}>
                                REGULER
                                <IonIcon icon={planetOutline} slot='end' style={{margin:"0 5px"}}/>
                                <sup style={{color:"red"}}>(Free Pickup)</sup>
                                </span>
                                <span style={{fontSize:"14px"}}>Estimasi Pengiriman {dataOngkir['transitReguler']}</span>
                                <span style={{fontSize:"14px"}}>Estimasi Harga <b>Rp{Number(dataOngkir['priceReguler']).toLocaleString(undefined, {maximumFractionDigits:2})}</b></span>
                            </IonText>
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
    )
}

export default Beranda;
