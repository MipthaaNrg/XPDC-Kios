import { IonGrid, useIonViewWillEnter, IonInfiniteScrollContent, IonInfiniteScroll, useIonActionSheet, IonBackButton, IonButton, IonButtons, IonCard, IonChip, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonVirtualScroll, useIonAlert, IonAlert, IonSegment, IonSegmentButton, IonLoading, IonText, IonSkeletonText, RefresherEventDetail, IonRefresher, IonRefresherContent, IonToast, IonProgressBar, IonBadge, IonSearchbar, IonRippleEffect, IonModal, IonFooter, IonImg, createAnimation, IonActionSheet, IonTextarea, IonSpinner, IonRadioGroup, IonRadio, IonSelect, IonSelectOption} from '@ionic/react';
import { carOutline, carSportOutline, add, syncCircleOutline, cardOutline, arrowDownCircleOutline, closeCircleOutline, timeOutline, menuOutline, clipboardOutline, globeOutline, arrowBackOutline, chevronBackOutline, searchCircleOutline, sendOutline, paperPlaneOutline, checkmarkCircleOutline, bagCheckOutline, walletOutline, chatbubblesOutline, checkmarkOutline, checkmarkDoneOutline, closeOutline, ellipseSharp, arrowUpCircleSharp, radioButtonOnOutline, locationSharp, arrowForwardCircleSharp, alertCircleSharp, fileTrayOutline, cameraOutline, trashBinOutline, addCircleOutline } from 'ionicons/icons';
import React, { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import { InAppBrowser, InAppBrowserObject } from '@awesome-cordova-plugins/in-app-browser';
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer'
import { Capacitor } from '@capacitor/core';
import { PushNotifications, PushNotificationSchema } from '@capacitor/push-notifications'
import { Loader } from '@googlemaps/js-api-loader'
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions'
import { GoogleMap } from '@capacitor/google-maps'
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


const Orderlist: React.FC = () => {
  const [dataComplain, setDataComplain] = useState([])
  const [dataComplainOrigin, setDataComplainOrigin] = useState([])
  const [data, setData] = useState([])
  const [dataOrigin, setDataOrigin] = useState([])
  const [dataHistory, setDataHistory] = useState([])
  const [dataChat, setDataChat] = useState([])
  const [dataGallery, setDataGallery] = useState([])
  const [dataLokasi, setDataLokasi] = useState([])
  const [toast, setToast] = useState(false)
  const [toastColor, setToastColor] = useState('')
  const [toastDuration, setToastDuration] = useState(Number)
  const [toastMessage, setToastMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoading2, setIsLoading2] = useState(false)
  const [isModalDetail, setIsModalDetail] = useState(false)
  const [isModalHistory, setIsModalHistory] = useState(false)
  const [isModalDone, setIsModalDone] = useState(false)
  const [isModalCancel, setIsModalCancel] = useState(false)
  const [isModalChat, setIsModalChat] = useState(false)
  const [isModalLive, setIsModalLive] = useState(false)
  const [isModalEditLokasi, setIsModalEditLokasi] = useState(false) //Tambahin
  const [isModalLokasi, setIsModalLokasi] = useState(false)
  const [isModalAlasan, setIsModalAlasan] = useState(false)
  const [isModalMap, setIsModalMap] = useState(false)
  const [isModalSuccessReorder, setIsModalSuccessReorder] = useState(false)
  const [isAlertPay, setIsAlertPay] = useState(false)
  const [isActionDetail, setIsActionDetail] = useState(false)
  const [detailOrderId, setDetailOrderId] = useState('')
  const [detailNoTracking, setDetailNoTracking] = useState('')
  const [detailNamaPengirim, setDetailNamaPengirim] = useState('')
  const [detailNamaPenerima, setDetailNamaPenerima] = useState('')
  const [detailPhonePengirim, setDetailPhonePengirim] = useState('')
  const [detailPhonePenerima, setDetailPhonePenerima] = useState('')
  const [detailAlamatPengirim, setDetailAlamatPengirim] = useState('')
  const [detailAlamatPenerima, setDetailAlamatPenerima] = useState('')
  const [detailLokasiPengirim, setDetailLokasiPengirim] = useState('')
  const [detailLokasiPenerima, setDetailLokasiPenerima] = useState('')
  const [detailLayanan, setDetailLayanan] = useState('')
  const [detailCreatedAt, setDetailCreatedAt] = useState('')
  const [detailNamaBarang, setDetailNamaBarang] = useState('')
  const [detailHargaBarang, setDetailHargaBarang] = useState(Number)
  const [detailQtyBarang, setDetailQtyBarang] = useState(Number)
  const [detailBeratBarang, setDetailBeratBarang] = useState(Number)
  const [detailAsuransi, setDetailAsuransi] = useState('')
  const [detailPacking, setDetailPacking] = useState('')
  const [detailVoucher, setDetailVoucher] = useState(Number)
  const [detailJasaPengiriman, setDetailJasaPengiriman] = useState(Number)
  const [detailBiayaTambahan, setBiayaTambahan] = useState(Number)
  const [detailBiayaAsuransi, setDetailBiayaAsuransi] = useState(Number)
  const [detailBiayaPacking, setDetailBiayaPacking] = useState(Number)
  const [detailBiayaDiskon, setDetailBiayaDiskon] = useState(Number)
  const [detailSubTotal, setDetailSubTotal] = useState(Number)
  const [detailStatus, setDetailStatus] = useState('')
  const [detailPaymentLink, setDetailPaymentLink] = useState('')
  const [detailPaymentStatus, setDetailPaymentStatus] = useState('')
  const [detailNamaDriver, setDetailNamaDriver] = useState('')
  const [detailPolisiDriver, setDetailPolisiDriver] = useState('') 
  const [detailTruckDriver, setDetailTruckDriver] = useState('') 
  const [detailIdDriver, setDetailIdDriver] = useState('')
  const [detailIdChannel, setDetailIdChannel] = useState('')
  const [detailIsUnread, setDetailIsUnread] = useState(false) 
  const [detailWaktuMuat, setDetailWaktuMuat] = useState('')
  const [detailWaktuBongkar, setDetailWaktuBongkar] = useState('')
  const [detailTotalKoli, setDetailTotalKoli] = useState('')
  const [detailTotalBerat, setDetailTotalBerat] = useState('')
  const [detailTotalKubikasi, setDetailTotalKubikasi] = useState('')
  const [detailSuratJalanBalik, setDetailSuratJalanBalik] = useState('')
  const [detailCatatan, setDetailCatatan] = useState('')
  const [detailEditLokasi, setDetailEditLokasi] = useState('')
  const [detailLatlngAsal, setDetailLatlngAsal] = useState('')
  const [detailLatlngTujuan, setDetailLatlngTujuan] = useState('')
  const [detailMetodePembayaran, setDetailMetodePembayaran] = useState('')
  const [detailPayment70, setDetailPayment70] = useState('')
  const [detailPayment30, setDetailPayment30] = useState('')
  const [selectFilter, setSelectFilter] = useState('numAll')
  const [isSearchEmpty, setIsSearchEmpty] = useState(false)
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false)
  const [isDoneDate, setIsDoneDate] = useState('')
  const [isDoneTracking, setIsDoneTracking] = useState('')
  const [isDoneMethod, setIsDoneMethod] = useState('')
  const [isDoneAmount, setIsDoneAmount] = useState('')
  const [isMenu, setIsMenu] = useState(true)
  const [urlPay, setUrlPay] = useState('')
  const [isPay, setIsPay] = useState(false)
  const [valSerach, setValSearch] = useState('')
  const [isChosesId, setIsChosesId] = useState('')
  const [isChosesLink, setIsChosesLink] = useState('')
  const [marker, setMarker] = React.useState<google.maps.Marker>()
  const [map, setMap] = React.useState<google.maps.Map>()
  const iconMarker = "https://xpdcargo.id/PinDriver.png"
  const [isChosesFotoText, setIsChosesFotoText] = useState('')
  const [isChosesFotoBase64, setIsChosesFotoBase64] = useState('')
  const [isModalFoto, setIsModalFoto] = useState(false)
  const [editLatlngAsal, setEditLatlngAsal] = useState('')
  const [editLatlngTujuan, setEditLatlngTujuan] = useState('')
  const [editLokasiAsal, setEditLokasiAsal] = useState('')
  const [editLokasiTujuan, setEditLokasiTujuan] = useState('')
  const [editTruckId, setEditTruckId] = useState('')
  const [mapEdit, setMapEdit] = React.useState<google.maps.Map>()
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isSelectType, setIsSelectType] = useState('')
  const [isResult, setIsResult] = useState(false)
  const [isResultPrice, setIsResultPrice] = useState(Number)
  const [isResultPriceKm, setIsResultPriceKm] = useState(Number)
  const [isResultDistance, setIsResultDistance] = useState(Number)
  const [isResultDuration, setIsResultDuration] = useState('')
  const [isAlertCancel, setIsAlertCancel] = useState(false)
  const [isSelectAlasan, setIsSelectAlasan] = useState('')
  const [isSelectEdit, setIsSelectEdit] = useState('')
  const [isModalComplainList, setIsModalComplainList] = useState(false)
  const [isModalComplainChat, setIsModalComplainchat] = useState(false)
  const [isModalComplainNew, setIsModalComplainNew] = useState(false)
  const [isActionFile, setIsActionFile] = useState(false)
  const [isFileComplain, setIsFileComplain] = useState('')
  const [isTextComplain, setIsTextComplain] = useState('')
  const [isChannelComplain, setIsChannelComplain] = useState('')
  const [isReorderDate, setIsReorderDate] = useState('')
  const [isReorderTracking, setIsReorderTracking] = useState('')
  const isModalComplainNewRef = useRef<HTMLIonModalElement>(null)
  
  useIonViewWillEnter(() => {
    getData()
  })
  function getData(){
    let data = new FormData()
    data.append('user_id', String(localStorage.getItem('userid')))
    $.ajax({
      type: "POST",
      url: "https://xpdcargo.id/login/Callback/apiGetOrderV2",
      data: data,
      processData: false,
      contentType: false,
      dataType: "JSON",
      beforeSend:function(){
        setIsLoading(true)
        setIsRefresh(true)
      },
      success:function(r:any){
        setIsRefresh(false)
        setIsLoading(false)
        setDataOrigin(r.data)
        setData(r.data.slice(0,10))
      },
      error:function(err){
        setIsRefresh(false)
        setIsLoading(false)
        setToastMessage('Gagal mendapatkan data order list, periksa koneksi internet kamu')
        setToastColor('danger')
        setToastDuration(1250)
        setToast(true)
      }
    })
  }
  function refreshData(){
    $.ajax({
      type: "POST",
      url: "https://xpdcargo.id/login/Callback/apiGetOrderV2",
      data: {user_id: localStorage.getItem('userid')},
      dataType: "JSON",
      beforeSend:function(){
        setIsLoading(true)
        setData([])
        setIsRefresh(true)
      },
      success:function(r:any){
        console.log(r)
        setIsPay(false)
        setIsLoading(false)
        setIsRefresh(false)
        setDataOrigin(r.data)
        setData(r.data.slice(0,10))
      },
      error:function(err){
        console.log(err)
        setIsLoading(false)
        setToastMessage('Gagal mereload data order list, periksa koneksi internet kamu')
        setToastColor('danger')
        setToastDuration(1250)
        setToast(true)
      }
    })
  }
  function filterData(select:any){
    setSelectFilter(String(select))
    var status = (select === 'numProcess')?'Menunggu Diproses':(select === 'numOngoing')?'Dalam Pengiriman':(select === 'numSuccess')?'Diterima':'Dibatalkan'
    var filter = dataOrigin.filter((a)=>{
      if(String(select) === 'numAll'){
        return String(a['status']) === 'Menunggu Diproses' || String(a['status']) === 'Dalam Pengiriman' || String(a['status']) === 'Diterima' || String(a['status']) === 'Dibatalkan'
      }else{
        return String(a['status']) === status
      }
    })
    console.log(status)
    setData(filter.slice(0, 10))
  }
  function search(q:any){
    var status = (selectFilter === 'numProcess')?'Menunggu Diproses':(selectFilter === 'numOngoing')?'Dalam Pengiriman':(selectFilter === 'numSuccess')?'Diterima':'Dibatalkan'
    setValSearch(String(q))
    if(String(q).trim() !== ''){
      $("#ComponentMenu").hide()
      var search = dataOrigin.filter((a) => {
        if(selectFilter !== 'numAll'){
          return String(a['status']) === status && String(a['no_tracking']).toUpperCase().includes(String(q).toUpperCase()) || String(a['nama_pengirim']).toUpperCase().includes(String(q).toUpperCase()) || String(a['nama_penerima']).toUpperCase().includes(String(q).toUpperCase()) || String(a['alamat_pengirim']).toUpperCase().includes(String(q).toUpperCase()) || String(a['alamat_penerima']).toUpperCase().includes(String(q).toUpperCase()) || String(a['lokasi_pengirim']).toUpperCase().includes(String(q).toUpperCase()) || String(a['lokasi_penerima']).toUpperCase().includes(String(q).toUpperCase()) || String(a['nama_barang']).toUpperCase().includes(String(q).toUpperCase()) || String(a['biayaSemua']).toUpperCase().includes(String(q).toUpperCase()) || String(a['layanan']).toUpperCase().includes(String(q).toUpperCase())
        }else{
          return String(a['no_tracking']).toUpperCase().includes(String(q).toUpperCase()) || String(a['nama_pengirim']).toUpperCase().includes(String(q).toUpperCase()) || String(a['nama_penerima']).toUpperCase().includes(String(q).toUpperCase()) || String(a['alamat_pengirim']).toUpperCase().includes(String(q).toUpperCase()) || String(a['alamat_penerima']).toUpperCase().includes(String(q).toUpperCase()) || String(a['lokasi_pengirim']).toUpperCase().includes(String(q).toUpperCase()) || String(a['lokasi_penerima']).toUpperCase().includes(String(q).toUpperCase()) || String(a['nama_barang']).toUpperCase().includes(String(q).toUpperCase()) || String(a['biayaSemua']).toUpperCase().includes(String(q).toUpperCase()) || String(a['status']).toUpperCase().includes(String(q).toUpperCase()) || String(a['layanan']).toUpperCase().includes(String(q).toUpperCase())
        }
      })
      setData(search.slice(0,10))
      if(search.length === 0){
        setIsSearchEmpty(true)
      }else{
        setIsSearchEmpty(false)
      }
    }else{
      if(selectFilter !== 'numAll'){
        var filter = dataOrigin.filter((a) => {
          return String(a['status']) === status
        })
        setData(filter.slice(0, 10))
      }else{
        setData(dataOrigin.slice(0,10))
      }
      setIsSearchEmpty(false)
    }
    console.log(status)
  }
  function openModalDetail(order_id:any, no_tracking:any, nama_pengirim:any, phone_pengirim:any, alamat_pengirim:any, lokasi_pengirim:any, nama_penerima:any, phone_penerima:any, alamat_penerima:any, lokasi_penerima:any, nama_barang:any, harga_barang:any, layanan:any, created_at:any, asuransi:any, packing:any, diskon:any, status:any, qty_barang:any, berat_barang:any, isAsuransi:any, isPacking:any, biaya_semua:any, payment_link:any, payment_status:any, nama_driver:any, id_driver:any, id_channel:any, polisi_driver:any, truck_driver:any, isUnread:any, waktuMuat:any, waktuBongkar:any, totalKoli:any, totalBerat:any, totalKubikasi:any, surat_jalan_balik:any, catatan:any, editLokasi:any, latlngAsal:any, latlngTujuan:any, metode:any, payment70:any, payment30:any){
    setDetailOrderId(order_id)
    setDetailNoTracking(no_tracking)
    setDetailNamaPengirim(nama_pengirim)
    setDetailPhonePengirim(phone_pengirim)
    setDetailAlamatPengirim(alamat_pengirim)
    setDetailLokasiPengirim(lokasi_pengirim)
    setDetailNamaPenerima(nama_penerima)
    setDetailPhonePenerima(phone_penerima)
    setDetailAlamatPenerima(alamat_penerima)
    setDetailLokasiPenerima(lokasi_penerima)
    setDetailNamaBarang(nama_barang)
    setDetailHargaBarang(Number(harga_barang))
    setDetailLayanan(layanan)
    setDetailCreatedAt(created_at)
    setDetailAsuransi((Boolean(isAsuransi) === true)?'Ya':'Tidak')
    setDetailPacking((Boolean(isPacking) === true)?'Ya':'Tidak')
    setDetailVoucher(diskon)
    setDetailStatus(status)
    setDetailPaymentLink(payment_link)
    setDetailPaymentStatus(payment_status)
    setDetailQtyBarang(Number(qty_barang))
    setDetailBeratBarang(Number(berat_barang))
    setDetailNamaDriver(nama_driver)
    setDetailPolisiDriver(polisi_driver)
    setDetailTruckDriver(truck_driver)
    setDetailIdDriver(id_driver)
    setDetailIdChannel(id_channel)
    setDetailWaktuMuat(waktuMuat)
    setDetailWaktuBongkar(waktuBongkar)
    setDetailTotalKoli(totalKoli)
    setDetailTotalBerat(totalBerat)
    setDetailTotalKubikasi(totalKubikasi)
    setDetailSuratJalanBalik(surat_jalan_balik)
    setDetailCatatan(catatan)
    setDetailIsUnread((String(isUnread) === 'true')?true:false)
    setDetailEditLokasi(String(editLokasi))
    setDetailLatlngAsal(latlngAsal)
    setDetailLatlngTujuan(latlngTujuan)
    setDetailMetodePembayaran(metode)
    setDetailPayment70(payment70)
    setDetailPayment30(payment30)
    var convBiayaSemua:any = (String(biaya_semua) !== 'false')?Number(biaya_semua):0
    var convAsuransi:any = (String(asuransi) !== 'false')?Number(asuransi):0
    var convPacking:any = (String(packing) !== 'false')?Number(packing):0
    var convDiskon:any = (String(diskon) !== 'false')?Number(diskon):0
    var jasaPengiriman = Number(convBiayaSemua) - ((Number(convAsuransi) + Number(convPacking)) - Number(convDiskon) )
    var subTotal = Number(jasaPengiriman) + Number(convAsuransi) + Number(convPacking)
    setDetailJasaPengiriman(Number(jasaPengiriman))
    setDetailBiayaAsuransi(Number(convAsuransi))
    setDetailBiayaPacking(Number(convPacking))
    setDetailBiayaDiskon(Number(convDiskon))
    setDetailSubTotal(subTotal)
    if(layanan === 'Sewa Truck'){
      let data = new FormData()
      data.append('user_id', String(localStorage.getItem('userid')))
      data.append('order_id', order_id)
      $.ajax({
        type: "POST",
        url: "https://xpdcargo.id/login/Callback/apiGetPhotos",
        data: data,
        processData: false,
        contentType: false,
        dataType: "JSON",
        beforeSend:function(){
          setIsLoading(true)
          setIsModalDetail(true)
        },
        success:function(r:any){
          setIsLoading(false)
          setDataGallery(r.data)
        },
        error:function(err){
          console.log(err)
          setIsLoading(false)
        }
      })
    }else{
      setIsModalDetail(true)
    }
  }
  function openModalHistory(){
    $.ajax({
      type: "POST",
      url: "https://xpdcargo.id/login/Callback/privateApiTracking",
      data: {no_tracking: detailNoTracking},
      dataType: "JSON",
      beforeSend:function(){
        setIsLoading(true)
      },
      success:function(r:any){
        setIsLoading(false)
        setDataHistory(r.data)
        setIsModalHistory(true)
      },
      error:function(err){
        console.log(err)
        setIsLoading(false)
      }
    })
  }
  function newPage(link:any){
    window.open(link, '_system')
  }
  function openAlertPay(order_id:any, link:any){
    setIsChosesId(order_id)
    setIsChosesLink(link)
    setIsAlertPay(true)
  }
  function doPayment(){
    var order_id = isChosesId
    var link = isChosesLink
    if(String(link).includes('false')){
      $.ajax({
        type: "POST",
        url: "https://xpdcargo.id/login/Callback/create_payment_flip",
        data: {
          order_id: order_id,
          user_id: localStorage.getItem('userid')
        },
        dataType:"JSON",
        beforeSend:function(){
          setLoading(true)
        },
        success:function(r:any){
          setLoading(false)
          if(r.code === 200){
            setUrlPay(r.data[0].link_url)
            setIsPay(true)
            InAppBrowser.create(r.data[0].link_url, "_blank", {hideurlbar:'yes', hidenavigationbuttons:'yes', hardwareback:'yes', transitionstyle:'coververtical', toolbarcolor:'#FFFFFF', toolbar:'yes', toolbarposition:'top', closebuttoncolor:'#FF4C30'}).show()
            doCheck(order_id)
          }else{
            showToast(r.message, 'danger', 1200)
          }
        },
        error:function(err){
          console.log(err)
          setLoading(false)
        }
      })
    }else{
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setUrlPay(link)
        setIsPay(true)
        InAppBrowser.create(link, "_blank", {hideurlbar:'yes', hidenavigationbuttons:'yes', hardwareback:'yes', transitionstyle:'coververtical', toolbarcolor:'#FFFFFF', toolbar:'yes', toolbarposition:'top', closebuttoncolor:'#FF4C30'}).show()
        doCheck(order_id)
      }, 1000);
    }
  }
  function doCheck(order_id:any){
    $.ajax({
      type: "POST",
      url: "https://xpdcargo.id/login/Callback/apiCheckPayment",
      data: {order_id: order_id},
      dataType: "JSON",
      success:function(r:any){
        if(r.code === 200){
          refreshData()
          setIsDoneTracking(r.data.no_tracking)
          setIsDoneDate(r.data.created_at)
          setIsDoneMethod(r.data.payment_method)
          setIsDoneAmount(r.data.payment_amount)
          setIsModalDone(true)
          setUrlPay('')
          setIsPay(false)
          InAppBrowser.create(urlPay, "_blank", {hideurlbar:'yes', hidenavigationbuttons:'yes', hardwareback:'yes', transitionstyle:'coververtical', toolbarcolor:'#FFFFFF', toolbar:'yes', toolbarposition:'top', closebuttoncolor:'#FF4C30'}).close()
        }else{
          setTimeout(() => {
            doCheck(order_id)
          }, 5000);
        }
      },
      error:function(err){
        console.log(err)
        setTimeout(() => {
          doCheck(order_id)
        }, 5000);
      }
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
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };
  const outAnimation = (baseEl: HTMLElement) => {
      return inAnimation(baseEl).direction('reverse');
  };
  const inAnimation2 = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = createAnimation()
      .addElement(root?.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
        .addElement(root?.querySelector('.modal-wrapper')!)
        .keyframes([
            { offset: 0, opacity: '0', transform: 'scale(0.9)' },
            { offset: 1, opacity: '0.99', transform: 'scale(1)' },
        ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(200)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };
  const outAnimation2 = (baseEl: HTMLElement) => {
      return inAnimation2(baseEl).direction('reverse');
  };
  function doDownload(order_id:any, type:any){
    var endpoint = "";
    if(String(type) === 'invoice'){
      endpoint = `https://xpdcargo.id/login/login/pdfInvoice?id=${order_id}`
    }
    if(String(type) == 'receipt'){
      endpoint = `https://xpdcargo.id/login/login/pdfReceipt?id=${order_id}`
    }  
    InAppBrowser.create(endpoint, '_blank', {hideurlbar:'yes', hidenavigationbuttons:'yes', hardwareback:'yes', transitionstyle:'coververtical', toolbarcolor:'#FFFFFF', toolbar:'yes', toolbarposition:'top', closebuttoncolor:'#FF4C30', fullscreen:'yes'}).show()
  }
  const buttonSheet = () => {
    if(detailLayanan === 'Sewa Truck' ){
      var btn = 
      [
        {
          text: "Receipt",
          handler:()=>{
            doDownload(detailOrderId, 'receipt');
          }
        },
        {
          text: `Invoice ${(detailSubTotal === 0)?'(Belum Terbit)':''}`,
          handler:()=>{
            (detailSubTotal !== 0)?doDownload(detailOrderId, 'invoice'):console.log('')
          }
        },
        // {
        //   text: 'Edit Lokasi Muat',
        //   handler:()=>{
        //     if(detailEditLokasi === '1'){
        //       showToast(`Akses ditolak, karena pesanan ${detailStatus}`, 'danger', 1200)
        //     }else{
        //       if(detailStatus !== 'Diterima'){
        //         if(detailStatus !== 'Dibatalkan'){
        //           openModalEdit('muat')
        //         }else{
        //           showToast('Akses ditolak, karena pesanan kamu sudah dibatalkan', 'danger', 1200)
        //         }
        //       }else{
        //         showToast('Akses ditolak, karena pesanan kamu sudah diterima', 'danger', 1200)
        //       }
        //     }
        //   }
        // },
        // {
        //   text: 'Edit Lokasi Bongkar',
        //   handler:()=>{
        //     if(detailStatus !== 'Diterima'){
        //       if(detailStatus !== 'Dibatalkan'){
        //         openModalEdit('bongkar')
        //       }else{
        //         showToast('Akses ditolak, karena pesanan kamu sudah dibatalkan', 'danger', 1200)
        //       }
        //     }else{
        //       showToast('Akses ditolak, karena pesanan kamu sudah diterima', 'danger', 1200)
        //     }
        //   }
        // },
        {
          text: 'Komplain',
          handler:()=>{
            openModalComplain()
          }
        },
        {
          text: "Batal",
          role: 'cancel',
          handler:()=>{
            setIsActionDetail(false)
          }
        }
      ]
      return btn
    }else{
      if(detailStatus === 'Menunggu Diproses'){
        var btn = 
        [
          {
            text: "Batalkan Pesanan",
            handler:()=>{
              setIsModalCancel(true)
            }
          },
          {
            text: "Receipt",
            handler:()=>{
              doDownload(detailOrderId, 'receipt')
            }
          },
          {
            text: `Invoice ${(detailSubTotal === 0)?'(Belum Terbit)':''}`,
            handler:()=>{
              (detailSubTotal !== 0)?doDownload(detailOrderId, 'invoice'):console.log('')
            }
          },
          {
            text: 'Komplain',
            handler:()=>{
              openModalComplain()
            }
          },
          {
            text: "Batal",
            role: 'cancel',
            handler:()=>{
              setIsActionDetail(false)
            }
          }
        ]
        return btn
      }else{
        var btn = 
        [
          {
            text: "Receipt",
            handler:()=>{
              doDownload(detailOrderId, 'receipt');
            }
          },
          {
            text: `Invoice ${(detailSubTotal === 0)?'(Belum Terbit)':''}`,
            handler:()=>{
              (detailSubTotal !== 0)?doDownload(detailOrderId, 'invoice'):console.log('')
            }
          },
          {
            text: 'Komplain',
            handler:()=>{
              openModalComplain()
            }
          },
          {
            text: "Batal",
            role: 'cancel',
            handler:()=>{
              setIsActionDetail(false)
            }
          }
        ]
        return btn
      }
    }
    
  }
  function doCancel(){
    var alasan = String($("ion-textarea[name='alasanCancel']").val())
    if(String(alasan).trim() !== ''){
      $.ajax({
        type:"POST",
        url: 'https://xpdcargo.id/login/Callback/request_cancel',
        data: {
            order_id: detailOrderId,
            user_id: localStorage.getItem('userid'),
            nama: localStorage.getItem('userNama'),
            no_tracking: detailNoTracking,
            alasan: alasan
        },
        dataType:"json",
        beforeSend:function(){
          setLoading(true)
        },
        success:function(r:any){
          if(r.status === 'gagal'){
            setLoading(false)
            setIsModalCancel(false)
            setToastMessage(r.message)
            setToastColor('danger')
            setToastDuration(4500)
            setToast(true)
          }else{
            refreshData()
            setTimeout(() => {
              setIsModalDetail(false)
              setIsModalCancel(false)
              setLoading(false)
              setToastMessage('Okey kami sudah menerima pengajuan batal kamu ya, silahkan tunggu notifikasi dari kami')
              setToastColor('success')
              setToastDuration(3000)
              setToast(true)
            }, 2500);
          }
        },
        error:function(err){
          setLoading(false)
          setToastMessage('Gagal melakukan pembatalan pesanan, server sistem sedang sibuk')
          setToastColor('danger')
          setToastDuration(1000)
          setToast(true)
        }
      });
    }else{
      setToastMessage('Kamu tidak boleh membatalkan pesanan tanpa alasan, ditolak tanpa alasan itu sakit bestie')
      setToastColor('danger')
      setToastDuration(3000)
      setToast(true)
    }
  }


  const pushData = (max:any) => {
    var q = valSerach
    if(selectFilter !== 'numAll'){
      var status = (selectFilter === 'numProcess')?'Menunggu Diproses':(selectFilter === 'numOngoing')?'Dalam Pengiriman':(selectFilter === 'numSuccess')?'Diterima':'Dibatalkan'
      var filter = dataOrigin.filter((a) => {
        if(String(q).trim() !== ''){
          return String(a['status']) === status && String(a['no_tracking']).toUpperCase().includes(String(q).toUpperCase()) || String(a['nama_pengirim']).toUpperCase().includes(String(q).toUpperCase()) || String(a['nama_penerima']).toUpperCase().includes(String(q).toUpperCase()) || String(a['alamat_pengirim']).toUpperCase().includes(String(q).toUpperCase()) || String(a['alamat_penerima']).toUpperCase().includes(String(q).toUpperCase()) || String(a['lokasi_pengirim']).toUpperCase().includes(String(q).toUpperCase()) || String(a['lokasi_penerima']).toUpperCase().includes(String(q).toUpperCase()) || String(a['nama_barang']).toUpperCase().includes(String(q).toUpperCase()) || String(a['biayaSemua']).toUpperCase().includes(String(q).toUpperCase()) || String(a['layanan']).toUpperCase().includes(String(q).toUpperCase())
        }else{
          return String(a['status']) === status
        }
      })
      setData(filter.slice(0, max))
    }else{
      setData(dataOrigin.slice(0, max))
    }
  }

  const loadData = (ev: any) => {
    var before = data.length;
    setTimeout(() => {
      pushData(before+10);
      console.log('Loaded data');
      ev.target.complete();
      if (data.length === 1000) {
        setInfiniteDisabled(true);
      }
    }, 500);
  }  

  function order(type:any){
    if(localStorage.getItem('verifyPhone') != 'null'){
      if(type === 'Reguler'){
        window.open('/Reguler', '_self')
      }else{
        window.open('/Express', '_self')
      }
    }else{

    }
  }


  document.addEventListener('backbutton', function(event) {
    // event.cancelable
    event.stopImmediatePropagation()
    event.stopPropagation()
    // event.NONE
  }, false);

  function copy(text:any){
    setToastMessage(`${text} disalin`)
    setToastColor('primary')
    setToastDuration(500)
    setToast(true)

    if ('clipboard' in navigator) {
      return navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }
  function prevPO(prev_id:any, type:any){
    $.ajax({
      type: "POST",
      url: "https://xpdcargo.id/login/Callback/apiOpenPicture",
      data: {
        type: type,
        id_parent: prev_id,
        id_order: detailOrderId,
        no_tracking: detailNoTracking
      },
      dataType: "JSON",
      beforeSend:function(){
        setIsLoading(true)
      },
      success:function(r:any){
        setIsLoading(false)
        PhotoViewer.show(r.url, r.title, {
          share:(Capacitor.getPlatform() === 'android')?true:false, 
          headers: r.header,
          closeButton: true,
          copyToReference:false,
          piccasoOptions:{}
        })
      },
      error:function(err){
        setIsLoading(false)
        setToastMessage('Gagal membuka preview gambar, periksa koneksi internet kamu!')
        setToastColor('danger')
        setToastDuration(900)
        setToast(true)
        console.log(err)
      }
    })
  }
  function openChat(){
    if(detailStatus !== 'Dibatalkan' && detailStatus !== 'Diterima'){
      let data = new FormData()
      data.append('customer_id', String(localStorage.getItem('userid')))
      data.append('user_id', String(detailIdDriver))
      data.append('channel_id', String(detailIdChannel))
      $.ajax({
        type:"POST",
        url: "https://xpdcargo.id/login/Callback/openChat",
        data: data,
        processData:false,
        contentType:false,
        dataType:"JSON",
        beforeSend:function(){
          setIsLoading(true)
        },
        success:function(r:any){
          setIsLoading(false)
          setDetailIsUnread(false)
          setDataChat(r.data)
          setIsModalChat(true)
          console.log(r)
        },
        error:function(err){
          console.log(err)
          setIsLoading(false)
        }
      })
    }else{
      showToast(`Chat ditutup karena pesanan kamu sudah ${detailStatus}`, 'danger', 1500)
      $.ajax({
        type: "GET",
        url: `https://xpdcargo.id/login/Callback/apiUpdateChannel?status=close&channel_id=${detailIdChannel}`,
        dataType: "JSON"
      })
    }
  }
  function sendChat(){ //Tambahin
    let data = new FormData()
    var val = String($("ion-input[name='pesan']").val())
    if(String(val).trim() !== ''){
      data.append('pesan', val)
      data.append('user_id', String(localStorage.getItem('userid')))
      if(isModalComplainList === true){
        data.append('driver_id', '1994')
        data.append('channel_id', isChannelComplain)
      }else{
        data.append('driver_id', String(detailIdDriver))
        data.append('channel_id', String(detailIdChannel))
      }
      $.ajax({
        type:"POST",
        url: "https://xpdcargo.id/login/Callback/sendChatCustomer",
        data: data,
        processData:false,
        contentType:false,
        dataType: "JSON",
        beforeSend:function(){
          setIsLoading(true)
        },
        success:function(r:any){
          cekChat()
          setIsLoading(false)
          $("ion-input[name='pesan']").val('')
        },
        error:function(err){
          console.log(err)
          setIsLoading(false)
        }
      })      
    }
  }
  function cekChat(){ //Tambahin
    let data = new FormData()
    data.append('user_id', String(localStorage.getItem('userid')))
    if(isModalComplainList === true){
      data.append('driver_id', '1994')
      data.append('channel_id', isChannelComplain)
    }else{
      data.append('driver_id', String(detailIdDriver))
      data.append('channel_id', String(detailIdChannel))
    }
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
  PushNotifications.addListener('pushNotificationReceived', (notifications: PushNotificationSchema)=>{ //Tambahin
    if(String(notifications.title).includes('Chat') || String(notifications.title).includes('chat')){
      if(isModalChat === true){
        cekChat()
      }else{
        if(isModalDetail === true){
          setDetailIsUnread(true)
        }
      }
    }
  })
  function openModalLive(){
    if(detailStatus !== 'Menunggu Diproses'){
      if(detailStatus !== 'Diterima' && detailStatus !== 'Dibatalkan'){
        localStorage.setItem('isLive', 'true')
        setLoading(true)
        setIsModalLive(true)
        $.ajax({
          type: "GET",
          url: `https://xpdcargo.id/login/Callback/getPositionDriver?order_id=${detailOrderId}&user_id=${localStorage.getItem('userid')}`,
          dataType: "JSON",
          beforeSend:function(){
            setLoading(true)
          },
          success:function(r:any){
            showMap(r.lat, r.lng)
            setLoading(false)
          }
        })
      }else{
        showToast(`Pesanan kamu telah ${detailStatus}, live tracking ditutup`, 'danger', 1500)
      }
    }else{
      setToastMessage('Belum ada driver yang mengambil pesanan kamu')
      setToastColor('danger')
      setToastDuration(1200)
      setToast(true)
    }
  }
  function closeModalLive(){
    localStorage.setItem('isLive', 'false')
    setIsModalLive(false)
  }
  function showMap(lat:any, lng:any){
    var splitAsal = String(detailLatlngAsal).split(",")
    var splitTujuan = String(detailLatlngTujuan).split(",")
    const mapElement:any = document.getElementById('mapLive')
    const loader = new Loader({
      apiKey: "AIzaSyD5yDeWQuLOPQbOuEgCeIkooyLzZPkjKKE",
      version: 'weekly',
      libraries: ['places']
    })
    loader.load().then((res) => {
      const render = new google.maps.DirectionsRenderer()
      const service = new google.maps.DirectionsService()
      const map = new google.maps.Map(mapElement, {
        zoom: 14,
        center: {
          lat: Number(lat), 
          lng: Number(lng)
        }
      })
      setMap(map)
      const marker = new google.maps.Marker({
        map: map,
        position: {
          lat: Number(lat),
          lng: Number(lng)
        },
        title: "Posisi driver kamu sekarang",
        draggable:false,
        animation: google.maps.Animation.DROP,
        icon: iconMarker
      })
      setMarker(marker)
      render.setMap(map)
      service.route({
          origin: {
              lat: Number(splitAsal[0]),
              lng: Number(splitAsal[1]),
          },
          destination: {
              lat: Number(splitTujuan[0]),
              lng: Number(splitTujuan[1])
          },
          travelMode: google.maps.TravelMode['DRIVING'],
          avoidFerries:false,
          avoidHighways:false,
          avoidTolls:false,
          provideRouteAlternatives: false,
          optimizeWaypoints: true
      }).then((r)=>{
          render.setDirections(r)
      })
      cekStatusGPS()  
    })
  }
  function liveGPS(){
    $.ajax({
      type: "GET",
      url: `https://xpdcargo.id/login/Callback/getPositionDriver?order_id=${detailOrderId}&user_id=${localStorage.getItem('userid')}`,
      dataType: "JSON",
      success:function(r:any){
        showMap(r.lat, r.lng)
      },
      error:function(err){
        console.log(err)
        liveGPS()
      }
    })
  }
  function cekStatusGPS(){
    var status = String(localStorage.getItem('isLive'))
    if(status === 'true'){
      setTimeout(() => {
        liveGPS()  
      }, 60000);
    }
    console.log(status)
  }
  function openFoto(text:any, base64:any){
    setIsChosesFotoText(text)
    setIsChosesFotoBase64(base64)
    setIsModalFoto(true)
  }
  function doDownloadFoto(){
    // setIsLoading(true)
    // Base64ToGallery.base64ToGallery(isChosesFotoBase64, {prefix: 'myxpdc_img', mediaScanner: true}).then((res)=>{
    //   setIsLoading(false)
    //   showToast('Foto Berhasil Diunduh!', 'secondary', 1200)
    // }).catch((err) => {
    //   console.log(err)
    //   setIsLoading(false)
    //   if(Capacitor.getPlatform() === 'android'){
    //     if(cekPermission() === true){
    //       doDownloadFoto()
    //     }
    //   }else{
    //     showToast('Foto Gagal Diunduh', 'danger', 1200)
    //   }
    // })
  }
  function cekPermission(){
    var valid = false
    AndroidPermissions.checkPermission(AndroidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then((r) => {
      if(r.hasPermission === false){
        console.log('Permission tidak diijinkan')
        AndroidPermissions.requestPermission(AndroidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then((res) => {
          console.log(`Permission status: ${res.hasPermission}`)
          valid = res.hasPermission
        })
      }else{
        console.log('Permission sudah diijinkan')
        valid = true
      }
    }).catch((err)=>{
      console.log('run permission failed')
      console.log(err)
      valid = false
    })
    return valid
  }
  function showToast(message:any, color:any, duration:any){
    setToastMessage(message)
    setToastColor(color)
    setToastDuration(Number(duration))
    setToast(true)
  }
  function openModalEdit(type:any){
    setIsSelectEdit(type)
    setIsModalEditLokasi(true)
    setTimeout(() => {
      if(type === 'muat'){openMapEdit(detailLatlngAsal, type, detailLokasiPengirim)}
      if(type === 'bongkar'){openMapEdit(detailLatlngTujuan, type, detailLokasiPenerima)}
    }, 1200);
  }
  function openMapEdit(latlng:any, type:any, alamat:any){
    var center = String(latlng).split(",")
    const apiKey = "AIzaSyD5yDeWQuLOPQbOuEgCeIkooyLzZPkjKKE"
    const mapElement:any = document.getElementById('mapEdit')
    const loader = new Loader({
        apiKey: apiKey,
        version: "weekly",
        libraries: ["places"]
    });
    loader.load().then((res) => {
      const map = new google.maps.Map(mapElement, {
        zoom: 14,
        center: {lat: Number(center[0]), lng: Number(center[1])},
        disableDefaultUI: false,
        streetViewControl: false,
        zoomControl: false,
      })
      setMapEdit(map)
      map.addListener("center_changed", () => {
        setTimeout(() => {
          setIsFullScreen(true)
        }, 1000);
        console.log('onholddddd')
      })
      map.addListener("idle", () => {
        setTimeout(() => {
          setIsFullScreen(false)
        }, 1000);
        console.log('onlessss')
      })
      
      var marker1 = new google.maps.Marker({
        map: map,
        position: {
          lat: Number(center[0]),
          lng: Number(center[1])
        },
        draggable: false,
        animation: google.maps.Animation.DROP,
      })
      console.log(`Latlng Center: ${latlng}, type: ${type}`)
      if(type === 'muat' && latlng !== detailLatlngAsal){
        //do calculate muat baru dengan bongkar lama
        doCalculate(latlng, alamat)
      }
      if(type === 'bongkar' && latlng !== detailLatlngTujuan){
        //do calculate bogkar baru ditambah bongkar lama
        doCalculate(latlng, alamat)
      }
    })
  }
  function openModalSearch(type:any){
    setIsSelectEdit(type)
    setIsModalLokasi(true)
  }
  function doChangeInput(type:any){
    setIsSelectEdit(type)
    console.log(type)
  }
  function doQLokasi(q:any){
    setIsLoading(true)
    if(String(q).length > 0 && isModalLokasi === true){
      if(isSelectEdit === 'muat'){
        setEditLokasiAsal(q)
      }else{
        setEditLokasiTujuan(q)
      }
      setTimeout(() => {
        const arrayLokasi:any = []
        const apiKey = "AIzaSyD5yDeWQuLOPQbOuEgCeIkooyLzZPkjKKE"
        const loader = new Loader({
          apiKey: apiKey,
          version: "weekly",
          libraries: ["places"]
        });
        loader.load().then((res) => {
          var auto = new google.maps.places.AutocompleteService()
          auto.getPlacePredictions({
            bounds: {
              north: 1.2342473011337842,
              south: -11.418303470387736,
              west: 96.48622447435316,
              east: 116.07219237805083
            },
            input: String(q),
            language: 'id',
            region: 'id',
            componentRestrictions: {country: 'id'}
          }, function(r, status){
            // console.log(r)
            arrayLokasi.push(r)
            console.log(arrayLokasi)
            setDataLokasi(arrayLokasi[0])
            setIsLoading(false)
          })
        })
      }, 1300);
    }else{
        setIsLoading(false)
    }
  }
  function onSelectLokasi(place_id:any){
    let data = new FormData()
    data.append('place_id', String(place_id))
    $.ajax({
      type: "POST",
      url: `https://xpdcargo.id/login/Callback/apiMapsGetDetail`,
      data: data,
      processData: false,
      contentType: false,
      dataType: "JSON",
      beforeSend:function(){
        setIsLoading(true)
      },
      success:function(r:any){
        console.log(r)
        console.log(isSelectType)
        setIsLoading(false)
        if(isSelectEdit === 'muat'){
          setEditLokasiAsal(String(r.alamat))
          setEditLatlngAsal(`${r.lat},${r.lng}`)
        }
        if(isSelectEdit === 'bongkar'){
          setEditLokasiTujuan(String(r.alamat))
          setEditLatlngTujuan(`${r.lat},${r.lng}`)
        }
        openMapEdit(`${r.lat},${r.lng}`, isSelectEdit, String(r.alamat))
        setIsModalLokasi(false)
      },
      error:function(err){
        console.log(err)
        setIsLoading(false)
      }
    })
    
  }

  function doCalculate(latlng:any, alamat:any){
    let data = new FormData()
    var endpoint = ""
    if(isSelectEdit === 'muat'){
      endpoint = "https://xpdcargo.id/login/Callback/apiCalculateMuat"
    }
    if(isSelectEdit === 'bongkar'){
      endpoint = "https://xpdcargo.id/login/Callback/apiCalculateBongkar"
    }
    data.append('order_id', detailOrderId)
    data.append('latlng', String(latlng))
    data.append('alamat', String(alamat))
    $.ajax({
      type: "POST",
      url: endpoint,
      data: data,
      processData: false,
      contentType: false,
      dataType:"JSON",
      beforeSend:function(){
        setIsLoading(true)
        setIsResult(false)
      },
      success:function(r:any){
        setIsLoading(false)
        if(r.code === 200){
          setIsResultPrice(Number(r.data.payment_100))
          setIsResultDistance(Number(r.data.distance))
          setIsResult(true)
        }else{
          showToast(r.message, 'danger', 1200)
        }
      },
      error:function(err){
        setIsLoading(false)
        console.log(err)
      }
    })
  }
  function closeModalEdit(){
    setIsResult(false)
    setIsModalEditLokasi(false)
  }
  function doUpdateLokasiMuat(){
    let data = new FormData()
    data.append('order_id', detailOrderId)
    data.append('latlng', editLatlngAsal)
    data.append('alamat', editLokasiAsal)
    data.append('user_id', String(localStorage.getItem('userid')))
    $.ajax({
      type:"POST",
      url:"https://xpdcargo.id/login/Callback/apiUpdateLokasiMuat",
      data:data,
      processData:false,
      contentType:false,
      dataType:"JSON",
      beforeSend:function(){
        setIsLoading2(true)
      },
      success:function(r:any){
        setIsLoading2(false)
        if(r.code === 200){
          window.open('/main', '_self')
        }else{
          showToast(r.message, 'danger', 1500)
        }
      },
      error:function(err){
        console.log(err)
        setIsLoading2(false)
        showToast('Gagal mengupdate lokasi muat, periksa koneksi internet kamu', 'danger', 1200)
      }
    })
  }
  function doUpdateLokasiBongkar(){
    let data = new FormData()
    data.append('order_id', detailOrderId)
    data.append('latlng', editLatlngTujuan)
    data.append('alamat', editLokasiTujuan)
    data.append('user_id', String(localStorage.getItem('userid')))
    $.ajax({
      type:"POST",
      url:"https://xpdcargo.id/login/Callback/apiUpdateLokasiBongkar",
      data:data,
      processData:false,
      contentType:false,
      dataType:"JSON",
      beforeSend:function(){
        setIsLoading2(true)
      },
      success:function(r:any){
        setIsLoading2(false)
        if(r.code === 200){
          window.open('/main', '_self')
        }else{
          showToast(r.message, 'danger', 1500)
        }
      },
      error:function(err){
        console.log(err)
        setIsLoading2(false)
        showToast('Gagal mengupdate lokasi muat, periksa koneksi internet kamu', 'danger', 1200)
      }
    })
  }
  function doUpdateLokasi(){
    if(isSelectEdit === 'muat'){
      doUpdateLokasiMuat()
    }
    if(isSelectEdit === 'bongkar'){
      doUpdateLokasiBongkar()
    }
    // let data = new FormData()
    // data.append('order_id', String(detailOrderId))
    // data.append('user_id', String(localStorage.getItem('userid')))
    // data.append('latlngAsal', String(editLatlngAsal))
    // data.append('latlngTujuan', String(editLatlngTujuan))
    // data.append('alamatAsal', String(editLokasiAsal))
    // data.append('alamatTujuan', String(editLokasiTujuan))
    // data.append('distance', String(isResultDistance))
    // data.append('price', String(isResultPrice))
    // $.ajax({
    //   type: "POST",
    //   url: "https://xpdcargo.id/login/Callback/apiUpdateLokasiSewaTruck",
    //   data: data,
    //   processData: false,
    //   contentType: false,
    //   dataType: "JSON",
    //   beforeSend:function(){
    //     setIsLoading(true)
    //   },
    //   success:function(r:any){
    //     setIsLoading(false)
    //     if(r.code === 200){
    //       window.open('/index', '_self')
    //     }else{
    //       showToast(r.message, 'danger', 1200)
    //     }
    //   },
    //   error:function(err){
    //     console.log(err)
    //     setIsLoading(false)
    //   }
    // })
  }
  function openModalAlasan(){
    let data  = new FormData()
    data.append('order_id', String(detailOrderId))
    $.ajax({
      type: "POST",
      url: "https://xpdcargo.id/login/Callback/apiCekValidasiCancel",
      data:data,
      processData:false,
      contentType:false,
      dataType: "JSON",
      beforeSend:function(){
        setIsLoading(true)
      },
      success:function(r:any){
        setIsLoading(false)
        if(r.code === 200){
          setIsModalAlasan(true)
        }else{
          showToast(r.message, 'danger', 1200)
        }
      },
      error:function(err){
        console.log(err)
        setIsLoading(false)
      }
    })
  }
  function doCancelSewaTruck(){
    var alasan = $("ion-radio[name='selectAlasan']").val()
    let data = new FormData()
    data.append('user_id', String(localStorage.getItem('userid')))
    data.append('order_id', String(detailOrderId))
    data.append('alasan', String(alasan))
    $.ajax({
      type: "POST",
      url: "https://xpdcargo.id/login/Callback/apiCancelSewaTruck",
      data: data,
      processData: false,
      contentType: false,
      dataType: "JSON",
      beforeSend:function(){
        setIsLoading(true)
      },
      success:function(r:any){
        setIsLoading(false) 
        if(r.code === 200){
          
        }else{
          showToast(r.message, 'danger', 1200)
        }
      },
      error:function(err){
        console.log(err)
        setIsLoading(false)
      }
    })
  }

  function openMapOverview(){
    setIsModalMap(true)
    setIsLoading2(true)
    setTimeout(() => {
      setIsLoading2(false)
      var splitAsal = String(detailLatlngAsal).split(",")
      var splitTujuan = String(detailLatlngTujuan).split(",")
      const mapElement:any = document.getElementById('mapOverview')
      const loader = new Loader({
        apiKey: "AIzaSyD5yDeWQuLOPQbOuEgCeIkooyLzZPkjKKE",
        version: 'weekly',
        libraries: ['places']
      })
      loader.load().then((res) => {
        const render = new google.maps.DirectionsRenderer()
        const service = new google.maps.DirectionsService()
        const map = new google.maps.Map(mapElement, {
          zoom: 14,
          center: {
            lat: Number(splitAsal[0]), 
            lng: Number(splitAsal[1])
          },
          zoomControl: false,
          scaleControl: false,
          rotateControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
        })
        render.setMap(map)
        service.route({
            origin: {
                lat: Number(splitAsal[0]),
                lng: Number(splitAsal[1]),
            },
            destination: {
                lat: Number(splitTujuan[0]),
                lng: Number(splitTujuan[1])
            },
            travelMode: google.maps.TravelMode['DRIVING'],
            avoidFerries:false,
            avoidHighways:false,
            avoidTolls:false,
            provideRouteAlternatives: false,
            optimizeWaypoints: true
        }).then((r)=>{
            render.setDirections(r)
        })
      })
    }, 1200);
  }
  function closeModalComplainNew(){
    setIsFileComplain('')
    setIsTextComplain('')
    $("input[name='fileComplain']").val('')
    isModalComplainNewRef.current?.setCurrentBreakpoint(0)
    setIsModalComplainNew(false)
  }
  function openCamera(){
    Camera.getPhoto({quality:95, allowEditing:false, resultType: CameraResultType.Base64, saveToGallery: false, source: CameraSource.Camera, width: 500, height: 500}).then((image) => {
      setIsFileComplain(`data:image/jpeg;base64,${image.base64String}`)
    }).catch((err) => {
      showToast('Gagal membuka kamera', 'medium', 1200)
    })
  }
  function openFile(){
    $("#fileComplain").click()
  }
  function pilihFile(){
    setIsLoading2(true)
    var file = $("input[name='fileComplain']").prop('files')
    if(String(file[0].type) === 'image/png' || String(file[0].type) === 'image/jpeg'){
      setIsLoading2(false)
      getBase64(file[0]).then((res)=>{
        console.log(res)
        setIsFileComplain(String(res))
      })
    }else{
      setIsLoading2(false)
      showToast('File harus berformat JPEG/PNG', 'danger', 1200)
    }
  }
  function getBase64(file:File) {
    return new Promise(resolve => {
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // console.log(reader.result);
        baseURL = String(reader.result)
        resolve(baseURL);
      };
    });
  }
  function openModalComplain(){
    let data = new FormData()
    data.append('user_id', String(localStorage.getItem('userid')))
    data.append('order_id', detailOrderId)
    data.append('no_tracking', detailNoTracking)
    $.ajax({
      type: "POST",
      url: "https://xpdcargo.id/login/Callback/apiCekComplain",
      data: data,
      processData: false,
      contentType: false,
      dataType: "JSON",
      beforeSend:function(){
        setIsLoading2(true)
      },
      success:function(r:any){
        setIsLoading2(false)
        if(r.code === 200){
          if(r.type === 'Baru'){
            setIsModalComplainNew(true)
          }
          if(r.type === 'Lama'){
            getDataComplain()
          }
        }else{
          showToast('Gagal mendapatkan data complain', 'danger', 1200)
        }
      },
      error:function(err){
        setIsLoading2(false)
        showToast('Periksa koneksi internet kamu dan coba kembali', 'danger', 1200)
      }
    })
  }
  function sendComplain(){
    let data = new FormData()
    data.append('order_id', detailOrderId)
    data.append('user_id', String(localStorage.getItem('userid')))
    data.append('text', isTextComplain)
    data.append('base64', isFileComplain)
    
    if(dataComplain.length <= 2){
      $.ajax({
        type: "POST",
        url: "https://xpdcargo.id/login/Callback/apiAddComplain",
        data: data,
        processData: false,
        contentType: false,
        dataType: "JSON",
        beforeSend:function(){
          setIsLoading2(true)
        },
        success:function(r:any){
          setIsLoading2(false)
          if(r.code === 200){
            if(isModalComplainList === true){
              getDataComplain()
              closeModalComplainNew()
            }else{
              closeModalComplainNew()
            }
          }
          if(r.code === 400){
            showToast('Gagal mengirim data komplain', 'danger', 1200)
          }
        },
        error:function(err){
          setIsLoading2(false)
          showToast('Periksa koneksi internet kamu', 'danger', 1200)
        }
      })
    }else{
      showToast('Limit tiket kamu sudah habis', 'danger', 1200)
    }
    
  }
  function getDataComplain(){
    let data = new FormData()
    data.append('user_id', String(localStorage.getItem('userid')))
    data.append('order_id', detailOrderId)
    data.append('no_tracking', detailNoTracking)
    $.ajax({
      type: "POST",
      url: "https://xpdcargo.id/login/Callback/apiGetDataComplain",
      data: data,
      processData: false,
      contentType: false,
      dataType: "JSON",
      beforeSend:function(){
        setIsLoading(true)
      },
      success:function(r:any){
        setIsLoading(false)
        if(r.code === 200){
          setDataComplain(r.data)
          setIsModalComplainList(true)
        }
        if(r.code === 400){
          showToast('Gagal mendapatkan data complain', 'danger', 1200)
        }
      },
      error:function(err){
        setIsLoading(false)
        showToast('Periksa koneksi internet kamu', 'danger', 1200)
      }
    })
  }
  function openChatTiket(channel_id:any, status:any){
    setIsChannelComplain(channel_id)
    let data = new FormData()
    data.append('customer_id', String(localStorage.getItem('userid')))
    data.append('user_id', '1994')
    data.append('channel_id', String(channel_id))
    if(status === '1'){
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
          setDetailIsUnread(false)
          setDataChat(r.data)
          setIsModalChat(true)
          console.log(r)
        },
        error:function(err){
          console.log(err)
          setIsLoading(false)
        }
      })
    }else{
      showToast('Tiket ditutup, kasus telah selesai', 'medium', 1200)
    }
  }

  function doOrderAgain(){
    let data = new FormData()
    data.append('order_id', detailOrderId)
    data.append('user_id', String(localStorage.getItem('userid')))
    data.append('no_tracking', detailNoTracking)
    $.ajax({
      type: "POST",
      url: "https://xpdcargo.id/login/Callback/apiOrderAgain",
      data: data,
      processData: false,
      contentType: false,
      dataType: "JSON",
      beforeSend:function(){
        setIsLoading2(true)
      },
      success:function(r:any){
        setIsLoading2(false)
        if(r.code === 200){
          setIsReorderDate(r.date)
          setIsReorderTracking(r.tracking)
          setIsModalSuccessReorder(true)
        }else{
          showToast('Order ulang gagal, server sedang down', 'medium', 1200)
        }
      },
      error:function(err){
        console.log(err)
        setIsLoading2(false)
        showToast('Periksa koneksi internet kamu, dan coba kembali', 'danger', 1200)
      }
    })
  }
  function closeModalSuccessReorder(){
    window.open('/main', '_self')
  }
  

  return (
    <IonPage className='anim-slide-right anim-linear'>
      <IonHeader mode='ios'>
        <IonToolbar mode='ios'>
          <IonTitle style={{color:"#0000A0"}}>ORDER LIST</IonTitle>
          <IonButtons slot='end'>
            <IonButton mode='ios' fill='clear' color='primary' onClick={()=>{refreshData()}}>
              <IonRippleEffect></IonRippleEffect>
              <IonIcon icon={syncCircleOutline} />
            </IonButton>
          </IonButtons>
          {(isLoading === true)?
            <IonProgressBar type="indeterminate" mode='ios' color='primary'></IonProgressBar>
          :''}
        </IonToolbar>
        <IonGrid style={{background:"white"}}>
          {/* <IonRow>
            <IonCol size='12'>
              <IonButton mode='ios' expand='block' color='danger' onClick={()=>{(isPay === true)?setIsModalDone(false):setIsModalDone(true)}} fill='outline' size='small'>
                {(isPay === true)?'TurnOff':'TurnOn'} Modal Done
              </IonButton>
            </IonCol>
          </IonRow> */}
          <IonRow>
            <IonCol size='12' style={{padding:"0 10px", margin:0}}>
              <IonSegment scrollable={true} value={selectFilter} mode='ios' style={{fontSize:"12px", color:"black"}} onIonChange={(e)=>{filterData(String(e.detail.value))}}>
                <IonSegmentButton value="numAll" mode='ios'>
                  <IonText mode='ios'>
                    All
                  </IonText>
                </IonSegmentButton>
                <IonSegmentButton value="numProcess" mode='ios'>
                  <IonText mode='ios'>
                    Booking
                  </IonText>
                </IonSegmentButton>
                <IonSegmentButton value="numOngoing" mode='ios'>
                  <IonText mode='ios'>
                    Ongoing
                  </IonText>
                </IonSegmentButton>
                <IonSegmentButton value="numSuccess" mode='ios'>
                  <IonText mode='ios'>
                    Delivery
                  </IonText>
                </IonSegmentButton>
                <IonSegmentButton value="numCancel" mode='ios'>
                  <IonText mode='ios'>
                    Cancel
                  </IonText>
                </IonSegmentButton>
              </IonSegment>
            </IonCol>
            <IonCol size='12' style={{padding:0, margin:0}}>
              <IonSearchbar mode='ios' inputMode='search' placeholder='Cari Data Order' onIonChange={(e)=>{search(String(e.detail.value))}} onIonClear={(e)=>{search('')}} style={{margin:0}} id='qSearch'/>
            </IonCol>
          </IonRow>      
        </IonGrid>
      </IonHeader>

      <IonContent fullscreen>
      <IonGrid>
        {data.map((a, index) => {
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
              <IonCol size='12' style={{textAlign:"start"}} onClick={()=>{openModalDetail(a['id'], a['no_tracking'], a['nama_pengirim'], a['no_telepon_pengirim'], a['alamat_pengirim'], a['lokasi_pengirim'], a['nama_penerima'], a['no_telepon_penerima'], a['alamat_penerima'], a['lokasi_penerima'], a['nama_barang'], a['harga_barang'], a['layanan'], a['created_at'], a['biayaAsuransi'], a['biayaPacking'], a['biayaDiskon'], a['status'], a['jumlah_barang'], a['berat_barang'], a['asuransi'], a['packing'], a['biayaSemua'], a['payment_link'], a['payment_status'], a['nama_driver'], a['id_driver'], a['id_channel'], a['polisi_driver'], a['truck_driver'], a['is_unread'], a['waktuMuat'], a['waktuBongkar'], a['totalKoli'], a['totalBerat'], a['totalKubikasi'], a['surat_jalan_balik'], a['catatan'], a['editLokasi'], a['latlngAsal'], a['latlngTujuan'], a['metodePembayaran'], a['payment70'], a['payment30'])}}>
                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                  <span style={{fontSize:"10px"}}>ASAL</span>
                  <span style={{fontSize:"12px", fontWeight:"bold"}}>{String(a['nama_pengirim']).toUpperCase()}</span>
                  <span style={{fontSize:"12px"}}>{a['no_telepon_pengirim']}</span>
                  <span style={{fontSize:"12px"}}>{a['lokasi_pengirim']}</span>
                </IonText>
              </IonCol>
              <IonCol size='12' style={{textAlign:"start"}} onClick={()=>{openModalDetail(a['id'], a['no_tracking'], a['nama_pengirim'], a['no_telepon_pengirim'], a['alamat_pengirim'], a['lokasi_pengirim'], a['nama_penerima'], a['no_telepon_penerima'], a['alamat_penerima'], a['lokasi_penerima'], a['nama_barang'], a['harga_barang'], a['layanan'], a['created_at'], a['biayaAsuransi'], a['biayaPacking'], a['biayaDiskon'], a['status'], a['jumlah_barang'], a['berat_barang'], a['asuransi'], a['packing'], a['biayaSemua'], a['payment_link'], a['payment_status'], a['nama_driver'], a['id_driver'], a['id_channel'], a['polisi_driver'], a['truck_driver'], a['is_unread'], a['waktuMuat'], a['waktuBongkar'], a['totalKoli'], a['totalBerat'], a['totalKubikasi'], a['surat_jalan_balik'], a['catatan'], a['editLokasi'], a['latlngAsal'], a['latlngTujuan'], a['metodePembayaran'], a['payment70'], a['payment30'])}}>
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
        })}
        
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
      
      <IonModal mode='ios' isOpen={isModalDetail} onDidDismiss={()=>{setIsModalDetail(false)}} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
          <IonHeader mode='ios'>
            <IonToolbar mode='ios'>
              <IonButtons slot='start'>
                <IonButton mode='ios' fill='clear' color='danger' onClick={()=>{setIsModalDetail(false)}}>
                  <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                  BACK
                </IonButton>
              </IonButtons>
              <IonTitle>
                DETAIL'S
              </IonTitle>

              {(isLoading === true)?
                <IonProgressBar type="indeterminate" mode='ios' color='primary'></IonProgressBar>
              :''}
            </IonToolbar>
            <IonGrid style={{background:"rgb(108,122,137)"}}>
              <IonRow>
                <IonCol size='6' style={{textAlign:"start"}}>
                  <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                    <span style={{fontSize:"16px", color:"#E8ECF1", fontWeight:"bold"}}>{detailNoTracking.toUpperCase()}</span>
                    <span style={{fontSize:"12px", color:"#E8ECF1"}}>{detailCreatedAt}</span>
                  </IonText>
                </IonCol>
                <IonCol size='6' style={{textAlign:"end"}}>
                  <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                    <span style={{fontSize:"16px", color:"#E8ECF1"}}>{detailLayanan.toUpperCase()}</span>
                    <span style={{fontSize:"12px", color:"#E8ECF1"}}>{detailStatus}</span>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonHeader>
          <IonContent fullscreen>
            <IonGrid style={{color:"black", padding:"15px"}}>
              <IonRow style={{borderRadius:"7px", border:"solid 1px #0000A0", padding:"5px", margin:"0 0 10px 0"}} onClick={()=>{(detailLayanan === 'Sewa Truck')?openMapOverview():console.log('map tidak tersedia')}}>
                <IonCol size='12' style={{textAlign:"start", background:"rgba(200,200,200,0.65)", borderRadius:"5px", padding:"5px"}}>
                  <IonText mode='ios' style={{fontSize:"14px"}}>
                    Informasi Kontak
                  </IonText>
                </IonCol>
                <IonCol size='12' style={{textAlign:"start"}}>
                  <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}> 
                    <span style={{fontSize:"10px", color:"gray", margin:"1px 0"}}>Pengirim</span>
                    <span style={{fontSize:"12px", fontWeight:"bold", margin:"1px 0"}}>{detailNamaPengirim.toUpperCase()}</span>
                    <span style={{fontSize:"12px", margin:"1px 0"}}>{detailPhonePengirim}</span>
                    <span style={{fontSize:"12px", margin:"1px 0"}}>{detailAlamatPengirim}</span>
                    {(detailLayanan !== 'Sewa Truck')?
                      <span style={{fontSize:"12px", margin:"1px 0"}}>{detailLokasiPengirim}</span>
                    :""}
                  </IonText>
                </IonCol>
                <IonCol size='12' style={{textAlign:"start"}}>
                  <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                    <span style={{fontSize:"10px", color:"gray", margin:"1px 0"}}>Penerima</span>
                    <span style={{fontSize:"12px", fontWeight:"bold", margin:"1px 0"}}>{detailNamaPenerima.toUpperCase()}</span>
                    <span style={{fontSize:"12px", margin:"1px 0"}}>{detailPhonePenerima}</span>
                    <span style={{fontSize:"12px", margin:"1px 0"}}>{detailAlamatPenerima}</span>
                    {(detailLayanan !== 'Sewa Truck')?
                      <span style={{fontSize:"12px", margin:"1px 0"}}>{detailLokasiPenerima}</span>
                    :""}
                  </IonText>
                </IonCol>
              </IonRow>

              {(detailLayanan !== 'Sewa Truck')?
              <IonRow style={{borderRadius:"7px", border:"solid 1px #0000A0", padding:"5px", margin:"0 0 10px 0"}}>
                <IonCol size='12' style={{textAlign:"start", background:"rgba(200,200,200,0.65)", borderRadius:"5px", padding:"5px"}}>
                  <IonText mode='ios' style={{fontSize:"14px"}}>
                    Informasi Barang
                  </IonText>
                </IonCol>
                <IonCol size='3' style={{textAlign:"start", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px"}}>
                    Nama
                  </IonText>
                </IonCol>
                <IonCol size='9' style={{textAlign:"end", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px", color:"black"}}>
                    {(String(detailNamaBarang).length > 0)?detailNamaBarang:"(Tidak ada nama barang)"}
                  </IonText>
                </IonCol>
                <IonCol size='3' style={{textAlign:"start", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px"}}>
                    Harga
                  </IonText>
                </IonCol>
                <IonCol size='9' style={{textAlign:"end", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px", color:"black"}}>
                    Rp {detailHargaBarang.toLocaleString(undefined, {maximumFractionDigits:2})}
                  </IonText>
                </IonCol>
                <IonCol size='3' style={{textAlign:"start", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px"}}>
                    Jumlah
                  </IonText>
                </IonCol>
                <IonCol size='9' style={{textAlign:"end", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px", color:"black"}}>
                    {detailQtyBarang.toLocaleString(undefined, {maximumFractionDigits:2})}pcs
                  </IonText>
                </IonCol>
                <IonCol size='3' style={{textAlign:"start", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px"}}>
                    Berat
                  </IonText>
                </IonCol>
                <IonCol size='9' style={{textAlign:"end", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px", color:"black"}}>
                    {detailBeratBarang.toLocaleString(undefined, {maximumFractionDigits:2})}KG
                  </IonText>
                </IonCol>
                <IonCol size='3' style={{textAlign:"start", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px"}}>
                    Asuransi
                  </IonText>
                </IonCol>
                <IonCol size='9' style={{textAlign:"end", padding:"0 5px", margin:0}}>
                  <IonBadge mode='ios' color={(detailAsuransi === 'Tidak')?'danger':'success'} style={{fontSize:"12px"}}>
                    {detailAsuransi}
                  </IonBadge>
                </IonCol>
                <IonCol size='3' style={{textAlign:"start", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px"}}>
                    Packing
                  </IonText>
                </IonCol>
                <IonCol size='9' style={{textAlign:"end", padding:"0 5px", margin:0}}>
                  <IonBadge mode='ios' color={(detailPacking === 'Tidak')?'danger':'success'} style={{fontSize:"12px"}}>
                    {detailPacking}
                  </IonBadge>
                </IonCol>
              </IonRow>
              :""}

              {(detailLayanan === 'Sewa Truck')?
              <IonRow style={{borderRadius:"7px", border:"solid 1px #0000A0", padding:"5px", margin:"0 0 10px 0"}}>
                <IonCol size='12' style={{textAlign:"start", background:"rgba(200,200,200,0.65)", borderRadius:"5px", padding:"5px"}}>
                  <IonText mode='ios' style={{fontSize:"14px"}}>
                    Informasi Pesanan
                  </IonText>
                </IonCol>
                <IonCol size='5' style={{textAlign:"start", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px"}}>
                    Waktu Muat
                  </IonText>
                </IonCol>
                <IonCol size='7' style={{textAlign:"end", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px"}}>
                  {(detailWaktuMuat !== '')?detailWaktuMuat:'--/--/---- --:--'}
                  </IonText>
                </IonCol>
                <IonCol size='5' style={{textAlign:"start", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px"}}>
                    Waktu Bongkar
                  </IonText>
                </IonCol>
                <IonCol size='7' style={{textAlign:"end", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px"}}>
                    {(detailWaktuBongkar !== '')?detailWaktuBongkar:'--/--/---- --:--'}
                  </IonText>
                </IonCol>
                <IonCol size='3' style={{textAlign:"start", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px"}}>
                    Asuransi
                  </IonText>
                </IonCol>
                <IonCol size='9' style={{textAlign:"end", padding:"2px 5px 0 5px", margin:0}}>
                  <IonBadge mode='ios' color={(detailAsuransi === 'Tidak')?'danger':'success'} style={{fontSize:"12px"}}>
                    {detailAsuransi}
                  </IonBadge>
                </IonCol>
                {(detailMetodePembayaran != '')?
                <IonCol size='12' style={{textAlign:"start", padding:"5px 5px 0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px", display:"flex", flexDirection:"column"}}>
                    <span style={{fontSize:"10px", color:"gray"}}>Metode Pembayaran</span>
                    <span style={{fontSize:"12px"}}>{detailMetodePembayaran}</span>
                  </IonText>
                </IonCol>:""}
                {(detailSuratJalanBalik !== '')?
                <IonCol size='12' style={{textAlign:"start", padding:"5px 5px 0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px", display:"flex", flexDirection:"column"}}>
                    <span style={{fontSize:"10px", color:"gray"}}>Alamat pengiriman surat jalan</span>
                    <span style={{fontSize:"12px"}}>{(detailSuratJalanBalik === 'asal')?detailAlamatPengirim:detailAlamatPenerima}</span>
                  </IonText>
                </IonCol>
                :''}
                {(detailCatatan !== '')?
                <IonCol size='12' style={{textAlign:"start", padding:"5px 5px 0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px", display:"flex", flexDirection:"column"}}>
                    <span style={{fontSize:"10px", color:"gray"}}>Catatan pengiriman</span>
                    <span style={{fontSize:"12px"}}>{detailCatatan}</span>
                  </IonText>
                </IonCol>
                :''}
              </IonRow> 
              :''}

              {(detailNamaDriver === '' && detailLayanan === 'Sewa Truck' && detailStatus !== 'Dibatalkan' && detailStatus !== 'Diterima')?
              <IonRow style={{padding:0, margin:0}}>
                <IonCol size='12' style={{padding:"0 0 5px 0"}}>
                  <IonButton mode='ios' color='secondary' expand='block' fill="outline">
                    Sedang Mencari Driver
                  </IonButton>
                </IonCol>
              </IonRow> 
              :''}

              {(detailNamaDriver !== '' && detailLayanan === 'Sewa Truck')?
              <IonRow style={{borderRadius:"7px", border:"solid 1px #0000A0", padding:"5px", margin:"0 0 10px 0"}}>
                <IonCol size='12' style={{textAlign:"start", background:"rgba(200,200,200,0.65)", borderRadius:"5px", padding:"5px"}}>
                  <IonText mode='ios' style={{fontSize:"14px"}}>
                    Informasi Driver
                  </IonText>
                </IonCol>
                <IonCol size='6' style={{textAlign:"start", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px"}}>
                    Nama Driver
                  </IonText>
                </IonCol>
                <IonCol size='6' style={{textAlign:"end", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px", color:"black"}}>
                    {detailNamaDriver}
                  </IonText>
                </IonCol>
                <IonCol size='6' style={{textAlign:"start", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px"}}>
                    Kendaraan
                  </IonText>
                </IonCol>
                <IonCol size='6' style={{textAlign:"end", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px", color:"black"}}>
                    {detailTruckDriver}
                  </IonText>
                </IonCol>
                <IonCol size='6' style={{textAlign:"start", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px"}}>
                    No. Polisi
                  </IonText>
                </IonCol>
                <IonCol size='6' style={{textAlign:"end", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px", color:"black"}}>
                    {detailPolisiDriver}
                  </IonText>
                </IonCol>
                <IonCol size='12' style={{textAlign:"start"}}>
                  <div style={{position:"relative", width:"40%"}}>
                    {(detailIsUnread === true)?
                      <IonIcon icon={ellipseSharp} color='danger' style={{position:"absolute", top:-5, right:-5, zIndex:"999"}} />
                    :''}
                    <IonButton mode='ios' fill='outline' color='primary' size='small' expand='block' onClick={()=>{openChat()}}>
                      <IonRippleEffect></IonRippleEffect>
                      <IonIcon icon={chatbubblesOutline} slot='start' style={{margin:"2px 5px 0 0", padding:0}} />
                      Chat Driver
                    </IonButton>
                  </div>
                </IonCol>
              </IonRow>
              :''}

              {(detailLayanan === 'Sewa Truck' && dataGallery.length > 0)?
              <IonRow style={{borderRadius:"7px", border:"solid 1px #0000A0", padding:"5px", margin:"0 0 10px 0"}}>
                <IonCol size='12' style={{textAlign:"start", background:"rgba(200,200,200,0.65)", borderRadius:"5px", padding:"5px"}}>
                  <IonText mode='ios' style={{fontSize:"14px"}}>
                    Gallery
                  </IonText>
                </IonCol>
                <IonCol size='12' style={{padding:"0 5px", margin:0, display:'flex', justifyContent:"start", flex:"wrap"}}>
                  <IonRow style={{width:"100%"}}>
                      {dataGallery.map((a, index) => {
                        return(
                          (String(a['base64']).length > 5)?
                          <IonCol size='3' key={index} onClick={()=>{openFoto(a['text'], a['base64'])}}>
                            <IonImg src={a['base64']} title={a['text']} style={{borderRadius:"5px", border:"solid 1px gray", padding:"2px", height:"75px"}}/>
                          </IonCol>
                          :''
                        )
                      })}
                  </IonRow>
                  {/* {dataGallery.map((a, index) => {
                    return(
                      (String(a['base64']).length > 5)?
                        <IonImg key={index} src={a['base64']} title={a['text']} style={{width:"20vw", height:"75px", borderRadius:"5px", margin:"3px", border:"solid 1px gray"}} onClick={()=>{openFoto(a['text'], a['base64'])}} />
                      :""
                    )
                  })} */}
                  
                </IonCol>
              </IonRow>
              :""}
              
              {(detailSubTotal !== 0)?
              <IonRow style={{borderRadius:"7px", border:"solid 1px #0000A0", padding:"5px"}}>
                <IonCol size='12' style={{textAlign:"start", background:"rgba(200,200,200,0.65)", borderRadius:"5px", padding:"5px"}}>
                  <IonText mode='ios' style={{fontSize:"14px"}}>
                    Informasi Biaya
                  </IonText>
                </IonCol>
                <IonCol size='6' style={{textAlign:"start", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px"}}>
                    {(detailLayanan === 'Sewa Truck')?'Jasa Sewa Truck':'Jasa Pengiriman'}
                  </IonText>
                </IonCol>
                <IonCol size='6' style={{textAlign:"end", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px", color:"black"}}>
                    Rp {detailJasaPengiriman.toLocaleString(undefined, {maximumFractionDigits:2})}
                  </IonText>
                </IonCol>

                {(detailBiayaAsuransi !== 0)?
                <>
                <IonCol size='6' style={{textAlign:"start", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px"}}>
                    Biaya Asuransi
                  </IonText>
                </IonCol>
                <IonCol size='6' style={{textAlign:"end", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px", color:"black"}}>
                    Rp {detailBiayaAsuransi.toLocaleString(undefined, {maximumFractionDigits:2})}
                  </IonText>
                </IonCol>
                </>
                :''}
                {(detailBiayaPacking !== 0)?
                <>
                <IonCol size='6' style={{textAlign:"start", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px"}}>
                    Biaya Packing
                  </IonText>
                </IonCol>
                <IonCol size='6' style={{textAlign:"end", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px", color:"black"}}>
                    Rp {detailBiayaPacking.toLocaleString(undefined, {maximumFractionDigits:2})}
                  </IonText>
                </IonCol>
                </>
                :''}

                <IonCol size='6' style={{textAlign:"start", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px"}}>
                    Subtotal
                  </IonText>
                </IonCol>
                <IonCol size='6' style={{textAlign:"end", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px", color:"black"}}>
                    Rp {detailSubTotal.toLocaleString(undefined, {maximumFractionDigits:2})}
                  </IonText>
                </IonCol>

                {(detailBiayaDiskon !== 0)?
                <>
                <IonCol size='6' style={{textAlign:"start", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px"}}>
                    Diskon Promo
                  </IonText>
                </IonCol>
                <IonCol size='6' style={{textAlign:"end", padding:"0 5px", margin:0}}>
                  <IonText mode='ios' style={{fontSize:"12px", color:"black"}}>
                    Rp {detailBiayaDiskon.toLocaleString(undefined, {maximumFractionDigits:2})}
                  </IonText>
                </IonCol>
                </>
                :''}

                <IonCol size='6' style={{textAlign:"start", padding:"0 5px", margin:"10px 0 0 0"}}>
                  <IonText mode='ios' style={{fontSize:"16px", fontWeight:"bold"}}>
                    Total
                  </IonText>
                </IonCol>
                <IonCol size='6' style={{textAlign:"end", padding:"0 5px", margin:"10px 0 0 0"}}>
                  <IonText mode='ios' style={{fontSize:"16px", color:"black", fontWeight:"bold"}}>
                    Rp {(detailSubTotal - detailBiayaDiskon).toLocaleString(undefined, {maximumFractionDigits:2})}
                  </IonText>
                </IonCol>

                {(detailMetodePembayaran === 'Partial Payment')?
                <IonCol size='12' style={{padding:"0 5px", margin:"5px 0 0 0"}}>
                  <IonRow style={{width:"100%", padding:0, margin:0}}>
                    <IonCol size='6' style={{textAlign:"start", padding:"0", margin:"2px 0 0 0"}}>
                      <IonText mode='ios' style={{fontSize:"13px"}}>
                        Tahap I
                      </IonText>
                    </IonCol>
                    <IonCol size='6' style={{textAlign:"end", padding:"0", margin:"2px 0 0 0"}}>
                      <IonText mode='ios' style={{fontSize:"13px", color:"black", fontWeight:"bold"}}>
                        {detailPayment70}
                      </IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow style={{width:"100%", padding:0, margin:0}}>
                    <IonCol size='6' style={{textAlign:"start", padding:"0", margin:"2px 0 0 0"}}>
                      <IonText mode='ios' style={{fontSize:"13px"}}>
                        Tahap II
                      </IonText>
                    </IonCol>
                    <IonCol size='6' style={{textAlign:"end", padding:"0", margin:"2px 0 0 0"}}>
                      <IonText mode='ios' style={{fontSize:"13px", color:"black", fontWeight:"bold"}}>
                        {detailPayment30}
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonCol>
                :""}

                {(detailPaymentStatus === 'pending')?
                <IonCol size='12'>
                  <IonButton mode='ios' expand='block' fill='solid' color='success' onClick={()=>{openAlertPay(detailOrderId, detailPaymentLink)}}>
                    BAYAR SEKARANG
                    <IonIcon icon={cardOutline} slot='end' style={{margin:"0 5px"}}/>
                  </IonButton>
                </IonCol>
                :""}

              </IonRow>
              :""}

              {(detailLayanan === 'Sewa Truck' && detailStatus === 'Dibatalkan')?
              <IonRow style={{padding:"10px 0", margin:0}}>
                <IonCol size='12' style={{padding:0}}>
                  <IonButton mode='ios' fill='solid' color='primary' expand='block' onClick={()=>{doOrderAgain()}}>
                    Order Kembali
                  </IonButton>
                </IonCol> 
              </IonRow>
              :''}

            </IonGrid>
          </IonContent>
          <IonFooter mode='ios' style={{background:"white"}}>
            <IonGrid>
              <IonRow>
                <IonCol size='10'>
                  {(detailLayanan === 'Sewa Truck')?
                  <IonButton mode='ios' expand='block' color='dark' onClick={()=>{openModalLive()}} disabled={isLoading}>
                    <IonRippleEffect></IonRippleEffect>
                    LIVE TRACKING
                    <IonIcon icon={timeOutline} style={{margin:"0 10px"}}/>
                  </IonButton>
                  :
                  <IonButton mode='ios' expand='block' color='dark' onClick={()=>{openModalHistory()}} disabled={isLoading}>
                    <IonRippleEffect></IonRippleEffect>
                    HISTORY PENGIRIMAN 
                    <IonIcon icon={timeOutline} style={{margin:"0 10px"}}/>
                  </IonButton>
                  }
                </IonCol>
                <IonCol size='2'>
                  <IonButton mode='ios' expand='block' color='tertiary' disabled={isLoading} onClick={()=>{setIsActionDetail(true)}}>
                    <IonRippleEffect></IonRippleEffect>
                    <IonIcon icon={menuOutline} />
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonFooter>
      </IonModal>

      <IonModal mode='ios' isOpen={isModalHistory} onDidDismiss={()=>{setIsModalHistory(false)}}>
        <IonHeader mode='ios'>
          <IonToolbar mode='ios'>
            <IonButtons slot='start'>
              <IonButton mode='ios' color='danger' onClick={()=>{setIsModalHistory(false)}} fill='clear'>
                <IonIcon icon={closeCircleOutline}/>
              </IonButton>
            </IonButtons>
            <IonTitle>
              HISTORY TRACKING
            </IonTitle>
            {(isLoading === true)?
              <IonProgressBar type="indeterminate" mode='ios' color='primary'></IonProgressBar>
            :''}
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonGrid>
            <IonRow>
                <IonCol size='8'>
                    <IonText mode='ios' style={{textAlign:"start", display:"flex", flexDirection:"column"}}>
                        <span style={{fontSize:"10px"}}>Link Share History</span>
                        <span style={{margin:"5px 0"}}>
                            <IonBadge mode='ios' color="success" style={{fontSize:"12px"}}>Is Available</IonBadge>
                        </span>
                    </IonText>
                </IonCol>
                <IonCol size='4' style={{textAlign:"end"}}>
                  
                    <IonButton mode='ios' color="tertiary" onClick={() => copy(`https://xpdcargo.id/login/Callback/trackHistory?tracking=${detailNoTracking}`)} size='small'>
                        <IonRippleEffect></IonRippleEffect>
                        <IonIcon icon={clipboardOutline}/>
                    </IonButton>
                    <IonButton mode='ios' color="tertiary" onClick={() => newPage(`https://xpdcargo.id/login/Callback/trackHistory?tracking=${detailNoTracking}`)} size='small'>
                        <IonRippleEffect></IonRippleEffect>
                        <IonIcon icon={globeOutline}/>
                    </IonButton>
                  
                </IonCol>
            </IonRow>
            <IonRow>
              {dataHistory.map((a,index) => {
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
                        {(String(a['parent_type']).includes('pop') || String(a['parent_type']).includes('pod'))?
                        <IonButton mode='ios' expand='block' color='tertiary' fill='outline' onClick={()=>{(a['parent_type'] === 'pop')?prevPO(a['parent_id'], 'pop'):prevPO(a['parent_id'], 'pod')}} disabled={isLoading}>
                            {(a['parent_type'] === 'pop')?'Bukti Pickup':'Bukti Delivery'}
                        </IonButton>
                        :""}
                    </IonCol>
                  )
              })}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>

      <IonModal mode='ios' isOpen={isModalDone} onDidDismiss={()=>{setIsModalDone(false)}}>
        <IonContent className='contentDone'>
            <IonGrid style={{padding:"0 20px", background:"transparent !important"}}>
                <IonRow>
                    <IonCol size='12' style={{padding:0, margin:0}}>
                        <IonImg src='assets/success.gif' style={{height:"200px", width:"100%", margin:"0 auto"}}/>
                    </IonCol>
                    <IonCol size='12' style={{textAlign:"center"}}>
                        <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                            <span style={{fontSize:"16px", fontWeight:"bold", color:"white"}}>Pembayaran Berhasil</span>
                            <span style={{fontSize:"14px", color:"white"}}>
                                Terimakasih pembayaran kamu telah kami terima, senang bisa membantu pengiriman kamu
                            </span>
                        </IonText>
                    </IonCol>
                    <IonCol size='12' style={{textAlign:"start", padding:"10px", marginTop:"20px", borderRadius:"10px", border:"solid 1px white", background:"rgba(45, 85, 255,0.14)"}}>
                        <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                            <span style={{fontSize:"12px", color:"white"}}>Tanggal Pembayaran</span>
                            <span style={{fontSize:"14px", color:"white", fontWeight:"bold"}}>
                                {isDoneDate}
                            </span>
                            <span style={{fontSize:"12px", color:"white", marginTop:"4px"}}>Nomor Invoice</span>
                            <span style={{fontSize:"14px", color:"white", fontWeight:"bold"}}>
                                {isDoneTracking}
                            </span>
                            <span style={{fontSize:"12px", color:"white", marginTop:"4px"}}>Metode Pembayaran</span>
                            <span style={{fontSize:"14px", color:"white", fontWeight:"bold"}}>
                                {isDoneMethod}
                            </span>
                            <span style={{fontSize:"12px", color:"white", marginTop:"20px"}}>Total Yang Dibayar</span>
                            <span style={{fontSize:"18px", color:"white", fontWeight:"bold"}}>
                                Rp {Number(isDoneAmount).toLocaleString(undefined, {maximumFractionDigits:2})}
                            </span>
                        </IonText>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <div className='buttonDone'>
              <IonButton mode='ios' expand='block' color='tertiary' fill='solid' onClick={()=>{setIsModalDone(false)}}>
                  OKE
              </IonButton>
            </div>
        </IonContent>
      </IonModal>

      <IonModal mode='ios' isOpen={isModalCancel} onDidDismiss={()=>{setIsModalCancel(false)}}>
        <IonHeader mode='ios'>
          <IonToolbar mode='ios'>
            <IonButtons slot='start'>
              <IonButton mode='ios' fill='clear' onClick={()=>{setIsModalCancel(false)}} color='danger'>
                <IonIcon icon={closeCircleOutline} />
              </IonButton>
            </IonButtons>
            <IonTitle>
              Alasan Ingin Cancel
            </IonTitle>
            {(isLoading === true)?
              <IonProgressBar type="indeterminate" mode='ios' color='primary'></IonProgressBar>
            :''}
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonGrid style={{padding:"10px"}}>
            <IonRow>
              <IonCol size='12' style={{background:"rgba(247,202,24,0.50)", borderRadius:"10px", margin:"10px 0", padding:"10px", textAlign:"start"}}>
                <IonText mode='ios' style={{fontSize:"12px", color:"black"}}>
                  Halo {localStorage.getItem('userNama')} kenapa kamu ingin membatalkan pesanan ini? Apa pelayanan kami kurang memuaskan atau ada alasan lain? Beritahu kami mengapa kamu ingin membatalkan pesanan ini, tanggapan kamu akan menjadi motivasi untuk kami agar menjadi lebih baik kedepannya.
                </IonText>
              </IonCol>
              <IonCol size='12' style={{background:"rgba(200,200,200,0.50)", borderRadius:"10px", margin:"5px 0", padding:"10px"}}>
                <IonTextarea mode='ios' name='alasanCancel' placeholder='Alasan saya adalah' style={{fontSize:"14px", color:"black", textAlign:"start"}} autoGrow={true} rows={5}></IonTextarea>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
        <IonFooter mode='ios'>
          <IonGrid>
            <IonRow>
              <IonCol size='12'>
                <IonButton mode='ios' expand='block' color='primary' fill='solid' onClick={()=>{doCancel()}}>
                  KIRIM
                  <IonIcon icon={paperPlaneOutline} slot='end' style={{margin:"0 5px"}}/>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonFooter>
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
            <IonTitle>{String(detailNamaDriver).toUpperCase()}</IonTitle>
          </IonToolbar>
          {(isLoading === true)?
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
        </IonFooter>
      </IonModal>

      <IonModal mode='ios' isOpen={isModalLive} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation} onDidDismiss={()=>{closeModalLive()}}>
        <IonHeader mode='ios'>
          <IonToolbar mode='ios'>
            <IonButtons slot='start'>
              <IonButton mode='ios' fill='clear' color='primary' onClick={()=>{closeModalLive()}}>
                <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                BACK
              </IonButton>
            </IonButtons>
            <IonTitle>Live Tracking Driver</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent style={{position:"relative"}}>
          <capacitor-google-map id='mapLive'></capacitor-google-map>
        </IonContent>
        <IonFooter mode='ios' translucent={true}>
          <IonGrid>
            <IonRow>
              <IonCol size='12'>
                <IonButton mode='ios' color='dark' expand='block' onClick={()=>{openModalLive()}}>
                  Muat Ulang
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonFooter>
      </IonModal>

      <IonModal mode='ios' isOpen={isModalFoto} animated={true} onDidDismiss={()=>{setIsModalFoto(false)}} id='modalFoto' enterAnimation={inAnimation2} leaveAnimation={outAnimation2}>
        <IonHeader mode='ios'>
          <IonToolbar mode='ios'>
            <IonButtons slot='start'>
              <IonButton mode='ios' fill='clear' color='danger' onClick={()=>{setIsModalFoto(false)}}>
                <IonIcon icon={closeOutline} slot='start' style={{margin:0, padding:0}} />
                CLOSE
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent onClick={()=>{setIsModalFoto(false)}}>
          <IonImg src={isChosesFotoBase64} style={{width:"100vw", height:"50vh", margin:"20% 0"}}/>
        </IonContent>
        <IonFooter mode='ios' translucent={true}>
          <IonGrid>
            <IonRow>
              <IonCol size='10' style={{textAlign:"start", padding:"10px 5px"}}>
                <IonText mode='ios' style={{fontSize:"12px"}}>
                  {String(isChosesFotoText).toUpperCase()}
                </IonText>
              </IonCol>
              <IonCol size='2' style={{padding:0}}>
                <IonButton mode='ios' color='secondary' fill='outline' onClick={()=>{doDownloadFoto()}}>
                  <IonRippleEffect></IonRippleEffect>
                  <IonIcon icon={arrowDownCircleOutline} />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonFooter>
      </IonModal>

      <IonModal mode='ios' isOpen={isModalEditLokasi} onDidDismiss={()=>{closeModalEdit()}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
        <IonHeader mode='ios'>
          <IonToolbar mode='ios'>
            <IonButtons slot='start'>
              <IonButton mode='ios' fill='clear' color='primary' onClick={()=>{closeModalEdit()}}>
                <IonIcon icon={chevronBackOutline} slot='start' style={{margin:"0 5px", padding:0}} />
                BACK
              </IonButton>
            </IonButtons>
            <IonTitle>Edit Titik Lokasi</IonTitle>
          </IonToolbar>
          <IonGrid style={{textAlign:"start", background:"none !important", transform:isFullScreen?"translateY(-120%)":'translateY(0)', transition:"all 0.5s"}} className="animSlideDown">
            <IonRow style={{background:"#FFFFFF", borderRadius:"15px", padding:"5px 25px 5px 5px", margin:"7px", border:"solid 1px #ECECEC", position:"relative", boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.35)"}}>
              {(isSelectEdit === 'muat')?
              <IonCol size='1' style={{textAlgin:"start", padding:"2px"}}>
                <IonIcon icon={arrowUpCircleSharp} color='success' style={{fontSize:"20px"}} />
              </IonCol>:""}
              {(isSelectEdit === 'muat')?
              <IonCol size='11' style={{textAlign:"start", borderBottom:"solid 1px #CECECE", padding:"2px"}} onClick={()=>{openModalSearch('muat')}}>
                <IonText mode='ios' style={{fontSize:"12px", color:"black"}} className='inBlink'>
                  {(editLokasiAsal !== '')?editLokasiAsal.split(",")[0]:detailAlamatPengirim.split(",")[0]}
                </IonText>
              </IonCol>:""}
              {(isSelectEdit === 'bongkar')?
              <IonCol size='1' style={{textAlgin:"start", padding:"5px 2px 2px 2px"}}>
                <IonIcon icon={radioButtonOnOutline} color='danger' style={{fontSize:"20px"}}/>
              </IonCol>:""}
              {(isSelectEdit === 'bongkar')?
              <IonCol size='11' style={{textAlign:"start", padding:"5px 2px"}} onClick={()=>{openModalSearch('bongkar')}} className='inBlink'>
                <IonText mode='ios' style={{fontSize:"12px", color:"black"}}>
                  {(editLokasiTujuan !== '')?editLokasiTujuan.split(",")[0]:detailAlamatPenerima.split(",")[0]}
                </IonText>
              </IonCol>:""}
            </IonRow>
          </IonGrid>
        </IonHeader>
        <IonContent fullscreen>
          <div style={{height:"100vh", margin:0, padding:0}}>
            <capacitor-google-map id='mapEdit' ></capacitor-google-map>
          </div>
          <IonModal mode='ios' isOpen={isResult} animated={true} initialBreakpoint={0.20} breakpoints={[0.20]} backdropBreakpoint={0.20} id='breakLanjutkan' style={{transform:isFullScreen?'translateY(40%)':'translateY(0)', transition:"all 0.55s"}} >
            <IonContent fullscreen>
                <IonGrid>
                    <IonRow style={{padding:"5px 0"}}>
                        {/* <IonCol size='4' style={{textAlign:"center"}}>
                            <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                <span style={{fontSize:"12px", fontWeight:"bold"}}>
                                    {isResultDistance.toLocaleString(undefined, {maximumFractionDigits:2})} Km
                                </span>
                                <span style={{fontSize:"10px"}}>Jarak Tempuh</span>
                            </IonText>
                        </IonCol> */}
                        {/* <IonCol size='6' style={{textAlign:"center"}}>
                            <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                <span style={{fontSize:"12px", fontWeight:"bold"}}>-+{isResultDuration}</span>
                                <span style={{fontSize:"10px"}}>Estimasi Waktu</span>
                            </IonText>
                        </IonCol> */}
                        <IonCol size='12' style={{textAlign:"center"}}>
                            <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                <span style={{fontSize:"12px", fontWeight:"bold"}}>
                                    Rp.{isResultPrice.toLocaleString(undefined, {maximumFractionDigits:2})}
                                </span>
                                <span style={{fontSize:"10px"}}>Total Harga {(isSelectEdit === 'bongkar')?'(Biaya Tambahan)':''}</span>
                            </IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{margin:0, padding:0}}>  
                        <IonCol size='12' style={{padding:"0 10px"}}>
                          <IonBadge mode='ios' color='medium' style={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"start"}}>
                            <IonIcon icon={alertCircleSharp} color='warning' style={{fontSize:"15px", margin:"2px 5px 2px 0"}}/>
                            <span style={{fontSize:"12px", margin:"4px 0"}}>*Tarif ini belum termasuk ongkos tol/parkir</span>
                          </IonBadge>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{padding:0, margin:0}}>
                      <IonCol size='12' style={{margin:0}}>
                        {(isLoading === true)?
                          <IonButton mode='ios' color='success' expand='block'>
                            <IonSpinner name='crescent' color='light'></IonSpinner>
                          </IonButton>
                        :
                        <IonButton mode='ios' color='success' expand='block' onClick={()=>{doUpdateLokasi()}} >
                          Simpan Perubahan
                        </IonButton>}
                      </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonModal>
        </IonContent>
      </IonModal>

      <IonModal mode='ios' isOpen={isModalLokasi} onDidDismiss={()=>{setIsModalLokasi(false)}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
        <IonHeader mode='ios'>
          <IonToolbar mode='ios'>
            <IonButtons slot='start'>
              <IonButton mode='ios' fill='clear' color='dark' onClick={()=>{setIsModalLokasi(false)}}>
                <IonIcon icon={closeOutline} slot='start' style={{margin:"0 10px 0 0"}} />
                {(isSelectEdit === 'muat')?'Set lokasi jemput':'Set lokasi bongkar?'}
              </IonButton>
            </IonButtons>
          </IonToolbar>
          {(isLoading === true)?
            <IonProgressBar type="indeterminate" mode='ios' color='primary'></IonProgressBar>
          :''}
          <IonGrid style={{textAlign:"start", background:"#FFFFFF", borderBottom:"solid 1px #ECECEC"}}>
            <IonRow style={{background:"#FFFFFF", borderRadius:"15px", padding:"5px 25px 5px 5px", margin:"7px", border:"solid 1px #ECECEC", position:"relative", boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.35)"}}>
              {(isSelectEdit === 'muat')?
              <IonCol size='1' style={{textAlgin:"start", padding:"2px"}}>
                <IonIcon icon={arrowUpCircleSharp} color='success' style={{fontSize:"20px"}} />
              </IonCol>:""}
              {(isSelectEdit === 'muat')?
              <IonCol size='11' style={{textAlign:"start", borderBottom:"solid 1px #CECECE", padding:"2px"}}>
                <IonInput inputMode='search' mode='ios' value={editLokasiAsal} style={{fontSize:"12px", color:"black", margin:0, padding:0}} onIonChange={(e)=>{doQLokasi(e.detail.value)}} onClick={()=>{setIsSelectEdit('muat')}} className="inputLokasi" readonly={(detailEditLokasi === '1')?true:false}/>
              </IonCol>:""}
              {(isSelectEdit === 'bongkar')?
              <IonCol size='1' style={{textAlgin:"start", padding:"5px 2px 2px 2px"}}>
                <IonIcon icon={radioButtonOnOutline} color='danger' style={{fontSize:"20px"}}/>
              </IonCol>:""}
              {(isSelectEdit === 'bongkar')?
              <IonCol size='11' style={{textAlign:"start", padding:"5px 2px"}}>
                <IonInput inputMode='search' mode='ios' value={editLokasiTujuan} style={{fontSize:"12px", color:"black", margin:0, padding:0}} onIonChange={(e)=>{doQLokasi(e.detail.value)}} onClick={()=>{setIsSelectEdit('bongkar')}} className="inputLokasi"/>
              </IonCol>:""}
            </IonRow>
          </IonGrid>
        </IonHeader>
        <IonContent fullscreen>
          <IonGrid style={{padding:0, margin:0}}>
            {(dataLokasi)?dataLokasi.map((a, index) => {
              return(
                <IonRow key={index} style={{padding:"5px", borderBottom:"solid 1px gray"}} onClick={()=>{onSelectLokasi(a['place_id'])}} className='inBlink'>
                  <IonCol size='1' style={{padding:"10px", textAlign:"start"}}>
                    <IonIcon icon={locationSharp} style={{fontSize:"18px"}} color='medium'/>
                  </IonCol>
                  <IonCol size='11' style={{textAlign:"start"}}>
                    <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                      <span style={{fontSize:"12px", margin:"4px 0", fontWeight:"bold"}}>{a['structured_formatting']['main_text']}</span>
                      <span style={{fontSize:"10px"}}>{a['structured_formatting']['secondary_text']}</span>
                    </IonText>
                  </IonCol>
                </IonRow>
              )
            }):
            <IonRow style={{padding:"5px", borderBottom:"solid 1px gray"}}>
              <IonCol size='1' style={{padding:"10px", textAlign:"start"}}>
                <IonIcon icon={alertCircleSharp} style={{fontSize:"18px"}} color='medium'/>
              </IonCol>
              <IonCol size='11' style={{textAlign:"start"}}>
                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                  <span style={{fontSize:"14px", margin:"6px 0"}}>Lokasi tidak ditemukan! coba cari kata kunci lain.</span>
                </IonText>
              </IonCol>
            </IonRow>
            }       
          </IonGrid>
        </IonContent>
      </IonModal>

      <IonModal mode='ios' isOpen={isModalAlasan} animated={true} onDidDismiss={()=>{setIsModalAlasan(false)}}>
        <IonHeader mode='ios'>
          <IonToolbar mode='ios'>
            <IonButtons slot='start'>
              <IonButton mode='ios' fill='clear' color='dark' onClick={()=>{setIsModalAlasan(false)}}>
                <IonIcon icon={closeOutline} slot='start' style={{margin:"0 10px 0 0", padding:0}} />
                Tidak jadi
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonRadioGroup allowEmptySelection={false} name='selectAlasan' onIonChange={(e)=>{setIsSelectAlasan(e.detail.value)}} value={isSelectAlasan}>
            <IonItem mode='ios'>
              <IonText mode='ios' style={{fontSize:"12px"}}>Driver tidak ada kabar</IonText>
              <IonRadio slot='end' color='primary' value='Driver tidak ada kabar'></IonRadio>
            </IonItem>
            <IonItem mode='ios'>
              <IonText mode='ios' style={{fontSize:"12px"}}>Driver minta dibatalkan</IonText>
              <IonRadio slot='end' color='primary' value='Driver minta dibatalkan'></IonRadio>
            </IonItem>
            <IonItem mode='ios'>
              <IonText mode='ios' style={{fontSize:"12px"}}>Ingin mengubah rincian & membuat pesanan baru</IonText>
              <IonRadio slot='end' color='primary' value='Ingin mengubah rincian & membuat pesanan baru'></IonRadio>
            </IonItem>
            <IonItem mode='ios'>
              <IonText mode='ios' style={{fontSize:"12px"}}>Driver terlalu lama membalas pesan</IonText>
              <IonRadio slot='end' color='primary' value='Driver terlalu lama membalas pesan'></IonRadio>
            </IonItem>
            <IonItem mode='ios'>
              <IonText mode='ios' style={{fontSize:"12px"}}>Driver memiliki perilaku/atitude yang buruk</IonText>
              <IonRadio slot='end' color='primary' value='Driver memiliki perilaku/atitude yang buruk'></IonRadio>
            </IonItem>
          </IonRadioGroup>
        </IonContent>
        <IonFooter mode='ios'>
          <IonGrid>
            <IonRow>
              <IonCol size='12'>
                <IonButton mode='ios' expand='block' color='primary' disabled={(isSelectAlasan === '')?true:false} onClick={()=>{setIsAlertCancel(true)}}>
                  Konfirmasi
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonFooter>
      </IonModal>

      <IonModal mode='ios' isOpen={isModalMap} animated={true} onDidDismiss={()=>{setIsModalMap(false)}} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
        <IonHeader mode='ios'>
          <IonToolbar mode='ios'>
            <IonButtons slot='start'>
              <IonButton mode='ios' fill='clear' color='dark' onClick={()=>{setIsModalMap(false)}}>
                <IonIcon icon={closeOutline} slot='start' style={{margin:"0 10px 0 0", padding:0}} />
                Overview Route
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <capacitor-google-map id='mapOverview' style={{display:"inline-block", width:"100vw", height:"100vh"}}></capacitor-google-map>
        </IonContent>
      </IonModal>

      <IonModal mode='ios' isOpen={isModalComplainNew} onDidDismiss={()=>{closeModalComplainNew()}} ref={isModalComplainNewRef} animated={true} breakpoints={[0,0.75]} initialBreakpoint={0.75}>
        <IonContent fullscreen>
          <IonGrid>
            <IonRow>
              <IonCol size='12' style={{padding:"15px 10px", textAlign:"center"}}>
                <IonText mode='ios'>
                  #Tiket Baru
                </IonText>
              </IonCol>
              <IonCol size='12' style={{background:"#F9F9F9", borderRadius:"10px", padding:"10px", margin:"5px"}}>
                <IonSelect mode='ios' name='complainText' interface='action-sheet' placeholder='Pilih Topik Komplain' onIonChange={(e)=>{setIsTextComplain(String(e.detail.value))}}>
                  <IonSelectOption value="Barang saya rusak">Barang Rusak</IonSelectOption>
                  <IonSelectOption value="Barang saya belum sampai">Barang Belum Sampai</IonSelectOption>
                  <IonSelectOption value="Barang saya tidak lengkap">Barang Tidak Lengkap</IonSelectOption>
                  <IonSelectOption value="Invoice saya tidak sesuai">Invoice Tidak Sesuai</IonSelectOption>
                  <IonSelectOption value="Saya ingin komplain tentang hal lain">Lainnya</IonSelectOption>
                </IonSelect>
                {/* <IonTextarea mode='ios' placeholder={`Masukkan keluhan kamu untuk tracking ${detailNoTracking}`} inputMode='text' autoGrow={true} name='complainText' style={{textAlign:"start"}} rows={5} value={isTextComplain} onIonChange={(e)=>{setIsTextComplain(String(e.detail.value))}}/> */}
              </IonCol>
              <IonCol size='12'>
                <input type='file' name='fileComplain' id='fileComplain' style={{display:"none"}} onChange={()=>{pilihFile()}}/>
                {(isFileComplain === '')?
                <IonButton mode='ios' size='small' fill='outline' color='primary' expand='block' onClick={()=>{setIsActionFile(true)}}>
                  <IonRippleEffect></IonRippleEffect>
                  <IonIcon icon={cameraOutline} slot='start' style={{margin:"0 5px"}} />
                  Ambil Foto
                </IonButton>:""}
              </IonCol>
              {(isFileComplain !== '')?
              <IonCol size='12' style={{border:"solid 1px #2A2A2A", borderRadius:"10px", position:"relative"}}>
                <IonImg src={(isFileComplain.includes('base64,'))?isFileComplain:`data:image/jpeg;base64,${isFileComplain}`} style={{width:"125px", height:"125px", margin:"5px auto"}} />
                <IonButton mode='ios' fill='outline' color='danger' size='small' onClick={()=>{setIsFileComplain('')}} style={{position:"absolute", top:0, right:0}}>
                  <IonRippleEffect></IonRippleEffect>
                  <IonIcon icon={trashBinOutline} />
                </IonButton>
              </IonCol> 
              :""}
              <IonCol size='12'>
                <IonButton mode='ios' expand='block' color='success' fill='solid' onClick={()=>{sendComplain()}}>
                  <IonRippleEffect></IonRippleEffect>
                  Kirim
                </IonButton>
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
                <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                BACK
              </IonButton>
            </IonButtons>
            <IonTitle>Tiket</IonTitle>
            <IonButtons slot='end'>
              <IonButton mode='ios' fill='clear' color='primary' onClick={()=>{setIsModalComplainNew(true)}}>
                <IonRippleEffect></IonRippleEffect>
                <IonIcon icon={addCircleOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
          {(isLoading === true)?
            <IonProgressBar type="indeterminate" mode='ios' color='primary'></IonProgressBar>
          :''}
        </IonHeader>
        <IonContent fullscreen>
          <IonGrid>
            <IonRow>
              <IonCol size='12' style={{textAlign:"start"}}>
                <IonText mode='ios' color='warning' style={{fontSize:"12px"}}>
                  Kamu hanya memiliki maksimal 2 tiket komplain untuk tiap tracking pemesanan, manfaatkan dengan sebaik-baiknya tiket ini
                </IonText>
              </IonCol>
            </IonRow>
            {dataComplain.map((a, index) => {
              return(
                <IonRow key={index} style={{background:"#F9F9F9", borderRadius:"10px", padding:"10px", margin:"2px 0"}} onClick={()=>{}}>
                  <IonCol size='10' style={{textAlign:"start"}}>
                    <IonText mode='ios' style={{display:"flex", flexDirection:"column", textAlign:"start"}}>
                      <span style={{fontSize:"12px"}}>{a['kode']}</span>
                      <span style={{fontSize:"10px"}}>{a['created_at']}</span>
                      <span>
                        <IonBadge mode='ios' color={(a['status'] === '1')?'danger':'primary'} style={{fontSize:"10px", margin:"4px 0"}}>
                          {(a['status'] === '1')?'Investigasi':'Selesai'}
                        </IonBadge>
                      </span>
                    </IonText>
                  </IonCol>
                  <IonCol size='2'>
                    <IonButton mode='ios' color='success' fill='clear' onClick={()=>{openChatTiket(a['channel_id'], a['status'])}}>
                      <IonIcon icon={chatbubblesOutline} />
                    </IonButton>
                  </IonCol>
                </IonRow>
              )
            })}
          </IonGrid>
        </IonContent>
      </IonModal>

      <IonModal mode='ios' isOpen={isModalSuccessReorder} onDidDismiss={()=>{setIsModalSuccessReorder(false)}}>
        <IonHeader mode='ios'>
          <IonToolbar mode='ios'>
            <IonButtons slot='start'>
              <IonButton mode='ios' color='danger' fill='clear' onClick={()=>{setIsModalSuccessReorder(false)}}>
                <IonIcon icon={closeCircleOutline} />
              </IonButton>
            </IonButtons>
            <IonTitle color='success'>
              RE-ORDER SUCCESS
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen id='contentDone'>
          <IonGrid>
            <IonRow>
              <IonCol size='12'>
                <IonImg src='assets/siccess.gif' style={{height:"250px", width:"100%"}}/>
              </IonCol>
              <IonCol size='12' style={{textAlign:"center"}}>
                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                  <span style={{fontSize:"16px", fontWeight:"bold", color:"rgb(46, 204, 113)"}}>Re-Order Rent Truck Success</span>
                  <span style={{fontSize:"14px", color:"rgb(46, 204, 113)"}}>
                    Selamat kamu berhasil melakukan order ulang sewa truck
                  </span>
                </IonText>
              </IonCol>
              <IonCol size='12' style={{textAlign:"start", padding:"10px", marginTop:"20px", borderRadius:"10px", border:"solid 1px gray", background:"rgba(108,122,137,0.14)"}}>
                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                  <span style={{fontSize:"12px", color:"rgb(108,122,137)"}}>Order Date</span>
                  <span style={{fontSize:"14px", color:"rgb(108,122,137)", fontWeight:"bold"}}>
                    {isReorderDate}
                  </span>
                  <span style={{fontSize:"12px", color:"rgb(108,122,137)", marginTop:"4px"}}>Order Invoice</span>
                  <span style={{fontSize:"14px", color:"rgb(108,122,137)", fontWeight:"bold"}}>
                    {isReorderTracking}
                  </span>
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
        <IonFooter mode='ios'>
          <IonGrid>
            <IonRow>
              <IonCol size='12'>
                <IonButton mode='ios' expand='block' fill='outline' color='success' onClick={()=>{closeModalSuccessReorder()}}>
                  TUTUP
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonFooter>
      </IonModal>


      <IonToast 
        mode='ios'
        isOpen={toast}
        message={toastMessage}
        onDidDismiss={()=>{setToast(false)}}
        color={toastColor}
        duration={toastDuration}
        icon={(toastColor === 'danger')?closeCircleOutline:checkmarkCircleOutline}
        position="top"
        cssClass="isToast"
      />
      <IonLoading 
        mode='ios'
        isOpen={loading}
        spinner='circular'
      />
      <IonAlert 
        mode='ios'
        isOpen={isAlertPay}
        message="Kamu akan diarahkan langsung ke halaman pembayaran"
        onDidDismiss={()=>{setIsAlertPay(false)}}
        buttons={[
          {
            text: "Tidak Yakin",
            role: 'cancel',
            handler(value) {
              setIsAlertPay(false)
            },
          },
          {
            text: "Yakin",
            role: "confirm",
            handler(value) {
              doPayment()
            },
          }
        ]}
      />
      <IonAlert 
        mode='ios'
        isOpen={isAlertCancel}
        message="Pembatalan ini hanya berlaku ketika barang kamu belum di muat oleh driver"
        onDidDismiss={()=>{setIsAlertCancel(false)}}
        buttons={[
          {
            text: "Tidak Jadi",
            role: 'cancel',
            handler(value) {
              setIsAlertCancel(false)
            },
          },
          {
            text: 'Lanjutkan',
            role: 'confirm',
            handler(value) {
              doCancelSewaTruck()
            },
          }
        ]}
      />
      <IonActionSheet 
        mode='ios'
        isOpen={isActionDetail}
        header="Menu"
        onDidDismiss={()=>{setIsActionDetail(false)}}
        buttons={buttonSheet()}
      />

      <IonLoading 
        isOpen={isLoading2}
        mode='ios'
        spinner='circular'
        onDidDismiss={()=>{setIsLoading2(false)}}
      />

      <IonActionSheet 
        mode='ios'
        isOpen={isActionFile}
        onDidDismiss={()=>{setIsActionFile(false)}}
        buttons={[
          {
            text: 'Kamera',
            handler() {
              openCamera()
            },
          },
          {
            text: 'Pilih File',
            handler() {
              openFile()
            },
          },
          {
            text: 'BATAL',
            role: 'cancel',
            handler() {
              setIsActionFile(false)
            },
          }
        ]}
      />
    
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton mode='ios' id='fab'>
            <IonIcon icon={add} />
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton mode='ios' id='fabButton' onClick={() => {order('Reguler')}}>
            <IonIcon icon={carOutline} style={{marginRight:"5px", fontSize:"22px"}}/>
            <IonText mode='ios' style={{letterSpacing:"2px"}}>Reguler</IonText>
          </IonFabButton>
          <IonFabButton mode='ios' id='fabButton' onClick={() => {order('Express')}}>
            <IonIcon icon={carSportOutline} style={{marginRight:"5px", fontSize:"22px"}}/>
            <IonText mode='ios' style={{letterSpacing:"2px"}}>Express</IonText>
          </IonFabButton>
        </IonFabList>
      </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Orderlist;

