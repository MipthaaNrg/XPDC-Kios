import $ from 'jquery'
import { IonGrid, IonRow, IonCol, IonText, useIonViewWillEnter, IonIcon, IonToast, IonActionSheet, IonButton, IonBadge, IonToggle, IonLabel, IonSegment, IonSegmentButton, IonLoading, IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButtons, IonMenuButton, IonInput, IonInfiniteScroll, IonInfiniteScrollContent, IonAlert, IonFab, IonFabButton, IonCheckbox, IonItem, IonSelect, IonSelectOption, IonSearchbar, IonAvatar, IonImg, IonList, IonDatetimeButton, IonDatetime, IonProgressBar, IonItemSliding, IonItemOption, IonItemOptions, IonSpinner, IonTextarea, IonRippleEffect, createAnimation, IonRadioGroup, IonRadio, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonPage, IonFabList, IonPicker, useIonPicker, IonPopover, useIonViewDidEnter } from '@ionic/react';
import { useRef, useState } from 'react';
import { addCircleOutline, addOutline, alertCircleOutline, alertCircleSharp, arrowBack, arrowDownCircleOutline, arrowForwardCircleSharp, arrowUpCircleSharp, banOutline, boatOutline, calendar, calendarOutline, carOutline, cartOutline, checkmarkOutline, chevronBackOutline, chevronForwardOutline, clipboardOutline, closeCircle, closeCircleOutline, closeOutline, cloudCircleOutline, ellipsisVerticalCircle, filterOutline, hourglass, hourglassOutline, informationCircleOutline, languageOutline, locateOutline, locationOutline, mapOutline, megaphoneOutline, navigateCircleOutline, navigateOutline, peopleCircleOutline, peopleOutline, play, pulseOutline, radioButtonOnOutline, readerOutline, refreshCircleOutline, refreshOutline, scanOutline, searchCircle, searchCircleOutline, searchOutline, sendOutline, shareSocialOutline, swapVerticalOutline, syncCircleOutline, syncOutline, timeOutline, trash, trashBin, trashBinOutline, trashOutline, warningOutline, wifiOutline } from 'ionicons/icons';
import { GoogleMap } from '@capacitor/google-maps'
import { Capacitor } from '@capacitor/core';
import React from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { LottiePaySuccess } from './lottieAnimation'
import './SewaTruck.css'

