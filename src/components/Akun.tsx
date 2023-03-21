import { createAnimation, useIonActionSheet,IonActionSheet, IonAvatar, IonBadge, IonButton, IonButtons, IonCard,  IonCol, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonRow,  IonSlide, IonSlides, IonText, IonTitle, IonToggle, IonToolbar, IonAlert, IonItemDivider, IonGrid, IonFooter, IonSearchbar, IonInfiniteScroll, IonInfiniteScrollContent, IonLoading, useIonViewWillEnter, IonCardContent, IonCardTitle, IonCardHeader, useIonAlert, RefresherEventDetail, IonRefresher, IonRefresherContent, IonToast, IonRippleEffect, IonSegment, IonSegmentButton, IonProgressBar, IonTextarea } from '@ionic/react'
import { add, alertCircleOutline, alertOutline, arrowForwardOutline, bookOutline, businessOutline, calendar, cardOutline, chatbubblesOutline, checkmarkCircleOutline, checkmarkDoneOutline, checkmarkOutline, chevronBackOutline, chevronForwardOutline, closeCircleOutline, closeOutline, cube, diamondOutline, ellipse, ellipseOutline, globeOutline, logOutOutline, megaphone, notifications, peopleOutline, personOutline, sendOutline, starOutline, ticket, ticketOutline  } from 'ionicons/icons'
import React, {useState, useRef } from 'react'
import $ from "jquery"
import { AppUpdate } from '@capawesome/capacitor-app-update'
import { PushNotifications, PushNotificationSchema } from '@capacitor/push-notifications'

