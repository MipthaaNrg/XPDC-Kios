import { IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonLoading, IonPage, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import { getDefaultNormalizer } from "@testing-library/react";
import { callSharp, chevronBackOutline, ellipsisVerticalOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { LottieLoading } from "./lottieAnimation";
import $ from 'jquery';

const Jobs: React.FC = () => {
    const history = useHistory();
    const [isSelectSegment ,setIsSelectSegment] = useState('pickup')
    const [isOpen, setIsOpen] = useState('pickup')
    const [isLoading, setIsLoading] = useState(false)
    const [dataPickup, setDataPickup] = useState([])
    const [dataDelivery, setDataDelivery] = useState([])
    const [dataPickupOrigin, setDataPickupOrigin] = useState([])
    const [dataDeliveryOrigin, setDataDeliveryOrigin] = useState([])
    const [isRefresh, setIsRefresh] = useState(false)
    const [data, setData] = useState([])
    const [dataOrigin, setDataOrigin] = useState([])
    const [toast, setToast] = useState(false)
    const [toastColor, setToastColor] = useState('')
    const [toastDuration, setToastDuration] = useState(Number)
    const [toastMessage, setToastMessage] = useState('')
    const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
    const [isSearchEmpty, setIsSearchEmpty] = useState(false)

    
    useIonViewWillEnter(() =>{
      getDataPickup()
      getDataDeliver()
    })

    function getDataPickup(){
      let data = new FormData();
      data.append('user_id', String(localStorage.getItem('user_id')))
      $.ajax({
        type:'POST',
        url: 'https://xpdcargo.id/login/Callback/getDataOperationalPickup',
        dataType:'JSON',
        data:data,
        processData:false,
        contentType:false,
        beforeSend:function(){
          setDataPickup([])
          setIsLoading(true)
        },
        success:function(r:any){
          setIsLoading(false)
          setDataPickup(r.data.slice(0,5))
          setDataPickupOrigin(r.data)
        },
        error:function(err){
          console.log(err)
          setIsLoading(false)
        }
      })
    }

    function getDataDeliver(){
      let data = new FormData();
      data.append('user_id', String(localStorage.getItem('user_id')))
      $.ajax({
        type:'POST',
        url: 'https://xpdcargo.id/login/Callback/getDataOperationalDeliver',
        dataType:'JSON',
        data:data,
        processData:false,
        contentType:false,
        beforeSend:function(){
          setDataDelivery([])
          setIsLoading(true)
        },
        success:function(r:any){
          setIsLoading(false)
          setDataDelivery(r.data.slice(0,5))
          setDataDeliveryOrigin(r.data)
        },
        error:function(err){
          console.log(err)
          setIsLoading(false)
        }
      })
    }

    

    function doSelectSegment(val:any){
      setIsSelectSegment((val === 'pickup')?'Pickup':'Deliver')
      setIsOpen(String(val))
    }
  
    function search(cari:any){
      if(String(cari).trim() !== ''){
        if(isSelectSegment === 'pickup'){
          var filterdata = dataPickup.filter(function(datafilter){
              return String(datafilter['nama_pengirim']).toLowerCase().includes(String(cari).toLowerCase()) || String(datafilter['no_telepon_pengirim']).toLowerCase().includes(String(cari).toLowerCase()) || String(datafilter['no_tracking']).toLowerCase().includes(String(cari).toLowerCase())
          })
          setDataPickup(filterdata)
        }else{
          var filterdata = dataDelivery.filter(function(datafilter){
            return String(datafilter['nama_penerima']).toLowerCase().includes(String(cari).toLowerCase()) || String(datafilter['no_telepon_penerima']).toLowerCase().includes(String(cari).toLowerCase()) || String(datafilter['no_tracking']).toLowerCase().includes(String(cari).toLowerCase())
          })
          setDataDelivery(filterdata)
        }
      }
      if(String(cari).trim() === ''){
        setDataPickup(dataPickupOrigin)
        setDataDelivery(dataDeliveryOrigin)
      }
    }

    const pushData = () => {
      if(isOpen === 'pickup'){
        var max = dataPickup.length + 10;
        setDataPickup(dataPickupOrigin.slice(0, max))
      }
      if(isOpen === 'deliver'){
        var max = dataDelivery.length + 10;
        setDataDelivery(dataDeliveryOrigin.slice(0, max))
      }
    }

    const loadData = (ev: any) => {
      setTimeout(() => {
        pushData();
        ev.target.complete();
        if(isOpen === 'pickup'){
          if(dataPickup.length === 1000){
            setInfiniteDisabled(true)
          }
        }
        if(isOpen === 'deliver'){
          if(dataDelivery.length === 1000){
            setInfiniteDisabled(true)
          }
        }
      },500);
    }

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton mode='ios' fill="clear" color='primary' onClick={() =>history.push('/Main')}>
                            <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                            BACK
                        </IonButton>
                    </IonButtons>
                    <IonTitle style={{textAlign:"center"}}>Jobs</IonTitle>
                </IonToolbar>
                <IonGrid style={{background:"#FFFFFF"}}>
                  <IonCol size='12'>
                    <IonSegment  mode='ios' onIonChange={(e) => {doSelectSegment(e.detail.value)}} value={isOpen} swipe-gesture={true} select-on-focus={false}>
                        <IonSegmentButton value="pickup">
                            <IonText mode='ios' style={{margin:"10px 0", fontSize:"16px"}}>
                                Pickup
                            </IonText>
                        </IonSegmentButton>
                        <IonSegmentButton value="deliver">
                            <IonText mode='ios' style={{margin:"10px 0", fontSize:"16px"}}>
                                Deliver
                            </IonText>
                        </IonSegmentButton>
                    </IonSegment>
                  </IonCol>
                  <IonCol size='12' style={{background:"transparent"}}>
                    <IonSearchbar mode='ios' inputMode='search' placeholder={`Cari Data ${isSelectSegment}`} onIonChange={(e)=>{search(String(e.detail.value))}} onIonClear={(e)=>{search('')}} style={{margin:0}} id='search'/>
                  </IonCol>
                </IonGrid>
            </IonHeader>
            <IonContent>
                <IonGrid>
                {(isOpen === 'pickup')?
                dataPickup.map((a, index) => {
                return(
                    <IonRow key={index} style={{margin:"10px 15px", padding:"5px", borderRadius:"10px", background:"rgba(200,200,200,0.25)", border:"solid 1px #0000A0"}}>
                    <IonCol size='6' style={{textAlign:"start", background:"rgba(200,200,200,0.75)", borderRadius:"5px 0 0 5px"}}>
                        <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                        <span style={{fontSize:"14px", fontWeight:"bold", color:"#0000A0"}}>
                            {a['no_tracking']}
                        </span>
                        <span style={{fontSize:"10px", color:(a['layanan']==='Express')?'red':'#0000A0'}}>
                            {String(a['layanan']).toUpperCase()}
                        </span>
                        </IonText>
                    </IonCol>
                    <IonCol size='6' style={{textAlign:"end", background:"rgba(200,200,200,0.75)", borderRadius:"0 5px 5px 0"}}>
                        <IonBadge mode='ios' style={{fontSize:"10px"}} color={(a['status'] === 'Menunggu Diproses')?'medium':(a['status'] === 'Dalam Pengiriman')?'primary':(a['status'] === 'Diterima')?'success':'danger'}>
                        {String(a['status']).toUpperCase()}
                        </IonBadge>
                    </IonCol>
                    <IonCol size='12' style={{textAlign:"start"}}>
                        <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                        <span style={{fontSize:"10px"}}>ASAL</span>
                        <span style={{fontSize:"12px", fontWeight:"bold"}}>{String(a['nama_pengirim']).toUpperCase()}</span>
                        <span style={{fontSize:"12px"}}>{a['no_telepon_pengirim']}</span>
                        <span style={{fontSize:"12px"}}>{a['lokasi_pengirim']}</span>
                        </IonText>
                    </IonCol>
                    <IonCol size='12' style={{textAlign:"start"}} >
                        <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                        <span style={{fontSize:"10px"}}>TUJUAN</span>
                        <span style={{fontSize:"12px", fontWeight:"bold"}}>{String(a['nama_penerima']).toUpperCase()}</span>
                        <span style={{fontSize:"12px"}}>{a['no_telepon_penerima']}</span>
                        <span style={{fontSize:"12px"}}>{a['lokasi_penerima']}</span>
                        </IonText>
                    </IonCol>
                    
                    <IonCol size='6' style={{textAlign:"start", padding:"5px"}}>
                        <IonText mode='ios' style={{fontSize:"13px", fontWeight:"bold"}}>
                        STATUS PEMBAYARAN
                        </IonText>
                    </IonCol>
                    
                    {(a['payment_status'] === 'pending')?
                    <IonCol size='6' style={{textAlign:"end", padding:"5px"}}>
                        <IonBadge mode='ios' style={{fontSize:"13px"}} color='warning'>
                        BELUM BAYAR
                        </IonBadge>
                    </IonCol>
                    :""}
                    
                    {(a['payment_status'] === false)?
                    <IonCol size='6' style={{textAlign:"end", padding:"5px"}}>
                        <IonBadge mode='ios' style={{fontSize:"13px"}} color='medium'>
                        BELUM TERBIT
                        </IonBadge>
                    </IonCol>
                    :""}

                    {(a['payment_status'] === 'settlement')?
                    <IonCol size='6' style={{textAlign:"end", padding:"5px"}}>
                        <IonBadge mode='ios' style={{fontSize:"13px"}} color='success'>
                        LUNAS
                        </IonBadge>
                    </IonCol>
                    :""}

                    </IonRow>
                )
                }):''}

                {(isOpen === 'deliver')?
                dataDelivery.map((a, index) => {
                return(
                    <IonRow key={index} style={{margin:"10px 15px", padding:"5px", borderRadius:"10px", background:"rgba(200,200,200,0.25)", border:"solid 1px #0000A0"}}>
                    <IonCol size='6' style={{textAlign:"start", background:"rgba(200,200,200,0.75)", borderRadius:"5px 0 0 5px"}}>
                        <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                        <span style={{fontSize:"14px", fontWeight:"bold", color:"#0000A0"}}>
                            {a['no_tracking']}
                        </span>
                        <span style={{fontSize:"10px", color:(a['layanan']==='Express')?'red':'#0000A0'}}>
                            {String(a['layanan']).toUpperCase()}
                        </span>
                        </IonText>
                    </IonCol>
                    <IonCol size='6' style={{textAlign:"end", background:"rgba(200,200,200,0.75)", borderRadius:"0 5px 5px 0"}}>
                        <IonBadge mode='ios' style={{fontSize:"10px"}} color={(a['status'] === 'Menunggu Diproses')?'medium':(a['status'] === 'Dalam Pengiriman')?'primary':(a['status'] === 'Diterima')?'success':'danger'}>
                        {String(a['status']).toUpperCase()}
                        </IonBadge>
                    </IonCol>
                    <IonCol size='12' style={{textAlign:"start"}}>
                        <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                        <span style={{fontSize:"10px"}}>ASAL</span>
                        <span style={{fontSize:"12px", fontWeight:"bold"}}>{String(a['nama_pengirim']).toUpperCase()}</span>
                        <span style={{fontSize:"12px"}}>{a['no_telepon_pengirim']}</span>
                        <span style={{fontSize:"12px"}}>{a['lokasi_pengirim']}</span>
                        </IonText>
                    </IonCol>
                    <IonCol size='12' style={{textAlign:"start"}} >
                        <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                        <span style={{fontSize:"10px"}}>TUJUAN</span>
                        <span style={{fontSize:"12px", fontWeight:"bold"}}>{String(a['nama_penerima']).toUpperCase()}</span>
                        <span style={{fontSize:"12px"}}>{a['no_telepon_penerima']}</span>
                        <span style={{fontSize:"12px"}}>{a['lokasi_penerima']}</span>
                        </IonText>
                    </IonCol>
                    
                    <IonCol size='6' style={{textAlign:"start", padding:"5px"}}>
                        <IonText mode='ios' style={{fontSize:"13px", fontWeight:"bold"}}>
                        STATUS PEMBAYARAN
                        </IonText>
                    </IonCol>
                    
                    {(a['payment_status'] === 'pending')?
                    <IonCol size='6' style={{textAlign:"end", padding:"5px"}}>
                        <IonBadge mode='ios' style={{fontSize:"13px"}} color='warning'>
                        BELUM BAYAR
                        </IonBadge>
                    </IonCol>
                    :""}
                    
                    {(a['payment_status'] === false)?
                    <IonCol size='6' style={{textAlign:"end", padding:"5px"}}>
                        <IonBadge mode='ios' style={{fontSize:"13px"}} color='medium'>
                        BELUM TERBIT
                        </IonBadge>
                    </IonCol>
                    :""}

                    {(a['payment_status'] === 'settlement')?
                    <IonCol size='6' style={{textAlign:"end", padding:"5px"}}>
                        <IonBadge mode='ios' style={{fontSize:"13px"}} color='success'>
                        LUNAS
                        </IonBadge>
                    </IonCol>
                    :""}

                    </IonRow>
                )
                }):''}
                
                
                {(isSearchEmpty === true)?
                <IonRow>
                <IonCol size='12'>
                    <IonImg src='assets/not found.gif' style={{width:"75%", margin:"0 auto"}} />
                    {/* <img src='assets/icon/SVG Failed.svg' style={{width:"30%"}}></img> */}
                </IonCol>
                <IonCol size='12' style={{margin:0, padding:0, textAlign:"center"}}>
                    <IonText mode='ios' style={{fontSize:"16px", color:"#0000A0"}}>
                    Pencarian Tidak ditemukan, coba cari nomor tracking lain.
                    </IonText>
                </IonCol>
                </IonRow>
                :''}

                {(isRefresh === true)?
                <IonRow>
                <IonCol size='12' style={{padding:0, margin:0}}>
                    <IonImg src='assets/not found.gif' style={{width:"75%", margin:"0 auto"}} />
                </IonCol>
                <IonCol size='12' style={{margin:0, padding:0, textAlign:"center"}}>
                    <IonText mode='ios' style={{fontSize:"16px", color:"#0000A0"}}>
                    Mohon Tunggu Sebentar
                    </IonText>
                </IonCol>
                </IonRow>
                :''}

                <IonInfiniteScroll onIonInfinite={loadData} threshold="100px" disabled={isInfiniteDisabled}>
                <IonInfiniteScrollContent loadingSpinner="circular" loadingText="Memuat lebih banyak data.."></IonInfiniteScrollContent>
                </IonInfiniteScroll>
                </IonGrid>
            </IonContent>
            
            <IonLoading 
            mode='ios'
            isOpen={isLoading}
            spinner='circular'
            />
        </IonPage>
    )

}
export default Jobs;