const SewaTruck: React.FC = () => {
    const [dataLokasi, setDataLokasi]:any = useState([])
    const [dataOriginLokasi, setDataOriginLokasi] = useState([])
    const [dataTruck, setDataTruck] = useState([])
    const [dataInfo, setDataInfo] = useState([])
    const [latlangAsal, setLatlangAsal] = useState('')
    const [latlangTujuan, setLatlangTujuan] = useState('')
    const [lokasiAsal, setLokasiAsal] = useState('')
    const [lokasiTujuan, setLokasiTujuan] = useState('')
    const [alamatAsal, setAlamatAsal] = useState('')
    const [alamatTujuan, setAlamatTujuan] = useState('')
    const [realAddressAsal, setRealAddressAsal] = useState('')
    const [realAddressTujuan, setRealAddressTujuan] = useState('')
    const [namaAsal, setNamaAsal] = useState('')
    const [phoneAsal, setPhoneAsal] = useState('')
    const [namaTujuan, setNamaTujuan] = useState('')
    const [phoneTujuan, setPhoneTujuan] = useState('')
    const [selectType, setSelectType] = useState('')
    const [selectInfo, setSelectInfo] = useState('')
    const [selectSuratJalanBalik, setSelectSuratJalan] = useState('asal')
    const [alamatSurat, setAlamatSurat] = useState('')
    const [lokasiSurat, setLokasiSurat] = useState('')
    const [latlngSurat, setLatlngSurat] = useState('')
    const [namaSurat, setNamaSurat] = useState('')
    const [phoneSurat, setPhoneSurat] = useState('')
    const [kodeUnikDriver, setKodeUnikDriver] = useState('')
    const [isModalLokasi, setIsModalLokasi] = useState(false)
    const [isModalLokasiSurat, setIsModalLokasiSurat] = useState(false)
    const [isModalCalender, setIsModalCalender] = useState(false)
    const [isModalDone, setIsModalDone] = useState(false)
    const [isModalStep2, setIsModalStep2] = useState(false)
    const [isModalStep3, setIsModalStep3] = useState(false)
    const [isModalInformation, setIsModalInformation] = useState(false)
    const [isModalUnavailable, setIsModalUnavailable] = useState(false)
    const [isToast, setIsToast] = useState(false)
    const [isMessageToast, setIsMessageToast] = useState('')
    const [isColorToast, setIsColotToast] = useState('')
    const [isDurationToast, setIsDurationToast] = useState(Number)
    const [isToastLokasi, setIsToastLokasi] = useState(false)
    const [isMessageToastLokasi, setIsMessageToastLokasi] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isLoading2, setIsLoading2] = useState(false)
    const [isMessageLoading2, setIsMessageLoading2] = useState('')
    const [isAlertKonfirmasi, setIsAlertKonfirmasi] = useState(false)
    const [isInfiniteDisabled, setInfiniteDisabled] = useState(false)
    const [isResult, setIsResult] = useState(false)
    const [isResultPriceKm, setIsResultPriceKm] = useState(Number)
    const [isResultPrice, setIsResultPrice] = useState(Number)
    const [isResultDistance, setIsResultDistance] = useState(Number)
    const [isResultDuration, setIsResultDuration] = useState('')
    const [isResultPriceFerries, setIsResultPriceFerries] = useState(Number)
    const [isResultPriceToll, setIsResultPriceToll] = useState(Number)
    const [isResultPriceTollAdd, setIsResultPriceTollAdd] = useState(Number)
    const [isLayanan, setIsLayanan] = useState(true)
    const [isAsuransi, setIsAsuransi] = useState(false)
    const [isPindahRumah, setIsPindahRumah] = useState(false)
    const [isSuratJalanBalik, setIsSuratJalanBalik] = useState(false)
    const [isKodeUnikDriver, setIsKodeUnikDriver] = useState(false)
    const [isCatatanPengemudi, setIsCatatanPengemudi] = useState('')
    const [dataFile, setDataFile] = useState([])
    const [isFile, setIsFile] = useState(false)
    const [truckId, setTruckId] = useState('1')
    const [truckJenis, setTruckJenis] = useState('')
    const [truckMaxBerat, setTruckMaxBerat] = useState(Number)
    const [truckMaxVolume, setTruckMaxVolume] = useState(Number)
    const [truckMaxKubikasi, setTruckMaxKubikasoi] = useState(Number)
    const [truckPanjang, setTruckPanjang] = useState(Number)
    const [truckLebar, setTruckLebar] = useState(Number)
    const [truckTinggi, setTruckTinggi] = useState(Number)
    const [truckImage, setTruckImage] = useState('')
    const [infoTitle, setInfoTitle] = useState('')
    const [infoContent, setInfoContent] = useState('')
    const [isAnimationSuccess, setIsAnimationSuccess] = useState('')
    const [isDoneTracking, setIsDoneTracking] = useState('')
    const [isDoneDate, setIsDoneDate] = useState('')
    const [north, setNorth] = useState('')
    const [south, setSouth] = useState('')
    const [west, setWest] = useState('')
    const [east, setEast] = useState('')
    const [map, setMap] = React.useState<google.maps.Map>()
    const [mapBg, setMapBg] = React.useState<google.maps.Map>()
    const [marker, setMarker] = React.useState<google.maps.Marker>()
    const [isSelectPicker, setIsSelectPicker] = useState('')
    const [timeOrder, setTimeOrder] = useState('')
    const iconMarker = "https://xpdcargo.id/marker.png"
    const iconMarkerAsal = "https://xpdcargo.id/Pin_Asal1.png"
    const iconMarkerTujuan = "https://xpdcargo.id/Pin_Tujuan1.png"
    const [isIncludeFerries, setIsIncludeFerries] = useState('')
    const [isIncludeFerriesDistance, setIsIncludeFerriesDistance] = useState(Number)
    const [isIncludeFerriesTransit, setIsIncludeFerriesTransit] = useState(Number)
    const [isIncludeFerriesPrice, setIsIncludeFerriesPrice] = useState(Number)
    var auto
    var details
    const isModalTruckRef = useRef<HTMLIonModalElement>(null)
    const [isFullScreen, setIsFullScreen] = useState(false)
    const [isFullScreenTruck, setIsFullScreenTruck] = useState(false)
    const [isAvailableDriver, setISAvailableDriver] = useState(Number)
    const [isMetodePembayaran, setIsMetodePembayaran] = useState('2')


    useIonViewWillEnter(() => {
        getDataTruck()
    })
    function getDataTruck(){
        $.ajax({
            type: "POST",
            url: "https://xpdcargo.id/login/Callback/apiGetTruckList",
            data: {
                key: 'xpdcidjkt1'
            },
            dataType: "JSON",
            beforeSend:function(){
                setIsLoading(true)
            },
            success:function(r:any){
                setIsLoading(false)
                setDataTruck(r.data)
                setDataInfo(r.info)
                setIsAnimationSuccess(String(r.base64Done))
                setNorth(r.radius[0].east)
                setSouth(r.radius[0].south)
                setWest(r.radius[0].west)
                setEast(r.radius[0].east)
            },
            error:function(err){
                console.log(err)
                setIsLoading(false)
            }
        })
    }
    function openModalLokasi(type:any){
        setSelectType(type)
        setIsModalLokasi(true)
        setDataLokasi([])
        setDataOriginLokasi([])
    }    
    function qLokasi(){
        var val = String($("ion-input[name='qLokasi']").val())
        setIsLoading(true)
        if(String(val).trim() !== ''){
            setTimeout(() => {
                // const arrayLokasi:any = []
                const apiKey = "AIzaSyD5yDeWQuLOPQbOuEgCeIkooyLzZPkjKKE";
                const mapElement:any = document.getElementById('map2');    
                const center = {lat:-6.1298180843172485 , lng:106.18061451924886}
                const loader = new Loader({
                    apiKey: apiKey,
                    version: "weekly",
                    libraries: ["places"]
                });
                loader.load().then((res) => {
                    const map = new google.maps.Map(mapElement, {
                        zoom: 18,
                        center: center,
                        restriction:{
                            latLngBounds: {
                                north: Number(north),
                                south: Number(south),
                                west: Number(west),
                                east: Number(east)
                            },
                            strictBounds: false
                        },
                        disableDefaultUI: false,
                        streetViewControl: false,
                        zoomControl: false,
                    })
                    setMap(map)
                    const marker = new google.maps.Marker({
                        map: map,
                        position: center,
                        title: "Geser dan tandai sesuai dengan lokasi kamu saat ini",
                        draggable: true,
                        animation: google.maps.Animation.DROP,
                        icon: iconMarker
                    })

                    google.maps.event.addListener(marker, 'dragend', ()=>{
                        var lat = marker.getPosition()?.toJSON().lat
                        var lng = marker.getPosition()?.toJSON().lng
                        console.log(marker)
                        if(String(selectType) === 'asal'){
                            setLatlangAsal(String(`${lat},${lng}`))
                        }
                        if(String(selectType) === 'tujuan'){
                            setLatlangTujuan(String(`${lat},${lng}`))
                        }
                        if(String(selectType === 'surat')){
                            setLatlngSurat(String(`${lat},${lng}`))
                        }
                        getDetailAddress(lat, lng, apiKey)
                    })
                    setMarker(marker)

                    auto = new google.maps.places.AutocompleteService()
                    details = new google.maps.places.PlacesService(map)
                    auto.getPlacePredictions({
                        bounds: {
                            north: Number(north),
                            south: Number(south),
                            west: Number(west),
                            east: Number(east)
                        },
                        input: String(val),
                        fields: ['place_id', 'geometry', 'name', 'formatted_address', 'types'],
                        language: 'id',
                        region: 'id',
                        componentRestrictions: {country: 'id'},
                        strictBounds: true
                    }, function(r, status){
                        marker.setVisible(false)
                        dataLokasi.length = 0
                        r.forEach((a)=>{
                            // console.log(a)
                            details.getDetails({
                                placeId: String(a.place_id),
                                fields: ['name','rating','formatted_phone_number','geometry']
                            }, function(d, status){
                                console.log(d)
                                dataLokasi.push({
                                    place_id: a.place_id,
                                    reference: a.reference,
                                    name: d.description,
                                    lokasi: a.description,
                                    geo: d.geometry
                                })
                                // arrayLokasi.push({
                                //     place_id: a.place_id,
                                //     reference: a.reference,
                                //     name: d.description,
                                //     lokasi: a.description,
                                //     geo: d.geometry
                                // })
                                // setDataOriginLokasi(arrayLokasi)
                                setIsLoading(false)
                            })
                        })
                        // setDataLokasi(arrayLokasi)
                    })
                })
            }, 1000);
        }else{
            setIsLoading(false)
        }
    }
    function selectLokasiMap(geo:any, place_id:any, reference:any, lokasi:any){
        setIsLoading2(true)
        map?.setCenter(geo.location)
        marker?.setVisible(false)
        marker?.setPosition(geo.location)
        marker?.setVisible(true)
        marker?.setAnimation(google.maps.Animation.DROP)
        marker?.setIcon(iconMarker)
        var lat = marker?.getPosition()?.toJSON().lat
        var lng = marker?.getPosition()?.toJSON().lng
        if(selectType === 'asal'){
            setAlamatAsal(lokasi)
            setLokasiAsal(lokasi)
            setLatlangAsal(String(`${lat},${lng}`))
        }
        if(selectType === 'tujuan'){
            setAlamatTujuan(lokasi)
            setLokasiTujuan(lokasi)
            setLatlangTujuan(String(`${lat},${lng}`))
        }
        if(selectType === 'surat'){
            setAlamatSurat(lokasi)
            setLokasiSurat(lokasi)
            setLatlngSurat(`${lat},${lng}`)
        }
        setTimeout(() => {
            $("ion-input[name='qLokasi']").val('')
            setDataLokasi([])
            setIsLoading2(false)
            setIsMessageToastLokasi(lokasi)
            setIsToastLokasi(true)
        }, 1200);
    }
    function closeModal(){
        if(selectType === 'asal'){
            if(alamatTujuan !== ''){
                doCalculate((truckId !== '')?truckId:'')
            }
        }
        if(selectType === 'tujuan'){
            if(alamatAsal !== ''){
                doCalculate((truckId !== '')?truckId:'')
            }
        }
        setIsLoading2(true)
        setTimeout(() => {
            setIsLoading2(false)
            $("ion-input[name='qLokasi']").val('')
            setIsModalLokasi(false)
        }, 2500);
    }


    function validData(){
        var nama_asal = String($("ion-input[name='nama_asal']").val())
        var nama_tujuan = String($("ion-input[name='nama_tujuan']").val())
        var phone_asal = String($("ion-input[name='phone_asal']").val())
        var phone_tujuan = String($("ion-input[name='phone_tujuan']").val())
        if(String(nama_asal).trim() !== '' && String(phone_asal).trim() !== '' && String(nama_tujuan).trim() !== '' && String(phone_tujuan).trim() !== ''){
            setNamaAsal(nama_asal)
            setPhoneAsal(phone_asal)
            setNamaTujuan(nama_tujuan)
            setPhoneTujuan(phone_tujuan)
            setIsModalStep3(true)
        }else{
            setIsMessageToast('Data kontak wajib diisi!')
            setIsColotToast('danger')
            setIsDurationToast(4000)
            setIsToast(true)
        }
    }

    function doCalculate(truckId:any){
        let data = new FormData()
        data.append('lokasiAsal', lokasiAsal)
        data.append('lokasiTujuan', lokasiTujuan)
        data.append('latlangAsal', latlangAsal)
        data.append('latlangTujuan', latlangTujuan)
        if(truckId !== ''){
            data.append('truck_id', truckId)
        }
        $.ajax({
            type: "POST",
            url: "https://xpdcargo.id/login/Callback/apiCalculateTruck2",
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
                if(r.isAvailabel === true){
                    setISAvailableDriver(r.available_driver)
                    setRealAddressAsal(r.addres_origin)
                    setRealAddressTujuan(r.address_destination)
                    if(truckId !== ''){
                        setIsResultPrice(Number(r.isPrice))
                        setIsResultPriceFerries(Number(r.isPriceFerries))
                        setIsResult(true)
                    }
                    setIsResultPriceKm(Number(r.harga_perkm))
                    setIsResultPriceToll(Number(r.isPriceToll))
                    setIsResultPriceTollAdd(Number(r.isPriceTollAdd))
                    setIsResultDistance(Number(r.distance_convert))
                    setIsResultDuration(r.duration_conver)
                    setIsIncludeFerries((r.isFerries)?'Yes':'No')
                    setIsIncludeFerriesPrice(r.isPriceFerries)
                    setIsIncludeFerriesDistance(r.distanceFerries)
                    setIsIncludeFerriesTransit(r.isFerriesTransit)
                    $("#mapBackground").show()
                    showGMBackground((r.isFerries)?'Yes':'No')
                }
                if(r.isAvailabel === false){
                    if(selectType === 'asal'){
                        setLokasiAsal('')
                        setAlamatAsal('')
                        setLatlangAsal('')
                    }
                    if(selectType === 'tujuan'){
                        setLokasiTujuan('')
                        setAlamatTujuan('')
                        setLatlangTujuan('')
                    }
                    setIsResult(false)
                    showToast('Lokasi area diluar jangkauan kami, tunggu hingga rute dibuka', 'danger', 1200)
                }
            },
            error:function(err){
                setIsLoading(false)
                console.log(err)
            }
        })
    }
    function showGMBackground(isFerries:any){
        const splitAsal = latlangAsal.split(",")
        const splitTujuan = latlangTujuan.split(",")
        const mapElement:any = document.getElementById('mapBackground');    
        const render = new google.maps.DirectionsRenderer()
        const service = new google.maps.DirectionsService()
        const loader = new Loader({
            apiKey: "AIzaSyD5yDeWQuLOPQbOuEgCeIkooyLzZPkjKKE",
            version: "weekly",
            libraries: ["places"]
        });
        loader.load().then((res) => {
            // console.log(res)        
            const mapBg = new google.maps.Map(mapElement, {
                zoom: 5,
                center: {
                    lat: Number(splitAsal[0]),
                    lng: Number(splitAsal[1])
                },
                noClear:true,
                mapTypeId: google.maps.MapTypeId['ROADMAP'],
                disableDefaultUI: false,
                streetViewControl: false,
                zoomControl: false,
            })
            setMapBg(mapBg)

            mapBg.addListener("center_changed", () => {
                setTimeout(() => {
                    setIsFullScreen(true)
                    setIsFullScreenTruck(true)
                }, 1000);
                console.log('onholdddd')
            })
            mapBg.addListener("idle", () => {
                setTimeout(() => {
                    setIsFullScreen(false)
                    setIsFullScreenTruck(false)
                }, 1000);
                console.log('onlessss')
            })
            if(isFerries === 'No'){
                render.setMap(mapBg)
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
            }else{
                var marker1 = new google.maps.Marker({
                    map: mapBg,
                    position: {
                        lat: Number(splitAsal[0]),
                        lng: Number(splitAsal[1])
                    },
                    title: "Lokasi Asal",
                    draggable: false,
                    animation: google.maps.Animation.DROP,
                    icon: iconMarkerAsal
                })
                var marker2 = new google.maps.Marker({
                    map: mapBg,
                    position: {
                        lat: Number(splitTujuan[0]),
                        lng: Number(splitTujuan[1])
                    },
                    title: "Lokasi Tujuan",
                    draggable: false,
                    animation: google.maps.Animation.DROP,
                    icon: iconMarkerTujuan
                })
                const path = [
                    marker1.getPosition() as google.maps.LatLng,
                    marker2.getPosition() as google.maps.LatLng,
                ]
                var poly = new google.maps.Polyline({
                    strokeColor: "#0000A0",
                    strokeOpacity: 1.0,
                    strokeWeight: 3,
                    geodesic: true,
                    map: mapBg,
                    clickable: false
                })
                poly.setPath(path)
            }
            var cek = cekFerriesToll(latlangAsal, latlangTujuan)
            console.log(cek)
            
        })
    }
    function cekFerriesToll(latlngOrigins:any, latlngDestinations:any){
        var api = "e0cfc72f629d4a8aac2188650d522b69";
        var isFerries = false
        var isToll = false
        var distanceFerries = 0
        var distanceToll = 0
        var countFerries = 0
        var countToll = 0
        var distance = 0 //value meter to kilo meter
        var distanceNonFerriesNonToll = 0
        var data = new Object()
        var ferrieName:any = []
        $.ajax({
            type: "GET",
            url: `https://api.geoapify.com/v1/routing?waypoints=${latlngOrigins}|${latlngDestinations}&mode=truck&apiKey=${api}&units=metric&type=short`,
            dataType: "JSON",
            success:function(r:any){
                console.log(r)
                distance = (r.features[0].properties.distance / 1000)
                isFerries = r.features[0].properties.ferry
                isToll = r.features[0].properties.toll
                r.features[0].properties.legs[0].steps.forEach((a, index)=>{
                    if(a['toll'] && !a['ferry']){
                        countToll++
                        distanceToll += a['distance']
                    }
                    if(a['ferry']){
                        countFerries++
                        distanceFerries += a['distance']
                        ferrieName.push({
                            jenis: a['instruction']['text']
                        })
                        console.log(a)
                    }
                    if(!a['toll'] && !a['ferry']){
                        distanceNonFerriesNonToll += a['distance']
                    }
                })
                console.log(`Distance: ${distance}, DistanceNonTollNonFerries: ${distanceNonFerriesNonToll}, isFerries: ${isFerries}, isToll: ${isToll}`)

                
                data['isFerries'] = isFerries
                data['isToll'] = isToll
                data['distanceFerries'] = distanceFerries //value meter
                data['distanceToll'] = distanceToll // value meter
                data['countFerries'] = countFerries
                data['countToll'] = countToll
                data['distance'] = distance
                data['distanceNonTollNonFerries'] = distanceNonFerriesNonToll
                data['ferrieName'] = ferrieName
                
            }
        })
        return data
    }
    function openModalData(type:any){
        setSelectType(type)
        openModalLokasi(type)
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

    function selectFile(){
        $("#file").click()
    }

    function onSelectFile(){
        var file = $("input[name='file']").prop('files');
        var data:any = dataFile
        if(dataFile.length <= 1){
            if(String(file[0].type) === 'application/pdf' || String(file[0].type) === 'image/png' || String(file[0].type) === 'image/jpeg'){
                getBase64(file[0]).then((res) => {
                    data.push({
                        base64: res,
                        name: file[0]['name'],
                        type: file[0]['type'],
                        file: file[0]
                    })
                })
                console.log(data)
                setDataFile(data)
                setIsLoading(true)
                setIsFile(false)
                setTimeout(() => {
                    setIsFile(true)
                    setIsLoading(false)
                }, 500);
    
                
            }else{
                setIsMessageToast('File harus berformat PDF or JPEG or PNG')
                setIsColotToast('danger')
                setIsDurationToast(3000)
                setIsToast(true)
            }
        }else{
            setIsMessageToast('Hanya dapat mengupload maksimum 2 file/foto')
            setIsColotToast('danger')
            setIsDurationToast(2000)
            setIsToast(true)
        }
    }

    function onDeleteFile(index:any, nama:any){
        var data:any = dataFile
        data.splice(index, 1)
        setDataFile(data)
        
        if(data.length > 0){
            setIsLoading(true)
            setIsFile(false)
            setTimeout(() => {
                setIsFile(true)
                setIsLoading(false)
            }, 500);
        }else{
            setIsFile(false)
        }
    }

    function selectTruck(id:any, truck:any, no_polisi:any, berat:any, volume:any, kubikasi:any, panjang:any, lebar:any, tinggi:any, image:any, status:any){
        isModalTruckRef.current?.setCurrentBreakpoint(0.45)
        if(String(status) === '0'){ 
            setTruckId(id)
            setTruckImage(image)
            setTruckJenis(truck)
            setTruckMaxBerat(Number(berat))
            setTruckMaxVolume(Number(volume))
            setTruckMaxKubikasoi(Number(kubikasi))
            setTruckPanjang(Number(panjang))
            setTruckLebar(Number(lebar))
            setTruckTinggi(Number(tinggi))
            // setIsTruckDetail(true)
            if(latlangAsal !== '' && latlangTujuan !== ''){
                doCalculate(id)
            }
        }else{
            setIsModalUnavailable(true)
        }
    }

    function openModalInfo(type:any){
        setSelectInfo(type)
        var data = dataInfo.filter((a) => {
            return String(a['type']) === String(type)
        })
        if(data.length > 0){
            setInfoTitle(String(data[0]['title']))
            setInfoContent(String(data[0]['content']))
            setIsModalInformation(true)
        }else{
            setIsMessageToast("Informasi belum tersedia!")
            setIsColotToast('danger')
            setIsDurationToast(1200)
            setIsToast(true)
        }
        
    }

    function doOrder(){
        let data = new FormData()
        var spearLokasiAsal = lokasiAsal.split(', ')
        var spearLokasiTujuan = lokasiTujuan.split(', ')
        if(isAsuransi === true){
            data.append('asuransi', '1')
        }

        if(isSuratJalanBalik === true){
            data.append('surat_jalan_balik', selectSuratJalanBalik)
            data.append('SJName', String(namaSurat))
            data.append('SJPhone', String(phoneSurat))
            data.append('SJAddress', String(lokasiSurat))
            data.append('SJLatlng', String(latlngSurat))
        }

        if(isKodeUnikDriver === true){
            data.append('kode_unik_driver', kodeUnikDriver)
        }

        if(dataFile.length > 0){
            data.append('isFile', '1')
            dataFile.forEach((a, index) => {
                if(index === 0){
                    data.append(`file`, String(a['base64']))
                    data.append(`file_id`, String(index))
                    data.append(`file_type`, String(a['type']).split('/')[1])
                    data.append(`file_name`, a['name'])
                }
                if(index === 1){
                    data.append(`file2`, String(a['base64']))
                    data.append(`file2_id`, String(index))
                    data.append(`file2_type`, String(a['type']).split('/')[1])
                    data.append(`file2_name`, a['name'])
                }
            })
        }

        var isPrice = isResultPrice
        
        data.append('nama_pengirim', namaAsal)
        data.append('no_telepon_pengirim', phoneAsal)
        data.append('provinsi_pengirim', spearLokasiAsal[0])
        data.append('kota_pengirim', spearLokasiAsal[1])
        data.append('kecamatan_pengirim', spearLokasiAsal[2])
        data.append('kelurahan_pengirim', spearLokasiAsal[3])
        data.append('kodepos_pengirim', spearLokasiAsal[4])
        data.append('alamat_pengirim', `${alamatAsal} ${(String(realAddressAsal) !== '')?'('+realAddressAsal+')':''}`)
        data.append('nama_penerima', namaTujuan)
        data.append('no_telepon_penerima', phoneTujuan)
        data.append('provinsi_penerima', spearLokasiTujuan[0])
        data.append('kota_penerima', spearLokasiTujuan[1])
        data.append('kecamatan_penerima', spearLokasiTujuan[2])
        data.append('kelurahan_penerima', spearLokasiTujuan[3])
        data.append('kodepos_penerima', spearLokasiTujuan[4])
        data.append('alamat_penerima', `${alamatTujuan} ${(String(realAddressTujuan) !== '')?'('+realAddressTujuan+')':''}`)
        data.append('layanan', 'Sewa Truck')
        data.append('catatan', isCatatanPengemudi)
        data.append('isPrice', String(isPrice))
        data.append('isPriceFerries', String(isIncludeFerriesPrice))
        data.append('isPriceToll', String(isResultPriceToll))
        data.append('isPriceTollAdd', String(isResultPriceTollAdd))
        data.append('isDistance', String(isResultDistance))
        data.append('isDuration', isResultDuration)
        data.append('latlangAsal', latlangAsal)
        data.append('latlangTujuan', latlangTujuan)
        data.append('user_id', String(localStorage.getItem('userid')))
        data.append('truck_id', truckId)
        data.append('truck_jenis', truckJenis)
        data.append('truck_max_berat', String(truckMaxBerat))
        data.append('truck_max_volume', String(truckMaxVolume))
        data.append('truck_max_kubikasi', String(truckMaxKubikasi))
        data.append('truck_panjang', String(truckPanjang))
        data.append('truck_lebar', String(truckLebar))
        data.append('truck_tinggi', String(truckTinggi))
        data.append('timeOrder', timeOrder)
        data.append('payment_method', String(isMetodePembayaran))

        $.ajax({
            type: "POST",
            url: "https://xpdcargo.id/login/Callback/addSewaTruck",
            data: data,
            processData:false,
            contentType:false,
            dataType: "JSON",
            beforeSend:function(){
                setIsMessageLoading2('Memproses pesanan..')
                setIsLoading2(true)
            },
            success:function(r:any){
                $("#mapBackground").hide();
                setIsLoading2(false)
                setIsDoneTracking(String(r.no_tracking))
                setIsDoneDate(String(r.date))
                setIsModalDone(true)
                setIsModalStep2(false)
                setIsModalStep3(false)
                setIsResult(false)
                setLokasiAsal('')
                setLokasiTujuan('')
                setAlamatAsal('')
                setAlamatTujuan('')
                setNamaAsal('')
                setPhoneAsal('')
                setNamaTujuan('')
                setPhoneTujuan('')
                setAlamatSurat('')
                setLokasiSurat('')
                setNamaSurat('')
                setPhoneSurat('')
                setLatlngSurat('')
                setIsAsuransi(false)
                setIsSuratJalanBalik(false)
                setIsKodeUnikDriver(false)
                setKodeUnikDriver('')
                setIsCatatanPengemudi('')
                setDataFile([])
            },
            error:function(err){
                console.log(err)
                setIsLoading2(false)
                setIsMessageToast('Proses pemesanan gagal, periksa server API kamu!')
                setIsColotToast('danger')
                setIsDurationToast(1500)
                setIsToast(true)
            }
        })
    }

    function getBase64(file:File) {
        return new Promise(resolve => {
            let baseURL = "";
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                baseURL = String(reader.result)
                resolve(baseURL);
            };
        });
    }

    function getDetailAddress(lat:any, lng:any, key:any){
        $.ajax({
            type:"GET",
            url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`,
            dataType:"JSON",
            beforeSend:function(){
                setIsLoading2(true)
            },
            success:function(r:any){
                setIsLoading2(false)
                if(selectType === 'asal'){
                    setLokasiAsal(r.plus_code.compound_code)
                    setAlamatAsal(r.plus_code.compound_code)
                    setLatlangAsal(`${lat},${lng}`)
                }
                if(selectType === 'tujuan'){
                    setLokasiTujuan(r.plus_code.compound_code)
                    setAlamatTujuan(r.plus_code.compound_code)
                    setLatlangTujuan(`${lat},${lng}`)
                }
                if(selectType === 'surat'){
                    setLokasiSurat(r.plus_code.compound_code)
                    setAlamatSurat(r.plus_code.compound_code)
                    setLatlngSurat(`${lat},${lng}`)
                }
                console.log(r)
                setIsMessageToastLokasi(r.plus_code.compound_code)
                setIsToastLokasi(true)
            },
            error:function(err){
                setIsLoading2(false)
                console.log(err)
            }
        })
    }
    function openModalPicker(type:any){
        setIsSelectPicker(type)
        setIsModalCalender(true)
    }
    function onSelectDate(){
        var date = new Date()
        if(isSelectPicker === 'date'){
            var fulldate = String($(`ion-datetime[name='isSelectDate']`).val())
            if(fulldate !== ''){
                var split = fulldate.split("T")
                var jam = split[1].split(":")
                console.log(`Tanggal: ${split[0]}, Jam: ${jam[0]}:${jam[1]}`)
                setTimeOrder(`${split[0]},${jam[0]}:${jam[1]}`)
            }else{
                console.log(`Tanggal(empy): ${date.getFullYear()}-${date.getMonth()}-${date.getDate()}, Jam(empty): ${date.getHours()}:${date.getMinutes()}`)
                setTimeOrder(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()},${date.getHours()}:${date.getMinutes()}`)
            }
        }else{
            var fulldate2 = String($(`ion-datetime[name='isSelectTime']`).val())
            if(fulldate2 !== ''){
                var split = fulldate2.split("T")
                var time = split[1].split(":")
                console.log(`Jam: ${time[0]}:${time[1]}`)
                setTimeOrder(`${time[0]}:${time[1]}`)
            }else{
                console.log(`Jam(empy): ${date.getHours()}:${date.getMinutes()}`)
                setTimeOrder(`${date.getHours()}:${date.getMinutes()}`)
            }
        }
        setIsModalCalender(false)
    }
    function doDeleteTime(){
        setTimeOrder('')
    }
    function doCenterMap(){
        const latlng = latlangAsal.split(",")
        mapBg?.panTo({lat:Number(latlng[0]), lng:Number(latlng[1])})
    }
    function showToast(message:any, color:any, duration:any){
        setIsMessageToast(message)
        setIsColotToast(color)
        setIsDurationToast(duration)
        setIsToast(true)
    }
    function onHoldPress(){
        
    }
    function onLessPress(){
        
    }
    function onExpandTruck(val:any){
        if(val === 0.75){
            setIsFullScreenTruck(true)
        }
        if(val === 0.45){
            setIsFullScreenTruck(false)
        }
    }
    function openModalLokasiSurat(){
        setSelectType('surat')
        setIsModalLokasiSurat(true)
        setDataLokasi([])
        setDataOriginLokasi([])
    }
    function closeModalSurat(){
        setIsLoading2(true)
        setTimeout(() => {
            setIsLoading2(false)
            $("ion-input[name='qLokasi']").val('')
            setIsModalLokasiSurat(false)
        }, 2500);
    }
    function validasiKonfirmasi(){
        if(isSuratJalanBalik){
            if(String(namaSurat).trim() !== '' && String(phoneSurat).trim() !== '' && String(lokasiSurat) !== ''){
                setIsAlertKonfirmasi(true)
            }else{
                showToast('Data pengiriman surat jalan balik masih kosong', 'danger', 1200)
            }
        }else{
            setIsAlertKonfirmasi(true)
        }
    }
    function openModalStep2(){
        if(latlangAsal !== '' && latlangTujuan !== '' && truckId !== '' && timeOrder !== ''){
            setIsModalStep2(true)
        }else{
            showToast('Masih ada data yang belum kamu isi', 'danger', 1200)
        }
    }
    return(
        <IonPage>
            <IonHeader mode='ios'>
                <IonToolbar mode='ios'>
                    <IonButtons slot='start'>
                        <IonButton fill='clear' color='primary' mode='ios' href='/main' routerDirection='back'>
                            <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                            BACK
                        </IonButton>
                    </IonButtons>
                    <IonTitle>
                        SEWA TRUCK
                    </IonTitle>
                    <IonButtons slot='end'>
                        <IonButton mode='ios' color='primary' fill='clear' onClick={()=>{getDataTruck()}}>
                            <IonIcon icon={refreshOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
                {(isLoading === true)?
                    <div style={{width:"100vw",background:"rgba(0,0,0,0.20)", padding:"0 0 3px 0"}} className='animLoading'>
                        <IonText mode='ios' style={{fontSize:"12px"}}>Mohon tunggu...</IonText>
                    </div>
                :''}
                {/* {(isLoading === true)?
                    <IonProgressBar type="indeterminate"></IonProgressBar>
                :""} */}

                {(dataTruck.length > 0)?
                <IonGrid style={{textAlign:"start", background:"none !important", transform:isFullScreen?"translateY(-120%)":'translateY(0)', transition:"all 0.5s"}} className="animSlideDown">
                    <IonRow style={{background:"#FFFFFF", borderRadius:"15px", padding:"5px 25px 0 5px", margin:"7px 7px 0 7px", border:"solid 1px #ECECEC", position:"relative", boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.35)"}}>
                        <IonCol size='1' style={{textAlgin:"start", padding:"2px"}}>
                            <IonIcon icon={arrowUpCircleSharp} color='success' style={{fontSize:"20px"}} />
                        </IonCol>
                        <IonCol size='11' style={{textAlign:"start", borderBottom:"solid 1px #CECECE", padding:"2px"}} onClick={()=>{openModalData('asal')}}>
                            <IonText mode='ios' style={{fontSize:"12px", color:"black"}} className='inBlink'>
                                {(alamatAsal !== '')?lokasiAsal.split(",")[0]:'Titik jemput kamu'}
                            </IonText>
                        </IonCol>
                        <IonCol size='1' style={{textAlgin:"start", padding:"5px 2px 2px 2px"}}>
                            <IonIcon icon={radioButtonOnOutline} color='danger' style={{fontSize:"20px"}}/>
                        </IonCol>
                        <IonCol size='11' style={{textAlign:"start", padding:"5px 2px"}} onClick={()=>{openModalData('tujuan')}} className='inBlink'>
                            <IonText mode='ios' style={{fontSize:"12px", color:"black"}}>
                                {(alamatTujuan !== '')?lokasiTujuan.split(",")[0]:'Titik antar kamu'}
                            </IonText>
                        </IonCol>
                    </IonRow>
                    {(isAvailableDriver !== 0)?
                    <IonRow style={{padding:"0 5px", margin:0}}>
                        <IonCol size='12' style={{position:"relative", textAlign:"end", padding:0, margin:0}}>
                            <IonButton mode='ios' color='warning' fill='solid' size='small' className='infoDriver'>
                                {isAvailableDriver}
                                <IonIcon icon={navigateCircleOutline} slot='end' style={{margin:"0 2px", padding:0}}/>                                
                            </IonButton>
                        </IonCol>
                    </IonRow>:""}
                </IonGrid>:""}
            </IonHeader>
            <IonContent style={{padding:0, margin:0, position:"absolute", top:0, left:0, height:"100vh", width:"100vw"}}>
                <div style={{height:"100vh", margin:0, padding:0}} onMouseDown={()=>{onHoldPress()}} onMouseUp={()=>{onLessPress()}}>
                    <capacitor-google-map id='mapBackground' ></capacitor-google-map>
                </div>
                
                <IonModal mode='ios' isOpen={(dataTruck.length > 0)?true:false} animated={true} canDismiss={false} breakpoints={[0.45, 0.75]} initialBreakpoint={0.45} backdropBreakpoint={0.45} ref={isModalTruckRef} id='breakLanjutkan1' style={{transform:isFullScreen?'translateY(100%)':'translateY(0)', transition:"all 0.5s"}} onIonBreakpointDidChange={(e)=>{onExpandTruck(Number(e.detail.breakpoint))}}>
                    <IonHeader style={{padding:"6px"}}></IonHeader>
                    <IonContent fullscreen>
                        <IonList style={{maxHeight:"60vh", overflowX:"scroll"}}>
                            <IonRadioGroup allowEmptySelection={false} value={truckId}>
                                {dataTruck.map((a, index) => {
                                    return(
                                        <IonItem key={index} mode='ios' lines="none">
                                            <IonGrid style={{padding:0, margin:0, background:"none !important"}}>
                                                <IonRow>
                                                    <IonCol size='2' style={{padding:"10px 0", margin:0}}>
                                                        {(a['status'] === '1')?
                                                            <IonText mode='ios' className='isLabel'>Not Ready</IonText>
                                                        :''}
                                                        <IonImg src={a['image']} style={{width:"60px", background:"transparent"}}/>
                                                    </IonCol>
                                                    <IonCol size='10' style={{padding:"10px 15px"}}>
                                                        <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                                            <span style={{fontSize:"14px", color:"black"}}>{a['jenis_mobil']}</span>
                                                            <span style={{fontSize:"10px", color:"#CECECE"}}>Max. Berat {a['max_berat']}kg</span>
                                                            <span style={{fontSize:"10px", color:"#CECECE"}}>Max. Kubikasi {a['max_kubikasi']}<sup>m3</sup></span>
                                                            <span style={{fontSize:"10px", color:"#CECECE"}}>Panjang {a['panjang']}cm | Lebar {a['lebar']} | Tinggi {a['tinggi']}</span>
                                                        </IonText>
                                                    </IonCol>
                                                </IonRow>
                                            </IonGrid>
                                            <IonRadio value={a['id']} mode='ios' disabled={(a['status'] === '1')?true:false} onClick={()=>{selectTruck(a['id'], a['jenis_mobil'], a['no_polisi'], a['max_berat'], a['max_volume'], a['max_kubikasi'], a['panjang'], a['lebar'], a['tinggi'], a['image'], a['status'])}}></IonRadio>
                                        </IonItem>
                                    )
                                })}
                            </IonRadioGroup>
                        </IonList>

                        <IonModal mode='ios' isOpen={isResult} animated={true} initialBreakpoint={0.20} breakpoints={[0.20]} backdropBreakpoint={0.20} canDismiss={false} id='breakLanjutkan' style={{transform:isFullScreenTruck?'translateY(40%)':'translateY(0)', transition:"all 0.55s"}} >
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
                                        <IonCol size='6' style={{textAlign:"center"}}>
                                            <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                                <span style={{fontSize:"12px", fontWeight:"bold"}}>-+{isResultDuration}</span>
                                                <span style={{fontSize:"10px"}}>Estimasi Waktu</span>
                                            </IonText>
                                        </IonCol>
                                        <IonCol size='6' style={{textAlign:"center"}}>
                                            <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                                <span style={{fontSize:"12px", fontWeight:"bold"}}>
                                                    Rp.{isResultPrice.toLocaleString(undefined, {maximumFractionDigits:2})}
                                                </span>
                                                <span style={{fontSize:"10px"}}>Total Harga</span>
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
                                        <IonCol size='2' style={{textAlign:"start", margin:0}}>
                                            <IonFab>
                                                <IonFabButton mode='ios' color='primary' onClick={()=>{openModalPicker('date')}} size='small'>
                                                    <IonIcon icon={calendarOutline} style={{fontSize:"18px"}} />
                                                </IonFabButton>
                                            </IonFab>
                                        </IonCol> 
                                        <IonCol size='10' style={{margin:0}}>
                                            {(isLoading === true)?
                                                <IonButton mode='ios' color='success' shape='round' expand='block'>
                                                    <IonSpinner name='crescent' color='light'></IonSpinner>
                                                </IonButton>
                                            :
                                            <IonButton mode='ios' color='success' shape='round' expand='block' disabled={(timeOrder === '')?true:false} onClick={()=>{openModalStep2()}}>
                                                {(timeOrder === '')?'Atur jadwal dulu yah':'Lanjutkan'}
                                                <IonIcon icon={arrowForwardCircleSharp} slot='end'/>
                                            </IonButton>}
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonContent>
                        </IonModal>
                    </IonContent>
                </IonModal>
            </IonContent>

            <IonModal mode='ios' isOpen={isModalCalender} onDidDismiss={()=>{setIsModalCalender(false)}} animated={true} id='modalCalender'>
                <IonContent style={{position:"relative", padding:0, margin:0}}>
                    {(isSelectPicker === 'date')?
                    <IonDatetime presentation='date-time' name='isSelectDate' style={{color:"black", borderRadius:"20px", position:"absolute", bottom:"5px", right:0, width:"100%", background:"white"}} locale='id' mode='ios' min={new Date().toISOString()}></IonDatetime>
                    :
                    <IonDatetime presentation='time' locale='id' style={{color:"black", borderRadius:"20px", position:"absolute", bottom:"5px", right:0, width:"100%"}} name='isSelectTime'></IonDatetime>
                    }
                </IonContent>
                <IonFooter style={{padding:0, margin:0, background:"none !important"}}>
                    <IonButton mode='ios' expand='block' shape='round' color='primary' fill='solid' onClick={()=>{onSelectDate()}}>
                        Konfirmasi
                    </IonButton>
                </IonFooter>
            </IonModal>
            
            <IonModal mode='ios' isOpen={isModalLokasiSurat} onDidDismiss={()=>{setIsModalLokasiSurat(false)}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
                <IonHeader mode='ios'>
                    <IonToolbar mode='ios'>
                        <IonButtons slot='start'>
                            <IonButton mode='ios' color='primary' onClick={()=>{setIsModalLokasiSurat(false)}}>
                                <IonIcon icon={closeCircleOutline} />
                            </IonButton>
                        </IonButtons>
                        <IonTitle>Pengiriman Surat Jalan</IonTitle>
                    </IonToolbar>
                    {(isLoading === true)?
                        <IonProgressBar type="indeterminate"></IonProgressBar>
                    :""}
                    <IonGrid style={{background:"transparent"}}>
                        <IonRow style={{padding:0, boxShadow:"0 14px 27px -18px rgba(0,0,0,0.55)", borderRadius:"10px", background:"#EDEDED", margin:"0 0 10px 0"}}>
                            <IonCol size='10' style={{padding:"4px 0 4px 10px"}}>
                                <IonInput inputMode='text' placeholder={`Cari Lokasi..`} name='qLokasi' mode='ios' style={{color:"black", textAlign:"start", fontSize:"14px"}} />
                            </IonCol>
                            <IonCol size='2' style={{padding:"4px 0"}} onClick={()=>{qLokasi()}}>
                                <IonButton mode='ios' fill='clear' color='secondary' size='small'>
                                    <IonIcon icon={searchOutline}/>
                                </IonButton>
                            </IonCol>
                        </IonRow>
                        
                        {(dataLokasi.length > 0)?
                        <IonRow style={{padding:"0 5px", background:"rgba(82,67,0,0.30)", borderRadius:"5px", border:"solid 1px silver", margin:"0 5px"}}>
                            {dataLokasi.map((a, index) => {
                                return(
                                    <IonCol size='12' key={index} style={{background:"#EDEDED", borderRadius:"5px", margin:"2px 0", textAlign:"start", padding:"5px 10px", border:"solid 1px gray", color:"black"}} onClick={()=>{selectLokasiMap(a['geo'], a['place_id'], a['reference'], a['lokasi'])}}>
                                        <IonText mode='ios' style={{fontSize:"12px", margin:0, padding:0}}>
                                            {a['lokasi']}
                                        </IonText>
                                    </IonCol>
                                )
                            })}

                            {(dataLokasi.length < 4)?
                            <IonCol size='12' style={{padding:0, margin:"10px 0"}}>
                                <IonButton mode='ios' expand='block' color='secondary' fill='solid' size='small' onClick={()=>{qLokasi()}}>
                                    <IonIcon icon={refreshCircleOutline} slot='start' style={{margin:"0 5px 0 0"}} />
                                    Tampilkan yang lain
                                </IonButton>
                            </IonCol>:""}
                        </IonRow>
                        :''}
                    </IonGrid>
                </IonHeader>
                <IonContent style={{padding:0, margin:0, position:"absolute", top:0, left:0, height:"100vh", width:"100vw"}}>
                    <div style={{height:"100vh", margin:0, padding:0}}>
                        <capacitor-google-map id='map2'></capacitor-google-map>
                    </div>
                </IonContent>
                <IonFooter mode='ios' style={{background:"transparent", position:"absolute", bottom:0, right:0, width:"100%"}}>
                    <IonGrid>
                        <IonRow>
                            <IonCol size='12'>
                                <IonButton mode='ios' expand='block' color='tertiary' onClick={()=>{closeModalSurat()}}>
                                    <IonRippleEffect></IonRippleEffect>
                                    KONFIRMASI
                                </IonButton>    
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonFooter>
            </IonModal>

            <IonModal mode='ios' isOpen={isModalLokasi} onDidDismiss={()=>{setIsModalLokasi(false)}} animated={true} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
                <IonHeader mode='ios'>
                    <IonToolbar mode='ios'>
                        <IonButtons slot='start'>
                            <IonButton mode='ios' color='primary' onClick={()=>{setIsModalLokasi(false)}}>
                                <IonIcon icon={closeCircleOutline} />
                            </IonButton>
                        </IonButtons>
                        <IonTitle>Cari Lokasi {selectType}</IonTitle>
                    </IonToolbar>
                    {(isLoading === true)?
                        <IonProgressBar type="indeterminate"></IonProgressBar>
                    :""}
                    <IonGrid style={{background:"transparent"}}>
                        <IonRow style={{padding:0, boxShadow:"0 14px 27px -18px rgba(0,0,0,0.55)", borderRadius:"10px", background:"#EDEDED", margin:"0 0 10px 0"}}>
                            <IonCol size='10' style={{padding:"4px 0 4px 10px"}}>
                                <IonInput inputMode='text' placeholder={`Cari Lokasi ${selectType}`} name='qLokasi' mode='ios' style={{color:"black", textAlign:"start", fontSize:"14px"}} />
                            </IonCol>
                            <IonCol size='2' style={{padding:"4px 0"}} onClick={()=>{qLokasi()}}>
                                <IonButton mode='ios' fill='clear' color='secondary' size='small'>
                                    <IonIcon icon={searchOutline}/>
                                </IonButton>
                            </IonCol>
                        </IonRow>
                        
                        {(dataLokasi.length > 0)?
                        <IonRow style={{padding:"0 5px", background:"rgba(82,67,0,0.30)", borderRadius:"5px", border:"solid 1px silver", margin:"0 5px"}}>
                            {dataLokasi.map((a, index) => {
                                return(
                                    <IonCol size='12' key={index} style={{background:"#EDEDED", borderRadius:"5px", margin:"2px 0", textAlign:"start", padding:"5px 10px", border:"solid 1px gray", color:"black"}} onClick={()=>{selectLokasiMap(a['geo'], a['place_id'], a['reference'], a['lokasi'])}}>
                                        <IonText mode='ios' style={{fontSize:"12px", margin:0, padding:0}}>
                                            {a['lokasi']}
                                        </IonText>
                                    </IonCol>
                                )
                            })}

                            {(dataLokasi.length < 4)?
                            <IonCol size='12' style={{padding:0, margin:"10px 0"}}>
                                <IonButton mode='ios' expand='block' color='secondary' fill='solid' size='small' onClick={()=>{qLokasi()}}>
                                    <IonIcon icon={refreshCircleOutline} slot='start' style={{margin:"0 5px 0 0"}} />
                                    Tampilkan yang lain
                                </IonButton>
                            </IonCol>:""}
                        </IonRow>
                        :''}
                    </IonGrid>
                </IonHeader>
                <IonContent style={{padding:0, margin:0, position:"absolute", top:0, left:0, height:"100vh", width:"100vw"}}>
                    <div style={{height:"100vh", margin:0, padding:0}}>
                        <capacitor-google-map id='map2'></capacitor-google-map>
                    </div>
                </IonContent>
                {(selectType === 'asal')?(latlangAsal !== '')?
                <IonFooter mode='ios' style={{background:"transparent", position:"absolute", bottom:0, right:0, width:"100%"}}>
                    <IonGrid>
                        <IonRow style={{padding:"0 5px"}}>
                            <IonCol size='12'>
                                <IonButton mode='ios' expand='block' color='tertiary' onClick={()=>{closeModal()}}>
                                    <IonRippleEffect></IonRippleEffect>
                                    KONFIRMASI
                                </IonButton>    
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonFooter>:"":(latlangTujuan !== '')?
                <IonFooter mode='ios' style={{background:"transparent", position:"absolute", bottom:0, right:0, width:"100%"}}>
                    <IonGrid>
                        <IonRow>
                            <IonCol size='12'>
                                <IonButton mode='ios' expand='block' color='tertiary' onClick={()=>{closeModal()}}>
                                    <IonRippleEffect></IonRippleEffect>
                                    KONFIRMASI
                                </IonButton>    
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonFooter>
                :""}
            </IonModal>

            <IonModal mode='ios' isOpen={isModalStep2} onDidDismiss={()=>{setIsModalStep2(false)}} enterAnimation={inAnimation}leaveAnimation={outAnimation}>
                <IonHeader mode='ios'>
                    <IonToolbar mode='ios'>
                        <IonButtons slot='start'>
                            <IonButton mode='ios' color='primary' onClick={()=>{setIsModalStep2(false)}} fill='clear'>
                                <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                                STEP 1
                            </IonButton>
                        </IonButtons>
                        <IonTitle>
                            Layanan
                        </IonTitle>
                    </IonToolbar>
                    {(isLoading === true)?
                        <IonProgressBar type="indeterminate"></IonProgressBar>
                    :""}
                </IonHeader>
                <IonContent>
                    <IonGrid style={{margin:"10px", border:"solid 1px gray", borderRadius:"10px", textAlign:"start"}}>
                        <IonRow>
                            <IonCol size='12' style={{background:"rgba(108,122,137,0.45)", padding:"10px", borderRadius:"5px"}}>
                                <IonText mode='ios' style={{fontSize:"14px"}}>
                                    Kontak
                                </IonText>
                            </IonCol>
                            <IonCol size='12'>
                                <IonText mode='ios' style={{fontSize:"10px", lineHeight:"50%"}}>
                                    Pastikan kontak yang kamu masukkan dapat kami hubungi sebagai keperluan surat jalan balik (jika ada)
                                </IonText>
                            </IonCol>
                            <IonCol size='12'>
                                <IonText mode='ios' style={{fontSize:"14px", fontWeight:"bold"}}>
                                    Asal
                                </IonText>
                            </IonCol>
                            <IonCol size='12' style={{background:"rgba(108,122,137,0.15)", borderRadius:"5px", padding:"2px 10px", margin:"2px 0"}}>
                                <IonInput mode='ios' inputMode='text' placeholder='Nama Lengkap' name={`nama_asal`} value={(namaAsal !== '')?namaAsal:''} onIonChange={(e) => {setNamaAsal(String(e.detail.value))}} style={{fontSize:"12px"}}/>
                            </IonCol>
                            <IonCol size='1' style={{background:"rgba(108,122,137,0.15)", borderRadius:"5px 0 0 5px", padding:"7px 1px", margin:"2px 0"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}}>
                                    +62
                                </IonText>
                            </IonCol>
                            <IonCol size='11' style={{background:"rgba(108,122,137,0.15)", borderRadius:"0 5px 5px 0", padding:"2px 0", margin:"2px 0"}}>
                                <IonInput mode='ios' inputMode='numeric' placeholder='No. Telepon' name={`phone_asal`} value={(phoneAsal !== '')?Number(phoneAsal):''} onIonChange={(e) => {setPhoneAsal(String(e.detail.value))}} style={{fontSize:"12px"}}/>
                            </IonCol>
                            <IonCol size='12'>
                                <IonText mode='ios' style={{fontSize:"14px", fontWeight:"bold"}}>
                                    Tujuan
                                </IonText>
                            </IonCol>
                            <IonCol size='12' style={{background:"rgba(108,122,137,0.15)", borderRadius:"5px", padding:"2px 10px", margin:"2px 0"}}>
                                <IonInput mode='ios' inputMode='text' placeholder='Nama Lengkap' name={`nama_tujuan`} value={(namaTujuan !== '')?namaTujuan:''} onIonChange={(e) => {setNamaTujuan(String(e.detail.value))}} style={{fontSize:"12px"}}/>
                            </IonCol>
                            <IonCol size='1' style={{background:"rgba(108,122,137,0.15)", borderRadius:"5px 0 0 5px", padding:"7px 1px", margin:"2px 0"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}}>
                                    +62
                                </IonText>
                            </IonCol>
                            <IonCol size='11' style={{background:"rgba(108,122,137,0.15)", borderRadius:"0 5px 5px 0", padding:"2px 0", margin:"2px 0"}}>
                                <IonInput mode='ios' inputMode='numeric' placeholder='No. Telepon' name={`phone_tujuan`} value={(phoneTujuan !== '')?Number(phoneTujuan):''} onIonChange={(e) => {setPhoneTujuan(String(e.detail.value))}} style={{fontSize:"12px"}}/>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                    <IonGrid style={{margin:"10px", border:"solid 1px gray", borderRadius:"10px", textAlign:"start"}}>
                        <IonRow>
                            <IonCol size='12' style={{background:"rgba(108,122,137,0.45)", padding:"10px", borderRadius:"5px"}}>
                                <IonText mode='ios' style={{fontSize:"14px"}}>
                                    Layanan
                                </IonText>
                            </IonCol>
                            <IonCol size='10'>
                                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:"14px"}}>
                                        Layanan Standar
                                        <IonIcon slot='end' icon={informationCircleOutline} style={{margin:"0 5px"}} onClick={()=>{openModalInfo('0')}}/>
                                    </span>
                                    <span style={{fontSize:"12px", color:"rgb(45,85,255)"}}>
                                        Gratis
                                    </span>
                                </IonText>
                            </IonCol>
                            <IonCol size='2' style={{textAlign:"end"}}>
                                <IonCheckbox mode='ios' name='isLayanan' checked={isLayanan} disabled={true}></IonCheckbox>
                            </IonCol>
                            <IonCol size='10'>
                                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:"14px"}}>
                                        Asuransi Barang
                                        <IonIcon slot='end' icon={informationCircleOutline} style={{margin:"0 5px"}} onClick={()=>{openModalInfo('1')}}/>
                                    </span>
                                    <span style={{fontSize:"12px", color:"rgb(45,85,255)"}}>
                                        Rp 8 Juta
                                    </span>
                                </IonText>
                            </IonCol>
                            <IonCol size='2' style={{textAlign:"end"}}>
                                <IonCheckbox mode='ios' name='isAsuransi' checked={isAsuransi} onIonChange={(e) => {setIsAsuransi(e.detail.checked)}}></IonCheckbox>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                    <IonGrid style={{margin:"10px", border:"solid 1px gray", borderRadius:"10px", textAlign:"start"}}>
                        <IonRow>
                            <IonCol size='12' style={{background:"rgba(108,122,137,0.45)", padding:"10px", borderRadius:"5px"}}>
                                <IonText mode='ios' style={{fontSize:"14px"}}>
                                    Catatan dan Lampiran
                                </IonText>
                            </IonCol>
                            <IonCol size='12' style={{border:"solid 1px gray", borderRadius:"5px", margin:"10px 0"}}>
                                <IonTextarea mode='ios' inputMode='text' autoGrow={true} placeholder='Catatan untuk Pengemudi' rows={4} value={isCatatanPengemudi} onIonChange={(e)=>{setIsCatatanPengemudi(String(e.detail.value))}} />
                            </IonCol>
                            <IonCol size='10' style={{padding:"10px 0"}}>
                                <IonText mode='ios' style={{fontSize:"12px", fontWeight:"bold"}}>
                                    Foto atau Lampiran <sup>(Max Jumlah Upload 2 item)</sup>
                                </IonText>
                            </IonCol>
                            {(dataFile.length <= 1)?
                            <IonCol size='2' style={{textAlign:"end"}}>
                                <input type='file' name='file' id='file' style={{display:"none"}} onChange={()=>{onSelectFile()}}/>
                                <IonButton mode='ios' color='primary' fill='clear' onClick={()=>{selectFile()}} size='small'>
                                    <IonRippleEffect></IonRippleEffect>
                                    <IonIcon icon={addCircleOutline} />
                                </IonButton>
                            </IonCol>
                            :""}
                        </IonRow>
                        {(isFile === true)?
                        dataFile.map((a, index) => {
                            return(
                                <IonRow key={index} style={{background:"rgba(108,122,137,0.15)", borderRadius:"5px", margin:"5px 0"}}>
                                    <IonCol size='10' style={{padding:"10px 5px"}}>
                                        <IonText mode='ios' style={{fontSize:"14px"}}>
                                            {a['name']}
                                        </IonText>
                                    </IonCol>
                                    <IonCol size='2' style={{textAlign:'end'}}>
                                        <IonButton mode='ios' color='danger' fill='clear' size='small' onClick={()=>{onDeleteFile(index, a['name'])}}>
                                            <IonIcon icon={closeCircleOutline} />
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            )
                        })
                        :''}
                    </IonGrid>
                </IonContent>
                <IonFooter mode='ios'>
                    <IonGrid>
                        <IonRow style={{margin:"10px 0", background:"rgba(108,122,137,0.35)", borderRadius:"10px", padding:"10px", color:"black"}}>
                            <IonCol size='4' style={{textAlign:"center"}}>
                                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:"14px", fontWeight:"bold"}}>
                                        Rp{isResultPrice.toLocaleString(undefined, {maximumFractionDigits:2})}
                                    </span>
                                    <span style={{fontSize:"12px"}}>Total Harga</span>
                                </IonText>
                            </IonCol>
                            <IonCol size='4' style={{textAlign:"center"}}>
                                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:"14px", fontWeight:"bold"}}>{isResultDistance.toLocaleString(undefined, {maximumFractionDigits:2})} Km</span>
                                    <span style={{fontSize:"12px"}}>Jarak Tempuh</span>
                                </IonText>
                            </IonCol>
                            <IonCol size='4' style={{textAlign:"center"}}>
                                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:"14px", fontWeight:"bold"}}>{isResultDuration}</span>
                                    <span style={{fontSize:"12px"}}>Estimasi Waktu</span>
                                </IonText>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size='12'>
                                <IonButton mode='ios' expand='block' color='primary' onClick={()=>{validData()}}>
                                    <IonRippleEffect></IonRippleEffect>
                                    NEXT TO STEP 3
                                    <IonIcon slot='end' icon={chevronForwardOutline} />
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonFooter>
            </IonModal>

            <IonModal mode='ios' isOpen={isModalStep3} onDidDismiss={()=>{setIsModalStep3(false)}} enterAnimation={inAnimation}leaveAnimation={outAnimation}>
                <IonHeader mode='ios'>
                    <IonToolbar mode='ios'>
                        <IonButtons slot='start'>
                            <IonButton mode='ios' color='primary' onClick={()=>{setIsModalStep3(false)}} fill='clear'>
                                <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                                STEP 2
                            </IonButton>
                        </IonButtons>
                        <IonTitle>
                            TAHAP AKHIR
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid style={{margin:"10px", border:"solid 1px gray", borderRadius:"10px", textAlign:"start"}}>
                        <IonRow>    
                            <IonCol size='2'>
                                <IonImg src={truckImage} style={{width:"100%"}}/>
                            </IonCol>
                            <IonCol size='10'>
                                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:"14px"}}>{truckJenis}</span>
                                    <span style={{fontSize:"12px"}}>Max. Berat {truckMaxBerat.toLocaleString(undefined, {maximumFractionDigits:2})} Kg</span>
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"start"}}>
                                <IonText mode='ios' style={{fontSize:"14px"}}>
                                    Jarak
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"end"}}>
                                <IonText mode='ios' style={{fontSize:"14px"}}>
                                    {isResultDistance.toLocaleString(undefined, {maximumFractionDigits:2})} Km ({isResultDuration})
                                </IonText>
                            </IonCol>
                            <IonCol size='11' style={{background:"rgba(27, 163, 156, 0.45)", padding:"5px", borderRadius:"5px 0 0 5px"}}>
                                <IonText mode='ios' style={{fontSize:"12px"}}>
                                    Transporter kami akan menghubungi kamu paling lambat 2 hari ketika kamu mengkonfirmasi pesanan!
                                </IonText>
                            </IonCol>
                            <IonCol size='1' style={{background:"rgba(27, 163, 156,0.45)", borderRadius:"0 5px 5px 0"}} onClick={()=>{openModalInfo('4')}}>
                                <IonIcon icon={informationCircleOutline} style={{margin:"5px 0", fontSize:"20px"}}/>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <IonGrid style={{margin:"10px", border:"solid 1px gray", borderRadius:"10px", textAlign:"start"}}>
                        <IonRow>    
                            <IonCol size='12' style={{background:"rgba(108,122,137,0.45)", padding:"10px", borderRadius:"5px"}}>
                                <IonText mode='ios' style={{fontSize:"14px"}}>
                                    Perincian Lokasi
                                </IonText>
                            </IonCol>
                            <IonCol size='12'>
                                <IonLabel mode='ios' style={{fontSize:"12px"}}>Asal</IonLabel>
                                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:"14px", fontWeight:"bold"}}>{namaAsal.toUpperCase()}</span>
                                    <span style={{fontSize:"12px"}}>{phoneAsal}</span>
                                    <span style={{fontSize:"12px"}}>{lokasiAsal}</span>
                                </IonText>
                            </IonCol>    
                            <IonCol size='12'>
                                <IonLabel mode='ios' style={{fontSize:"12px"}}>Tujuan</IonLabel>
                                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:"14px", fontWeight:"bold"}}>{namaTujuan.toUpperCase()}</span>
                                    <span style={{fontSize:"12px"}}>{phoneTujuan}</span>
                                    <span style={{fontSize:"12px"}}>{lokasiTujuan}</span>
                                </IonText>
                            </IonCol>    
                        </IonRow>
                    </IonGrid>

                    <IonGrid style={{margin:"10px", border:"solid 1px gray", borderRadius:"10px", textAlign:"start"}}>
                        <IonRow>
                            <IonCol size='12' style={{background:"rgba(108,122,137,0.45)", padding:"10px", borderRadius:"5px"}}>
                                <IonText mode='ios' style={{fontSize:"14px"}}>
                                    Driver Pilihan <i>(optional)</i>
                                </IonText>
                            </IonCol>
                            <IonCol size='10'>
                                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:"14px"}}>
                                        Masukkan Kode Unik Driver
                                    </span>
                                    <span style={{fontSize:"12px", color:"rgb(45,85,255)"}}>
                                        Check untuk memilih driver kamu
                                    </span>
                                </IonText>
                            </IonCol>
                            <IonCol size='2' style={{textAlign:"end"}}>
                                <IonCheckbox mode='ios' name='isKodeUnikDriver' checked={isKodeUnikDriver} onIonChange={(e) => {setIsKodeUnikDriver(e.detail.checked)}}></IonCheckbox>
                            </IonCol>
                            {(isKodeUnikDriver === true)?
                            <IonCol size='12' style={{background:"rgba(108,122,137,0.15)", borderRadius:"5px", padding:"2px 10px", margin:"2px 0"}}>
                                <IonInput mode='ios' inputMode='text' placeholder='Kode Unik' name="kode_unik" value={(kodeUnikDriver !== '')?kodeUnikDriver:''} onIonChange={(e) => {setKodeUnikDriver(String(e.detail.value))}} style={{fontSize:"12px"}}/>
                            </IonCol>
                            :''}
                        </IonRow>
                    </IonGrid>

                    <IonGrid style={{margin:"10px", border:"solid 1px gray", borderRadius:"10px", textAlign:"start"}}>
                        <IonRow>
                            <IonCol size='12' style={{background:"rgba(108,122,137,0.45)", padding:"10px", borderRadius:"5px"}}>
                                <IonText mode='ios' style={{fontSize:"14px"}}>
                                    Surat - Surat
                                </IonText>
                            </IonCol>
                            <IonCol size='10'>
                                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:"14px"}}>
                                        Surat Jalan Balik
                                        <IonIcon slot='end' icon={informationCircleOutline} style={{margin:"0 5px"}} onClick={()=>{openModalInfo('3')}}/>
                                    </span>
                                    {(isSuratJalanBalik === true)?
                                        <span style={{fontSize:"12px", color:"rgb(45,85,255)"}}>
                                            Rp 25.000
                                        </span>
                                    :''}
                                </IonText>
                            </IonCol>
                            <IonCol size='2' style={{textAlign:"end"}}>
                                <IonCheckbox mode='ios' name='isSuratJalanBalik' checked={isSuratJalanBalik} onIonChange={(e) => {setIsSuratJalanBalik(e.detail.checked)}}></IonCheckbox>
                            </IonCol>
                            {(isSuratJalanBalik === true)?
                            <IonCol size='12'>
                                <IonText mode='ios' style={{fontSize:"12px", fontWeight:"bold"}}>
                                    Dikirim Kepada ?
                                </IonText>
                                <IonRow style={{width:"100%", margin:0, padding:0}}>
                                    <IonCol size='12' style={{background:"rgba(108, 122, 137, 0.15)", borderRadius:"5px", padding:"2px 0", margin:"2px 0"}}>
                                        <IonInput mode='ios' name='namaSurat' value={namaSurat} inputMode='text' onIonChange={(e)=>{setNamaSurat(String(e.detail.value))}} placeholder='Nama penerima dokumen' style={{fontSize:"12px"}} />
                                    </IonCol>
                                </IonRow>
                                <IonRow style={{width:"100%", margin:0, padding:0}}>
                                    <IonCol size='1' style={{background:"rgba(108,122,137,0.15)", borderRadius:"5px 0 0 5px", padding:"7px 1px", margin:"2px 0"}}>
                                        <IonText mode='ios' style={{fontSize:"12px"}}>
                                            +62
                                        </IonText>
                                    </IonCol>
                                    <IonCol size='11' style={{background:"rgba(108,122,137,0.15)", borderRadius:"0 5px 5px 0", padding:"2px 0", margin:"2px 0"}}>
                                        <IonInput mode='ios' inputMode='numeric' placeholder='No. Telepon' name="phoneSurat" value={phoneSurat} onIonChange={(e)=>{setPhoneSurat(String(e.detail.value))}} style={{fontSize:"12px"}}/>
                                    </IonCol>
                                </IonRow>
                                <IonRow style={{width:"100%", margin:0, padding:0}}>
                                    <IonCol size='12' style={{background:"rgba(108, 122, 137, 0.15)", borderRadius:"5px", padding:"2px 0", margin:"2px 0"}}>
                                        <IonInput mode='ios' name='lokasiSurat' value={lokasiSurat} inputMode='text' onClick={()=>{openModalLokasiSurat()}} style={{fontSize:"12px"}} readonly={true} />
                                    </IonCol>
                                </IonRow>

                                {/* <IonRadioGroup allowEmptySelection={false} value={selectSuratJalanBalik} style={{padding:0}} onIonChange={(e)=>{setSelectSuratJalan(String(e.detail.value))}} >
                                    <IonItem className='itemTruck' mode='ios'>
                                        <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                            <span style={{fontSize:"12px", fontWeight:"bold"}}>{namaAsal.toUpperCase()}</span>
                                            <span style={{fontSize:"9px"}}>{phoneAsal}</span>
                                            <span style={{fontSize:"9px"}}>{lokasiAsal}</span>
                                        </IonText>
                                        <IonRadio slot="end" value="asal" color='primary' mode='ios'></IonRadio>
                                    </IonItem>

                                    <IonItem className='itemTruck' mode='ios'>
                                        <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                            <span style={{fontSize:"12px", fontWeight:"bold"}}>{namaTujuan.toUpperCase()}</span>
                                            <span style={{fontSize:"9px"}}>{phoneTujuan}</span>
                                            <span style={{fontSize:"9px"}}>{lokasiTujuan}</span>
                                        </IonText>
                                        <IonRadio slot="end" value="tujuan" color='primary' mode='ios'></IonRadio>
                                    </IonItem>
                                </IonRadioGroup> */}
                            </IonCol>
                            :''}
                        </IonRow>
                    </IonGrid>

                    <IonGrid style={{margin:"10px", border:"solid 1px gray", borderRadius:"10px", textAlign:"start"}}>
                        <IonRow>
                            <IonCol size='12' style={{background:"rgba(108,122,137,0.45)", padding:"10px", borderRadius:"5px"}}>
                                <IonText mode='ios' style={{fontSize:"14px"}}>
                                    Metode Pembayaran
                                </IonText>
                            </IonCol>
                            <IonCol size='12'>
                                <IonSelect interface="action-sheet" mode='ios' placeholder="Pilih" onIonChange={(e)=>{setIsMetodePembayaran(String(e.detail.value))}} name='isMetodePembayaran' value={isMetodePembayaran}>
                                    <IonSelectOption value="1">Bayar Sebagian (Diawal)</IonSelectOption>
                                    <IonSelectOption value="2">Bayar Penuh</IonSelectOption>
                                </IonSelect>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                    <IonGrid style={{margin:"10px", border:"solid 1px gray", borderRadius:"10px", textAlign:"start"}}>
                        <IonRow>
                            <IonCol size='12' style={{background:"rgba(108,122,137,0.45)", padding:"10px", borderRadius:"5px"}}>
                                <IonText mode='ios' style={{fontSize:"14px"}}>
                                    Perincian Harga
                                </IonText>
                            </IonCol>
                            <IonCol size='6'>
                                <IonText mode='ios' style={{fontSize:"14px"}}>
                                    Tarif Dasar {isResultDistance} km
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"end"}}>
                                <IonText mode='ios' style={{fontSize:"14px"}}>
                                    Rp{isResultPrice.toLocaleString(undefined, {maximumFractionDigits:2})}
                                </IonText>
                            </IonCol>
                            <IonCol size='12'>
                                <IonText mode='ios' style={{fontSize:"14px"}}>
                                    Layanan Tambahan
                                </IonText>
                            </IonCol>
                            <IonCol size='6'>
                                <IonText mode='ios' style={{fontSize:"14px", marginLeft:"15px"}}>
                                    Layanan Standar
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"end"}}>
                                <IonText mode='ios' style={{fontSize:"14px"}}>
                                    Gratis
                                </IonText>
                            </IonCol>
                            {(isAsuransi === true)?
                            <>
                                <IonCol size='6'>
                                    <IonText mode='ios' style={{fontSize:"14px", marginLeft:"15px"}}>
                                        Asuransi Barang
                                    </IonText>
                                </IonCol>
                                <IonCol size='6' style={{textAlign:"end"}}>
                                    <IonText mode='ios' style={{fontSize:"14px"}}>
                                        Gratis
                                    </IonText>
                                </IonCol>
                            </>
                            :''}
                            {(isPindahRumah === true)?
                            <>
                                <IonCol size='6'>
                                    <IonText mode='ios' style={{fontSize:"14px", marginLeft:"15px"}}>
                                        Pindah Rumah
                                    </IonText>
                                </IonCol>
                                <IonCol size='6' style={{textAlign:"end"}}>
                                    <IonText mode='ios' style={{fontSize:"14px"}}>
                                        Gratis
                                    </IonText>
                                </IonCol>
                            </>
                            :''}
                            {(isSuratJalanBalik === true)?
                            <>
                                <IonCol size='6'>
                                    <IonText mode='ios' style={{fontSize:"14px", marginLeft:"15px"}}>
                                        Surat Jalan Balik
                                    </IonText>
                                </IonCol>
                                <IonCol size='6' style={{textAlign:"end"}}>
                                    <IonText mode='ios' style={{fontSize:"14px"}}>
                                        Rp 25.000
                                    </IonText>
                                </IonCol>
                            </>
                            :''}

                            <IonCol size='6'>
                                <IonText mode='ios' style={{fontSize:"16px"}}>
                                    Total
                                </IonText>
                            </IonCol>
                            <IonCol size='6' style={{textAlign:"end"}}>
                                <IonText mode='ios' style={{fontSize:"16px"}}>
                                    {(isSuratJalanBalik === true)?
                                    `Rp${(isResultPrice + 25000).toLocaleString(undefined, {maximumFractionDigits:2})}`
                                    :
                                    `Rp${isResultPrice.toLocaleString(undefined, {maximumFractionDigits:2})}`
                                    }
                                </IonText>
                            </IonCol>
                        </IonRow>
                        <IonRow>

                        </IonRow>
                    </IonGrid>
                </IonContent>
                <IonFooter mode='ios'>
                    <IonGrid>
                        <IonRow>
                            <IonCol size='12'>
                                <IonButton mode='ios' expand='block' color='primary' onClick={()=>{validasiKonfirmasi()}}>
                                    <IonRippleEffect></IonRippleEffect>
                                    KONFIRMASI PESANAN
                                    <IonIcon slot='end' icon={cartOutline} />
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonFooter>
            </IonModal>

            <IonModal mode='ios' isOpen={isModalInformation} onDidDismiss={()=>{setIsModalInformation(false)}} id="customeModal">
                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol size='12' style={{textAlign:"center"}}>
                                <IonButton mode='ios' fill='outline' shape='round' color='light' size='large' disabled={true}>
                                    <IonIcon icon={informationCircleOutline} />
                                </IonButton>
                            </IonCol>
                            <IonCol size='12' style={{padding:"5px 0", textAlign:"center", margin:0}}>
                                <IonText mode='ios' style={{fontSize:"18px", fontWeight:"bold", color:"rgb(147, 250, 165)"}}>
                                    {infoTitle}
                                </IonText>
                            </IonCol>
                            <IonCol size='12' style={{padding:"5px 15px", textAlign:"center", margin:0}}>
                                <IonText mode='ios' style={{fontSize:"14px"}}>
                                    {(selectInfo === '0')?truckJenis:''} {infoContent}
                                </IonText>  
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonModal>

            <IonModal mode='ios' isOpen={isModalUnavailable} onDidDismiss={()=>{setIsModalUnavailable(false)}} id="customeModal">
                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol size='12' style={{textAlign:"center"}}>
                                <IonButton mode='ios' fill='outline' shape='round' color='light' size='large' disabled={true}>
                                    <IonIcon icon={banOutline} />
                                </IonButton>
                            </IonCol>
                            <IonCol size='12' style={{padding:"5px 0", textAlign:"center", margin:0}}>
                                <IonText mode='ios' style={{fontSize:"18px", fontWeight:"bold", color:"rgb(147, 250, 165)"}}>
                                    Not Yet Available
                                </IonText>
                            </IonCol>
                            <IonCol size='12' style={{padding:"5px 15px", textAlign:"center", margin:0}}>
                                <IonText mode='ios' style={{fontSize:"14px"}}>
                                    Silahkan kembali lagi nanti, kami akan segera membuka layanan sewa truck ini.
                                </IonText>  
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonModal>

            <IonModal mode='ios' isOpen={isModalDone} onDidDismiss={()=>{setIsModalDone(false)}}>
                <IonHeader mode='ios'>
                    <IonToolbar mode='ios'>
                        <IonButtons slot='start'>
                            <IonButton mode='ios' color='danger' fill='clear' onClick={()=>{setIsModalDone(false)}}>
                                <IonIcon icon={closeCircleOutline} />
                            </IonButton>
                        </IonButtons>
                        <IonTitle color='success'>
                            ORDER SUCCESS
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen id='contentDone'>
                    <IonGrid>
                        <IonRow>
                            <IonCol size='12'>
                                <IonImg src={LottiePaySuccess} style={{height:"250px", width:"100%"}}/>
                            </IonCol>
                            <IonCol size='12' style={{textAlign:"center"}}>
                                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:"16px", fontWeight:"bold", color:"rgb(46, 204, 113)"}}>Order Rent Truck Success</span>
                                    <span style={{fontSize:"14px", color:"rgb(46, 204, 113)"}}>
                                        Selamat kamu berhasil melakukan order sewa truck
                                    </span>
                                </IonText>
                            </IonCol>
                            <IonCol size='12' style={{textAlign:"start", padding:"10px", marginTop:"20px", borderRadius:"10px", border:"solid 1px gray", background:"rgba(108,122,137,0.14)"}}>
                                <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:"12px", color:"rgb(108,122,137)"}}>Order Date</span>
                                    <span style={{fontSize:"14px", color:"rgb(108,122,137)", fontWeight:"bold"}}>
                                        {isDoneDate}
                                    </span>
                                    <span style={{fontSize:"12px", color:"rgb(108,122,137)", marginTop:"4px"}}>Order Invoice</span>
                                    <span style={{fontSize:"14px", color:"rgb(108,122,137)", fontWeight:"bold"}}>
                                        {isDoneTracking}
                                    </span>
                                    <span style={{fontSize:"12px", color:"rgb(108,122,137)", marginTop:"10px"}}>Total Harga</span>
                                    <span style={{fontSize:"18px", color:"rgb(46, 204, 113)", fontWeight:"bold"}}>
                                        {(isSuratJalanBalik === true)?
                                        `Rp${(isResultPrice + 25000).toLocaleString(undefined, {maximumFractionDigits:2})}`
                                        :
                                        `Rp${isResultPrice.toLocaleString(undefined, {maximumFractionDigits:2})}`
                                        }
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
                                <IonButton mode='ios' expand='block' fill='outline' color='success' onClick={()=>{setIsModalDone(false)}}>
                                    TUTUP
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonFooter>
            </IonModal>
            
            {/* <IonFooter mode='ios' style={{background:"transparent"}}>
                <IonGrid>
                    {(latlangAsal !== '' && latlangTujuan !== '')?
                        <IonRow style={{padding:0, margin:0}}>
                            <IonCol size='2' style={{textAlign:"start", padding:"2px 5px", margin:0}}>
                                <IonButton mode='ios' color='medium' size='small' onClick={()=>{doCenterMap()}}>
                                    <IonRippleEffect></IonRippleEffect>
                                    <IonIcon icon={locateOutline} />
                                </IonButton>
                            </IonCol>
                            {(isIncludeFerries === 'Yes')?
                            <IonCol size='10' style={{margin:0, padding:"2px 0"}}>
                                <IonText mode='ios' style={{display:"flex", flexDirection:"row", justifyContent:"end", background:"rgba(200,200,200,0.85)", borderRadius:'10px 20px 20px 10px'}}>
                                    <span style={{fontSize:"10px", color:"#F22613", margin:"3px 0 0 0", display:"flex", flexDirection:"column", textAlign:"end"}}>
                                        <span>Rute ini menggunakan ferrie sejauh {isIncludeFerriesDistance.toLocaleString(undefined,{maximumFractionDigits:2})}km</span>
                                        {(isIncludeFerriesTransit >= 0)?
                                        <span>dengan total transit {isIncludeFerriesTransit} kali</span>
                                        :
                                        <span>tanpa melakukan transit</span>
                                        }
                                    </span>
                                    <IonIcon icon={boatOutline} style={{margin:"0 0 0 5px", color:"white", fontSize:"20px", background:"#F22613", borderRadius:"50px", padding:"4px"}} />
                                </IonText>
                            </IonCol>:""}
                        </IonRow>
                    :''}
                    <IonRow style={{background:"white", padding:"7px", borderRadius:"7px"}}>
                        <IonCol size='10' style={{textAlign:"start", padding:"5px", background:"rgba(108,122,137,0.35)", borderRadius:"10px 0 0 10px", margin:"2px 0"}} onClick={()=>{openModalData('asal')}}>
                            <IonInput mode='ios' value={(alamatAsal !== '')?lokasiAsal:''} placeholder='Masukkan lokasi asal' style={{fontSize:"12px", color:"black"}} readonly={true}/>
                        </IonCol>
                        <IonCol size='2' style={{background:"rgba(108,122,137,0.35)", borderRadius:"0 10px 10px 0", margin:"2px 0"}}>
                            <IonButton mode='ios' expand='block' onClick={()=>{openModalData('asal')}} size='small' fill='outline'>
                                <IonRippleEffect></IonRippleEffect>
                                <IonIcon icon={navigateCircleOutline} />
                            </IonButton>    
                        </IonCol>
                        <IonCol size='10' style={{textAlign:"start", padding:"5px", background:"rgba(108,122,137,0.35)", borderRadius:"10px 0 0 10px", margin:"2px 0"}} onClick={()=>{openModalData('tujuan')}}>
                            <IonInput mode='ios' value={(alamatTujuan !== '')?lokasiTujuan:''} placeholder='Masukkan lokasi tujuan' style={{fontSize:"12px", color:"black"}} readonly={true}/>
                        </IonCol>
                        <IonCol size='2' style={{background:"rgba(108,122,137,0.35)", borderRadius:"0 10px 10px 0", margin:"2px 0"}}>
                            <IonButton mode='ios' expand='block' onClick={()=>{openModalData('tujuan')}} size='small' fill='outline'>
                                <IonRippleEffect></IonRippleEffect>
                                <IonIcon icon={navigateCircleOutline} />
                            </IonButton>    
                        </IonCol>
                    </IonRow>

                    {(isResult === true && isLoading === false)?
                    <IonRow style={{margin:"5px 0", background:"rgba(108,122,137,1)", borderRadius:"10px", padding:"2px 10px", color:"white"}}>
                        <IonCol size='4' style={{textAlign:"center"}}>
                            <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                <span style={{fontSize:"12px", fontWeight:"bold"}}>
                                    Rp.{isResultPrice.toLocaleString(undefined, {maximumFractionDigits:2})}
                                </span>
                                <span style={{fontSize:"10px"}}>Total Harga</span>
                            </IonText>
                        </IonCol>
                        <IonCol size='4' style={{textAlign:"center"}}>
                            <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                <span style={{fontSize:"12px", fontWeight:"bold"}}>
                                    {isResultDistance.toLocaleString(undefined, {maximumFractionDigits:2})} Km
                                </span>
                                <span style={{fontSize:"10px"}}>Jarak Tempuh</span>
                            </IonText>
                        </IonCol>
                        <IonCol size='4' style={{textAlign:"center"}}>
                            <IonText mode='ios' style={{display:"flex", flexDirection:"column"}}>
                                <span style={{fontSize:"12px", fontWeight:"bold"}}>{isResultDuration}</span>
                                <span style={{fontSize:"10px"}}>Estimasi Waktu</span>
                            </IonText>
                        </IonCol>
                    </IonRow>
                    :''}

                    <IonRow style={{margin:"5px 0", padding:0}}>
                        <IonCol size='12' style={{padding:0, margin:0}}>
                            {(isResult === true && timeOrder !== '' && isLoading === false)?
                            <IonButton mode='ios' expand='block' color='primary' onClick={()=>{setIsModalStep2(true)}}>
                                <IonRippleEffect></IonRippleEffect>
                                NEXT TO STEP 2
                                <IonIcon slot='end' icon={chevronForwardOutline} />
                            </IonButton>
                            :
                            <IonButton mode='ios' expand='block' color='warning' disabled={true}>
                                SELESAIKAN TAHAP INI
                                <IonIcon slot='end' icon={warningOutline} />
                            </IonButton>
                            }
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonFooter> */}
            

            <IonToast 
                isOpen={isToast}
                onDidDismiss={()=>{setIsToast(false)}}
                message={isMessageToast}
                color={isColorToast}
                mode='ios'
                icon={(isColorToast === 'danger')?closeOutline:checkmarkOutline}
                position='top'
                duration={isDurationToast}
                cssClass="isToast"
            />
            <IonToast 
                mode='ios'
                isOpen={isToastLokasi}
                message={isMessageToastLokasi}
                onDidDismiss={()=>{setIsToastLokasi(false)}}
                color='light'
                icon={locateOutline}
                position='bottom'
                duration={700}
                cssClass="isToast"
            />
            <IonLoading 
                isOpen={isLoading2}
                onDidDismiss={()=>{setIsLoading2(false)}}
                mode='ios'
                spinner='circular'
            />
            <IonAlert 
                onDidDismiss={()=>{setIsAlertKonfirmasi(false)}}
                isOpen={isAlertKonfirmasi}
                mode='ios'
                message="Kamu yakin ingin mengkonfirmasi pemesanan sewa truk ?" 
                buttons={[
                {
                    text: "Tidak Yakin",
                    role:"cancel",
                    handler:() => {setIsAlertKonfirmasi(false)}
                },
                {
                    text: "Yakin",
                    role:"confirm",
                    handler:() => doOrder()
                }
            ]}/>
        </IonPage>
    )
}

export default SewaTruck