const Akun: React.FC = () => {
    const [isSelectTracking, setIsSelectTracking] = useState('detail')
    const [isModalTracking, setIsModalTracking] = useState(false)
    const [dataTracking, setDataTracking] = useState([])
    const [dataCompany, setDataCompany] = useState([])
    const [dataCompanyList, setDataCompanyList] = useState([])
    const [mySaldo, setMySaldo] = useState('')
    const [myPin, setMyPin] = useState('')
    const [myValidPhone, setMyValidPhone] = useState(false)
    const [isNumReferral, setIsNumReferral] = useState('')
    const [isNumNotif, setIsNumNotif] = useState('')
    const [isNumVoucher, setIsNumVoucher] = useState('')
    const [dataVoucher, setDataVoucher] = useState([])
    const [dataVoucherOrigin, setDataVoucherOrigin] = useState([])
    const [dataNotifikasi, setDataNotifikasi] = useState([])
    const [dataNotifikasiOrigin, setDataNotifikasiOrigin] = useState([])
    const [dataAlamat, setDataAlamat] = useState([])
    const [dataAlamatOrigin, setDataAlamatOrigin] = useState([])
    const [dataLokasi, setDataLokasi] = useState([])
    const [dataLokasiOrigin, setDataLokasiOrigin] = useState([])
    const [dataRekening, setDataRekening] = useState([])
    const [dataRekeningOrigin, setDataRekeningOrigin] = useState([])
    const [dataBank, setDataBank] = useState([])
    const [dataBankOrigin, setDataBankOrigin] = useState([])
    const [dataComplain, setDataComplain] = useState([])
    const [dataComplainOrigin, setDataComplainOrigin] = useState([])
    const [dataChat, setDataChat] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isLoading2, setIsLoading2] = useState(false)
    const [isLoadingSend, setIsLoadingSend] = useState(false)
    const [isModalPin, setIsModalPin] = useState(false)
    const [isModalPin2, setIsModalPin2] = useState(false)
    const [isModalNotifikasi, setIsModalNotifikasi] = useState(false)
    const [isModalAlamat, setIsModalAlamat] = useState(false)
    const [isModalAlamatTambah, setIsModalAlamatTambah] = useState(false)
    const [isModalLokasi, setIsModalLokasi] = useState(false)
    const [isModalRekening, setIsModalRekening] = useState(false)
    const [isModalRekeningTambah, setIsModalRekeningTambah] = useState(false)
    const [isModalBank, setIsModalBank] = useState(false)
    const [isModalSyarat, setIsModalSyarat] = useState(false)
    const [isModalSyaratDetail, setIsModalSyaratDetail] = useState(false)
    const [isModalVoucher, setIsModalVoucher] = useState(false)
    const [isModalVoucherDetail, setIsModalVoucherDetail] = useState(false)
    const [isModalChat, setIsModalChat] = useState(false)
    const [isModalComplainList, setIsModalComplainList] = useState(false)
    const [isAlertDelete, setIsAlertDelete] = useState(false)
    const [isAlertDelete2, setIsAlertDelete2] = useState(false)
    const [isInfiniteDisabled, setInfiniteDisabled] = useState(false)
    const [isFullPin, setIsFullPin] = useState('')
    const [isToast, setIsToast] = useState(false)
    const [isColorToast, setIsColorToast] = useState('')
    const [isDurationToast, setIsDurationToast] = useState(Number)
    const [isMessageToast, setIsMessageToast] = useState('')
    const [isPin1, setIsPin1] = useState('')
    const [isPin2, setIsPin2] = useState('')
    const [isPin3, setIsPin3] = useState('')
    const [isPin4, setIsPin4] = useState('')
    const [isPin5, setIsPin5] = useState('')
    const [isPin6, setIsPin6] = useState('')
    const [isPinTwice1, setIsPinTwice1] = useState('')
    const [isPinTwice2, setIsPinTwice2] = useState('')
    const [isPinTwice3, setIsPinTwice3] = useState('')
    const [isPinTwice4, setIsPinTwice4] = useState('')
    const [isPinTwice5, setIsPinTwice5] = useState('')
    const [isPinTwice6, setIsPinTwice6] = useState('')
    const [isLoadingModal, setIsLoadingModal] = useState(false)
    const [selectFilterNotify, setSelectFilterNotify] = useState('semua')
    const [isVersionApp, setIsVersionApp] = useState('')
    const [isSelectAlamat, setIsSelectAlamat] = useState('')
    const [detailAlamatId, setDetailAlamatId] = useState('')
    const [detailAlamatNama, setDetailAlamatNama] = useState('')
    const [detailAlamatPhone, setDetailAlamatPhone] = useState('')
    const [detailAlamatEmail, setDetailAlamatEmail] = useState('')
    const [detailAlamatDetail, setDetailAlamatDetail] = useState('')
    const [detailAlamatLokasi, setDetailAlamatLokasi] = useState('')
    const [isSelectRekening, setIsSelectRekening] = useState('')
    const [detailRekeningCode, setDetailRekeningCode] = useState('')
    const [detailRekeningId, setDetailRekeningId] = useState('')
    const [detailRekeningHolder, setDetailRekeningHolder] = useState('')
    const [detailRekeningBank, setDetailRekeningBank] = useState('')
    const [detailRekeningNomor, setDetailRekeningNomor] = useState('')
    const [detailRekeningImage, setDetailRekeningImage] = useState('')
    const [isValidRekening, setIsValidRekening] = useState(false)
    const [detailVoucherId, setDetailVoucherId] = useState('')
    const [detailVoucherTitle, setDetailVoucherTitle] = useState('')
    const [detailVoucherContent, setDetailVoucherContent] = useState('')
    const [detailVoucherImage, setDetailVoucherImage] = useState('')
    const [detailVoucherLayanan, setDetailVoucherLayanan] = useState('')
    const [detailVoucherAsal, setDetailVoucherAsal] = useState('')
    const [detailVoucherTujuan, setDetailVoucherTujuan] = useState('')
    const [detailVoucherStart, setDetailVoucherStart] = useState('')
    const [detailVoucherEnd, setDetailVoucherEnd] = useState('')
    const [detailVoucherStatus, setDetailVoucherStatus] = useState('')
    const [detailVoucherType, setDetailVoucherType] = useState('')
    const [detailVoucherValue, setDetailVoucherValue] = useState('')
    const [detailVoucherBerat, setDetailVoucherBerat] = useState('')
    const isModalBankRef = useRef<HTMLIonModalElement>(null)
    const [isSelectSyaratDetail, setIsSelectSyaratDetail] = useState('')
    const [isChannelComplain, setIsChannelComplain] = useState('')
    const [isTiketComplain, setIsTiketComplain] = useState('')
    const [isStatusComplain, setIsStatusComplain] = useState('')
    useIonViewWillEnter(() => {
        getData()
        updateFCM()
        AppUpdate.getAppUpdateInfo({country:'id'}).then((r) => {
            setIsVersionApp(String(r.currentVersion))//App
        }).catch((err) => {
            setIsVersionApp('1.1')
        })
    })
    function doLogout(){
      setIsLoading2(true)
      localStorage.setItem('isLogin', '0')
      setTimeout(() => {
        setIsLoading2(false)
        localStorage.setItem('lastMenu', 'Beranda')
        window.open('/login', '_self')  
      }, 1000);
    }
    function getData(){
      $.ajax({
          type: "POST",
          url: "https://xpdcargo.id/login/Callback/apiGetDataApps",
          data: {user_id: localStorage.getItem('userid')},
          dataType: "JSON",
          beforeSend:function(){
              setIsLoading(true)
          },
          success:function(r:any){
              localStorage.setItem('userAffiliator', r.promotor)
              setMySaldo(String(r.saldo))
              setMyPin(r.pin)
              localStorage.setItem('userPin', r.pin)
              setMyValidPhone(Boolean(r.isValidPhone))
              setIsNumNotif(String(r.isNumNotif))
              setIsNumReferral(String(r.isNumReferral))
              setIsNumVoucher(String(r.isNumVoucher))
              setDataVoucher(r.voucher.slice(0,10))
              setDataVoucherOrigin(r.voucher)
              setIsLoading(false)
          },
          error:function(err){
              console.log(err)
              setIsLoading(false)
          }
      })
  }
  function refreshData(event: CustomEvent<RefresherEventDetail>) {
    getData()
    setTimeout(() => {
      event.detail.complete();
    }, 1500);
  }
  function updateFCM(){
    $.ajax({
      type:"POST",
      url: "https://xpdcargo.id/login/Callback/apiUpdateFCMToken",
      data: {user_id: localStorage.getItem('userid'), fcm: localStorage.getItem('fcm')},
      dataType: "JSON",
    })
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
  };
  const outAnimation = (baseEl: HTMLElement) => {
      return inAnimation(baseEl).direction('reverse');
  };
  function menuReferral(){
    // setIsLoading(true)
    // setTimeout(() => {
    //   window.open('/refferal','_self')
    // }, 1000);
  }
  function doSplitPin(e){
    var split = String(e).split("")
    if(split[0]){setIsPin1(split[0])}else{setIsPin1('')}
    if(split[1]){setIsPin2(split[1])}else{setIsPin2('')}
    if(split[2]){setIsPin3(split[2])}else{setIsPin3('')}
    if(split[3]){setIsPin4(split[3])}else{setIsPin4('')}
    if(split[4]){setIsPin5(split[4])}else{setIsPin5('')}
    if(split[5]){setIsPin6(split[5])}else{setIsPin6('')}
    if(split.length === 6){
      setIsFullPin(e)
      setIsLoading2(true)
      setTimeout(() => {
        setIsLoading2(false)
        setIsModalPin2(true)
      }, 500);
    }
  }
  function doSplitPinDone(e){
    var split = String(e).split("")
    if(split[0]){setIsPinTwice1(split[0])}else{setIsPinTwice1('')}
    if(split[1]){setIsPinTwice2(split[1])}else{setIsPinTwice2('')}
    if(split[2]){setIsPinTwice3(split[2])}else{setIsPinTwice3('')}
    if(split[3]){setIsPinTwice4(split[3])}else{setIsPinTwice4('')}
    if(split[4]){setIsPinTwice5(split[4])}else{setIsPinTwice5('')}
    if(split[5]){setIsPinTwice6(split[5])}else{setIsPinTwice6('')}
    if(split.length === 6){
      setIsLoading2(true)
      setTimeout(() => {
        if(String(e) === isFullPin){
          doUpdatePin(e)
        }else{
          setIsLoading2(false)
          setIsMessageToast('PIN 6 Digit yang kamu masukan tidak sama!')
          setIsColorToast('danger')
          setIsDurationToast(3000)
          setIsToast(true)
        }
      }, 500);
    }
  }
  function doUpdatePin(pin:any){
    $.ajax({
      type: "POST",
      url: "https://xpdcargo.id/login/Callback/apiUpdatePin",
      data: {pin: pin, user_id: localStorage.getItem('userid')},
      dataType: "JSON",
      beforeSend:function(){
        setIsLoading2(true)
      },
      success:function(r:any){
        getData()
        setTimeout(() => {
          setIsModalPin(false)
          setIsModalPin2(false)
          setIsLoading2(false)  
        }, 2000);
      },
      error:function(err){
        setIsLoading2(false)
      }
    })
  }
  function openModalNotifikasi(){
    let data = new FormData()
    data.append('user_id', String(localStorage.getItem('userid')))
    $.ajax({
      type: "POST",
      url: "https://xpdcargo.id/login/Callback/apiGetNotify",
      data: data,
      processData:false,
      contentType:false,
      dataType:"JSON",
      beforeSend:function(){
        setDataNotifikasi([])
        setSelectFilterNotify('semua')
        setIsLoadingModal(true)
        setIsModalNotifikasi(true)
      },
      success:function(r:any){
        setIsLoadingModal(false)
        setDataNotifikasi(r.data.slice(0,10))
        setDataNotifikasiOrigin(r.data)
        setTimeout(() => {
          doUpdateNotify()
        }, 1000);
      },
      error:function(err){
        console.log(err)
        setIsLoadingModal(false)
      }
    })
  }
  function doUpdateNotify(){
    let data = new FormData()
    data.append('user_id', String(localStorage.getItem('userid')))
    $.ajax({
      type: "POST",
      url: "https://xpdcargo.id/login/Callback/apiUpdateNotify",
      data: data,
      processData:false,
      contentType:false,
      dataType:"JSON"
    })
  }
  function filterNotify(type:any){
    setSelectFilterNotify(type)
    var filter = dataNotifikasiOrigin.filter((a)=>{
      return (String(type) !== 'semua')?String(a['type']) === String(type):String(a['type']) !== ''
    })
    setDataNotifikasi(filter.slice(0,10))
  }
  const pushDataNotify = (max:any) => {
    
    if(selectFilterNotify !== 'semua'){
      var filter = dataNotifikasiOrigin.filter((a) => {
        return String(a['type']) === String(selectFilterNotify)
      })
      setDataNotifikasi(filter.slice(0, max))
    }else{
      setDataNotifikasi(dataNotifikasiOrigin.slice(0, max))
    }
  }
  const loadDataNotify = (ev: any) => {
    var before = dataNotifikasi.length;
    setTimeout(() => {
      pushDataNotify(before+10);
      console.log('Loaded data');
      ev.target.complete();
      if (dataNotifikasi.length === 1000) {
        setInfiniteDisabled(true);
      }
    }, 500);
  }  
  function selectNotify(is:any){
    if(String(is) === 'Pengiriman'){
        localStorage.setItem('lastMenu', 'Order')
        window.open('/main','_self')
    }
    if(String(is) === 'Promo'){
        localStorage.setItem('lastMenu', 'Akun')
        window.open('/main','_self')
    }
    if(String(is) === 'Reweight'){
        localStorage.setItem('lastMenu', 'Order')
        window.open('/main','_self')
    }
    if(String(is) === 'Pembayaran'){
        localStorage.setItem('lastMenu', 'Order')
        window.open('/main','_self')
    }
    if(String(is) === 'Point'){
        localStorage.setItem('lastMenu', 'Akun')
        window.open('/refferal','_self')
    }
  }
    function openModalAlamat(type:any, id:any, nama:any, phone:any, email:any, alamat:any, lokasi:any){
      setIsSelectAlamat(type)
      if(String(type) === 'list'){
        setDataAlamat([])
        setDataAlamatOrigin([])
        setIsModalAlamat(true)
        getDataAlamat()
      }else{
        setDetailAlamatId(id)
        setDetailAlamatNama(nama)
        setDetailAlamatPhone(phone)
        setDetailAlamatEmail(email)
        setDetailAlamatDetail(alamat)
        setDetailAlamatLokasi(lokasi)
        setIsModalAlamatTambah(true)
      }
    }
    function openModalRekening(type:any, id:any, holder:any, bank:any, nomor:any, image:any, code:any){
      setIsSelectRekening(type)
      if(String(type) === 'list'){
        setDataRekening([])
        setDataRekeningOrigin([])
        setDataBank([])
        setIsModalRekening(true)
        getDataRekening()
      }else{
        setDetailRekeningCode(code)
        setDetailRekeningId(id)
        setDetailRekeningHolder(holder)
        setDetailRekeningBank(bank)
        setDetailRekeningNomor(nomor)
        setDetailRekeningImage(image)
        setIsModalRekeningTambah(true)
      }
    }
    function closeModalAlamatTambah(){
      setDetailRekeningCode('')
      setDetailAlamatId('')
      setDetailAlamatNama('')
      setDetailAlamatPhone('')
      setDetailAlamatEmail('')
      setDetailAlamatDetail('')
      setDetailAlamatLokasi('')
      setIsModalAlamatTambah(false)
    }
    function closeModalRekeningTambah(){
      setDetailRekeningId('')
      setDetailRekeningHolder('')
      setDetailRekeningBank('')
      setDetailRekeningImage('')
      setDetailRekeningNomor('')
      setIsModalRekeningTambah(false)
    }
    function getDataAlamat(){
      let data = new FormData()
      data.append('user_id', String(localStorage.getItem('userid')))
      $.ajax({
        type: "POST",
        url: "https://xpdcargo.id/login/Callback/apiGetDataAlamatSaya",
        data: data,
        processData:false,
        contentType:false,
        dataType: "JSON",
        beforeSend:function(){
          setIsLoadingModal(true)
        },
        success:function(r:any){
          setIsLoadingModal(false)
          setDataAlamat(r.data.slice(0,10))
          setDataAlamatOrigin(r.data)
          setDataLokasi(r.lokasi.slice(0,20))
          setDataLokasiOrigin(r.lokasi)
          closeModalAlamatTambah()
        },
        error:function(err){
          console.log(err)
          setIsLoadingModal(false)
        }
      })
    }
    function getDataRekening(){
      let data = new FormData
      data.append('user_id', String(localStorage.getItem('userid')))
      $.ajax({
        type: "POST",
        url: "https://xpdcargo.id/login/Callback/apiGetDataRekeningSaya",
        data: data,
        processData: false,
        contentType: false,
        dataType: "JSON",
        beforeSend:function(){
          setIsLoadingModal(true)
        },
        success:function(r:any){
          setIsLoadingModal(false)
          setDataRekening(r.data.slice(0,10))
          setDataRekeningOrigin(r.data)
          setDataBank(r.bank)
          setDataBankOrigin(r.bank)
          closeModalRekeningTambah()
        },
        error:function(err){
          console.log(err)
          setIsLoadingModal(false)
        }
      })
    }
    const pushDataAlamat = (max:any) => {
      setDataAlamat(dataAlamatOrigin.slice(0, max))
    }
    const loadDataAlamat = (ev: any) => {
      var before = dataAlamat.length;
      setTimeout(() => {
        pushDataAlamat(before+10);
        console.log('Loaded data');
        ev.target.complete();
        if (dataAlamat.length === 1000) {
          setInfiniteDisabled(true);
        }
      }, 500);
    }  
    function qAlamat(val:any){
      if(val !== ''){
        var search = dataAlamatOrigin.filter((a)=>{
          return String(a['nama']).toUpperCase().includes(String(val).toUpperCase()) || String(a['alamat']).toUpperCase().includes(String(val).toUpperCase()) || String(a['lokasi']).toUpperCase().includes(String(val).toUpperCase()) || String(a['no_telepon']).toUpperCase().includes(String(val).toUpperCase()) || String(a['email']).toUpperCase().includes(String(val).toUpperCase())
        })
        setDataAlamat(search.slice(0,10))
      }else{
        setDataAlamat(dataAlamatOrigin.slice(0,10))
      }
    }
    function qVoucher(val:any){
      if(val !== ''){
        var search = dataVoucherOrigin.filter((a)=>{
          return String(a['title']).toUpperCase().includes(String(val).toUpperCase()) || String(a['keterangan']).toUpperCase().includes(String(val).toUpperCase()) || String(a['hub_asal']).toUpperCase().includes(String(val).toUpperCase()) || String(a['hub_tujuan']).toUpperCase().includes(String(val).toUpperCase()) || String(a['value']).toUpperCase().includes(String(val).toUpperCase())
        })
        setDataVoucher(search.slice(0,10))
      }else{
        setDataVoucher(dataVoucherOrigin.slice(0,10))
      }
    }
    const pushDataLokasi = (max:any) => {
      var val = String($("#qLokasi").val())
      if(val !== ''){
        var search = dataLokasiOrigin.filter((a)=>{
          return String(a['lokasi']).toUpperCase().includes(String(val).toUpperCase())
        })
        setDataLokasi(search.slice(0, max))
      }else{
        setDataLokasi(dataLokasiOrigin.slice(0, max))
      }
    }
    const loadDataLokasi = (ev: any) => {
      var before = dataLokasi.length;
      setTimeout(() => {
        pushDataLokasi(before+10);
        console.log('Loaded data');
        ev.target.complete();
        if (dataLokasi.length === 1000) {
          setInfiniteDisabled(true);
        }
      }, 500);
    }
    const pushDataRekening = (max:any) => {
      setDataRekening(dataRekeningOrigin.slice(0, max))
    }
    const loadDataRekening = (ev: any) => {
      var before = dataRekening.length;
      setTimeout(() => {
        pushDataRekening(before+10);
        console.log('Loaded data');
        ev.target.complete();
        if (dataRekening.length === 1000) {
          setInfiniteDisabled(true);
        }
      }, 500);
    }
    const pushDataVoucher = (max:any) => {
      var val = String($("#qVoucher").val())
      if(val !== ''){
        var search = dataVoucherOrigin.filter((a)=>{
          return String(a['title']).toUpperCase().includes(String(val).toUpperCase()) || String(a['keterangan']).toUpperCase().includes(String(val).toUpperCase()) || String(a['hub_asal']).toUpperCase().includes(String(val).toUpperCase()) || String(a['hub_tujuan']).toUpperCase().includes(String(val).toUpperCase()) || String(a['value']).toUpperCase().includes(String(val).toUpperCase())
        })
        setDataVoucher(search.slice(0, max))
      }else{
        setDataVoucher(dataVoucherOrigin.slice(0, max))
      }
    }
    const loadDataVoucher = (ev: any) => {
      var before = dataVoucher.length;
      setTimeout(() => {
        pushDataVoucher(before+10);
        console.log('Loaded data');
        ev.target.complete();
        if (dataVoucher.length === 1000) {
          setInfiniteDisabled(true);
        }
      }, 500);
    }
    function qLokasi(val:any){
      if(val !== ''){
        var search = dataLokasiOrigin.filter((a)=>{
          return String(a['lokasi']).toUpperCase().includes(String(val).toUpperCase())
        })
        setDataLokasi(search.slice(0,20))
      }else{
        setDataLokasi(dataAlamatOrigin.slice(0,20))
      }
    }
    function onSelectLokasi(lokasi:any){
      if(isSelectAlamat === 'detail'){
        setDetailAlamatLokasi(lokasi)
      }else{
        $("ion-input[name='alamatLokasi']").val(lokasi)  
      }
      setIsModalLokasi(false)
    }
    function doTambahAlamat(){
      let data = new FormData()
      data.append('user_id', String(localStorage.getItem('userid')))
      var nama = String($("ion-input[name='alamatNama']").val())
      var phone = String($("ion-input[name='alamatPhone']").val())
      var email = String($("ion-input[name='alamatEmail']").val())
      var detail = String($("ion-textarea[name='alamatDetail']").val())
      var lokasi = String($("ion-input[name='alamatLokasi']").val())
      var success = true
      if(nama.trim() !== '' && phone.trim() !== '' && detail.trim() !== '' && lokasi.trim() !== ''){
        if(email.trim() !== ''){
          if(email.includes('@')){
            data.append('email', email)
          }else{
            success = false
          }
        }
        data.append('nama', nama)
        data.append('phone', phone)
        data.append('alamat', detail)
        data.append('lokasi', lokasi)
      }else{
        success = false
      }

      if(success === true){
        $.ajax({
          type: "POST",
          url:"https://xpdcargo.id/login/Callback/apiAddDataAlamatSaya",
          data: data,
          processData: false,
          contentType: false,
          dataType: "JSON",
          beforeSend:function(){
            setIsLoading2(true)
          },
          success:function(r:any){
            getDataAlamat()
            setTimeout(() => {
              setIsLoading2(false)  
            }, 2500);
          },
          error:function(err){
            console.log(err)
            setIsLoading2(false)
          }
        })
      }else{
        setIsMessageToast('Tambah alamat gagal, periksa kembali data yang kamu masukkan')
        setIsColorToast('danger')
        setIsDurationToast(1700)
        setIsToast(true)
      }
    }
    function doUpdateAlamat(){
      let data = new FormData()
      data.append('user_id', String(localStorage.getItem('userid')))
      data.append('id', detailAlamatId)
      var nama = detailAlamatNama
      var phone = detailAlamatPhone
      var email = detailAlamatEmail
      var detail = detailAlamatDetail
      var lokasi = detailAlamatLokasi
      var success = true
      if(nama.trim() !== '' && phone.trim() !== '' && detail.trim() !== '' && lokasi.trim() !== ''){
        if(email.trim() !== ''){
          if(email.includes('@')){
            data.append('email', email)
          }else{
            success = false
          }
        }
        data.append('nama', nama)
        data.append('phone', phone)
        data.append('alamat', detail)
        data.append('lokasi', lokasi)
      }else{
        success = false
      }

      if(success === true){
        $.ajax({
          type: "POST",
          url:"https://xpdcargo.id/login/Callback/apiUpdateDataAlamatSaya",
          data: data,
          processData: false,
          contentType: false,
          dataType: "JSON",
          beforeSend:function(){
            setIsLoading2(true)
          },
          success:function(r:any){
            getDataAlamat()
            setTimeout(() => {
              setIsLoading2(false)  
            }, 2500);
          },
          error:function(err){
            console.log(err)
            setIsLoading2(false)
          }
        })
      }else{
        setIsMessageToast('Update alamat gagal, periksa kembali data yang kamu masukkan')
        setIsColorToast('danger')
        setIsDurationToast(1700)
        setIsToast(true)
      }
    }
    function doDeleteAlamat(){
      let data = new FormData
      data.append('user_id', String(localStorage.getItem('userid')))
      data.append('id', detailAlamatId)
      $.ajax({
        type: "POST",
        url: "https://xpdcargo.id/login/Callback/apiDeleteDataAlamatSaya",
        data: data,
        processData: false,
        contentType: false,
        dataType: "JSON",
        beforeSend:function(){
          setIsLoading2(true)
        },
        success:function(r:any){
          getDataAlamat()
          setTimeout(() => {
            setIsLoading2(false)  
          }, 2500);
        },
        error:function(err){
          console.log(err)
          setIsLoading2(false)
        }
      })
    }
    function doVerifikasiRekening(){
      var code = ""
      var nomor = ""
      var holder = ""
      if(isSelectRekening === 'detail'){
        code = String(detailRekeningCode)
        nomor = String(detailRekeningNomor)
        holder = String(detailRekeningHolder)
      }else{
        code = String($("ion-input[name='rekeningCode']").val())
        nomor = String($("ion-input[name='rekeningNomor']").val())
        holder = String($("ion-input[name='rekeningHolder']").val())
      }
      if(code.trim() !== '' && nomor.trim() !== '' && holder.trim() !== ''){
        $.ajax({
          type: "POST",
          url: "https://xpdcargo.id/login/Callback/apiValidasiRekening",
          data: {
            nomor_rekening: nomor,
            code_bank: code
          },
          dataType: "JSON",
          beforeSend:function(){
            setIsLoading2(true)
          },
          success:function(r:any){
            setIsLoading2(false)
            if(r.status === 'SUCCESS'){
              setIsValidRekening(true)
              setIsMessageToast('Rekening Terverifikasi')
              setIsColorToast('success')
              setIsDurationToast(3000)
              setIsToast(true)
            }else{
              setIsMessageToast('Nomor rekening gagal terverifikasi periksa kembali data rekening')
              setIsColorToast('danger')
              setIsDurationToast(3000)
              setIsToast(true)
            }
          },
          error:function(err){
            console.log(err)
            setIsLoading2(false)
            setIsMessageToast('Nomor rekening gagal terverifikasi, periksa koneksi internet kamu')
            setIsColorToast('danger')
            setIsDurationToast(1000)
            setIsToast(true)
          }
        })
      }else{
        setIsMessageToast('Nomor rekening gagal terverifikasi, data rekening masih ada yang kosong')
        setIsColorToast('danger')
        setIsDurationToast(2500)
        setIsToast(true)
      }
    }
    function doTambahRekening(){
      let formData = new FormData();
      formData.append('id_user', String(localStorage.getItem('userid')));
      formData.append('nama_bank', String($("ion-input[name='rekeningBank']").val()));
      formData.append('nama_pemilik_rekening', String($("ion-input[name='rekeningHolder']").val()));
      formData.append('nomor_rekening', String($("ion-input[name='rekeningNomor']").val()));
      formData.append('code_bank', String($("ion-input[name='rekeningCode']").val()))
      if(String($("ion-input[name='rekeningNomor']").val()).trim() != '' && String($("ion-input[name='rekeningHolder']")).trim() != '' && String($("ion-input[name='rekeningCode']")).trim() != ''){
        $.ajax({
          type: "POST",
          url: "https://xpdcargo.id/login/Callback/apiAddBank",
          data: formData,
          processData: false,
          contentType: false,
          dataType:'JSON',
          beforeSend:function(){
            setIsLoading2(true)
          },
          success:function(r:any){
            if(r.code === 200){
              getDataRekening()
              setTimeout(() => {
                setIsLoading2(false)  
                setIsValidRekening(false)
              }, 2500);
            }else{
              setIsLoading2(false)
              setIsMessageToast('Rekening tidak terverifikasi, silahkan verifikasi terlebih dahulu')
              setIsColorToast('danger')
              setIsDurationToast(2500)
              setIsToast(true)
              setIsValidRekening(false)
            }
          },
          error:function(err){
            console.log(err)
            setIsLoading2(false)
            setIsMessageToast('Tambah rekening gagal, periksa koneksi internet kamu')
            setIsColorToast('danger')
            setIsDurationToast(2500)
            setIsToast(true)
          }
        })
      }else{
        setIsMessageToast('Tambah rekening gagal, data rekening masih ada yang kosong')
        setIsColorToast('danger')
        setIsDurationToast(2500)
        setIsToast(true)
      }
    }
    function doUpdateRekening(){
      let data = new FormData()
      data.append('user_id', String(localStorage.getItem('userid')))
      data.append('id', detailRekeningId)
      var holder = detailRekeningHolder
      var bank = detailRekeningBank
      var code = detailRekeningCode
      var nomor = detailRekeningNomor
      var success = true
      if(holder.trim() !== '' && nomor.trim() !== '' && code.trim() !== '' && bank.trim() !== ''){
        data.append('nama_bank', bank)
        data.append('code_bank', code)
        data.append('nama_pemilik_rekening', holder)
        data.append('nomor_rekening', nomor)
      }else{
        success = false
      }

      if(success === true && isValidRekening === true){
        $.ajax({
          type: "POST",
          url:"https://xpdcargo.id/login/Callback/apiUpdateDataRekeningSaya",
          data: data,
          processData: false,
          contentType: false,
          dataType: "JSON",
          beforeSend:function(){
            setIsLoading2(true)
          },
          success:function(r:any){
            getDataRekening()
            setTimeout(() => {
              setIsLoading2(false)  
            }, 2500);
          },
          error:function(err){
            console.log(err)
            setIsLoading2(false)
          }
        })
      }else{
        setIsMessageToast('Update rekening gagal, periksa kembali data yang kamu masukkan')
        setIsColorToast('danger')
        setIsDurationToast(1700)
        setIsToast(true)
      }
    }
    function doDeleteRekening(){
      let data = new FormData
      data.append('user_id', String(localStorage.getItem('userid')))
      data.append('id', detailRekeningId)
      $.ajax({
        type: "POST",
        url: "https://xpdcargo.id/login/Callback/apiDeleteDataRekeningSaya",
        data: data,
        processData: false,
        contentType: false,
        dataType: "JSON",
        beforeSend:function(){
          setIsLoading2(true)
        },
        success:function(r:any){
          getDataRekening()
          setTimeout(() => {
            setIsLoading2(false)  
          }, 2500);
        },
        error:function(err){
          console.log(err)
          setIsLoading2(false)
        }
      })
    }
    function qBank(q:any){
      if(String(q).trim() !== ''){
          var filter = dataBankOrigin.filter((a)=>{
              return String(a['nama']).toUpperCase().includes(String(q).toUpperCase()) || String(a['code']).toUpperCase().includes(String(q).toUpperCase())
          })
          setDataBank(filter)
      }else{
          setDataBank(dataBankOrigin)
      }
  }
  function doSelectBank(code:any, nama:any){
    if(isSelectRekening === 'detail'){
      setDetailRekeningCode(code)
      setDetailRekeningBank(nama)
    }else{
      $("ion-input[name='rekeningCode']").val(code)
      $("ion-input[name='rekeningBank']").val(nama)
    }
    setIsModalBank(false)
  }
  function openModalSyaratDetail(data:any){
    setDataCompany(data)
    setIsModalSyaratDetail(true)
  }
  function openModalVoucherDetail(id:any, title:any, keterangan:any, image:any, date_start:any, date_end:any, status:any, type:any, value:any, min_kg:any, layanan:any, hub_asal:any, hub_tujuan:any){
    setDetailVoucherId(id)
    setDetailVoucherAsal(hub_asal)
    setDetailVoucherBerat(min_kg)
    setDetailVoucherContent(keterangan)
    setDetailVoucherEnd(date_end)
    setDetailVoucherImage(image)
    setDetailVoucherLayanan(layanan)
    setDetailVoucherStart(date_start)
    setDetailVoucherStatus(status)
    setDetailVoucherTitle(title)
    setDetailVoucherTujuan(hub_tujuan)
    setDetailVoucherType(type)
    setDetailVoucherValue(value)
    setIsModalVoucherDetail(true)
  }
  function doUseVoucher(status:any, layanan:any, berat:any){
    if(status === 'valid'){
      if(myValidPhone === true){
        if(layanan === 'Reguler'){
          window.open(`/Reguler`, '_self')
        }
        if(layanan === 'Express'){
          window.open(`/Express`, '_self')
        }
        if(layanan === 'Kirim Motor'){
          window.open(`/CreateOrderMotor`, '_self')
        }
        if(layanan === 'Sewa Truck'){
          window.open(`/CreateOrderSewaTruck`, '_self')
        }
      }else{
        showToast('Verifikasi nomor hp kamu dulu ya', 'danger', 1200)
      }
    }else{
      showToast('Voucher telah expired', 'danger', 1200)
    }
  }
  function showToast(message:any, color:any, duration:any){
    setIsMessageToast(message)
    setIsColorToast(color)
    setIsDurationToast(duration)
    setIsToast(true)
  }
  function openModalComplain(){
    let data = new FormData()
    data.append('user_id', String(localStorage.getItem('userid')))
    $.ajax({
      type: "POST",
      url: "https://xpdcargo.id/login/Callback/apiGetDataComplain",
      data: data,
      processData: false,
      contentType: false,
      dataType: "JSON",
      beforeSend:function(){
        setIsModalComplainList(true)
        setIsLoading(true)
      },
      success:function(r:any){
        setIsLoading(false)
        setDataComplain(r.data.slice(0, 10))
        setDataComplainOrigin(r.data)
      },
      error:function(err){
        setIsLoading(false)
        showToast('Periksa koneksi internet kamu, dan coba kembali', 'danger', 1200)
      }
    })
  }
  function openChatTiket(channel_id:any, tiket:any, status){
    setIsStatusComplain(status) //1: investigasi || 0: Selesai
    setIsChannelComplain(channel_id)
    setIsTiketComplain(tiket)
    let data = new FormData()
    data.append('customer_id', String(localStorage.getItem('userid')))
    data.append('user_id', '1994')
    data.append('channel_id', String(channel_id))
    $.ajax({
      type:"POST",
      url: "https://xpdcargo.id/login/Callback/openChatTiket",
      data: data,
      processData:false,
      contentType:false,
      dataType:"JSON",
      beforeSend:function(){
        setIsLoading(true)
      },
      success:function(r:any){
        setIsLoading(false)
        setDataChat(r.data)
        setIsModalChat(true)
      },
      error:function(err){
        console.log(err)
        setIsLoading(false)
        showToast('Membuka chat gagal, periksa koneksi internet kamu', 'danger', 1200)
      }
    })
  }
  function sendChat(){
    let data = new FormData()
    var val = String($("ion-input[name='pesan']").val())
    if(String(val).trim() !== ''){
      data.append('pesan', val)
      data.append('user_id', String(localStorage.getItem('userid')))
      data.append('driver_id', '1994')
      data.append('channel_id', isChannelComplain)
      $.ajax({
        type:"POST",
        url: "https://xpdcargo.id/login/Callback/sendChatCustomer",
        data: data,
        processData:false,
        contentType:false,
        dataType: "JSON",
        beforeSend:function(){
          setIsLoadingSend(true)
        },
        success:function(r:any){
          cekChat()
          setIsLoadingSend(false)
          $("ion-input[name='pesan']").val('')
        },
        error:function(err){
          console.log(err)
          setIsLoadingSend(false)
          showToast('Gagal mengirim pesan, periksa koneksi internet kamu', 'danger', 1200)
        }
      })      
    }
  }
  function cekChat(){
    let data = new FormData()
    data.append('user_id', String(localStorage.getItem('userid')))
    data.append('driver_id', '1994')
    data.append('channel_id', isChannelComplain)
    $.ajax({
      type: "POST",
      url: "https://xpdcargo.id/login/Callback/apiCekChat",
      data: data,
      processData:false,
      contentType: false,
      dataType: "JSON",
      success:function(r:any){
        setDataChat(r.data)
      }
    })
  }
  PushNotifications.addListener('pushNotificationReceived', (notifications: PushNotificationSchema)=>{
    if(String(notifications.title).includes('Chat') || String(notifications.title).includes('chat')){
      if(isModalChat === true){
        cekChat()
      }
    }
  })
  function qTiket(val){
    if(String(val).trim() !== ''){
      var filter = dataComplainOrigin.filter((a)=>{
        return String(a['no_tracking']).toUpperCase().includes(String(val).toUpperCase())
      })
      setDataComplain(filter.slice(0,10))
    }else{
      setDataComplain(dataComplainOrigin.slice(0,10))
    }
  }
    function openModalCompany(){
        $.ajax({
            type: "GET",
            url: "https://xpdcargo.id/login/Callback/apiGetCompany",
            dataType: "JSON",
            beforeSend:function(){
                setIsLoading(true)
                setIsModalSyarat(true)
            },
            success:function(r:any){
                setIsLoading(false)
                setDataCompanyList(r.data)
            },
            error:function(err){
                setIsLoading(false)
            }
        })
    }
    function doTracking(){
        var q = String($("ion-input[name='qResi']").val())
        if(q.trim() !== ''){
          $.ajax({
            type: "POST",
            url: "https://xpdcargo.id/login/Callback/publicApiTracking",
            data: {no_tracking: `XPDC${q}`},
            dataType: "JSON",
            beforeSend:function(){
                setIsLoading(true)
            },
            success:function(r:any){
                setIsLoading(false)
                if(r.code === 200){
                    setDataTracking(r)
                    setIsModalTracking(true)
                }else{
                    showToast('Nomot tracking tidak ditemukan, coba tracking lain', 'danger', 1200)
                }
                $("ion-input[name='qResi']").val('')
            },
            error:function(err){
              setIsLoading(false)
            }
          })
        }
    }
    

  return (
    <IonPage>
        <IonHeader mode='ios' style={{background:"white"}}>
            <IonToolbar mode='ios'>
                <IonGrid style={{margin:0, padding:0}}>
                    <IonRow>
                        <IonCol size='2' style={{background:"rgba(108,122,137,0.15)", borderRadius:"10px 0 0 10px", padding:"1px 0 1px 5px", margin:"3px 0"}}>
                            <IonInput mode='ios' inputMode='text' value={'XPDC'} style={{textAlign:"end", fontSize:"12px"}} readonly={true}/>
                        </IonCol>
                        <IonCol size='6' style={{background:"rgba(108,122,137,0.15)", padding:"1px 5px 1px 0", margin:"3px 0"}}>
                            <IonInput mode='ios' inputMode='numeric' placeholder='0000000001' style={{textAlign:"start", fontSize:"12px"}} name='qResi'/>
                        </IonCol>
                        <IonCol size='2' style={{background:"rgba(108,122,137,0.15)", borderRadius:"0 10px 10px 0", padding:"1px 5px", margin:"3px 0"}}>
                            <IonButton mode='ios' fill='clear' color='primary' size='small' onClick={()=>{doTracking()}}>
                                <IonRippleEffect></IonRippleEffect>
                                <IonIcon icon={arrowForwardOutline} />
                            </IonButton>
                        </IonCol>
                        <IonCol size='2'>
                            <IonButton color='primary' size='small' onClick={()=>{openModalNotifikasi()}} fill='outline'>
                                <IonIcon icon={notifications} style={{color:"#0000A0", top:"0",fontSize:"20px"}}/>
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonToolbar>
            {(isLoading === true)?
                <IonProgressBar type="indeterminate"></IonProgressBar>
            :""}
        </IonHeader>
        <IonContent fullscreen>
            <IonRefresher slot="fixed" onIonRefresh={refreshData}>
                <IonRefresherContent></IonRefresherContent>
            </IonRefresher>

            {/* <IonFab vertical='top' horizontal='end' style={{ top:"5vh", right:"5px"}}>
                <IonFabButton onClick={()=>{openModalNotifikasi()}} color="light" style={{top:"0", width:"40px", height:"40px"}} routerDirection='forward'>
                    <IonIcon icon={notifications} style={{color:"#0000A0", top:"0",fontSize:"20px"}}/>
                    <IonBadge className='badge'mode='ios' style={{position:"absolute", top:"0", right:"0", marginRight:"10px"}}>
                        {Number(isNumNotif).toLocaleString(undefined, {maximumFractionDigits:2})}
                    </IonBadge>
                </IonFabButton>
            </IonFab> */}
        
        {/* Grid Saldo & Referral */}
        <IonGrid style={{background:"white", margin:0, padding:0}}>
            <IonRow style={{padding:0, margin:0}}>
                <IonCol size='12' style={{padding:0, margin:0, height:"20vh"}} id='AkunBackground'></IonCol>
            </IonRow>
            <IonRow style={{margin:"-12.5vh 10px 10px 10px", zIndex:10, padding:0, borderRadius:"10px", borderBottom:"solid 1px black"}}>
                <IonCol size='12' style={{padding:0, margin:"0 0 10px 0"}}>
                    <IonRow>
                        <IonCol size='2' style={{padding:"7px 0"}}>
                            <IonAvatar style={{margin:0}}>
                                <IonImg src="https://ionicframework.com/docs/img/demos/avatar.svg" style={{width:"auto", height:"100%"}}/>
                            </IonAvatar>
                        </IonCol>
                        <IonCol size='10' style={{textAlign:"start", color:"white", padding:"10px 15px"}}>
                            <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                <span style={{fontSize:"18px", fontWeight:"bold"}}>{localStorage.getItem('username')}</span>
                                <span style={{fontSize:"14px", margin:"5px 0 0 0"}}>{localStorage.getItem('useremail')}</span>
                            </IonText>
                        </IonCol>
                    </IonRow>
                </IonCol>
                <IonCol size='6' style={{padding:"10px 0 10px 10px", background:"white", borderRadius:"10px 0 0 10px"}}>
                    <IonRow style={{margin:0, padding:0, width:"100%", background:"white"}}>
                        <IonCol size='1' style={{margin:0, padding:0, textAlign:"start", background:"white"}}>
                            <IonIcon icon={diamondOutline} style={{fontSize:"18px", color:"#0000A0"}}/>
                        </IonCol>
                        <IonCol size='11' style={{margin:0, padding:"0 0 0 10px", textAlign:"start"}}>
                            <IonText mode='ios' style={{fontSize:"16px"}}>
                                {(myPin !== '')?
                                `P ${Number(mySaldo).toLocaleString(undefined, {maximumFractionDigits:2})}`
                                :'P 0'}
                            </IonText>
                        </IonCol>
                        <IonCol size='12' style={{textAlign:"start", margin:0, padding:0}}>
                            <IonText mode='ios' style={{fontSize:"11px", color:"gray"}}>
                                {(myPin !== '' || String(myPin) === '0')?'Point':'PIN Belum Dibuat'}
                            </IonText>
                        </IonCol>
                    </IonRow>
                </IonCol>
                <IonCol size='4' onClick={()=>{menuReferral()}} style={{background:"white", borderRadius:"0", padding:"10px 10px 10px 0"}}>
                    <IonRow style={{margin:0, padding:0, width:"100%", background:"white"}}>
                        <IonCol size='2' style={{margin:0, padding:0, textAlign:"start"}}>
                            <IonIcon icon={peopleOutline} style={{fontSize:"18px", color:"#0000A0"}}/>
                        </IonCol>
                        <IonCol size='10' style={{margin:0, padding:"0 0 0 5px", textAlign:"start"}}>
                            <IonText mode='ios' style={{fontSize:"16px"}}>
                                {(myPin !== '')?
                                `${Number(isNumReferral).toLocaleString(undefined, {maximumFractionDigits:2})}`
                                :'0'}
                            </IonText>
                        </IonCol>
                        <IonCol size='12' style={{textAlign:"start", margin:0, padding:0}}>
                            <IonText mode='ios' style={{fontSize:"11px", color:"gray"}}>
                                {(myPin !== '' || String(myPin) === '0')?'Referral':'PIN Belum Dibuat'}
                            </IonText>
                        </IonCol>
                    </IonRow>
                </IonCol>
                <IonCol size='2' onClick={()=>{setIsModalVoucher(true)}} style={{background:"white", borderRadius:"0 10px 10px 0", padding:"10px 10px 10px 0"}}>
                    <IonRow style={{margin:0, padding:0, width:"100%", background:"white"}}>
                        <IonCol size='4' style={{margin:0, padding:0, textAlign:"start"}}>
                            <IonIcon icon={ticketOutline} style={{fontSize:"18px", color:"#0000A0"}}/>
                        </IonCol>
                        <IonCol size='8' style={{margin:0, padding:"0 0 0 5px", textAlign:"start"}}>
                            <IonText mode='ios' style={{fontSize:"16px"}}>
                                {Number(isNumVoucher).toLocaleString(undefined, {maximumFractionDigits:2})}
                            </IonText>
                        </IonCol>
                        <IonCol size='12' style={{textAlign:"start", margin:0, padding:0}}>
                            <IonText mode='ios' style={{fontSize:"11px", color:"gray"}}>
                                Voucher
                            </IonText>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>
            <IonRow className='selected2' onClick={()=>{window.open('/Profil', '_self')}}>
                <IonCol size='2'>
                    <IonIcon src={personOutline} style={{fontSize:"24px", fontWeight:"bold", color:"black"}}></IonIcon>
                </IonCol>
                <IonCol size='10' style={{textAlign:"start", padding:0, margin:0}}>
                    <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                        <span style={{fontSize:"16px"}}>Profil</span>
                        <span style={{fontSize:"13px", margin:"4px 0 0 0"}}>Atur nama, nomor hp, email, kata sandi dan pin</span>
                    </IonText>
                </IonCol>
            </IonRow>
            {(localStorage.getItem('userAffiliator') === '1')?
            <IonRow className='selected2'>
                <IonCol size='2'>
                    <IonIcon src={starOutline} style={{fontSize:"24px", fontWeight:"bold", color:"black"}}></IonIcon>
                </IonCol>
                <IonCol size='10' style={{textAlign:"start", padding:0, margin:0}}>
                    <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                        <span style={{fontSize:"16px"}}>Promotor Program</span>
                        <span style={{fontSize:"13px", margin:"4px 0 0 0"}}>Klaim bonus, lihat status level</span>
                    </IonText>
                </IonCol>
            </IonRow>:""}
            <IonRow className='selected2' onClick={()=>{openModalAlamat('list','','','','','','')}}>
                <IonCol size='2'>
                    <IonIcon src={bookOutline} style={{fontSize:"24px", fontWeight:"bold", color:"black"}}></IonIcon>
                </IonCol>
                <IonCol size='10' style={{textAlign:"start", padding:0, margin:0}}>
                    <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                        <span style={{fontSize:"16px"}}>Alamat Saya</span>
                        <span style={{fontSize:"13px", margin:"4px 0 0 0"}}>Atur alamat pengirim dan penerima</span>
                    </IonText>
                </IonCol>
            </IonRow>
            <IonRow className='selected2' onClick={()=>{openModalRekening('list','','','','','','')}}>
                <IonCol size='2'>
                    <IonIcon src={cardOutline} style={{fontSize:"24px", fontWeight:"bold", color:"black"}}></IonIcon>
                </IonCol>
                <IonCol size='10' style={{textAlign:"start", padding:0, margin:0}}>
                    <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                        <span style={{fontSize:"16px"}}>Rekening Saya</span>
                        <span style={{fontSize:"13px", margin:"4px 0 0 0"}}>Atur rekening untuk tarik point</span>
                    </IonText>
                </IonCol>
            </IonRow>
            <IonRow className='selected2' onClick={()=>{openModalComplain()}}>
                <IonCol size='2'>
                    <IonIcon src={alertCircleOutline} style={{fontSize:"24px", fontWeight:"bold", color:"black"}}></IonIcon>
                </IonCol>
                <IonCol size='10' style={{textAlign:"start", padding:0, margin:0}}>
                    <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                        <span style={{fontSize:"16px"}}>Pesanan Dikomplain</span>
                        <span style={{fontSize:"13px", margin:"4px 0 0 0"}}>Lihat semua komplain pesanan kamu</span>
                    </IonText>
                </IonCol>
            </IonRow>
            <IonRow className='selected2' onClick={()=>{openModalCompany()}}>
                <IonCol size='2'>
                    <IonIcon src={businessOutline} style={{fontSize:"24px", fontWeight:"bold", color:"black"}}></IonIcon>
                </IonCol>
                <IonCol size='10' style={{textAlign:"start", padding:0, margin:0}}>
                    <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                        <span style={{fontSize:"16px"}}>Tentang Kami</span>
                        <span style={{fontSize:"13px", margin:"4px 0 0 0"}}>Mengetahui lebih jauh tentang kami</span>
                    </IonText>
                </IonCol>
            </IonRow>
            <IonRow className='selected2' onClick={()=>{doLogout()}}>
                <IonCol size='2'>
                    <IonIcon src={logOutOutline} style={{fontSize:"24px", fontWeight:"bold", color:"black"}}></IonIcon>
                </IonCol>
                <IonCol size='10' style={{textAlign:"start", padding:0, margin:0}}>
                    <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                        <span style={{fontSize:"16px"}}>Keluar</span>
                        <span style={{fontSize:"13px", margin:"4px 0 0 0"}}>Versi {isVersionApp}</span>
                    </IonText>
                </IonCol>
            </IonRow>
        </IonGrid>
        
        <IonModal mode='ios' isOpen={isModalPin} onDidDismiss={()=>{setIsModalPin(false)}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
          <IonHeader mode='ios'>
              <IonToolbar mode='ios'>
                  <IonButtons slot='start'>
                      <IonButton mode='ios' fill='clear' color='danger' onClick={()=>{setIsModalPin(false)}}>
                          <IonIcon icon={closeCircleOutline}/>
                      </IonButton>
                  </IonButtons>
                  <IonTitle>KEAMANAN</IonTitle>
              </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
              <IonGrid style={{padding:"45px 15px"}}>
                  <IonRow style={{textAlign:"start"}}>
                      <IonCol size='12' style={{paddingLeft:0}}>
                          <IonText mode='ios' style={{fontSize:"14px", color:"gray"}}>
                              Buat 6 digit pin kamu untuk membuka fitur tarik point
                          </IonText>
                      </IonCol>
                  </IonRow>
                  <IonRow style={{position:"relative"}}>
                      <IonInput mode='ios' inputMode='numeric' name='inputPin' maxlength={6} id='inputPin' onIonChange={(e)=>{doSplitPin(String(e.detail.value))}} className='inputPin'/>
                      <IonCol size='2' style={{padding:"50px 0 5px 0", textAlign:"center", fontSize:"32px"}}>
                          <IonIcon icon={(isPin1 === '')?ellipseOutline:ellipse} style={{color:"gray"}}/>
                      </IonCol>
                      <IonCol size='2' style={{padding:"50px 0 5px 0", textAlign:"center", fontSize:"32px"}}>
                          <IonIcon icon={(isPin2 === '')?ellipseOutline:ellipse} style={{color:"gray"}}/>
                      </IonCol>
                      <IonCol size='2' style={{padding:"50px 0 5px 0", textAlign:"center", fontSize:"32px"}}>
                          <IonIcon icon={(isPin3 === '')?ellipseOutline:ellipse} style={{color:"gray"}}/>
                      </IonCol>
                      <IonCol size='2' style={{padding:"50px 0 5px 0", textAlign:"center", fontSize:"32px"}}>
                          <IonIcon icon={(isPin4 === '')?ellipseOutline:ellipse} style={{color:"gray"}}/>
                      </IonCol>
                      <IonCol size='' style={{padding:"50px 0 5px 0", textAlign:"center", fontSize:"32px"}}>
                          <IonIcon icon={(isPin5 === '')?ellipseOutline:ellipse} style={{color:"gray"}}/>
                      </IonCol>
                      <IonCol size='2' style={{padding:"50px 0 5px 0", textAlign:"center", fontSize:"32px"}}>
                          <IonIcon icon={(isPin6 === '')?ellipseOutline:ellipse} style={{color:"gray"}}/>
                      </IonCol>
                  </IonRow>
              </IonGrid>
          </IonContent>
        </IonModal>

        <IonModal mode='ios' isOpen={isModalPin2} onDidDismiss={()=>{setIsModalPin2(false)}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
          <IonHeader mode='ios'>
              <IonToolbar mode='ios'>
                  <IonButtons slot='start'>
                      <IonButton mode='ios' fill='clear' color='danger' onClick={()=>{setIsModalPin2(false)}}>
                          <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                          BACK
                      </IonButton>
                  </IonButtons>
                  <IonTitle>KEAMANAN</IonTitle>
              </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
              <IonGrid style={{padding:"45px 15px"}}>
                  <IonRow style={{textAlign:"start"}}>
                      <IonCol size='12' style={{paddingLeft:0}}>
                          <IonText mode='ios' style={{fontSize:"14px", color:"gray"}}>
                              Konfirmasi 6 digit pin kamu
                          </IonText>
                      </IonCol>
                  </IonRow>
                  <IonRow style={{position:"relative"}}>
                      <IonInput mode='ios' inputMode='numeric' name='inputPin' maxlength={6} id='inputPin' onIonChange={(e)=>{doSplitPinDone(String(e.detail.value))}} className='inputPin'/>
                      <IonCol size='2' style={{padding:"50px 0 5px 0", textAlign:"center", fontSize:"32px"}}>
                          <IonIcon icon={(isPinTwice1 === '')?ellipseOutline:ellipse} style={{color:"gray"}}/>
                      </IonCol>
                      <IonCol size='2' style={{padding:"50px 0 5px 0", textAlign:"center", fontSize:"32px"}}>
                          <IonIcon icon={(isPinTwice2 === '')?ellipseOutline:ellipse} style={{color:"gray"}}/>
                      </IonCol>
                      <IonCol size='2' style={{padding:"50px 0 5px 0", textAlign:"center", fontSize:"32px"}}>
                          <IonIcon icon={(isPinTwice3 === '')?ellipseOutline:ellipse} style={{color:"gray"}}/>
                      </IonCol>
                      <IonCol size='2' style={{padding:"50px 0 5px 0", textAlign:"center", fontSize:"32px"}}>
                          <IonIcon icon={(isPinTwice4 === '')?ellipseOutline:ellipse} style={{color:"gray"}}/>
                      </IonCol>
                      <IonCol size='' style={{padding:"50px 0 5px 0", textAlign:"center", fontSize:"32px"}}>
                          <IonIcon icon={(isPinTwice5 === '')?ellipseOutline:ellipse} style={{color:"gray"}}/>
                      </IonCol>
                      <IonCol size='2' style={{padding:"50px 0 5px 0", textAlign:"center", fontSize:"32px"}}>
                          <IonIcon icon={(isPinTwice6 === '')?ellipseOutline:ellipse} style={{color:"gray"}}/>
                      </IonCol>
                  </IonRow>
              </IonGrid>
          </IonContent>
        </IonModal>

        <IonModal mode='ios' isOpen={isModalNotifikasi} onDidDismiss={()=>{setIsModalNotifikasi(false)}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
          <IonHeader mode='ios'>
            <IonToolbar mode='ios'>
              <IonButtons slot='start'>
                <IonButton mode='ios' color='primary' onClick={()=>{setIsModalNotifikasi(false)}}>
                  <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}} />
                  BACK
                </IonButton>
              </IonButtons>
              <IonTitle>NOTIFIKASI</IonTitle>
              {(isLoadingModal === true)?
                <IonProgressBar type="indeterminate" mode='ios' color='primary'></IonProgressBar>
              :''}
            </IonToolbar>
            <IonGrid style={{background:"white"}}>
              <IonRow>
                <IonCol size='12' style={{padding:"0 10px", margin:0}}>
                  <IonSegment scrollable={true} value={selectFilterNotify} mode='ios' style={{fontSize:"12px", color:"black"}} onIonChange={(e)=>{filterNotify(String(e.detail.value))}}>
                    <IonSegmentButton value="semua" mode='ios'>
                      <IonText mode='ios'>
                        All
                      </IonText>
                    </IonSegmentButton>
                    <IonSegmentButton value="Pengiriman" mode='ios'>
                      <IonText mode='ios'>
                        Pengiriman
                      </IonText>
                    </IonSegmentButton>
                    <IonSegmentButton value="Promo" mode='ios'>
                      <IonText mode='ios'>
                        Promo
                      </IonText>
                    </IonSegmentButton>
                    <IonSegmentButton value="Info" mode='ios'>
                      <IonText mode='ios'>
                        Info
                      </IonText>
                    </IonSegmentButton>
                  </IonSegment>
                </IonCol>
              </IonRow>      
            </IonGrid>
          </IonHeader>
          <IonContent fullscreen>
            <IonGrid>
              {dataNotifikasi.map((a, index) => {
                return(
                  <IonRow key={index} style={(a['baru'] === true)?{margin:"10px 0", borderRadius:"10px", border:"solid 1px #0000A0", padding:"10px", background:"rgba(45,85,255,0.10)"}:{margin:"10px 0", borderRadius:"10px", border:"solid 1px gray", padding:"10px", background:"rgba(200,200,200,0.10)"}} onClick={()=>{selectNotify(a['is'])}}>
                    <IonCol size='1' style={{margin:0, padding:"2px"}}>
                      <IonIcon icon={(a['type'] === 'Pengiriman')?cube:(a['type'] === 'Info')?megaphone:ticket} style={{fontSize:"18px"}} color={(a['type'] === 'Info')?'danger':(a['type'] === 'Promo')?'success':'primary'}/>
                    </IonCol>
                    <IonCol size='7' style={{textAlign:"start", fontSize:"16px", margin:0, padding:"2px"}}>
                      <IonText mode='ios'>
                        {a['title']}
                      </IonText>
                    </IonCol>
                    <IonCol size='4' style={{textAlign:"end", fontSize:"12px", margin:0, padding:"2px"}}>
                      <IonText mode='ios'>
                        {a['created_at']}
                      </IonText>
                    </IonCol>
                    <IonCol size='12' style={{textAlign:"start", margin:0, padding:"2px"}}>
                      <IonText mode='ios' style={{fontSize:"16px"}}>
                        {a['message']}
                      </IonText>
                    </IonCol>
                  </IonRow>
                )
              })}
              <IonInfiniteScroll onIonInfinite={loadDataNotify} threshold="100px" disabled={isInfiniteDisabled}>
                <IonInfiniteScrollContent loadingSpinner="circular" loadingText="Memuat lebih banyak data.."></IonInfiniteScrollContent>
              </IonInfiniteScroll>
            </IonGrid>
          </IonContent>
        </IonModal>

        <IonModal mode='ios' isOpen={isModalAlamat} onDidDismiss={()=>{setIsModalAlamat(false)}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
          <IonHeader mode='ios' style={{background:"white"}}>
              <IonToolbar mode='ios'>
                  <IonButtons slot='start'>
                      <IonButton mode='ios' fill='clear' color='primary' onClick={()=>{setIsModalAlamat(false)}}>
                          <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                          BACK
                      </IonButton>
                  </IonButtons>
                  <IonTitle>Alamat Saya</IonTitle>
              </IonToolbar>
              {(isLoadingModal === true)?
                <IonProgressBar type="indeterminate"></IonProgressBar>
              :""}
              <IonSearchbar mode='ios' style={{textAlign:"start"}} inputMode='search' placeholder='Cari Alamat' onIonChange={(e)=>{qAlamat(String(e.detail.value))}} onIonClear={()=>{qAlamat('')}} />
          </IonHeader>
          <IonContent fullscreen>
            <IonGrid style={{padding:"0 10px"}}>
              <IonRow>
                {dataAlamat.map((a, index)=>{
                  return(
                    <IonCol size='12' style={{borderRadius:"10px", padding:"10px", margin:"5px 0", background:"rgba(200,200,200,0.25)", textAlign:"start"}} key={index} onClick={()=>{openModalAlamat('detail', a['id'], a['nama'], a['no_telepon'], a['email'], a['alamat'], a['lokasi'])}}>
                      <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                        <span style={{fontSize:"14px"}}>{a['nama']}</span>
                        <span style={{fontSize:"12px"}}>{a['no_telepon']}</span>
                        {(String(a['email']).includes('@'))?
                        <span style={{fontSize:"12px"}}>{a['email']}</span>
                        :''}
                        <span style={{fontSize:"12px"}}>{a['alamat']}</span>
                        <span style={{fontSize:"12px"}}>{a['lokasi']}</span>
                      </IonText>
                    </IonCol>
                  )
                })}
                <IonInfiniteScroll onIonInfinite={loadDataAlamat} threshold="100px" disabled={isInfiniteDisabled}>
                  <IonInfiniteScrollContent loadingSpinner="circular" loadingText="Memuat lebih banyak data.."></IonInfiniteScrollContent>
                </IonInfiniteScroll>
              </IonRow>
            </IonGrid>
            <IonFab vertical="bottom" horizontal="end" slot="fixed">
              <IonFabButton color='primary' mode='ios'>
                <IonIcon icon={add} onClick={() =>openModalAlamat('tambah','','','','','','')}/>
              </IonFabButton>
            </IonFab>
          </IonContent>
        </IonModal>

        <IonModal mode='ios' isOpen={isModalAlamatTambah} onDidDismiss={()=>{closeModalAlamatTambah()}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
          <IonHeader mode='ios' style={{background:"white"}}>
              <IonToolbar mode='ios'>
                <IonButtons slot='start'>
                  <IonButton mode='ios' fill='clear' color='primary' onClick={()=>{closeModalAlamatTambah()}}>
                      <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                      BACK
                  </IonButton>
                </IonButtons>
                <IonTitle>{(isSelectAlamat === 'detail')?'UBAH':'TAMBAH'}</IonTitle>
                {(isSelectAlamat === 'detail')?
                <IonButtons slot='end'>
                  <IonButton mode='ios' fill='clear' color='danger' onClick={()=>{setIsAlertDelete(true)}}>
                      HAPUS
                  </IonButton>
                </IonButtons>
                :''}
              </IonToolbar>
              {(isLoadingModal === true)?
                <IonProgressBar type="indeterminate"></IonProgressBar>
              :""}
          </IonHeader>
          <IonContent fullscreen>
            <IonGrid style={{margin:"10px", border:"solid 1px gray", borderRadius:"10px", textAlign:"start"}}>
              <IonRow>
                <IonCol size='12' style={{background:"rgba(108,122,137,0.45)", padding:"10px", borderRadius:"5px"}}>
                  <IonText mode='ios' style={{fontSize:"14px"}}>
                      Kontak
                  </IonText>
                </IonCol>
                <IonCol size='12' style={{background:"rgba(200,200,200,0.35)", borderRadius:"5px", padding:"5px", margin:"5px 0"}}>
                  {(isSelectAlamat === 'tambah')?
                    <IonInput mode='ios' inputMode='text' placeholder='Nama Lengkap' name='alamatNama' style={{textAlign:"start", fontSize:"12px"}}/>
                  :
                    <IonInput mode='ios' inputMode='text' placeholder='Nama Lengkap' name='alamatNama' style={{textAlign:"start", fontSize:"12px"}} value={(isSelectAlamat === 'detail')?detailAlamatNama:''} onIonChange={(e)=>{(isSelectAlamat === 'detail')?setDetailAlamatNama(String(e.detail.value)):console.log(e.detail.value)}} />
                  }
                </IonCol>
                <IonCol size='12' style={{background:"rgba(200,200,200,0.35)", borderRadius:"5px", padding:"5px", margin:"5px 0"}}>
                  {(isSelectAlamat === 'tambah')?
                    <IonInput mode='ios' inputMode='numeric' placeholder='No Telepon' name='alamatPhone' style={{textAlign:"start", fontSize:"12px"}}/>
                  :
                    <IonInput mode='ios' inputMode='numeric' placeholder='No Telepon' name='alamatPhone' style={{textAlign:"start", fontSize:"12px"}} value={(isSelectAlamat === 'detail')?detailAlamatPhone:''} onIonChange={(e)=>{(isSelectAlamat === 'detail')?setDetailAlamatPhone(String(e.detail.value)):console.log(e.detail.value)}} />
                  }
                </IonCol>
                <IonCol size='12' style={{background:"rgba(200,200,200,0.35)", borderRadius:"5px", padding:"5px", margin:"5px 0"}}>
                  {(isSelectAlamat === 'tambah')?
                    <IonInput mode='ios' inputMode='email' placeholder='Email (Optional)' name='alamatEmail' style={{textAlign:"start", fontSize:"12px"}}/>
                  :
                    <IonInput mode='ios' inputMode='email' placeholder='Email (Optional)' name='alamatEmail' style={{textAlign:"start", fontSize:"12px"}} value={(isSelectAlamat === 'detail')?detailAlamatEmail:''} onIonChange={(e)=>{(isSelectAlamat === 'detail')?setDetailAlamatEmail(String(e.detail.value)):console.log(e.detail.value)}} />
                  }
                </IonCol>  
              </IonRow>
            </IonGrid>

            <IonGrid style={{margin:"10px", border:"solid 1px gray", borderRadius:"10px", textAlign:"start"}}>
              <IonRow>    
                <IonCol size='12' style={{background:"rgba(108,122,137,0.45)", padding:"10px", borderRadius:"5px"}}>
                  <IonText mode='ios' style={{fontSize:"14px"}}>
                      Alamat
                  </IonText>
                </IonCol>
                <IonCol size='12' style={{background:"rgba(200,200,200,0.35)", borderRadius:"5px", padding:"5px", margin:"5px 0"}}>
                  {(isSelectAlamat === 'tambah')?
                    <IonTextarea mode='ios' placeholder='Detail Alamat' name='alamatDetail' inputMode='text' style={{textAlign:"start", fontSize:"12px"}} autoGrow={true}/>
                    :
                    <IonTextarea mode='ios' placeholder='Detail Alamat' name='alamatDetail' inputMode='text' style={{textAlign:"start", fontSize:"12px"}} autoGrow={true} value={(isSelectAlamat === 'detail')?detailAlamatDetail:''} onIonChange={(e)=>{(isSelectAlamat === 'detail')?setDetailAlamatDetail(String(e.detail.value)):console.log(e.detail.value)}}/>
                  }
                </IonCol>
                <IonCol size='12' style={{background:"rgba(200,200,200,0.35)", borderRadius:"5px", padding:"5px", margin:"5px 0"}}>
                  {(isSelectAlamat === 'tambah')?
                    <IonInput mode='ios' inputMode='text' placeholder='Pilih Lokasi' name='alamatLokasi' style={{textAlign:"start", fontSize:"12px"}} readonly={true} onClick={()=>{setIsModalLokasi(true)}} onIonFocus={()=>{setIsModalLokasi(true)}}/>
                    :
                    <IonInput mode='ios' inputMode='text' placeholder='Pilih Lokasi' name='alamatLokasi' style={{textAlign:"start", fontSize:"12px"}} readonly={true} onClick={()=>{setIsModalLokasi(true)}} onIonFocus={()=>{setIsModalLokasi(true)}} value={(isSelectAlamat === 'detail')?detailAlamatLokasi:''} />
                  }
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
          <IonFooter>
            <IonGrid>
              <IonRow>
                <IonCol size='12'>
                  {(isSelectAlamat === 'tambah')?
                  <IonButton mode='ios' expand='block' color='primary' onClick={()=>{doTambahAlamat()}}>
                    TAMBAH
                  </IonButton>
                  :""}
                  {(isSelectAlamat === 'detail')?
                  <IonButton mode='ios' expand='block' color='primary' onClick={()=>{doUpdateAlamat()}}>
                    SIMPAN
                  </IonButton>
                  :""}
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonFooter>
        </IonModal>

        <IonModal mode='ios' isOpen={isModalLokasi} onDidDismiss={()=>{setIsModalLokasi(false)}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
          <IonHeader mode='ios' style={{background:"white"}}>
              <IonToolbar mode='ios'>
                  <IonButtons slot='start'>
                      <IonButton mode='ios' fill='clear' color='primary' onClick={()=>{setIsModalLokasi(false)}}>
                          <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                          BACK
                      </IonButton>
                  </IonButtons>
                  <IonTitle>LOKASI</IonTitle>
              </IonToolbar>
              {(isLoadingModal === true)?
                <IonProgressBar type="indeterminate"></IonProgressBar>
              :""}
              <IonSearchbar mode='ios' style={{textAlign:"start"}} inputMode='search' placeholder='Cari Lokasi' onIonChange={(e)=>{qLokasi(String(e.detail.value))}} onIonClear={()=>{qLokasi('')}} id='qLokasi' />
          </IonHeader>
          <IonContent fullscreen>
            <IonGrid style={{padding:"0 10px"}}>
              <IonRow>
                {dataLokasi.map((a, index)=>{
                  return(
                    <IonCol size='12' style={{borderRadius:"10px", padding:"10px", margin:"2px 0", background:"rgba(200,200,200,0.25)", textAlign:"start"}} key={index} onClick={()=>{onSelectLokasi(a['lokasi'])}}>
                      <IonText mode='ios' style={{fontSize:"12px"}}>
                        {a['lokasi']}
                      </IonText>
                    </IonCol>
                  )
                })}
                <IonInfiniteScroll onIonInfinite={loadDataLokasi} threshold="100px" disabled={isInfiniteDisabled}>
                  <IonInfiniteScrollContent loadingSpinner="circular" loadingText="Memuat lebih banyak data.."></IonInfiniteScrollContent>
                </IonInfiniteScroll>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonModal>

        <IonModal mode='ios' isOpen={isModalRekening} onDidDismiss={()=>{setIsModalRekening(false)}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
          <IonHeader mode='ios' style={{background:"white"}}>
              <IonToolbar mode='ios'>
                  <IonButtons slot='start'>
                      <IonButton mode='ios' fill='clear' color='primary' onClick={()=>{setIsModalRekening(false)}}>
                          <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                          BACK
                      </IonButton>
                  </IonButtons>
                  <IonTitle>Rekening Saya</IonTitle>
              </IonToolbar>
              {(isLoadingModal === true)?
                <IonProgressBar type="indeterminate"></IonProgressBar>
              :""}
          </IonHeader>
          <IonContent fullscreen>
            <IonGrid style={{padding:"0 10px"}}>
              <IonRow>
                {dataRekening.map((a, index)=>{
                  return(
                    <IonCol size='12' style={{borderRadius:"10px", padding:"10px", margin:"5px 0", background:"rgba(200,200,200,0.25)", textAlign:"start"}} key={index} onClick={()=>{openModalRekening('detail', a['id'], a['nama_pemilik_rekening'], a['nama_bank'], a['nomor_rekening'], a['image'], a['code_bank'])}}>
                      <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                        <span style={{fontSize:"14px"}}>{a['nama_pemilik_rekening']}</span>
                        <span style={{fontSize:"12px"}}>{a['nomor_rekening']}</span>  
                      </IonText>
                      <IonRow style={{width:"100%", padding:"5px 0"}}>
                        <IonCol size='1' style={{textAlign:"start", padding:"2px 0", margin:0}}>
                          <IonImg src={a['image']} style={{height:"18px", margin:"0"}} />
                        </IonCol>
                        <IonCol size='11' style={{textAlign:"start", padding:"0 5px 5px 5px", margin:0}}>
                          <IonText mode='ios' style={{fontSize:"12px"}}>
                            {a['nama_bank']} 
                          </IonText>
                        </IonCol>
                      </IonRow>
                    </IonCol>
                  )
                })}
                <IonInfiniteScroll onIonInfinite={loadDataRekening} threshold="100px" disabled={isInfiniteDisabled}>
                  <IonInfiniteScrollContent loadingSpinner="circular" loadingText="Memuat lebih banyak data.."></IonInfiniteScrollContent>
                </IonInfiniteScroll>
              </IonRow>
            </IonGrid>
            <IonFab vertical="bottom" horizontal="end" slot="fixed">
              <IonFabButton color='primary' mode='ios'>
                <IonIcon icon={add} onClick={() =>openModalRekening('tambah','','','','','','')}/>
              </IonFabButton>
            </IonFab>
          </IonContent>
        </IonModal>

        <IonModal mode='ios' isOpen={isModalRekeningTambah} onDidDismiss={()=>{closeModalRekeningTambah()}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
          <IonHeader mode='ios' style={{background:"white"}}>
              <IonToolbar mode='ios'>
                <IonButtons slot='start'>
                  <IonButton mode='ios' fill='clear' color='primary' onClick={()=>{closeModalRekeningTambah()}}>
                      <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                      BACK
                  </IonButton>
                </IonButtons>
                <IonTitle>{(isSelectRekening === 'detail')?'UBAH':'TAMBAH'}</IonTitle>
                {(isSelectRekening === 'detail')?
                <IonButtons slot='end'>
                  <IonButton mode='ios' fill='clear' color='danger' onClick={()=>{setIsAlertDelete2(true)}}>
                      HAPUS
                  </IonButton>
                </IonButtons>
                :''}
              </IonToolbar>
              {(isLoadingModal === true)?
                <IonProgressBar type="indeterminate"></IonProgressBar>
              :""}
          </IonHeader>
          <IonContent fullscreen>
            <IonGrid style={{margin:"10px", border:"solid 1px gray", borderRadius:"10px", textAlign:"start"}}>
              <IonRow>
                <IonCol size='12' style={{background:"rgba(108,122,137,0.45)", padding:"10px", borderRadius:"5px"}}>
                  <IonText mode='ios' style={{fontSize:"14px"}}>
                      Bank
                  </IonText>
                </IonCol>
                <IonCol size='12' style={{background:"rgba(200,200,200,0.35)", borderRadius:"5px", padding:"5px", margin:"5px 0"}}>
                  {(isSelectRekening === 'tambah')?
                    <IonInput name='rekeningCode' inputMode='text' style={{display:"none"}}/>
                  :
                    <IonInput name='rekeningCode' inputMode='text' style={{display:"none"}} value={(isSelectRekening === 'detail')?detailRekeningCode:''}/>
                  }
                  
                  {(isSelectRekening === 'tambah')?
                    <IonInput mode='ios' inputMode='text' placeholder='Pilih Bank' name='rekeningBank' style={{textAlign:"start", fontSize:"12px"}} readonly={true} onClick={()=>{setIsModalBank(true)}} onIonFocus={()=>{setIsModalBank(true)}}/>
                    :
                    <IonInput mode='ios' inputMode='text' placeholder='Pilih Bank' name='rekeningBank' style={{textAlign:"start", fontSize:"12px"}} readonly={true} onClick={()=>{setIsModalBank(true)}} onIonFocus={()=>{setIsModalBank(true)}} value={(isSelectRekening === 'detail')?detailRekeningBank:''} />
                  }
                </IonCol>
              </IonRow>
            </IonGrid>

            <IonGrid style={{margin:"10px", border:"solid 1px gray", borderRadius:"10px", textAlign:"start"}}>
              <IonRow>    
                <IonCol size='12' style={{background:"rgba(108,122,137,0.45)", padding:"10px", borderRadius:"5px"}}>
                  <IonText mode='ios' style={{fontSize:"14px"}}>
                      Rekening
                  </IonText>
                </IonCol>
                <IonCol size='12' style={{background:"rgba(200,200,200,0.35)", borderRadius:"5px", padding:"5px", margin:"5px 0"}}>
                  {(isSelectRekening === 'tambah')?
                    <IonInput mode='ios' inputMode='text' placeholder='Nama Pemegang Rekening' name='rekeningHolder' style={{textAlign:"start", fontSize:"12px"}}/>
                  :
                    <IonInput mode='ios' inputMode='text' placeholder='Nama Pemegang Rekening' name='rekeningHolder' style={{textAlign:"start", fontSize:"12px"}} value={(isSelectRekening === 'detail')?detailRekeningHolder:''} onIonChange={(e)=>{(isSelectRekening === 'detail')?setDetailRekeningHolder(String(e.detail.value)):console.log(e.detail.value)}} />
                  }
                </IonCol>
                <IonCol size='12' style={{background:"rgba(200,200,200,0.35)", borderRadius:"5px", padding:"5px", margin:"5px 0"}}>
                  {(isSelectRekening === 'tambah')?
                    <IonInput mode='ios' inputMode='numeric' placeholder='Nomor Rekening' name='rekeningNomor' style={{textAlign:"start", fontSize:"12px"}}/>
                  :
                    <IonInput mode='ios' inputMode='numeric' placeholder='Nomor Rekening' name='rekeningNomor' style={{textAlign:"start", fontSize:"12px"}} value={(isSelectRekening === 'detail')?detailRekeningNomor:''} onIonChange={(e)=>{(isSelectRekening === 'detail')?setDetailRekeningNomor(String(e.detail.value)):console.log(e.detail.value)}} />
                  }
                </IonCol> 
              </IonRow>
            </IonGrid>
          </IonContent>
          <IonFooter>
            <IonGrid>
              <IonRow>
                <IonCol size='12'>
                  {(isSelectRekening === 'tambah')?
                  <IonButton mode='ios' expand='block' color={(isValidRekening === true)?'primary':'medium'} onClick={()=>{(isValidRekening === true)?doTambahRekening():doVerifikasiRekening()}}>
                    {(isValidRekening === true)?'TAMBAH':'VERIFIKASI'}
                  </IonButton>
                  :""}
                  {(isSelectRekening === 'detail')?
                  <IonButton mode='ios' expand='block' color={(isValidRekening === true)?'primary':'medium'} onClick={()=>{(isValidRekening === true)?doUpdateRekening():doVerifikasiRekening()}}>
                    {(isValidRekening === true)?'SIMPAN':'VERIFIKASI'}
                  </IonButton>
                  :""}
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonFooter>
        </IonModal>

        <IonModal ref={isModalBankRef} mode='ios' isOpen={isModalBank} onDidDismiss={()=>{setIsModalBank(false)}} initialBreakpoint={0.25} breakpoints={[0,0.25,0.5,0.75]} animated={true}>
          <IonHeader mode='ios'>
            <IonToolbar mode='ios'>
                <IonSearchbar onClick={() => isModalBankRef.current?.setCurrentBreakpoint(0.75)} placeholder="Cari Bank" onKeyUp={(e)=>qBank(String(e.currentTarget.value))} style={{margin:"10px 0 0 0", textAlign:"start"}}></IonSearchbar>
            </IonToolbar>
        </IonHeader>
          <IonContent>
            <IonGrid>
                {dataBank.map((a,index) => {
                    return(
                    <IonRow key={index} onClick={()=>{doSelectBank(a['code'], a['nama'])}} style={{color:"black", textAlign:"start"}}>
                        <IonCol size='2'>
                            <IonAvatar style={{border:"solid 1px #0000A0"}}>
                                <IonImg src={a['image']} />
                            </IonAvatar>
                        </IonCol>
                        <IonCol size='10' style={{textAlign:"start", padding:"20px 0"}}>
                            <IonText mode='ios' style={{fontSize:"16px", color:"black"}}>
                                {a['nama']}
                            </IonText>
                        </IonCol>
                    </IonRow>
                    )
                })}
            </IonGrid>
          </IonContent>
        </IonModal>

        <IonModal mode='ios' isOpen={isModalSyarat} onDidDismiss={()=>{setIsModalSyarat(false)}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
          <IonHeader mode='ios' style={{background:"white"}}>
            <IonToolbar mode='ios'>
              <IonButtons slot='start'>
                <IonButton mode='ios' fill='clear' color='primary' onClick={()=>{setIsModalSyarat(false)}}>
                    <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                    Tentang kami
                </IonButton>
              </IonButtons>
            </IonToolbar>
            {(isLoading === true)?
                <IonProgressBar type="indeterminate" mode='ios' color='primary'></IonProgressBar>
            :''}
          </IonHeader>
          <IonContent fullscreen>
            <IonGrid style={{padding:"0"}}>
                {dataCompanyList.map((a, index) => {
                    return(
                        <IonRow className='selected2' onClick={()=>{openModalSyaratDetail(a)}} key={index}>
                            <IonCol size='11' style={{textAlign:"start", padding:"10px"}}>
                                <IonText mode='ios' style={{fontSize:"16px"}}>
                                    {a['title']}
                                </IonText>
                            </IonCol>
                            <IonCol size='1' style={{textAlign:"center"}}>
                                <IonIcon icon={chevronForwardOutline} style={{margin:"5px 0"}}/>
                            </IonCol>
                        </IonRow>          
                    )
                })}
            </IonGrid>
          </IonContent>
        </IonModal>

        <IonModal mode='ios' isOpen={isModalVoucher} onDidDismiss={()=>{setIsModalVoucher(false)}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
        <IonHeader mode='ios' style={{background:"white"}}>
            <IonToolbar mode='ios'>
              <IonButtons slot='start'>
                <IonButton mode='ios' fill='clear' color='primary' onClick={()=>{setIsModalVoucher(false)}}>
                    <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                    BACK
                </IonButton>
              </IonButtons>
              <IonTitle>Voucher</IonTitle>
            </IonToolbar>
            <IonSearchbar mode='ios' style={{textAlign:"start"}} inputMode='search' placeholder='Cari Voucher' onIonChange={(e)=>{qVoucher(String(e.detail.value))}} onIonClear={()=>{qVoucher('')}} id='qVoucher' />
          </IonHeader>
          <IonContent fullscreen>
            <IonGrid style={{padding:"0 10px"}}>
              <IonRow>
                {dataVoucher.map((a, index)=>{
                  return(
                    <IonCol size='12' style={{borderRadius:"10px", padding:"10px", margin:"5px 0", background:"rgba(200,200,200,0.25)", textAlign:"start", position:"relative"}} key={index}>
                      <IonRow style={{width:"100%"}}>
                        <IonCol size='12' onClick={()=>{openModalVoucherDetail(a['id'], a['title'], a['keterangan'], a['image'], a['date_start'], a['date_end'], a['status'], a['type'], a['value'], a['min_berat'], a['layanan'], a['hub_asal'], a['hub_tujuan'])}}>
                          <IonText mode='ios'>
                            <IonText mode='ios' style={{fontSize:"16px", fontWeight:"bold"}}>
                              {a['title']}
                            </IonText>
                          </IonText>
                        </IonCol>
                        <IonCol size='1' style={{padding:"15px 0"}} onClick={()=>{openModalVoucherDetail(a['id'], a['title'], a['keterangan'], a['image'], a['date_start'], a['date_end'], a['status'], a['type'], a['value'], a['min_berat'], a['layanan'], a['hub_asal'], a['hub_tujuan'])}}>
                          <IonIcon icon={calendar} style={{fontSize:"28px"}} />
                        </IonCol>
                        <IonCol size='8' style={{textAlign:"start", padding:"20px 10px"}} onClick={()=>{openModalVoucherDetail(a['id'], a['title'], a['keterangan'], a['image'], a['date_start'], a['date_end'], a['status'], a['type'], a['value'], a['min_berat'], a['layanan'], a['hub_asal'], a['hub_tujuan'])}}>
                          <IonText mode='ios' style={{fontSize:"12px"}}>
                            Berlaku hingga {a['date_end']}
                          </IonText>
                        </IonCol>
                        <IonCol size='3' style={{textAlign:"end"}}>
                          <IonButton mode='ios' expand='block' shape='round' fill='outline' color={(a['status'] === 'valid')?'primary':'danger'} disabled={(a['status'] === 'valid')?false:true} onClick={()=>{doUseVoucher(a['status'], a['layanan'], a['min_berat'])}}>
                            <IonRippleEffect></IonRippleEffect>
                            {(a['status'] === 'valid')?'Pakai':'Expired'}
                          </IonButton>
                        </IonCol>   
                      </IonRow>
                    </IonCol>
                  )
                })}
                <IonInfiniteScroll onIonInfinite={loadDataVoucher} threshold="100px" disabled={isInfiniteDisabled}>
                  <IonInfiniteScrollContent loadingSpinner="circular" loadingText="Memuat lebih banyak data.."></IonInfiniteScrollContent>
                </IonInfiniteScroll>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonModal>

        <IonModal mode='ios' isOpen={isModalSyaratDetail} onDidDismiss={()=>{setIsModalSyaratDetail(false)}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
        <IonHeader mode='ios' style={{background:"white"}}>
            <IonToolbar mode='ios'>
              <IonButtons slot='start'>
                <IonButton mode='ios' fill='clear' color='primary' onClick={()=>{setIsModalSyaratDetail(false)}}>
                    <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                    BACK
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <IonGrid>
                <IonRow>
                    <IonCol size='12' style={{textAlign:"center"}}>
                        <IonText mode="ios" style={{fontWeight:"bold"}}>
                            {String(dataCompany['title']).toUpperCase()}
                        </IonText>
                    </IonCol>
                    <IonCol size='12'>
                        <span dangerouslySetInnerHTML={{__html:dataCompany['keterangan']}}></span>
                    </IonCol>
                </IonRow>
            </IonGrid>
          </IonContent>
        </IonModal>

        <IonModal mode='ios' isOpen={isModalVoucherDetail} onDidDismiss={()=>{setIsModalVoucherDetail(false)}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
          <IonHeader mode='ios' translucent={true}>
            <IonToolbar mode='ios'>
              <IonButtons slot='start'>
                  <IonButton mode='ios' fill='clear' color='danger' onClick={()=>{setIsModalVoucherDetail(false)}}>
                      <IonIcon icon={closeCircleOutline}/>
                  </IonButton>
              </IonButtons>
              <IonTitle>
                  DETAIL'S
              </IonTitle>
            </IonToolbar>
            <IonGrid style={{color:"black"}}>
                <IonRow>
                    <IonCol size='4' style={{textAlign:"start", margin:0, padding:"2px 10px"}}>
                        <IonText mode='ios' style={{fontSize:"12px"}}>
                            Title
                        </IonText>
                    </IonCol>
                    <IonCol size='8' style={{textAlign:"end", margin:0, padding:"2px 10px"}}>
                        <IonText mode='ios' style={{fontSize:"12px"}}>
                            {detailVoucherTitle}
                        </IonText>
                    </IonCol>
                    <IonCol size='4' style={{textAlign:"start", margin:0, padding:"2px 10px"}}>
                        <IonText mode='ios' style={{fontSize:"12px"}}>
                          Mulai Dari
                        </IonText>
                    </IonCol>
                    <IonCol size='8' style={{textAlign:"end", margin:0, padding:"2px 10px"}}>
                        <IonText mode='ios' style={{fontSize:"12px"}}>
                            {detailVoucherStart}
                        </IonText>
                    </IonCol>
                    <IonCol size='4' style={{textAlign:"start", margin:0, padding:"2px 10px"}}>
                        <IonText mode='ios' style={{fontSize:"12px"}}>
                          Sampai Dengan
                        </IonText>
                    </IonCol>
                    <IonCol size='8' style={{textAlign:"end", margin:0, padding:"2px 10px"}}>
                        <IonText mode='ios' style={{fontSize:"12px"}}>
                            {detailVoucherEnd}
                        </IonText>
                    </IonCol>
                    <IonCol size='4' style={{textAlign:"start", margin:0, padding:"2px 10px"}}>
                        <IonText mode='ios' style={{fontSize:"12px"}}>
                          Min. Berat
                        </IonText>
                    </IonCol>
                    <IonCol size='8' style={{textAlign:"end", margin:0, padding:"2px 10px"}}>
                        <IonText mode='ios' style={{fontSize:"12px"}}>
                            {detailVoucherBerat}
                        </IonText>
                    </IonCol>

                    {(detailVoucherAsal !== '' || detailVoucherTujuan !== '')?
                    <IonCol size='12' style={{textAlign:"start", margin:0, padding:"2px 10px"}}>
                        <IonText mode='ios' style={{fontSize:"12px"}}>
                          Pengiriman {(detailVoucherAsal !== '')?`dari ${detailVoucherAsal}`:''} {(detailVoucherTujuan !== '')?`ke ${detailVoucherTujuan}`:' semua tujuan'}
                        </IonText>
                    </IonCol>
                    :''}
                </IonRow>
            </IonGrid>
          </IonHeader>
          <IonContent fullscreen>
              <IonGrid style={{textAlign:"start"}}>
                  <IonRow>
                      <IonCol size='12' style={{padding:0, margin:0}}>
                          <IonImg src={detailVoucherImage} alt={detailVoucherTitle} />
                      </IonCol>
                      <IonCol size='12'>
                          <IonText mode='ios' dangerouslySetInnerHTML={{__html:detailVoucherContent}}></IonText>
                      </IonCol>
                  </IonRow>
              </IonGrid>
          </IonContent>
        </IonModal>

        <IonModal mode='ios' isOpen={isModalComplainList} animated={true} onDidDismiss={()=>{setIsModalComplainList(false)}}>
          <IonHeader mode='ios'>
            <IonToolbar mode='ios'>
              <IonButtons slot='start'>
                <IonButton mode='ios' fill='clear' color='danger' onClick={()=>{setIsModalComplainList(false)}}>
                  <IonRippleEffect></IonRippleEffect>
                  <IonIcon icon={closeCircleOutline}/>
                </IonButton>
              </IonButtons>
              <IonTitle>Daftar Tiket</IonTitle>
            </IonToolbar>
            {(isLoading === true)?
              <IonProgressBar type="indeterminate" mode='ios' color='primary'></IonProgressBar>
            :''}
            <IonGrid style={{margin:0, padding:0}}>
              <IonRow>
                <IonCol size='12' style={{padding:"5px"}}>
                  <IonSearchbar mode='ios' inputMode='search' style={{textAlign:"start"}} placeholder='Cari tracking' onIonChange={(e)=>{qTiket(String(e.detail.value))}} onIonClear={(e)=>{qTiket('')}} />
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonHeader>
          <IonContent fullscreen>
            <IonGrid>
              {(dataComplain.length === 0)?
              <IonRow>
                <IonCol size='12' style={{textAlign:"center"}}>
                  <IonText mode='ios' color='dark' style={{fontSize:"12px"}}>
                    Data komplain tidak ditemukan
                  </IonText>
                </IonCol>
              </IonRow>:""}
              {dataComplain.map((a, index) => {
                return(
                  <IonRow key={index} style={{background:"#F9F9F9", borderRadius:"10px", padding:"10px", margin:"2px 0"}} onClick={()=>{}}>
                    <IonCol size='10' style={{textAlign:"start"}}>
                      <IonText mode='ios' style={{display:"flex", flexDirection:"column", textAlign:"start"}}>
                        <span style={{fontSize:"12px"}}>{a['no_tracking']} - {a['kode']}</span>
                        <span style={{fontSize:"10px"}}>{a['created_at']}</span>
                        <span>
                          <IonBadge mode='ios' color={(a['status'] === '1')?'danger':'primary'} style={{fontSize:"10px", margin:"4px 0"}}>
                            {(a['status'] === '1')?'Investigasi':'Selesai'}
                          </IonBadge>
                        </span>
                      </IonText>
                    </IonCol>
                    <IonCol size='2'>
                      <IonButton mode='ios' color='success' fill='clear' onClick={()=>{openChatTiket(a['channel_id'], a['kode'], a['status'])}}>
                        <IonIcon icon={chatbubblesOutline} />
                      </IonButton>
                    </IonCol>
                  </IonRow>
                )
              })}
            </IonGrid>
          </IonContent>
        </IonModal>

        <IonModal mode='ios' isOpen={isModalChat} onDidDismiss={()=>{setIsModalChat(false)}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
          <IonHeader mode='ios'>
            <IonToolbar mode='ios'>
              <IonButtons slot='start'>
                <IonButton mode='ios' fill='clear' color='primary' onClick={()=>{setIsModalChat(false)}}>
                  <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}} />
                  BACK
                </IonButton>
              </IonButtons>
              <IonTitle>{isTiketComplain}</IonTitle>
            </IonToolbar>
            {(isLoading === true)?
              <IonProgressBar type="indeterminate"></IonProgressBar>
            :""}
            {(isLoadingSend === true)?
            <IonGrid style={{background:"rgba(200,200,200,0.15)", padding:0, margin:0}}>
              <IonRow>
                <IonCol size='12' style={{textAlign:"center", padding:"2px 0"}}>
                  <IonText mode='ios' style={{fontSize:"12px", color:"black"}}>
                    Mengirim pesan..
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
            :''}
          </IonHeader>
          <IonContent fullscreen>
            <IonGrid>
              {(dataChat.length > 0)?dataChat.map((a, index) => {
                return(
                  <IonRow key={index}>
                    <IonCol size='12' style={(a['dari'] === 'driver')?{textAlign:"start"}:{textAlign:"end"}}>
                      <IonText mode='ios' style={(a['dari'] === 'driver')?{display:"flex", flexDirection:'column', background:"#8491BF", padding:"5px 10px", borderRadius:"15px 15px 15px 0", margin:"0 30vw 0 0"}:{display:"flex", flexDirection:'column', background:"#1579F7", padding:"5px 10px", borderRadius:"15px 15px 0 15px", margin:"0 0 0 30vw"}}>
                        <span style={{fontSize:"13px", color:"white"}}>{a['message']}</span>            
                        <span style={{display:"flex", flexDirection:"row", fontSize:"10px", justifyContent:"end"}}>
                          {a['created_at']}
                          {(a['dari'] === 'customer')?
                            <IonIcon icon={(a['status'] === 'Belum Dibaca')?checkmarkOutline:checkmarkDoneOutline} style={(a['status'] === 'Belum Dibaca')?{color:"#BDC3C7", margin:"0 0 0 5px", fontSize:"12px"}:{color:"#0F0ADE", margin:"0 0 0 5px", fontSize:"12px"}}></IonIcon>:
                          ""}
                        </span>
                      </IonText>  
                    </IonCol>
                  </IonRow>
                )
              }):''}
            </IonGrid>
          </IonContent>
          {(isStatusComplain === '1')?
          <IonFooter mode='ios' style={{background:"white"}}>
              <IonGrid>
                <IonRow style={{padding:"5px 2px"}}>
                  <IonCol size='10' style={{padding:"3px 5px", background:"#D7D8DA", borderRadius:"50px", margin:0, border:"solid 1px #9D9FA6"}}>
                    <IonInput mode='ios' inputMode='text' placeholder='Ketik Pesan' name='pesan' style={{color:"black", fontSize:"13px", margin:0, padding:0, textAlign:"start"}} />
                  </IonCol>
                  <IonCol size='2' style={{padding:"2px 0", textAlign:"center"}} onClick={()=>{sendChat()}}>
                    <IonIcon icon={sendOutline} style={{background:"#3880FF", borderRadius:"50px", fontSize:"18px", padding:"10px"}}/>
                  </IonCol>
                </IonRow>
              </IonGrid>
          </IonFooter>:""}
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

        <IonLoading 
          mode='ios'
          isOpen={isLoading2}
          spinner='circular'
        />
        <IonToast 
          mode='ios'
          isOpen={isToast}
          message={isMessageToast}
          color={isColorToast}
          duration={isDurationToast}
          icon={(isColorToast === 'danger')?closeCircleOutline:checkmarkCircleOutline}
          onDidDismiss={()=>{setIsToast(false)}}
          position="top"
          cssClass='isToast'
        />
        <IonAlert 
          mode='ios'
          isOpen={isAlertDelete}
          onDidDismiss={()=>{setIsAlertDelete(false)}}
          message="Kamu yaking ingin menghapus alamat?"
          buttons={[
            {
              text: 'Tidak Yakin',
              role: 'cancel',
              handler(value) {
                setIsAlertDelete(false)
              },
            },
            {
              text: 'Yakin',
              role: 'confirm',
              handler(value) {
                doDeleteAlamat()
              },
            }
          ]}
        />
        <IonAlert 
          mode='ios'
          isOpen={isAlertDelete2}
          onDidDismiss={()=>{setIsAlertDelete2(false)}}
          message="Kamu yaking ingin menghapus rekening?"
          buttons={[
            {
              text: 'Tidak Yakin',
              role: 'cancel',
              handler(value) {
                setIsAlertDelete2(false)
              },
            },
            {
              text: 'Yakin',
              role: 'confirm',
              handler(value) {
                doDeleteRekening()
              },
            }
          ]}
        />

        </IonContent>
        <IonFooter style={{height:"10vh"}}></IonFooter>
    </IonPage>
  )
}

  export default Akun;

