import { createAnimation, IonBackButton, IonButton, IonButtons, IonCard, IonCheckbox, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonLoading, IonMenuButton, IonModal, IonNavLink, IonPage, IonProgressBar, IonRippleEffect, IonRow, IonSearchbar, IonSpinner, IonText, IonTextarea, IonTitle, IonToast, IonToggle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import { addCircleOutline, alertCircleOutline, arrowForwardOutline, checkmarkCircleOutline, chevronBackOutline, closeCircleOutline, readerOutline, searchCircleOutline, ticketOutline, trashBinOutline } from "ionicons/icons";
import { useRef, useState } from "react";
import $ from 'jquery'
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial'

const Reguler: React.FC = () => {
    const [isLoadingBar, setIsLoadingBar] = useState(false)
    const [isLoadingPop, setIsLoadingPop] = useState(false)
    const [isToast, setIsToast] = useState(false)
    const [isToastMessage, setIsToastMessage] = useState('')
    const [isToastColor, setIsToastColor] = useState('')
    const [isToastDuration, setIsToastDuration] = useState(Number)
    const [isToastPosition, setIsToastPosition] = useState()
    const [isNamaPengirim, setIsNamaPengirim] = useState('')
    const [isPhonePengirim, setIsPhonePengirim] = useState('')
    const [isEmailPengirim, setIsEmailPengirim] = useState('')
    const [isAlamatPengirim, setIsAlamatPengirim] = useState('')
    const [isLokasiPengirim, setIsLokasiPengirim] = useState('')
    const [isSVCPengirim, setIsSVCPengirim] = useState('')
    const [isHUBPengirim, setIsHUBPengirim] = useState('')
    const [isSavePengirim, setIsSavePengirim] = useState(false)
    const [isNamaPenerima, setIsNamaPenerima] = useState('')
    const [isPhonePenerima, setIsPhonePenerima] = useState('')
    const [isEmailPenerima, setIsEmailPenerima] = useState('')
    const [isAlamatPenerima, setIsAlamatPenerima] = useState('')
    const [isLokasiPenerima, setIsLokasiPenerima] = useState('')
    const [isSVCPenerima, setIsSVCPenerima] = useState('')
    const [isHUBPenerima, setIsHUBPenerima] = useState('')
    const [isSavePenerima, setIsSavePenerima] = useState(false)
    const [isNamaBarang, setIsNamaBarang] = useState('')
    const [isHargaBarang, setIsHargaBarang] = useState('')
    const [isAsuransiBarang, setIsAsuransiBarang] = useState(false)
    const [isPackingBarang, setIsPackingBarang] = useState(false)
    const [isCatatanBarang, setIsCatatanBarang] = useState('')
    const [isModalInput, setIsModalInput] = useState(false)
    const [isModalLokasi, setIsModalLokasi] = useState(false)
    const [isModalAddress, setIsModalAddress] = useState(false)
    const [isModalVoucher, setIsModalVoucher] = useState(false)
    const [isModalOverview, setIsModalOverview] = useState(false)
    const [isModalBluetooth, setIsModalBluetooth] = useState(false)
    const [isModalSuccess, setIsModalSuccess] = useState(false)
    const [isSelectInput, setIsSelectInput] = useState('')
    const [dataLokasi, setDataLokasi] = useState([])
    const [dataLokasiOrigin, setDataLokasiOrigin] = useState([])
    const [dataAddress, setDataAddress] = useState([])
    const [dataAddressOrigin, setDataAddressOrigin] = useState([])
    const [dataVoucher, setDataVoucher] = useState([])
    const [dataVoucherOrigin, setDataVoucherOrigin] = useState([])
    const [dataSelectVoucher, setDataSelectVoucher] = useState([])
    const [dataOverview, setDataOverview] = useState([])
    const [dataBluetooth, setDataBluetooth] = useState([])
    const [isInfiniteDisabled, setInfiniteDisabled] = useState(false)
    const isModalAddressRef = useRef<HTMLIonModalElement>(null);
    const [noOfRows, setNoOfRows] = useState(0);
    const [isBerat, setIsBerat] = useState(Number)
    const [isQty, setIsQty] = useState(Number)
    const [isKubikasi, setIsKubikasi] = useState(Number)
    const [isFull, setIsFull] = useState(false)
    const [isAgree, setIsAgree] = useState(false)
    const [isPrintInvoice, setIsPrintInvoice] = useState(false)
    const [isResultNoTracking, setIsResultNoTracking] = useState('')
    const [isResultMessage, setIsResultMessage] = useState('')
    const [isGagalPrint, setIsGagalPrint] = useState(false)
    useIonViewWillEnter(()=>{
        getAddress()
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
    function showToast(message:any, color:any, duration:any, position:any){
        setIsToastMessage(message)
        setIsToastColor(color)
        setIsToastDuration(duration)
        setIsToastPosition(position)
        setIsToast(true)
    }
    function getVoucher(){
        let data = new FormData()
        data.append('user_id', String(localStorage.getItem('userid')))
        data.append('layanan' , 'Reguler')
        $.ajax({
            type: "POST",
            url: "https://xpdcargo.id/login/Callback/apiGetVoucherKios",
            data: data, 
            processData: false,
            contentType: false,
            dataType: "JSON",
            beforeSend:function(){
                setIsLoadingBar(true)
            },
            success:function(r:any){
                setIsLoadingBar(false)
                if(r.code === 200){
                    setDataVoucher(r.data.slice(0,10))
                    setDataVoucherOrigin(r.data)
                    setIsModalVoucher(true)
                }else{
                    showToast('Kamu tidak memiliki voucher yang tersedia', 'danger', 1200, 'top')
                }
            },
            error:function(err){
                setIsLoadingBar(false)
                showToast('Gagal mendapatkan data voucher', 'danger', 1200, 'bottom')
            }
        })
    }
    function getAddress(){
        let data =  new FormData()
        data.append('user_id', String(localStorage.getItem('userid')))
        $.ajax({
            type: "POST",
            url: "https://xpdcargo.id/login/Callback/apiGetDataAddressKios",
            data: data,
            processData: false,
            contentType:false,
            dataType: "JSON",
            beforeSend: function(){
                setIsLoadingBar(true)
            },
            success:function(r:any){
                setIsLoadingBar(false)
                setDataAddress(r.data.slice(0, 10))
                setDataAddressOrigin(r.data)
            },
            error:function(err){
                setIsLoadingBar(false)
                showToast('Gagal mendapatkan buku alamat', 'dangar', 1200, 'bottom')
            }
        })
    }
    function openInput(type:any){
        setIsSelectInput(type)
        setIsModalInput(true)
        console.log(isNamaPengirim)
        setTimeout(() => {
            if(type === 'Pengirim'){
                $("ion-input[name='namaPengirim']").val(isNamaPengirim)
                $("ion-input[name='phonePengirim']").val(isPhonePengirim)
                $("ion-textarea[name='alamatPengirim']").val(isAlamatPengirim)
                $("ion-input[name='lokasiPengirim']").val(isLokasiPengirim)
            }else{
                $("ion-input[name='namaPenerima']").val(String(isNamaPenerima))
                $("ion-input[name='phonePenerima']").val(isPhonePenerima)
                $("ion-textarea[name='alamatPenerima']").val(isAlamatPenerima)
                $("ion-input[name='lokasiPenerima']").val(isLokasiPenerima)
            }    
        }, 500);
    }
    function openModalLokasi(){
        let data = new FormData()
        data.append('type', String(isSelectInput))
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
        data.append('type', String(isSelectInput))
        data.append('svc_id', String(localStorage.getItem('svc_id')))
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
    function doSelectLokasi(id:any, lokasi:any, svc_id:any, hub_id:any){
        if(isSelectInput === 'Pengirim'){
            $("ion-input[name='lokasiPengirim']").val(lokasi)
            setIsSVCPengirim(svc_id)
            setIsHUBPengirim(hub_id)
        }else{
            $("ion-input[name='lokasiPenerima']").val(lokasi)
            setIsSVCPenerima(svc_id)
            setIsHUBPenerima(hub_id)
        }
        setIsModalLokasi(false)
    }
    function saveDataInput(){
        var nama = String($(`ion-input[name='nama${isSelectInput}']`).val())
        var phone = String($(`ion-input[name='phone${isSelectInput}']`).val())
        var alamat = String($(`ion-textarea[name='alamat${isSelectInput}']`).val())
        var lokasi = String($(`ion-input[name='lokasi${isSelectInput}']`).val())
        if(nama.trim() !== '' && phone.trim() !== '' && alamat.trim() !== '' && lokasi.trim() !== ''){
            if(isSelectInput === 'Pengirim'){
                setIsNamaPengirim(String($("ion-input[name='namaPengirim']").val()))
                setIsPhonePengirim(String($("ion-input[name='phonePengirim']").val()))
                setIsAlamatPengirim(String($("ion-textarea[name='alamatPengirim']").val()))
                setIsLokasiPengirim(String($("ion-input[name='lokasiPengirim']").val()))
            }else{
                setIsNamaPenerima(String($("ion-input[name='namaPenerima']").val()))
                setIsPhonePenerima(String($("ion-input[name='phonePenerima']").val()))
                setIsAlamatPenerima(String($("ion-textarea[name='alamatPenerima']").val()))
                setIsLokasiPenerima(String($("ion-input[name='lokasiPenerima']").val()))
            }
            setIsModalInput(false)
            setTimeout(() => {
                doCalculateBerat()    
            }, 1000);
        }else{
            showToast('Masih ada data yang belum diisi', 'danger', 1200, 'bottom')
        }
    }
    function deleteInput(type:any){
        if(type === 'Pengirim'){
            setIsNamaPengirim('')
            setIsPhonePengirim('')
            setIsEmailPengirim('')
            setIsAlamatPengirim('')
            setIsLokasiPengirim('')
        }else{
            setIsNamaPenerima('')
            setIsPhonePenerima('')
            setIsEmailPenerima('')
            setIsAlamatPenerima('')
            setIsLokasiPenerima('')
        }
        
        setIsFull(false)
    }
    function doSearchAddress(val:any){
        if(val.trim() !== ''){
            var filter = dataAddressOrigin.filter((a)=>{
                return String(a['nama']).toLowerCase().includes(String(val).toLowerCase()) || String(a['alamat']).toLowerCase().includes(String(val).toLowerCase()) || String(a['lokasi']).toLowerCase().includes(String(val).toLowerCase()) || String(a['email']).toLowerCase().includes(String(val).toLowerCase()) || String(a['phone']).toLowerCase().includes(String(val).toLowerCase())
            })
            setDataAddress(filter.slice(0, 10))
        }else{
            setDataAddress(dataAddressOrigin.slice(0,10))
        }
    }
    function doSelectAddress(id:any, lokasi:any, svc_id:any, hub_id:any, phone:any, name:any, alamat:any){
        if(svc_id !== '0' || hub_id !== '0'){
            if(isSelectInput === 'Pengirim'){
                $("ion-input[name='lokasiPengirim']").val(lokasi)
                $("ion-input[name='namaPengirim']").val(name)
                $("ion-input[name='phonePengirim']").val(phone)
                $("ion-textarea[name='alamatPengirim']").val(alamat)
                setIsSVCPengirim(svc_id)
                setIsHUBPengirim(hub_id)
            }else{
                $("ion-input[name='lokasiPenerima']").val(lokasi)
                $("ion-input[name='namaPenerima']").val(name)
                $("ion-input[name='phonePenerima']").val(phone)
                $("ion-textarea[name='alamatPenerima']").val(alamat)
                setIsSVCPenerima(svc_id)
                setIsHUBPenerima(hub_id)
            }
            setIsModalAddress(false)
        }else{
            showToast('Data alamat tidak valid', 'danger', 1200, 'top')
        }
    }
    function doCalculateBerat(){
        var all_item = document.querySelectorAll('#qtyDetail').length;
        var qty = 0;
        var berat = 0;
        var panjang = 0;
        var tinggi = 0;
        var lebar = 0;
        var volume = 0;
        var actual = 0;
        var kubikasi = 0;
        var type = 4000
        for (let i = 0; i < all_item; i++) {
            qty += Number($("ion-input[name='qty["+i+"]']").val());
            berat += Number($("ion-input[name='berat["+i+"]']").val());
            panjang += Number($("ion-input[name='panjang["+i+"]']").val());
            tinggi += Number($("ion-input[name='tinggi["+i+"]']").val());
            lebar += Number($("ion-input[name='lebar["+i+"]']").val());
            volume += Number($("ion-input[name='qty["+i+"]']").val()) *  (Number($("ion-input[name='panjang["+i+"]']").val()) * Number($("ion-input[name='lebar["+i+"]']").val()) * Number($("ion-input[name='tinggi["+i+"]']").val())) / type 
            actual += Number($("ion-input[name='qty["+i+"]']").val()) * Number($("ion-input[name='berat["+i+"]']").val())
            kubikasi += Number($("ion-input[name='qty["+i+"]']").val()) *  (Number($("ion-input[name='panjang["+i+"]']").val()) * Number($("ion-input[name='lebar["+i+"]']").val()) * Number($("ion-input[name='tinggi["+i+"]']").val())) / 1000000
        }
        setIsQty(qty)
        setIsKubikasi(kubikasi)
        if(actual > volume){
            setIsBerat(actual)
        }else{
            setIsBerat(volume)
        }
        if(isNamaPengirim !== '' && isNamaPenerima !== '' && isNamaBarang !== '' && isHargaBarang !== ''){
            setIsFull(true)
        }else{
            setIsFull(false)
        }
    }
    function inputBarang(type:any, val:any){
        if(type === 'Nama'){
            setIsNamaBarang(val)
        }else{
            setIsHargaBarang(val)
        }

        if(val === ''){
            setIsFull(false)
        }else{
            doCalculateBerat()
        }
    }
    function doSelectVoucher(data:any){
        if(data['hub_source'] === '0' || data['hub_source'] === isHUBPengirim){
            if(data['hub_dest'] === '0' || data['hub_dest'] === isHUBPenerima){
                setDataSelectVoucher(data)
                setIsModalVoucher(false)
                showToast('Voucher dapat digunakan', 'success', 1200, 'top')
            }else{
                showToast('Voucher tidak bisa digunakan, baca ketentuan dan syarat voucher', 'danger', 1200, 'top')
            }
        }else{
            showToast('Voucher tidak bisa digunakan, baca ketentuan dan syarat voucher', 'danger', 1200, 'top')
        }
    }
    function doOverview(){
        let data = new FormData()
        data.append('user_id', String(localStorage.getItem('userid')))
        data.append('svc_source', isSVCPengirim)
        data.append('svc_dest', isSVCPenerima)
        data.append('hub_source', isHUBPengirim)
        data.append('hub_dest', isHUBPenerima)
        data.append('lokasiPengirim', isLokasiPengirim)
        data.append('lokasiPenerima', isLokasiPenerima)
        data.append('berat', String(isBerat))
        data.append('layanan', 'Reguler')
        if(dataSelectVoucher.length !== 0){
            data.append('voucherId', String(dataSelectVoucher['id']))
            data.append('voucherType', String(dataSelectVoucher['type']))
            data.append('voucherValue', String(dataSelectVoucher['value']))
            data.append('voucherValueType', String(dataSelectVoucher['valueType']))
        }
        $.ajax({
            type: "POST",
            url: "https://xpdcargo.id/login/Callback/apiCalculateKios",
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
                    if(r.isValidVoucher === false){
                        setDataSelectVoucher([])
                        showToast('Voucher tidak dapat digunakan', 'danger', 1200, 'top')
                    }
                    setDataOverview(r)
                    setIsModalOverview(true)
                }else{
                    showToast('Gagal melakukan overview, coba kembali', 'danger', 1200, 'top')
                }
            },
            error:function(err){
                setIsLoadingPop(false)
                showToast('Gagal menghitung overview, periksa koneksi internet kamu', 'danger', 1200, 'top')
            }
        })
    }
    function doOrder(){
        if(isAgree){ 
            let data = new FormData()
            data.append('user_id', String(localStorage.getItem('userid')))
            data.append('namaPengirim', isNamaPengirim)
            data.append('namaPenerima', isNamaPenerima)
            data.append('phonePengirim', `0${isPhonePengirim}`)
            data.append('phonePenerima', `0${isPhonePenerima}`)
            data.append('alamatPengirim', isAlamatPengirim)
            data.append('alamatPenerima', isAlamatPenerima)
            data.append('lokasiPengirim', isLokasiPengirim)
            data.append('lokasiPenerima', isLokasiPenerima)
            data.append('svc_source', isSVCPengirim)
            data.append('svc_dest', isSVCPenerima)
            data.append('hub_source', isHUBPengirim)
            data.append('hub_dest', isHUBPenerima)
            data.append('namaBarang', isNamaBarang)
            data.append('hargaBarang', isHargaBarang)
            data.append('catatanBarang', isCatatanBarang)
            data.append('asuransiBarang', (isAsuransiBarang === true)?'1':'0')
            data.append('packingBarang', (isPackingBarang === true)?'1':'0')
            data.append('berat', String(isBerat))
            data.append('total_harga', String(dataOverview['price_after_voucher']))
            data.append('voucher_id', String((dataSelectVoucher.length !== 0)?dataSelectVoucher['id']:''))
            data.append('layanan', 'Reguler')
            data.append('unit_price', String(dataOverview['unit_price']))
            data.append('price_fm', String(dataOverview['price_fm']))
            data.append('price_lm', String(dataOverview['price_lm']))
            data.append('price_mm', String(dataOverview['price_mm']))
            data.append('price_packing', String(Number(isKubikasi) * 600000))
            data.append('price_asuransi', String((1/100) * Number(isHargaBarang)))

            var all_item = document.querySelectorAll('#qtyDetail').length;
            for (let i = 0; i < all_item; i++) {
                data.append(`detail_id[${i}]`, String(i))
                data.append(`detail_qty[${i}]`, String($(`ion-input[name='qty[${i}]']`).val()))
                data.append(`detail_berat[${i}]`, String($(`ion-input[name='berat[${i}]']`).val()))
                data.append(`detail_panjang[${i}]`, String($(`ion-input[name='panjang[${i}]']`).val()))
                data.append(`detail_lebar[${i}]`, String($(`ion-input[name='lebar[${i}]']`).val()))
                data.append(`detail_tinggi[${i}]`, String($(`ion-input[name='tinggi[${i}]']`).val()))
            }

            $.ajax({
                type: "POST",
                url: "https://xpdcargo.id/login/Callback/addOrderKios",
                data: data,
                processData: false,
                contentType: false,
                dataType: "json",
                beforeSend:function(){
                    setIsLoadingPop(true)
                },
                success:function(r:any){
                    setIsResultNoTracking(r.data)
                    setIsResultMessage(r.message)
                    if(isPrintInvoice === true){
                        openModalListBluetooth()
                    }else{
                        setIsLoadingPop(false)
                        setIsModalSuccess(true)
                    }
                },
                error: function (err) { 
                    showToast('Gagal melakukan order, periksa koneksi intenet kamu dan coba kembali', 'danger', 1200, 'top')
                }
            })  
        }else{
            showToast('Check syarat dan ketentuan yang berlaku', 'danger', 1200, 'top')
        }
    }
    function openModalListBluetooth(){
        BluetoothSerial.list().then((r) => {
            if(r.length > 0){
                setDataBluetooth(r)
                setIsLoadingPop(false)
                setIsModalBluetooth(true)
                setIsGagalPrint(false)
            }else{
                showToast('Print receipt gagal, bluetooth kamu tidak aktif', 'danger', 1200, 'top')
                setIsLoadingPop(false)
                setIsModalSuccess(true)
                setIsGagalPrint(true)
            }
        }).catch((err) => {
            setIsLoadingPop(false)
            setIsModalSuccess(true)
            showToast('Fitur bluetooth printer tidak support pada perangkat kamu', 'danger', 1200, 'top')
            setIsGagalPrint(true)
        })
    }
    function BTConnect(name:any, mac:any){
        setIsLoadingPop(true)
        BluetoothSerial.connect(mac).subscribe((res)=>{
            showToast('Connection bluetooth success, wait until 5 seconds to start print', 'primary', 1200, 'top')
        })
        setTimeout(() => {
            BluetoothSerial.isConnected().then(()=>{
                BTPrint()
                setIsModalBluetooth(false)
                setIsGagalPrint(false)
            }).catch((err)=>{
                setIsLoadingPop(false)
                showToast(`Connection to bluetooth ${name} failed, try again!`, 'danger', 1200, 'top')
                setIsModalSuccess(true)
                setIsGagalPrint(true)
            })    
        }, 4000);
    }
    function BTPrint(){
        var splitLokasiPengirim = isLokasiPengirim.split(', ')
        var splitLokasiPenerima = isLokasiPenerima.split(', ')
        var lokasiPengirim1 = `${String(splitLokasiPengirim[0]).toUpperCase()}, ${String(splitLokasiPengirim[1]).toUpperCase()}, ${String(splitLokasiPengirim[4]).toUpperCase()}`
        var lokasiPenerima1 = `${String(splitLokasiPenerima[0]).toUpperCase()}, ${String(splitLokasiPenerima[1]).toUpperCase()}, ${String(splitLokasiPenerima[4]).toUpperCase()}`
        var alamatPengirim1 = ""
        var alamatPengirim2 = ""
        var alamatPengirim3 = ""
        var alamatPenerima1 = ""
        var alamatPenerima2 = ""
        var alamatPenerima3 = ""

        if(isAlamatPengirim.length > 57){
          alamatPengirim1 = isAlamatPengirim.substring(0, 57).toUpperCase()
          alamatPengirim2 = isAlamatPengirim.substring(57, 114).toUpperCase()
          alamatPengirim3 = isAlamatPengirim.substring(114, 171).toUpperCase()
        }else{
          alamatPengirim1 = isAlamatPengirim.toUpperCase()
        }

        if(isAlamatPenerima.length > 57){
          alamatPenerima1 = isAlamatPenerima.substring(0, 57).toUpperCase()
          alamatPenerima2 = isAlamatPenerima.substring(57, 114).toUpperCase()
          alamatPenerima3 = isAlamatPenerima.substring(114, 171).toUpperCase()
        }else{
          alamatPenerima1 = isAlamatPenerima.toUpperCase()
        }

        const cmdstest = [
            'SIZE 70 mm,80 mm',
            'CLS',
            `TEXT 0, 10, "2", 0, 1, 1, "INFORMASI BARANG (Reguler)"`,
            `TEXT 0, 39, "1", 0, 1, 1, "${isNamaBarang}"`,
            `TEXT 0, 60, "1", 0, 1, 1, "BERAT = ${Math.ceil(isBerat)}Kg"`,
            `TEXT 0, 85, "1", 0, 1, 1, "QTY ${isQty}"`,
            `TEXT 0, 110, "2", 0, 1, 1, "---------------------------------------"`,
            `TEXT 0, 135, "2", 0, 1, 1, "PENGIRIM"`,
            `TEXT 0, 164, "1", 0, 1, 1, "${String(isNamaPengirim).toUpperCase()}"`,
            `TEXT 0, 185, "1", 0, 1, 1, "${isPhonePengirim}"`,
            `TEXT 0, 210, "1", 0, 1, 1, "${lokasiPengirim1}"`,
            `TEXT 0, 235, "1", 0, 1, 1, "${alamatPengirim1}"`,
            `TEXT 0, 260, "1", 0, 1, 1, "${alamatPengirim2}"`,
            `TEXT 0, 285, "1", 0, 1, 1, "${alamatPengirim3}"`,
            `TEXT 0, 310, "2", 0, 1, 1, "---------------------------------------"`,
            `TEXT 0, 335, "2", 0, 1, 1, "PENERIMA"`,
            `TEXT 0, 364, "1", 0, 1, 1, "${String(isNamaPenerima).toUpperCase()}"`,
            `TEXT 0, 385, "1", 0, 1, 1, "${isPhonePenerima}"`,
            `TEXT 0, 410, "1", 0, 1, 1, "${lokasiPenerima1}"`,
            `TEXT 0, 435, "1", 0, 1, 1, "${alamatPenerima1}"`,
            `TEXT 0, 450, "1", 0, 1, 1, "${alamatPenerima2}"`,
            `TEXT 0, 475, "1", 0, 1, 1, "${alamatPenerima3}"`,
            `TEXT 0, 500, "2", 0, 1, 1, "---------------------------------------"`,
            `BARCODE 85, 525, "128", 90, 1, 0, 2, 2,"${isResultNoTracking}"`,
            'PRINT 1',
            'END',
        ];
        let arrayLiketest = new TextEncoder().encode( cmdstest.join('\r\n') );
        const contenttest = new Uint8Array( arrayLiketest );            
        BluetoothSerial.write(contenttest).then(()=>{ 
            showToast('Memulai print receipt', 'medium', 1200, 'top')
        })
        BluetoothSerial.disconnect()
        setIsLoadingPop(false)
        setIsModalSuccess(true)
    }

    return(
        <IonPage>
            <IonHeader mode='ios'>
                <IonToolbar mode='ios'>
                    <IonButtons slot="start">
                        <IonButton mode='ios' fill="clear" onClick={()=>{window.open('/main','_self')}}>
                            <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}} />
                            Reguler
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
                {(isLoadingBar === true)?
                    <IonProgressBar type="indeterminate" color='danger'></IonProgressBar>
                :""}
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid id='Reguler'>
                    <IonRow>
                        {/* <IonCol size='12'>
                            <IonButton mode='ios' onClick={()=>{setIsModalSuccess(true)}}>
                                test modal
                            </IonButton>
                        </IonCol> */}
                        <IonCol size='12'>
                            <IonText mode='ios'>
                                Data Pengirim
                                <IonIcon icon={(isNamaPengirim === '')?alertCircleOutline:checkmarkCircleOutline} color={(isNamaPengirim === '')?'danger':'success'} />
                            </IonText>
                        </IonCol>
                        <IonCol size='10' style={{background:"rgba(108,122,137,0.15)", padding:"1px 5px 1px 5px", margin:"3px 0", borderRadius:"10px 0 0 10px"}} onClick={()=>{openInput('Pengirim')}}>
                            <IonInput mode='ios' inputMode='text' placeholder='Alamat Pengirim' style={{textAlign:"start", fontSize:"12px"}} readonly={true} value={isLokasiPengirim} />
                        </IonCol>
                        <IonCol size='2' style={{background:"rgba(108,122,137,0.15)", borderRadius:"0 10px 10px 0", padding:"1px 5px", margin:"3px 0"}}>
                            <IonButton mode='ios' fill='clear' color={(isNamaPengirim === '')?'primary':'danger'} size='small' onClick={()=>{(isNamaPengirim === '')?openInput('Pengirim'):deleteInput('Pengirim')}}>
                                <IonRippleEffect></IonRippleEffect>                                
                                <IonIcon icon={(isNamaPengirim === '')?arrowForwardOutline:closeCircleOutline} />                                
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{margin:"5px 0"}}>
                        <IonCol size='6' style={{borderRadius:"5px 0 0 5px", padding:"7px 5px 1px 5px", margin:"2px 0", textAlign:"start"}}>
                            <IonText mode='ios' style={{fontSize:"12px", color:"gray"}}>Simpan alamat pengirim</IonText>
                        </IonCol>
                        <IonCol size='6' style={{borderRadius:"0 5px 5px 0", padding:"2px 5px 1px 5px", margin:"2px 0", textAlign:"end"}}>
                            <IonToggle enableOnOffLabels={true} mode='ios' name={`savePengirim`} onIonChange={(e)=>{setIsSavePengirim(e.detail.checked)}} ></IonToggle>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonGrid id='Reguler'>
                    <IonRow>
                        <IonCol size='12'>
                            <IonText mode='ios'>
                                Data Penerima
                                <IonIcon icon={(isNamaPenerima === '')?alertCircleOutline:checkmarkCircleOutline} color={(isNamaPenerima === '')?'danger':'success'} />
                            </IonText>
                        </IonCol>
                        <IonCol size='10' style={{background:"rgba(108,122,137,0.15)", padding:"1px 5px 1px 5px", margin:"3px 0", borderRadius:"10px 0 0 10px"}} onClick={()=>{openInput('Penerima')}}>
                            <IonInput mode='ios' inputMode='text' placeholder='Alamat Penerima' style={{textAlign:"start", fontSize:"12px"}} readonly={true} value={isLokasiPenerima} />
                        </IonCol>
                        <IonCol size='2' style={{background:"rgba(108,122,137,0.15)", borderRadius:"0 10px 10px 0", padding:"1px 5px", margin:"3px 0"}}>
                            <IonButton mode='ios' fill='clear' color={(isNamaPenerima === '')?'primary':'danger'} size='small' onClick={()=>{(isNamaPenerima === '')?openInput('Penerima'):deleteInput('Penerima')}}>
                                <IonRippleEffect></IonRippleEffect>                                
                                <IonIcon icon={(isNamaPenerima === '')?arrowForwardOutline:closeCircleOutline} />                                
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{margin:"5px 0"}}>
                        <IonCol size='6' style={{borderRadius:"5px 0 0 5px", padding:"7px 5px 1px 5px", margin:"2px 0", textAlign:"start"}}>
                            <IonText mode='ios' style={{fontSize:"12px", color:"gray"}}>Simpan alamat penerima</IonText>
                        </IonCol>
                        <IonCol size='6' style={{borderRadius:"0 5px 5px 0", padding:"2px 5px 1px 5px", margin:"2px 0", textAlign:"end"}}>
                            <IonToggle enableOnOffLabels={true} mode='ios' name={`savePenerima`} onIonChange={(e)=>{setIsSavePenerima(e.detail.checked)}} ></IonToggle>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonGrid id='Reguler'>
                    <IonRow>
                        <IonCol size='12'>
                            <IonText mode='ios'>
                                Informasi Barang
                                <IonIcon icon={(isNamaBarang === '' || isHargaBarang === '0')?alertCircleOutline:checkmarkCircleOutline} color={(isNamaBarang === '' || isHargaBarang === '')?'danger':'success'} />
                            </IonText>
                        </IonCol>
                        <IonCol size='12' style={{background:"rgba(108,122,137,0.15)", padding:"1px 5px 1px 5px", margin:"3px 0", borderRadius:"10px"}}>
                            <IonInput mode='ios' inputMode='text' placeholder='Nama Barang' style={{textAlign:"start", fontSize:"12px"}} value={isNamaBarang} onIonChange={(e)=>{inputBarang('Nama', String(e.detail.value))}} />
                        </IonCol>
                        <IonCol size='1' style={{padding:"7px 5px 1px 5px", background:"rgba(108,122,137,0.15)", margin:"3px 0", borderRadius:"10px 0 0 10px"}}>
                            <IonText mode='ios' style={{fontSize:"12px"}}>Rp</IonText>
                        </IonCol>
                        <IonCol size='11' style={{background:"rgba(108,122,137,0.15)", padding:"1px 5px 1px 5px", margin:"3px 0", borderRadius:"0 10px 10px 0"}}>
                            <IonInput mode='ios' inputMode='numeric' placeholder='Harga Barang' style={{textAlign:"start", fontSize:"12px"}} value={isHargaBarang} onIonChange={(e)=>{inputBarang('Harga', String(e.detail.value))}} />
                        </IonCol>
                        <IonCol size='7' style={{background:"rgba(108,122,137,0.15)", padding:"1px 5px 1px 5px", margin:"3px 0", borderRadius:"10px"}}>
                            <IonTextarea mode='ios' placeholder="Catatan" value={isCatatanBarang} onIonChange={(e)=>{setIsCatatanBarang(String(e.detail.value))}} autoGrow={true} rows={3} style={{fontSize:"12px"}}></IonTextarea>
                        </IonCol>
                        <IonCol size='5' style={{display:'flex', flexDirection:"column"}}>
                            <IonText mode='ios' style={{display:"flex", flexDirection:"row", justifyContent:"start", margin:"2px 0"}}>
                                <IonToggle mode='ios' checked={isAsuransiBarang} onIonChange={(e)=>{setIsAsuransiBarang(e.detail.checked)}}></IonToggle>
                                <span style={{fontSize:"12px", margin:"8px 2px"}}>Asuransi</span>
                            </IonText>
                            <IonText mode='ios' style={{display:"flex", flexDirection:"row", justifyContent:"start", margin:"2px 0"}}>
                                <IonToggle mode='ios' checked={isPackingBarang} onIonChange={(e)=>{setIsPackingBarang(e.detail.checked)}}></IonToggle>
                                <span style={{fontSize:"12px", margin:"8px 2px"}}>Packing</span>
                            </IonText>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonGrid id='Reguler'>
                    <IonRow>
                        <IonCol size='6' style={{padding:"10px 5px"}}>
                            <IonText mode='ios'>
                                Detail Barang
                            </IonText>
                        </IonCol>
                        <IonCol size='6' style={{textAlign:"end"}}>
                            {(noOfRows > 0)?
                            <IonButton mode='ios' fill="outline" color='danger' size='small' onClick={() => setNoOfRows(noOfRows - 1)}>
                                <IonIcon icon={trashBinOutline} />
                            </IonButton>:""}
                            <IonButton mode='ios' fill="outline" color='primary' size='small' onClick={() => setNoOfRows(noOfRows + 1)}>
                                <IonIcon icon={addCircleOutline} />
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow id='qtyDetail' style={{borderBottom:"solid 1px #CECECE", padding:"10px 0"}}>
                        <IonCol size='6' style={{padding:"1px 5px 1px 5px", margin:"3px 0"}}>
                            <IonInput mode='ios' inputMode='numeric' placeholder="Qty" style={{textAlign:"start", fontSize:"12px", background:"rgba(108,122,137,0.15)", borderRadius:"5px"}} name='qty[0]' onIonChange={()=>{doCalculateBerat()}} />
                        </IonCol>
                        <IonCol size='6' style={{padding:"1px 5px 1px 5px", margin:"3px 0"}}>
                            <IonInput mode='ios' inputMode='numeric' placeholder="Berat" style={{textAlign:"start", fontSize:"12px", background:"rgba(108,122,137,0.15)", borderRadius:"5px"}} name='berat[0]' onIonChange={()=>{doCalculateBerat()}} />
                        </IonCol>
                        <IonCol size='4' style={{padding:"1px 5px 1px 5px", margin:"3px 0"}}>
                            <IonInput mode='ios' inputMode='numeric' placeholder="Panjang" style={{textAlign:"start", fontSize:"12px", background:"rgba(108,122,137,0.15)", borderRadius:"5px"}} name='panjang[0]' onIonChange={()=>{doCalculateBerat()}} />
                        </IonCol>
                        <IonCol size='4' style={{padding:"1px 5px 1px 5px", margin:"3px 0"}}>
                            <IonInput mode='ios' inputMode='numeric' placeholder="Lebar" style={{textAlign:"start", fontSize:"12px", background:"rgba(108,122,137,0.15)", borderRadius:"5px"}} name='lebar[0]' onIonChange={()=>{doCalculateBerat()}} />
                        </IonCol>
                        <IonCol size='4' style={{padding:"1px 5px 1px 5px", margin:"3px 0"}}>
                            <IonInput mode='ios' inputMode='numeric' placeholder="Tinggi" style={{textAlign:"start", fontSize:"12px", background:"rgba(108,122,137,0.15)", borderRadius:"5px"}} name='tinggi[0]' onIonChange={()=>{doCalculateBerat()}} />
                        </IonCol>
                    </IonRow>
                    {[...Array(noOfRows)].map((a, index) => {
                        const id = index+1;
                        return(
                            <IonRow id='qtyDetail' style={{borderBottom:"solid 1px #CECECE", padding:"10px 0"}} key={index}>
                                <IonCol size='6' style={{padding:"1px 5px 1px 5px", margin:"3px 0"}}>
                                    <IonInput mode='ios' inputMode='numeric' placeholder="Qty" style={{textAlign:"start", fontSize:"12px", background:"rgba(108,122,137,0.15)", borderRadius:"5px"}} name={`qty[${id}]`} onIonChange={()=>{doCalculateBerat()}} />
                                </IonCol>
                                <IonCol size='6' style={{padding:"1px 5px 1px 5px", margin:"3px 0"}}>
                                    <IonInput mode='ios' inputMode='numeric' placeholder="Berat" style={{textAlign:"start", fontSize:"12px", background:"rgba(108,122,137,0.15)", borderRadius:"5px"}} name={`berat[${id}]`} onIonChange={()=>{doCalculateBerat()}} />
                                </IonCol>
                                <IonCol size='4' style={{padding:"1px 5px 1px 5px", margin:"3px 0"}}>
                                    <IonInput mode='ios' inputMode='numeric' placeholder="Panjang" style={{textAlign:"start", fontSize:"12px", background:"rgba(108,122,137,0.15)", borderRadius:"5px"}} name={`panjang[${id}]`} onIonChange={()=>{doCalculateBerat()}} />
                                </IonCol>
                                <IonCol size='4' style={{padding:"1px 5px 1px 5px", margin:"3px 0"}}>
                                    <IonInput mode='ios' inputMode='numeric' placeholder="Lebar" style={{textAlign:"start", fontSize:"12px", background:"rgba(108,122,137,0.15)", borderRadius:"5px"}} name={`lebar[${id}]`} onIonChange={()=>{doCalculateBerat()}} />
                                </IonCol>
                                <IonCol size='4' style={{padding:"1px 5px 1px 5px", margin:"3px 0"}}>
                                    <IonInput mode='ios' inputMode='numeric' placeholder="Tinggi" style={{textAlign:"start", fontSize:"12px", background:"rgba(108,122,137,0.15)", borderRadius:"5px"}} name={`tinggi[${id}]`} onIonChange={()=>{doCalculateBerat()}} />
                                </IonCol>
                            </IonRow>
                        )
                    })}
                </IonGrid>
            </IonContent>
            <IonFooter mode='ios'>
                <IonGrid style={{padding:0, margin:0}}>
                    <IonRow style={{background:"rgba(45, 85, 255, 0.5)"}}>
                        <IonCol size='1' style={{padding:"10px 5px"}}>
                            <IonIcon icon={ticketOutline} style={{fontSize:"18px"}} />
                        </IonCol>
                        <IonCol size='7' style={{textAlign:"start", padding:"10px 0"}}>
                            <IonText mode='ios' style={{fontSize:"12px"}}>Voucher kamu</IonText>
                        </IonCol>
                        <IonCol size='4'>
                            <IonButton mode='ios' size='small' color='light' fill="solid" expand="block" onClick={()=>{getVoucher()}}>
                                Pilih Voucher
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{background:"#F9F9F9"}}>
                        <IonCol size='8' style={{padding:"10px 20px"}}>
                            <IonText mode='ios' style={{display:'flex', flexDirection:"column"}}>
                                <span style={{fontSize:"14px", color:"black"}}>Total Berat</span>
                                {(isFull === true)?
                                <span style={{fontSize:"16px", color:"black"}}>{isBerat.toLocaleString(undefined, {maximumFractionDigits:2})}kg</span>
                                :
                                <span style={{fontSize:"16px"}}>
                                    <IonSpinner name="dots" color='dark' />
                                </span>
                                }
                            </IonText>
                        </IonCol>
                        <IonCol size='4'>
                            <IonButton mode='ios' fill="solid" color={(isFull === true)?'primary':'medium'} expand="block" onClick={()=>{doOverview()}}>
                                Next
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonFooter>

            <IonModal mode='ios' isOpen={isModalInput} onDidDismiss={()=>{setIsModalInput(false)}} animated={true}>
                <IonHeader mode='ios'>
                    <IonToolbar mode='ios'>
                        <IonButtons slot='start'>
                            <IonButton mode='ios' fill="clear" color='danger' onClick={()=>{setIsModalInput(false)}}>
                                Batal
                            </IonButton>
                        </IonButtons>
                        <IonTitle>Detail {isSelectInput}</IonTitle>
                        <IonButtons slot='end'>
                            <IonButton mode='ios' fill="clear" color='primary' onClick={()=>{saveDataInput()}}>
                                Simpan
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                    {(isLoadingBar === true)?
                        <IonProgressBar type="indeterminate" color='danger'></IonProgressBar>
                    :""}
                </IonHeader>
                <IonContent fullscreen>
                    <IonGrid>
                        <IonRow style={{margin:"5px 0"}}>
                            <IonCol size='2' style={{padding:"0 10px 0 0"}}>
                                <IonButton mode='ios' fill="outline" color='medium' onClick={()=>{setIsModalAddress(true)}}>
                                    <IonIcon icon={readerOutline} />
                                </IonButton>
                            </IonCol>
                            <IonCol size='10' style={{background:"rgba(108,122,137,0.15)", borderRadius:'10px', padding:"5px"}}>
                                <IonInput mode='ios' inputMode='text' color='dark' placeholder={`Nama ${isSelectInput}`} name={`nama${isSelectInput}`} />
                            </IonCol>
                        </IonRow>
                        <IonRow style={{margin:"5px 0"}}>
                            <IonCol size='1' style={{padding:"15px 5px", background:"rgba(108,122,137,0.15)", borderRadius:"10px 0 0 10px"}}>
                                <IonText mode='ios'>
                                    62
                                </IonText>
                            </IonCol>
                            <IonCol size='11' style={{background:"rgba(108,122,137,0.15)", borderRadius:'0 10px 10px 0', padding:"5px 0"}}>
                                <IonInput mode='ios' inputMode='numeric' color='dark' placeholder={`No. Telp ${isSelectInput}`} name={`phone${isSelectInput}`}/>
                            </IonCol>
                        </IonRow>
                        <IonRow style={{margin:"5px 0"}}>
                            <IonCol size='12' style={{background:"rgba(108,122,137,0.15)", borderRadius:'10px', padding:"5px 0"}}>
                                <IonTextarea mode='ios' color='dark' autoGrow={true} name={`alamat${isSelectInput}`} placeholder={`Alamat ${isSelectInput}`} rows={5}></IonTextarea>
                            </IonCol>
                        </IonRow>
                        <IonRow style={{margin:"5px 0"}}>
                            <IonCol size='12'  style={{background:"rgba(108,122,137,0.15)", borderRadius:'10px', padding:"5px 0"}}>
                                <IonInput mode='ios' inputMode='text' color='dark' placeholder={`Lokasi ${isSelectInput}`} name={`lokasi${isSelectInput}`} readonly={true} onClick={()=>{openModalLokasi()}} />
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonModal>

            <IonModal mode='ios' isOpen={isModalLokasi} onDidDismiss={()=>{setIsModalLokasi(false)}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
                <IonHeader mode='ios'>
                    <IonToolbar mode='ios'>
                        <IonButtons slot='start'>
                            <IonButton mode='ios' fill='clear' color='danger' onClick={()=>{setIsModalLokasi(false)}}>
                                <IonIcon icon={closeCircleOutline} />
                            </IonButton>
                        </IonButtons>
                        <IonTitle>Cari Lokasi {isSelectInput}</IonTitle>
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
                                <IonInput mode='ios' inputMode='text' placeholder='Provinsi/kota/kecamatan/kelurahan/kode pos' style={{textAlign:"start", fontSize:"12px", color:"black"}} name='qLokasi'/>
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

            <IonModal mode='ios' isOpen={isModalAddress} ref={isModalAddressRef} animated={true} onDidDismiss={()=>{setIsModalAddress(false)}} breakpoints={[0, 0.25, 0.75]} initialBreakpoint={0.25} backdropBreakpoint={0}>
                <IonHeader mode='ios' style={{padding:"5px"}}>
                    <IonSearchbar mode='ios' inputMode='search' placeholder="Cari buku alamat" style={{textAlign:"start"}} onClick={()=>{isModalAddressRef.current?.setCurrentBreakpoint(0.75)}} onIonChange={(e)=>{doSearchAddress(String(e.detail.value))}} />
                </IonHeader>
                <IonContent fullscreen>
                    <IonGrid>
                        {dataAddress.map((a, index) => {
                            return(
                                <IonRow key={index} style={{padding:"5px"}} onClick={()=>{doSelectAddress(a['id'], a['lokasi'], a['svc_id'], a['hub_id'], a['phone'], a['nama'], a['alamat'])}}>
                                    <IonCol size='12' style={{background:"#F1F1F1", borderRadius:"10px", padding:"10px"}}>
                                        <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                            <span>{a['nama']} - {a['phone']}</span>
                                            <span>{a['lokasi']}</span>
                                        </IonText>
                                    </IonCol>
                                </IonRow>
                            )
                        })}
                    </IonGrid>
                </IonContent>
            </IonModal>

            <IonModal mode='ios' isOpen={isModalVoucher} onDidDismiss={()=>{setIsModalVoucher(false)}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
                <IonHeader mode='ios'>
                    <IonToolbar mode='ios'>
                        <IonButtons slot='start'>
                            <IonButton mode='ios' fill="clear" color='primary' onClick={()=>{setIsModalVoucher(false)}}>
                                <IonIcon icon={closeCircleOutline}/>
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                    {(isLoadingBar === true)?
                        <IonProgressBar type="indeterminate" color='danger'></IonProgressBar>
                    :""}
                </IonHeader>
                <IonContent fullscreen>
                    <IonGrid>
                        {dataVoucher.map((a, index) => {
                            return(
                                <IonRow key={index}>
                                    <IonCol size='12' style={{padding:"5px"}}>
                                        <IonCard color="primary" style={{borderRadius:"20px", margin:"5px"}}>
                                            <IonGrid style={{margin:"10px"}}>
                                                <IonRow>
                                                    <IonCol size='9' style={{textAlign:"start", padding:"10px 0"}}>
                                                        <IonText mode='ios' style={{fontSize:"14px", borderBottom:"solid 1px white"}}>
                                                            Hingga : {a['end']}
                                                        </IonText>
                                                    </IonCol>
                                                    <IonCol size='3' style={{padding:0, margin:0}}>
                                                        <IonButton mode='ios' expand='block' fill='solid' size='small' color="medium">
                                                            <IonText mode='ios'>
                                                                S&K
                                                            </IonText>
                                                        </IonButton>
                                                    </IonCol>
                                                    <IonCol size='12' style={{textAlign:"start"}}>
                                                        <IonText mode='ios' style={{fontSize:"16px", fontWeight:"bold"}}>
                                                            {a['title']}
                                                        </IonText>
                                                    </IonCol>
                                                    <IonCol size='12'>
                                                        <IonButton mode='ios' color="warning" fill="outline" expand='block' onClick={()=>{doSelectVoucher(a)}}>
                                                            PAKAI VOUCHER
                                                        </IonButton>
                                                    </IonCol>
                                                </IonRow>
                                            </IonGrid>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>
                            )
                        })}
                    </IonGrid>
                </IonContent>
            </IonModal>

            <IonModal mode='ios' isOpen={isModalOverview} onDidDismiss={()=>{setIsModalOverview(false)}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
                <IonHeader mode='ios'>
                    <IonToolbar mode='ios'>
                        <IonButtons slot='start'>
                            <IonButton mode='ios' fill="clear" color='primary' onClick={()=>{setIsModalOverview(false)}}>
                                <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                                BACK
                            </IonButton>
                        </IonButtons>
                        <IonTitle>Overview</IonTitle>
                    </IonToolbar>
                    {(isLoadingBar === true)?
                        <IonProgressBar type="indeterminate" color='danger'></IonProgressBar>
                    :""}
                </IonHeader>
                <IonContent fullscreen>
                    <IonGrid id='Reguler'>
                        <IonRow>
                            <IonCol size='12'>
                                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:"14px", color:"black", margin:"3px 0"}}>Detail Pengirim</span>
                                    <span style={{fontSize:"12px", color:"#6c7a89"}}>{isNamaPengirim}</span>
                                    <span style={{fontSize:"12px", color:"#6c7a89"}}>0{isPhonePengirim}</span>
                                    <span style={{fontSize:"12px", color:"#6c7a89"}}>{isAlamatPengirim}</span>
                                    <span style={{fontSize:"12px", color:"#6c7a89"}}>{isLokasiPengirim}</span>
                                </IonText>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <IonGrid id='Reguler'>
                        <IonRow>
                            <IonCol size='12'>
                                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:"14px", color:"black", margin:"3px 0"}}>Detail Penerima</span>
                                    <span style={{fontSize:"12px", color:"#6c7a89"}}>{isNamaPenerima}</span>
                                    <span style={{fontSize:"12px", color:"#6c7a89"}}>0{isPhonePenerima}</span>
                                    <span style={{fontSize:"12px", color:"#6c7a89"}}>{isAlamatPenerima}</span>
                                    <span style={{fontSize:"12px", color:"#6c7a89"}}>{isLokasiPenerima}</span>
                                </IonText>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <IonGrid id='Reguler'>
                        <IonRow>
                            <IonCol size='12'>
                                <IonText mode='ios' style={{fontSize:"14px"}} color='dark'>Informasi Barang</IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"start", padding:"1px 5px"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}} color='dark'>
                                    Nama Barang
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"end", padding:"1px 5px"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}} color='dark'>
                                    {isNamaBarang}
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"start", padding:"1px 5px"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}} color='dark'>
                                    Harga Barang
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"end", padding:"1px 5px"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}} color='dark'>
                                    Rp{Number(isHargaBarang).toLocaleString(undefined, {maximumFractionDigits:2})}
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"start", padding:"1px 5px"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}} color='dark'>
                                    Asuransi Barang 
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"end", padding:"1px 5px"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}} color='dark'>
                                    {(isAsuransiBarang)?'Ya':'Tidak'}
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"start", padding:"1px 5px"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}} color='dark'>
                                    Packing Barang 
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"end", padding:"1px 5px"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}} color='dark'>
                                    {(isPackingBarang)?'Ya':'Tidak'}
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"start", padding:"1px 5px"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}} color='dark'>
                                    Estimasi Jumlah Box
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"end", padding:"1px 5px"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}} color='dark'>
                                    {isQty.toLocaleString(undefined, {maximumFractionDigits:2})} Pcs
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"start", padding:"1px 5px"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}} color='dark'>
                                    Estimasi Total Berat
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"end", padding:"1px 5px"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}} color='dark'>
                                    {isBerat.toLocaleString(undefined, {maximumFractionDigits:2})} Kg
                                </IonText>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                    <IonGrid id='Reguler'>
                        <IonRow>
                            <IonCol size='12'>
                                <IonText mode='ios' style={{fontSize:"14px"}} color='dark'>Informasi Biaya</IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"start", padding:"1px 5px"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}} color='dark'>
                                    Jenis Layanan
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"end", padding:"1px 5px"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}} color='dark'>
                                    Reguler
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"start", padding:"1px 5px"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}} color='dark'>
                                    Biaya Pengiriman
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"end", padding:"1px 5px"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}} color='dark'>
                                    Rp{(Number(dataOverview['unit_price']) * Number(dataOverview['berat'])).toLocaleString(undefined, {maximumFractionDigits:2})}
                                </IonText>
                            </IonCol>
                            {(dataOverview['isKontrak'] === false)?
                            <IonCol size='12' style={{padding:0, margin:0}}>
                                <IonRow style={{width:"100%"}}>
                                    <IonCol size='6' style={{textAlign:"start", padding:"1px 5px"}}>
                                        <IonText mode='ios' style={{fontSize:"12px"}} color='dark'>
                                            Voucher {dataSelectVoucher['type']}
                                        </IonText>
                                    </IonCol>
                                    <IonCol size='6' style={{textAlign:"end", padding:"1px 5px"}}>
                                        <IonText mode='ios' style={{fontSize:"12px"}} color='dark'>
                                            {(dataSelectVoucher['valueType'] === 'Diskon')?`${dataSelectVoucher['value']}%`:`Rp${Number(dataSelectVoucher['value']).toLocaleString(undefined, {maximumFractionDigits:2})}`}
                                        </IonText>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                            :''}
                            <IonCol size='6' style={{textAlign:"start", padding:"1px 5px"}}>
                                <IonText mode='ios' style={{fontSize:"14px"}} color='dark'>
                                    Total Biaya
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"end", padding:"1px 5px"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}} color='dark'>
                                    Rp{Number(dataOverview['price_after_voucher']).toLocaleString(undefined, {maximumFractionDigits:2})}
                                </IonText>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
                <IonFooter mode='ios' style={{background:"#F9F9F9"}}>
                    <IonGrid>
                        <IonRow>
                            <IonCol size='1' style={{padding:"15px 5px"}}>
                                <IonCheckbox style={{color:'#0000A0'}} mode='ios' checked={isAgree} onIonChange={(e)=>{setIsAgree(e.detail.checked)}}/>
                            </IonCol>
                            <IonCol size='11' style={{textAlign:"start", padding:"10px 0 10px 2px"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}} color='dark'>
                                    Saya sudah membaca dan menyetujui untuk mengikuti syarat dan ketentuan pengiriman yang berlaku.
                                </IonText>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size='10'>
                                <IonButton mode='ios' fill="solid" expand="block" color={(isAgree)?'primary':'medium'} onClick={()=>{doOrder()}}>
                                    PESAN SEKARANG
                                </IonButton>
                            </IonCol>
                            <IonCol size='2' style={{padding:"4px 2px", margin:0, textAlign:"end"}}>
                                <IonText mode='ios' style={{display:"flex", flexDirection:"column", margin:"2px 0", textAlign:"end"}}>
                                    <span style={{fontSize:"9px", margin:"2px 0", color:"black", width:"100%"}}>Cetak Invoice</span>
                                    <IonToggle mode='ios' checked={isPrintInvoice} onIonChange={(e)=>{setIsPrintInvoice(e.detail.checked)}}></IonToggle>
                                </IonText>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonFooter>
            </IonModal>

            <IonModal mode='ios' isOpen={isModalBluetooth} canDismiss={false} animated={true} initialBreakpoint={0.55} breakpoints={[0.55, 0.75]}>
                <IonContent fullscreen>
                <IonGrid style={{padding:"10px"}}>
                    <IonRow>
                        <IonCol size='12' style={{textAlgin:"center"}}>
                            <IonText mode='ios' style={{fontSize:"16px"}} color='dark'>
                                Pilih bluetooth Printer XPDC
                            </IonText>
                        </IonCol>
                        <IonCol size='12'>
                            {dataBluetooth.map((a, index) => {
                                return(
                                    <IonButton key={index} mode='ios' expand='block' color='light' style={{margin:"10px 5px", textAlign:"center"}} onClick={()=>{BTConnect(a['name'], a['address'])}}>
                                        <IonRippleEffect></IonRippleEffect>
                                        <IonText mode='ios' style={{display:"flex", flexDirection:"column", textAlign:"center"}}>
                                            <span style={{fontSize:"14px"}}>{a['name']}</span>
                                            <span style={{fontSize:"9px"}}>{a['address']}</span>
                                        </IonText>
                                    </IonButton>
                                )
                            })}
                        </IonCol>
                    </IonRow>
                </IonGrid>
                </IonContent>
            </IonModal>

            <IonModal mode='ios' isOpen={isModalSuccess} onDidDismiss={()=>{window.open('/main', '_self')}} animated={true}>
                <IonContent fullscreen> 
                    <IonGrid style={{padding:"10%"}}>
                        <IonRow>
                            <IonCol size='12'>
                                <IonImg src='assets/success.gif' style={{height:"35vh", width:"auto"}} />
                            </IonCol>
                            <IonCol size='12' style={{textAlign:"center"}}>
                                <IonText mode='ios'>
                                    {(isResultMessage !== '')?isResultMessage:'test ini adalah pesan untuk bookingnan berhasil'}
                                </IonText>
                            </IonCol>
                        </IonRow>
                        <IonRow>    
                            <IonCol size='12'>
                                <IonButton mode='ios' fill='solid' color='success' expand="block" onClick={()=>{window.open('/main', '_self')}}>
                                    Kembali ke Dashboard
                                </IonButton>
                            </IonCol>
                            {(isPrintInvoice === true && isGagalPrint === true)?
                            <IonCol size='12'>
                                <IonButton mode='ios' fill="clear" expand="block" color='medium' onClick={()=>{openModalListBluetooth()}}>
                                    Coba Print Receipt Kembali
                                </IonButton>
                            </IonCol>:""}
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
export default Reguler