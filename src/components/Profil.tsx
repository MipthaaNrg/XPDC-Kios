import { createAnimation, IonAlert, IonBadge, IonButton, IonButtons, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonModal, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { chevronBackOutline, closeOutline, mailOutline, phonePortraitOutline, syncCircleOutline } from "ionicons/icons";
import { useState } from "react";
import { useHistory } from "react-router";
import $ from 'jquery';

const Profil: React.FC = () => {
    const history = useHistory();
    const [isAlert, setIsAlert] = useState(false);
    const [isAlert2, setIsAlert2] = useState(false);
    const [alert1, setAlert1] = useState(false)
    const [alertHeader, setAlertHeader] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [isAlertKode, setIsAlertKode] = useState(false);
    const [alertKodeHeader, setAlertKodeHeader] = useState('');
    const [isModalNama, setIsModalNama] = useState(false)
    const [isModalNomor, setIsModalNomor] = useState(false)
    const [isModalEmail, setIsModalEmail] = useState(false)
    const [isModalPassword, setIsModalPassword] = useState(false)
    const [modalEmail, setModalEmail] = useState(false);
    const nama = localStorage.getItem('username');
    const [msg, setMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');
    const [modalOtp, setModalOtp] = useState(false);
    const [modalPhone, setModalPhone] = useState(false);
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [num4, setNum4] = useState('');
    const [num5, setNum5] = useState('');
    const [num6, setNum6] = useState('');

    const handleNumChange1 = event => {
        const limit = 1;
        setNum1(event.target.value.slice(0, limit));
        if($("input[name='pin1']").keydown() && event.target.value != ''){
          $("input[name='pin2']").focus();
        }
      }
    
      const handleNumChange2 = event => {
        const limit = 1;
        setNum2(event.target.value.slice(0, limit));
        if($("input[name='pin2']").keydown() && event.target.value != ''){
          $("input[name='pin3']").focus();
        }
        if($("input[name='pin2']").keydown() && event.target.value === ''){
          $("input[name='pin1']").focus();
      }
    };
    
    const handleNumChange3 = event => {
      const limit = 1;
      setNum3(event.target.value.slice(0, limit));
      if($("input[name='pin3']").keydown() && event.target.value != ''){
        $("input[name='pin4']").focus();
      }
      if($("input[name='pin3']").keydown() && event.target.value === ''){
        $("input[name='pin2']").focus();
    }
    };
    
    const handleNumChange4 = event => {
      const limit = 1;
      setNum4(event.target.value.slice(0, limit));
      if($("input[name='pin4']").keydown() && event.target.value != ''){
        $("input[name='pin5']").focus();
      }
      if($("input[name='pin4']").keydown() && event.target.value === ''){
        $("input[name='pin3']").focus();
    }
    };
    
    const handleNumChange5 = event => {
      const limit = 1;
      setNum5(event.target.value.slice(0, limit));
      if($("input[name='pin5']").keydown() && event.target.value != ''){
        $("input[name='pin6']").focus();
      }
      if($("input[name='pin5']").keydown() && event.target.value === ''){
        $("input[name='pin4']").focus();
    }
    };
    
    const handleNumChange6 = event => {
      const limit = 1;
      setNum6(event.target.value.slice(0, limit));
    
      if($("input[name='pin6']").keydown() && event.target.value === ''){
        $("input[name='pin5']").focus();
      }
    };

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


      function update(){
        let formData = new FormData();
        formData.append('where','name');
        formData.append('target',String($("input[name='nama']").val()));
        formData.append('user_id',String(localStorage.getItem('userid')));
        if(String($("input[name='nama']").val()).trim() != ''){
          $.ajax({
            type: "POST",
            url: "https://xpdcargo.id/login/Callback/apps_update_profile",
            data: formData,
            processData: false,
            contentType: false,
            dataType:'json',
            beforeSend:function(){
              setIsLoading(true)
            },
          }).done(function(res){
            localStorage.setItem('username', String($("input[name='nama']").val()))
            setIsLoading(false)
            setMsg(res.message)
            setIsAlert(true)
          })
        }else{
          setMsg('Data Nama tidak boleh kosong')
          setIsAlert(true)
          // console.log('masih ada data kosong')
        }
      }

      function updateno(){
    
        var no_tel = $("input[name='phone']").val();
        var phone = no_tel;
          $.ajax({
            type: "POST",
            url: "https://xpdcargo.id/login/Callback/update_profile",
            data: {
              type:'Phone',
              where:'phone',
              target: phone,
              phone:phone,
              user_id: localStorage.getItem('userid')
            },
            dataType:'json',
            beforeSend:function(){
              setLoadingMessage('Mengirimkan Kode OTP...')
              setIsLoading(true);
            },
          }).done(function(res){
            setIsLoading(false)
            if(res.message === 'berhasil'){
              setModalOtp(true)
            }else{
              setAlertHeader('Pesan')
              setAlertMessage('Nomor hp sudah terdaftar di akun lain')
              setIsAlert2(true)
            }
          })
      }

      function openEmail(){
        setModalEmail(true)
        $("input[name=email").focus();
      }
    
       
      function openOtpEmail(){
        if(localStorage.getItem('verifyEmail') === 'null'){
          var email = localStorage.getItem('useremail');
          $.ajax({
            type: "POST",
            url: "https://xpdcargo.id/login/Callback/send_sms",
            data: {
                email:email,
                phone:'',
                user_id: localStorage.getItem('userid')
            },
            dataType:'json',
            beforeSend:function(){
              setLoadingMessage(`Mengirimkan Kode OTP ke ${email}...`)
              setIsLoading(true);
            },
          }).done(function(res){
            setIsLoading(false)
            setModalOtp(true)
          })
      }else{
        setAlertHeader('Pesan')
        setAlertMessage('Email Anda sudah terverifikasi')
        setIsAlert(true)
      }
      }

      function openOtp(){
        if(localStorage.getItem('verifyPhone') === 'null'){
          var phone = localStorage.getItem('userphone');
          $.ajax({
            type: "POST",
            url: "https://xpdcargo.id/login/Callback/send_sms",
            data: {
              phone:phone,
              user_id: localStorage.getItem('userid')
            },
            dataType:'json',
            beforeSend:function(){
              setLoadingMessage(`Mengirimkan Kode OTP ke nomor ${phone}...`)
              setIsLoading(true);
            },
            error: function (xhr, ajaxOptions, thrownError){
              alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError);
            }
          }).done(function(res){
            setIsLoading(false)
            setModalOtp(true)
          })
      }else{
        setAlertHeader('Pesan')
        setAlertMessage('Nomor Hp Anda sudah terverifikasi')
        setIsAlert(true)
      }
      }
    
      function openPhone(){
        setModalPhone(true)
        $("input[name=phone").focus();
      }

      function verifyOtp(){
        var pin1 = String($("input[name='pin1']").val());
        var pin2 = String($("input[name='pin2']").val());
        var pin3 = String($("input[name='pin3']").val());
        var pin4 = String($("input[name='pin4']").val());
        var pin5 = String($("input[name='pin5']").val());
        var pin6 = String($("input[name='pin6']").val());
        var full_otp = pin1+pin2+pin3+pin4+pin5+pin6
        if(pin1.trim() != '' && pin2.trim() != '' && pin3.trim() != '' && pin4.trim() != '' && pin5.trim() != '' && pin6.trim() != ''){
          $.ajax({
            type: "POST",
            url: "https://xpdcargo.id/login/Callback/varify_otp",
            data: {
              otp: full_otp,
              user_id: localStorage.getItem('userid')
            },
            dataType:'json',
            beforeSend:function(){
              setLoadingMessage('Memeriksa Kode OTP..')
              setIsLoading(true);
            },
            success:function(res){
              console.log(res)
              setIsLoading(false)
              if(res.message === 'berhasil'){
                localStorage.setItem('userphone', res.phone)
                localStorage.setItem('verifyPhone', '1')
                window.open('/profil/profil','_self')
              }else{
                setAlertHeader('Invalid')
                setAlertMessage(res.message)
                setIsAlert(true)
              }
            },
            error: function (xhr, ajaxOptions, thrownError){
              alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError);
            }
          
          })
      }else{
        setAlertHeader('Pesan')
        setAlertMessage('Masukan Kode OTP dengan benar!')
        setIsAlert(true)
      }
      }

      function updateEmail(){
    
        var email = $("input[name='email']").val();
          $.ajax({
            type: "POST",
            url: "https://xpdcargo.id/login/Callback/update_profile",
            data: {
              type:'Email',
              where:'email',
              target: email,
              phone:email,
              email:email,
              user_id: localStorage.getItem('userid')
            },
            dataType:'json',
            beforeSend:function(){
              setLoadingMessage('Mengirimkan Kode OTP...')
              setIsLoading(true);
            },
        }).done(function(res){
            setIsLoading(false)
            if(res.message === 'berhasil'){
              setModalOtp(true)
            }else{
              setAlertHeader('Pesan')
              setAlertMessage('Email sudah terdaftar di akun lain')
              setIsAlert(true)
            }
          })
      }

      function updatePassword(){
    
        var password = String($("input[name='password']").val());
        var password2 = String($("input[name='password2']").val());
        var passwordlama = String($("input[name='passwordlama']").val());
        if(passwordlama.trim() != '')
        {
            if(password2.trim() === password.trim()){
                $.ajax({
                    type: "POST",
                    url: "https://xpdcargo.id/login/Callback/ubah_password",
                    data: {
                      password:password2,
                      passwordlama:passwordlama,
                      user_id: localStorage.getItem('userid')
                    },
                    dataType:'json',
                    beforeSend:function(){
                      setLoadingMessage('Simpan kata sandi baru...')
                      setIsLoading(true);
                    },
                  }).done(function(res){
                    setIsLoading(false)
                    if(res.status === '0'){
                        setAlertHeader('Oops..')
                        setAlertMessage('Kata sandi lama salah')
                        setIsAlert(true)
                    }else{
                        window.open('/profil/profil','_self')
                    }
                    
                  })
            }else{
                setAlertHeader('Pesan')
                setAlertMessage('Konfirmasi kata sandi tidak cocok')
                setIsAlert(true)
            }
        }else{
            setAlertHeader("Oops..")
            setAlertMessage("Kata sandi lama wajib diisi")
            setIsAlert(true)
        }
      }
    return(
    <IonPage className="anim-slide-right anim-linear">
        <IonHeader>
            <IonToolbar mode='ios'>
                <IonButtons slot="start">
                    <IonButton mode='ios' fill="clear" color='primary' onClick={() =>history.push('/Main')}>
                        <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                        BACK
                    </IonButton>
                    </IonButtons>
                <IonTitle style={{textAlign:"center", margin:"0", padding:"0"}}>Akun Saya</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent style={{background:"#FFFFFF"}}>
            <IonItem style={{marginTop:"10px"}} onClick={()=>{setIsModalNama(true)}}>
                <IonGrid style={{margin:"0", padding:"0"}}>
                <IonRow>
                    <IonCol size="12" style={{textAlign:"start"}}>
                    <IonRow>Nama</IonRow>
                    <IonRow>
                        <IonText mode="ios" style={{fontSize:"14px"}}>{localStorage.getItem('username')}</IonText>
                    </IonRow>
                    </IonCol>
                </IonRow>
                </IonGrid>
            </IonItem>
            <IonItem onClick={()=>{setIsModalNomor(true)}}>
                <IonGrid style={{margin:"0", padding:"0"}}>
                <IonRow>
                    <IonCol size="6" style={{textAlign:"start"}}>
                    <IonRow>Handphone</IonRow>
                    <IonRow>
                        <IonText mode="ios" style={{fontSize:"14px"}}>{(localStorage.getItem('userphone') != '')?localStorage.getItem('userphone'):'Belum Didaftarkan'}</IonText>
                    </IonRow>
                    </IonCol>
                    <IonCol size="6"  style={{textAlign:"end", padding:"10px 0"}}>
                    <IonBadge color={(localStorage.getItem('verifyPhone') === 'null'|| localStorage.getItem('userphone') === '')?'danger':'success'} style={{padding:"10px"}}>
                        {(localStorage.getItem('userphone') != '')?(localStorage.getItem('verifyPhone') === 'null')?'Not Verified':'Verified':'Not Register'}</IonBadge>
                    </IonCol>
                </IonRow>
                </IonGrid>
            </IonItem>
            <IonItem onClick={()=>{setIsModalEmail(true)}}> 
                <IonGrid style={{margin:"0", padding:"0"}}>
                    <IonRow>
                        <IonCol size="6" style={{textAlign:"start"}}>
                        <IonRow>Email</IonRow>
                        <IonRow>
                            <IonText mode="ios" style={{fontSize:"14px"}}>{localStorage.getItem('useremail')}</IonText>
                        </IonRow>
                        </IonCol>
                        <IonCol size="6"  style={{textAlign:"end", padding:"10px 0"}}>
                        <IonBadge color={(localStorage.getItem('verifyEmail') === 'null')?'danger':'success'} style={{padding:"10px"}}>{(localStorage.getItem('verifyEmail') === 'null')?'Not Verified':'Verified'}</IonBadge>
                       </IonCol> 
                    </IonRow>
                    </IonGrid>
                </IonItem>
                <IonItem onClick={()=>{setIsModalPassword(true)}}>
                    <IonGrid style={{margin:"0", padding:"0"}}>
                    <IonRow>
                        <IonCol>
                        <IonText>Ubah Password</IonText>
                        </IonCol>
                    </IonRow>
                    </IonGrid>
                </IonItem>
          
            {/* </IonCard> */}

            <IonModal mode='ios' isOpen={isModalNama} onDidDismiss={()=>{setIsModalNama(false)}} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
                <IonHeader>
                    <IonToolbar mode='ios'>
                        <IonButtons slot='start'>
                            <IonButton mode='ios' fill='clear' color='primary' onClick={()=>{setIsModalNama(false)}}>
                                <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                                BACK
                            </IonButton>
                        </IonButtons>
                    <IonTitle>Ubah Nama</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonCard style={{borderRadius:"10px"}}>
                        <IonRow style={{padding:"20px", fontSize:"18px" , paddingBottom:"0"}}>Nama</IonRow>
                        <IonRow style={{margin:"15px", padding:"5px",fontSize:"18px", outline:"none", background:"#DEDEDE", borderRadius:"10px"}}>
                        <input style={{border:"none", outline:"none",background:"#DEDEDE", color:"black", padding:"10px", width:"100%"}} placeholder="Nama" type='text' defaultValue={String(nama)} name='nama'></input>
                        </IonRow>
                    
                        <IonButton style={{padding:"15px", background:"#0000A0", borderRadius:"10px",margin:"15px"}} color="#0000A0" expand="block" shape="round" onClick={update}>Simpan</IonButton>
                    </IonCard>
                </IonContent>
            </IonModal>

            <IonModal mode='ios' isOpen={isModalNomor} onDidDismiss={()=>{setIsModalNomor(false)}} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
                <IonHeader>
                    <IonToolbar mode='ios'>
                        <IonButtons slot='start'>
                            <IonButton mode='ios' fill='clear' color='primary' onClick={()=>{setIsModalNomor(false)}}>
                                <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                                BACK
                            </IonButton>
                        </IonButtons>
                    <IonTitle>Ubah Nomor</IonTitle>
                    <IonButtons slot="end" onClick={openOtp} id={(localStorage.getItem('userphone') === '')?'d-none':''}>
                        <IonText mode="ios" color='primary' style={{marginRight:"10px"}}>Verify</IonText>
                    </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        <IonRow style={{background:"#DEDEDE",borderRadius:"10px", margin:"5px",padding:"15px 5px"}} onClick={openPhone} id={(localStorage.getItem('userphone') === '')?'d-none':''}>
                        <IonCol size="2">
                            <IonIcon icon={phonePortraitOutline} style={{fontSize:"20px"}}></IonIcon>
                        </IonCol>
                        <IonCol style={{textAlign:"start"}}>
                            <IonText mode="ios">Ganti Nomor Hp</IonText>
                        </IonCol>
                        </IonRow>
                        <IonRow style={{margin:"15px auto",textAlign:"center",justifyContent:"center",padding:"10px",color:"grey", background:"yellow", borderRadius:"15px"}}>
                        <IonText mode="ios">Pastikan nomor yang akan digunakan memiliki nomor Whatsapp untuk mendapatkan kode OTP verifikasi.</IonText>
                        </IonRow>
                        <IonRow style={{background:"#DEDEDE", borderRadius:"10px", margin:"5px", padding:"15px 5px"}} onClick={openPhone} id={(localStorage.getItem('userphone') != '')?'d-none':''}>
                        <IonCol size="2">
                            +<IonIcon icon={phonePortraitOutline} style={{fontSize:"20px"}}></IonIcon>
                        </IonCol>
                        <IonCol style={{textAlign:"start"}}>
                            <IonText mode="ios">Tambah Nomor Hp</IonText>
                        </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonModal>

            <IonModal isOpen={modalPhone} mode='ios' onDidDismiss={()=>{setModalPhone(false)}}>
                  <IonHeader>
                    <IonToolbar color='primary'>
                      <IonTitle color='light' slot='start'>Masukan Nomor Hp</IonTitle>
                      <IonButtons slot="end" onClick={()=>{setModalPhone(false)}}>
                        <IonIcon src={closeOutline} style={{fontSize:"30px"}}></IonIcon>
                      </IonButtons>
                    </IonToolbar>
                  </IonHeader>
                  <IonContent>
                    <IonGrid>
                      <IonRow style={{padding:"10px 5px"}}>
                        <IonCol style={{textAlign:"start"}}>
                          <IonText mode="ios">Sebelum melanjutkan, mohon pastikan bahwa telepon Anda dapat menerima pesan Whatsapp di nomor yang baru untuk mendapatkan kode OTP.<br/><br/>
                          Jika telepon maupun nomor Anda baru, terlebih dahulu ganti nomor Anda di telepon yang lama.<br/><br/>
                          Contoh penggunaan nomor telepon yang benar diawali dengan angka '0' bukan '+62'</IonText>
                        </IonCol>
                      </IonRow>
                      <IonRow style={{background:"#DEDEDE", margin:"5px", borderRadius:"10px", padding:"7px"}}>
                        <IonCol size="1" style={{padding:"5px"}}>
                          <IonIcon icon={phonePortraitOutline} style={{fontSize:"26px"}}></IonIcon>
                        </IonCol>
                        <IonCol>
                          <input type='number' name='phone' id="phone" placeholder="Nomor Hp Baru" style={{background:"transparent", padding:"5px", fontSize:"18px", border:"none", outline:"none", width:"100%" }} autoComplete='off'></input>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonContent>
                  <IonFooter style={{padding:"10px 5px"}}>
                    <IonButton style={{padding:"2px"}} expand='block' onClick={updateno}>Lanjutkan</IonButton>
                  </IonFooter>
                </IonModal>
                <IonModal isOpen={modalOtp} mode='ios' onDidDismiss={()=>{setModalOtp(true); setModalPhone(false)}} showBackdrop={true}>
                  <IonHeader>
                    <IonToolbar color='primary'>
                      <IonTitle color='light' slot='start'>Kode OTP</IonTitle>
                      <IonButtons slot="end" onClick={()=>{setModalOtp(false); setModalPhone(false)}}>
                        <IonIcon src={closeOutline}></IonIcon>
                      </IonButtons>
                    </IonToolbar>
                  </IonHeader>
                  <IonContent>
                    <IonGrid style={{margin:"25px 10px"}}>
                      <IonRow>
                        <IonCol>
                          <IonText mode="ios" style={{fontSize:"20px"}}>
                            Masukan Kode OTP Anda
                          </IonText>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                      <IonCol size="2">
                        <input type='number' name='pin1' style={{background:"transparent", padding:"20px 10px", borderRadius:"10px", width:"100%", fontSize:"22px", textAlign:"center"}} value={num1} onChange={handleNumChange1} />
                      </IonCol>
                      <IonCol size="2">
                        <input type='number' name='pin2' style={{background:"transparent", padding:"20px 10px", borderRadius:"10px", width:"100%", fontSize:"22px", textAlign:"center"}} value={num2} onChange={handleNumChange2} />
                      </IonCol>
                      <IonCol size="2">
                        <input type='number' name='pin3' style={{background:"transparent", padding:"20px 10px", borderRadius:"10px", width:"100%", fontSize:"22px", textAlign:"center"}} value={num3} onChange={handleNumChange3} />
                      </IonCol>
                      <IonCol size="2">
                        <input type='number' name='pin4' style={{background:"transparent", padding:"20px 10px", borderRadius:"10px", width:"100%", fontSize:"22px", textAlign:"center"}} value={num4} onChange={handleNumChange4} />
                      </IonCol>
                      <IonCol size="2">
                        <input type='number' name='pin5' style={{background:"transparent", padding:"20px 10px", borderRadius:"10px", width:"100%", fontSize:"22px", textAlign:"center"}} value={num5} onChange={handleNumChange5} />
                      </IonCol>
                      <IonCol size="2">
                        <input type='number' name='pin6' style={{background:"transparent", padding:"20px 10px", borderRadius:"10px", width:"100%", fontSize:"22px", textAlign:"center"}} value={num6} onChange={handleNumChange6} />
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonText mode="ios">Kode OTP hanya dapat digunakan 1x</IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <button style={{background:"#0000A0", color:"white", padding:"20px", width:"100%", borderRadius:"10px"}}>
                          <IonText mode="ios">Kirim Ulang Kode Otp</IonText>
                        </button>
                      </IonCol>
                    </IonRow>
                    </IonGrid>
                  </IonContent>
                  <IonFooter style={{padding:"10px 5px"}}>
                    <IonGrid>
                      <IonRow>
                        <IonCol>
                        <button style={{background:"#0000A0", color:"white", padding:"15px", width:"100%", borderRadius:"10px"}} onClick={()=> {verifyOtp()}}>Lanjutkan
                        </button>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonFooter>
                </IonModal>

                <IonModal mode='ios' isOpen={isModalEmail} onDidDismiss={()=>{setIsModalEmail(false)}} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
                    <IonHeader>
                        <IonToolbar mode='ios'>
                            <IonButtons slot='start'>
                                <IonButton mode='ios' fill='clear' color='primary' onClick={()=>{setIsModalEmail(false)}}>
                                    <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                                    BACK
                                </IonButton>
                            </IonButtons>
                        <IonTitle>Ubah Email</IonTitle>
                        <IonButtons slot="end" onClick={openOtpEmail} id={(localStorage.getItem('useremail') === '')?'d-none':''}>
                        <IonText mode="ios" color='primary' style={{marginRight:"10px"}}>Verify</IonText>
                        </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <IonGrid>
                        <IonRow style={{background:"#DEDEDE",borderRadius:"10px", margin:"5px",padding:"15px 5px"}} onClick={openEmail} id={(localStorage.getItem('useremail') === '')?'d-none':''}>
                        <IonCol size="2">
                            <IonIcon icon={mailOutline} style={{fontSize:"20px"}}></IonIcon>
                        </IonCol>
                        <IonCol style={{textAlign:"start"}}>
                            <IonText mode="ios">Ganti Email</IonText>
                        </IonCol>
                        </IonRow>
                        <IonRow style={{background:"#DEDEDE", borderRadius:"10px", margin:"5px", padding:"15px 5px"}} onClick={openEmail} id={(localStorage.getItem('useremail') != '')?'d-none':''}>
                        <IonCol size="2">
                            +<IonIcon icon={mailOutline} style={{fontSize:"20px"}}></IonIcon>
                        </IonCol>
                        <IonCol style={{textAlign:"start"}}>
                            <IonText mode="ios">Tambah Email</IonText>
                        </IonCol>
                        </IonRow>
                    </IonGrid>
                        <IonModal isOpen={modalEmail} mode='ios' onDidDismiss={()=>{setModalEmail(false)}}>
                        <IonHeader>
                            <IonToolbar color='primary'>
                            <IonTitle color='light' slot='start'>Masukan Email</IonTitle>
                            <IonButtons slot="end" onClick={()=>{setModalEmail(false)}}>
                                <IonIcon src={closeOutline} style={{fontSize:"30px"}}></IonIcon>
                            </IonButtons>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent>
                            <IonGrid>
                            <IonRow style={{padding:"10px 5px"}}>
                                <IonCol style={{textAlign:"start"}}>
                                <IonText mode="ios">Sebelum melanjutkan, mohon pastikan bahwa email Anda dapat menerima pesan di email yang baru untuk mendapatkan kode OTP.<br/><br/>
                                Jika tidak menerima email di inbox, Coba periksa folder spam.<br/><br/></IonText>
                                </IonCol>
                            </IonRow>
                            <IonRow style={{background:"#DEDEDE", margin:"5px", borderRadius:"10px", padding:"7px"}}>
                                <IonCol size="1" style={{padding:"5px"}}>
                                <IonIcon icon={mailOutline} style={{fontSize:"26px"}}></IonIcon>
                                </IonCol>
                                <IonCol>
                                <input type='email' name='email' id="email" placeholder="Alamat Email Baru" style={{background:"transparent", padding:"5px", fontSize:"18px", border:"none", outline:"none", width:"100%" }} autoComplete='off'></input>
                                </IonCol>
                            </IonRow>
                            </IonGrid>
                        </IonContent>
                        <IonFooter style={{padding:"10px 5px"}}>
                            <IonButton style={{padding:"2px"}} expand='block' onClick={updateEmail}>Lanjutkan</IonButton>
                        </IonFooter>
                        </IonModal>
                        <IonModal isOpen={modalOtp} mode='ios' onDidDismiss={()=>{setModalOtp(false); setModalEmail(false)}} showBackdrop={true}>
                        <IonHeader>
                            <IonToolbar color='primary'>
                            <IonTitle color='light' slot='start'>Kode OTP</IonTitle>
                            <IonButtons slot="end" onClick={()=>{setModalOtp(false); setModalEmail(false)}}>
                                <IonIcon src={closeOutline}></IonIcon>
                            </IonButtons>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent>
                            <IonGrid style={{margin:"25px 10px"}}>
                            <IonRow>
                                <IonCol>
                                <IonText mode="ios" style={{fontSize:"20px"}}>
                                    Masukan Kode OTP Anda
                                </IonText>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                            <IonCol size="2">
                                <input type='number' name='pin1' style={{background:"transparent", padding:"20px 10px", borderRadius:"10px", width:"100%", fontSize:"22px", textAlign:"center"}} value={num1} onChange={handleNumChange1} />
                            </IonCol>
                            <IonCol size="2">
                                <input type='number' name='pin2' style={{background:"transparent", padding:"20px 10px", borderRadius:"10px", width:"100%", fontSize:"22px", textAlign:"center"}} value={num2} onChange={handleNumChange2} />
                            </IonCol>
                            <IonCol size="2">
                                <input type='number' name='pin3' style={{background:"transparent", padding:"20px 10px", borderRadius:"10px", width:"100%", fontSize:"22px", textAlign:"center"}} value={num3} onChange={handleNumChange3} />
                            </IonCol>
                            <IonCol size="2">
                                <input type='number' name='pin4' style={{background:"transparent", padding:"20px 10px", borderRadius:"10px", width:"100%", fontSize:"22px", textAlign:"center"}} value={num4} onChange={handleNumChange4} />
                            </IonCol>
                            <IonCol size="2">
                                <input type='number' name='pin5' style={{background:"transparent", padding:"20px 10px", borderRadius:"10px", width:"100%", fontSize:"22px", textAlign:"center"}} value={num5} onChange={handleNumChange5} />
                            </IonCol>
                            <IonCol size="2">
                                <input type='number' name='pin6' style={{background:"transparent", padding:"20px 10px", borderRadius:"10px", width:"100%", fontSize:"22px", textAlign:"center"}} value={num6} onChange={handleNumChange6} />
                            </IonCol>
                            </IonRow>
                            <IonRow>
                            <IonCol size="12">
                                <IonText mode="ios">Kode OTP hanya dapat digunakan 1x</IonText>
                            </IonCol>
                            </IonRow>
                            <IonRow>
                            <IonCol size="12">
                                <button style={{background:"#0000A0", color:"white", padding:"20px", width:"100%", borderRadius:"10px"}}>
                                <IonText mode="ios">Kirim Ulang Kode Otp</IonText>
                                </button>
                            </IonCol>
                            </IonRow>
                            </IonGrid>
                        </IonContent>
                        <IonFooter style={{padding:"10px 5px"}}>
                            <IonGrid>
                            <IonRow>
                                <IonCol>
                                <button style={{background:"#0000A0", color:"white", padding:"15px", width:"100%", borderRadius:"10px"}} onClick={()=> {verifyOtp()}}>Lanjutkan
                                </button>
                                </IonCol>
                            </IonRow>
                            </IonGrid>
                        </IonFooter>
                        </IonModal>
                    </IonContent>
                </IonModal>

                <IonModal mode='ios' isOpen={isModalPassword} onDidDismiss={()=>{setIsModalPassword(false)}} enterAnimation={inAnimation} leaveAnimation={outAnimation}>
                <IonHeader>
                    <IonToolbar mode='ios'>
                        <IonButtons slot='start'>
                            <IonButton mode='ios' fill='clear' color='primary' onClick={()=>{setIsModalPassword(false)}}>
                                <IonIcon icon={chevronBackOutline} slot='start' style={{margin:0, padding:0}}/>
                                BACK
                            </IonButton>
                        </IonButtons>
                    <IonTitle>Ubah Password</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                <IonCard style={{borderRadius:"15px"}}>
                    <IonRow style={{textAlign:"start", justifyContent:"start", margin:"17px"}}>
                        <IonText mode="ios" style={{textAlign:"start", justifyContent:"start", fontSize:"18px"}}>Buat kata sandi yang kuat untuk akun Anda</IonText>
                    </IonRow>
                    <IonRow style={{textAlign:"start", margin:"15px",padding:"5px", background:"#DEDEDE", borderRadius:"10px"}}>
                        <IonCol size="2" style={{padding:"10px", margin:"0"}}>
                            <img src="assets/icon/psswd.svg" style={{width:"24px"}}/>
                        </IonCol>
                        <IonCol style={{textAlign:'start'}}> 
                            <input style={{border:"none", outline:"none", fontSize:"18px", textAlign:'start', background:"#DEDEDE", color:"black", padding:"10px", width:"100%"}} placeholder="Kata Sandi Lama" type='password' name="passwordlama"></input>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{textAlign:"start", margin:"15px",padding:"5px", background:"#DEDEDE", borderRadius:"10px"}}>
                        <IonCol size="2" style={{padding:"10px", margin:"0"}}>
                            <img src="assets/icon/psswd.svg" style={{width:"24px"}}/>
                        </IonCol>
                        <IonCol style={{textAlign:'start'}}> 
                            <input style={{border:"none", outline:"none", fontSize:"18px", textAlign:'start',background:"#DEDEDE", color:"black", padding:"10px", width:"100%"}} placeholder="Kata Sandi Baru" type='password' name="password"></input>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{textAlign:"start", margin:"15px",padding:"5px", background:"#DEDEDE", borderRadius:"10px"}}>
                        <IonCol size="2" style={{padding:"10px", margin:"0"}}>
                            <img src="assets/icon/psswd.svg" style={{width:"24px"}}/>
                        </IonCol>
                        <IonCol style={{textAlign:'start'}}> 
                            <input style={{border:"none", outline:"none", fontSize:"18px", textAlign:'start', background:"#DEDEDE", color:"black", padding:"10px", width:"100%"}} placeholder="Ketik Ulang Kata Sandi" type='password' name="password2"></input>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{border:"2px solid #D9D9D9", borderRadius:"10px", padding:"10px", margin:"15px", background:"#C2C2C2"}}>
                        <IonText mode="ios" style={{justifyContent:"justify"}}>
                            Setelah kata sandi diubah, silahkan masuk kembali dengan kata sandi baru di aplikasi
                        </IonText>
                    </IonRow>
                    
                    <IonButton className="button-simpan" shape="round" style={{padding:"2px", background:"#0000A0", borderRadius:"15px", margin:"15px"}} color="#0000A0" expand="block" onClick={updatePassword}> Lanjut</IonButton>
                </IonCard>
         
                </IonContent>
            </IonModal>

            <IonAlert 
            isOpen={alert1}
            backdropDismiss={false}
            header='Pesan'
            message="Link reset password sudah dikirim via email"
            buttons={[
                {
                    text: 'OK',
                    handler: () => {setAlert1(false)}
                }
            ]}
            mode='ios'
            />
            <IonAlert
                isOpen={isAlert}
                onDidDismiss={() => {setIsAlert(false);window.open('/Profil','_self')}}
                header="Pesan"
                // subHeader="Periksa Kembali Formulir"
                message={msg}
                buttons={['OK']}
                mode='ios'
            />
            <IonAlert
              isOpen={isAlert2}
              header={alertHeader}
              message={alertMessage}
              mode='ios'
              buttons={[{
                text:"Oke",
                role:"confirm",
                handler: () =>{ setIsAlert2(false)}
              }]}
            />
        </IonContent>
    </IonPage>
)}
export default Profil;