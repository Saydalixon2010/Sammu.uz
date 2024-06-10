import React from "react";
import "./Talabalarga.css";


import { useState, useCallback } from "react";
import img1 from "../assets/bayroq1.png";
import img2 from "./gerb01-removebg-preview.png";
import img3 from "./music-removebg-preview (1).png";
import img42 from "../assets/expand-solid (2).svg";

import img39 from "../Navbar/telegram.svg";
import img49 from "../Navbar/facebook-f.svg";
import img50 from "../Navbar/youtube.svg";
import img51 from "../Navbar/instagram.svg";
import img52 from "../Navbar/twitter.svg";
import img53 from "../Navbar/map-marker-alt-solid.svg";
import img54 from "../Navbar/phone-solid.svg";
import img55 from "../Navbar/fax-solid.svg";
import img56 from "../Navbar/envelope-solid.svg";
import img57 from "../Navbar/Blue and White Illustrative Doctor Health Care Logo.jpg";
import img58 from "../Navbar/play-market.svg";
import img59 from "../Navbar/app-store.svg";
import img60 from "../Navbar/un.webp";
import img62 from "./collect (1).png";
import img61 from "../assets/hit (1).gif";
import img63 from "../Navbar/images.png";
import img64 from "../Navbar/sal.jpg";

import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { NavLink } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import "../MAIN/Main.css";

const Talabalarga = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const handle = useFullScreenHandle();

  const toggleFullScreen = useCallback(() => {
    if (!isFullScreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        // Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        // IE/Edge
        document.documentElement.msRequestFullscreen();
      }
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        // IE/Edge
        document.msExitFullscreen();
      }
      setIsFullScreen(false);
    }
  }, [isFullScreen]);
  const [isLightMode, setIsLightMode] = useState(true); // Define isLightMode state

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };


  return (
    
      <div
      className={`container ${isLightMode ? "light-mode" : "dark-mode"}`}
    >
        <div className="navbar1">
          <a href="https://archive.uz/ozbekiston-respublikasining-davlat-bayrogi">
            <img className="src1" width="35px" src={img1} alt="Bayroq" />
          </a>
          <a href="https://archive.uz/ozbekiston-respublikasi-davlat-gerbi">
            <img className="src1" width="30px" src={img2} alt="Gerb" />
          </a>
          <a href="https://archive.uz/ozbekiston-respublikasi-davlat-madhiyasi">
            <img className="src1" width="30px" src={img3} alt="Madhiy" />
          </a>
          <img
            width="30px"
            className="src1"
            onClick={toggleFullScreen}
            src={img42}
            alt="Fullscreen Toggle"
          />
           <p id="a" onClick={toggleMode}>
          {isLightMode ? "🔆 " : "🌙"}
        </p>
        </div>
      <div className="nav">
        <ul className="ul1">
          <NavLink to="/">
            <li className="li1">Bosh sahifa</li>
          </NavLink>

          <NavLink to="/universitethaqida">
            <li className="li2">Universitet haqida</li>
          </NavLink>

          <NavLink to="/rector">
            <li className="li3">Rector</li>
            </NavLink>
          <NavLink to="/yo'riqnoma">
            <li className="li4">Talabalarga yo'riqnoma</li>
          </NavLink>
          <NavLink to="/ro'xatdan o'tish">
            <li className="li4">
              Ro'yxatdan o'tish
            </li>
          </NavLink>
          <UserButton />
        </ul>
      </div>
      <div className="katta">
        <img className="img64" src={img64} alt="" />
        <h1 className="h38">
          Talabalari o`qishini ko`chirish, qayta tiklash va o`qishdan
          chetlashtirish.
        </h1>
      </div>
      <br />
      <br />
      <div className="katta1">
        <div className="page12">
           Oliy ta'lim muassasalari bakalavriatiga va magistraturasiga qabul
          qilish tartiblari bilan O`zbekiston Respublikasi Vazirlar
          Mahkamasining 2017-yil 20-iyundagi 393-son qarori Oliy ta'lim
          muassasalariga o'qishga qabul qilish, talabalar o'qishini ko'chirish,
          qayta tiklash va o'qishdan chetlashtirish tartibi to`g`risida NIZOM"
          ga muvofiq amalga oshiriladi.
        </div>
        <br />
        <div className="page13">
          O‘zbekiston Respublikasi Vazirlar Mahkamasining 2017-yil 20-iyundagi
          393-son qarori bilan tasdiqlangan Oliy ta’lim muassasalari talabalari
          o‘qishini ko‘chirish, qayta tiklash va o‘qishdan chetlashtirish
          tartibi to‘g‘risidagi nizomga muvofiq amalga oshiriladi.
        </div>
        <br />
        <div className="page12">
          Oliy ta’lim muassasalari talabalari o‘qishini ko‘chirish va qayta
          tiklashning umumiy qoidalari.  <br /> Oliy ta’lim muassasalari talabalari
          o‘qishini ko‘chirish va qayta tiklash (keyingi o‘rinlarda Talabalar
          o‘qishini ko‘chirish va qayta tiklash deb ataladi)da oliy ta’limning
          mos va turdosh ta’lim yo‘nalishlarini (mutaxassisliklarini) belgilash
          quyidagi mezonlarga asoslanadi: ta’lim yo‘nalishlarining
          (mutaxassisliklarining) nomlanishi bir xil bo‘lganda bunday ta’lim
          yo‘nalishlari (mutaxassisliklari) mos deb hisoblanadi; oliy ta’lim
          muassasalari talabalari o‘qishini ko‘chirish va qayta tiklash uchun
          o‘qishga kirishda sinov o‘tkaziladigan fanlari tarkibi va ta’lim
          sohasi hamda o‘qish muddati bir xil bo‘lganda bunday ta’lim
          yo‘nalishlari (mutaxassisliklari) turdosh deb hisoblanadi.  <br /> Talabalar
          o‘qishini ko‘chirish yoki qayta tiklash quyidagilarning: oliy ta’lim
          muassasalari; tasarrufida oliy ta’lim muassasalari bo‘lgan vazirliklar
          va idoralar;  <br /> O‘zbekiston Respublikasi ta’lim muassasalariga qabul
          qilish bo‘yicha Davlat komissiyasi qoshidagi Talabalar o‘qishini
          ko‘chirish va qayta tiklash idoralararo komissiyasi (keyingi
          o‘rinlarda Idoralararo komissiya deb ataladi) qarorlari asosida amalga
          oshiriladi. <br /> <br /> Idoralararo komissiya O‘zbekiston Respublikasi ta’lim
          muassasalariga o‘qishga qabul qilish bo‘yicha Davlat komissiyasi
          (keyingi o‘rinlarda Davlat komissiyasi deb ataladi) tomonidan tashkil
          etiladi. Uning tarkibiga tasarrufida oliy ta’lim muassasalari bo‘lgan
          vazirliklar va idoralar vakillari kiritiladi.  <br /> Idoralararo
          komissiyaning raisi va mas’ul kotibi Davlat komissiyasi qarori bilan
          tayinlanadi. <br />  Idoralararo komissiya “O‘zbekiston Respublikasi ta’lim
          muassasalariga o‘qishga qabul qilish Davlat komissiyasi qoshidagi
          Talabalar o‘qishini ko‘chirish va qayta tiklash idoralararo
          komissiyasi to‘g‘risida nizom” asosida faoliyat yuritadi.  <br />Bir oliy
          ta’lim muassasasi doirasida oliy ta’limning mos va turdosh
          yo‘nalishlari (mutaxassisliklari) bo‘yicha talabalar o‘qishini
          ko‘chirish va qayta tiklash (qayta tiklash — talabalar safidan
          chetlashtirilganligiga 5 yilgacha bo‘lgan muddatda) shu oliy ta’lim
          muassasasi rektorining buyrug‘i asosida amalga oshiriladi.  <br /> Quyidagi
          hollarda talabalar o‘qishini ko‘chirish va qayta tiklash talabani
          qabul qilayotgan oliy ta’lim muassasasi bo‘ysunadigan vazirlik (idora)
          qarori asosida amalga oshiriladi: oliy ta’limning mos va turdosh
          yo‘nalishlari (mutaxassisliklari) bo‘yicha bir vazirlik (idora)
          doirasida boshqa oliy ta’lim muassasasiga; oliy ta’limning mos va
          turdosh yo‘nalishlari (mutaxassisliklari) bo‘yicha turli vazirlik
          (idora) doirasida bir oliy ta’lim muassasasidan boshqa oliy ta’lim
          muassasasiga; talabalar safidan chetlashtirilganligiga 5 yildan 10
          yilgacha muddat o‘tganda.  <br /> Quyidagi hollarda talabalar o‘qishini
          ko‘chirish va qayta tiklash Idoralararo komissiya qarori bilan amalga
          oshiriladi: xorijiy davlatlarning akkreditatsiyaga ega bo‘lgan oliy
          ta’lim muassasalaridan O‘zbekiston Respublikasi oliy ta’lim
          muassasalariga; talabalar safidan chetlashtirilganligiga 10 yildan
          ortiq vaqt o‘tgan bo‘lsa; bir oliy ta’lim muassasasi doirasida yoki
          bir vazirlik (idora) va turli vazirliklar (idoralar) tasarrufidagi
          oliy ta’lim muassasalariga oliy ta’limning turdosh bo‘lmagan
          yo‘nalishlariga (mutaxassisliklariga).  <br /> Quyidagi holatlar fuqaroning
          o‘qishini ko‘chirish va qayta tiklash haqidagi arizasiga rad javobini
          berilishiga asos bo‘ladi: xorijiy davlatlarning akkreditatsiyaga ega
          bo‘lmagan oliy ta’lim muassasalarida yoki ularning filiallarida
          o‘qiganlarga; respublika oliy ta’lim muassasalaridagi mavjud ta’lim
          shaklidan o‘zga (boshqa) ta’lim shaklida o‘qiganlarga; oliy ta’lim
          muassasalarining markazlari, bo‘limlari, o‘quv-maslahat punktlari va
          boshqalarda o‘qiganlarga; birinchi kursning birinchi semestriga
          birinchi semestr tugallanmagan holatda (talabaga kasallik tufayli
          akademik ta’til berilgan holatlar bundan istisno); oliy ta’lim
          muassasasida mos (turdosh) ta’lim yo‘nalishi (mutaxassisligi) yoki
          ta’lim shakli mavjud bo‘lmasa; namunaviy o‘quv rejalaridagi umumkasbiy
          va ixtisoslik (mutaxassislik) fanlari bo‘yicha farqlar 4 tadan
          oshganda; to‘lov-kontrakt asosida o‘qishga tavsiya etilganlar to‘lovni
          belgilangan muddatda amalga oshirmaganda; talabaning shaxsiy yig‘ma
          jildi (akademik ma’lumotnoma) belgilangan muddatlarda taqdim
          etilmaganda; oliy ta’lim muassasasiga davlat granti asosida ko‘chirish
          va qayta tiklash davlat granti asosida ta’lim oluvchilar soni (qabul
          kvotalari) doirasida bo‘sh o‘rinlar mavjud bo‘lmasa; qonunchilikda
          belgilangan boshqa holatlarda. Oliy ta’lim muassasalari talabalari
          o‘qishini ko‘chirish. Oliy ta’lim muassasalari talabalarining
          o‘qishini ko‘chirish (keyingi o‘rinlarda Talabalar o‘qishini
          ko‘chirish deb ataladi) bo‘yicha arizalarni topshirish va ko‘rib
          chiqish quyidagicha amalga oshiriladi: o‘qishini ko‘chirish bo‘yicha
          arizalarni taqdim etish — har yili 15 iyuldan 5 avgustga qadar amalga
          oshiriladi; arizalarni oliy ta’lim muassasasi, tegishli vazirlik
          (idora) yoki Idoralararo komissiya tomonidan ko‘rib chiqib, qaror
          qabul qilish — har yili 5 avgustdan 30 avgustga qadar amalga
          oshiriladi.  <br /> Talabalar o‘qishini ko‘chirish uzrli sabablarga ko‘ra
          (bir hududdan ikkinchi hududga doimiy yashash uchun yoki turmushga
          chiqish munosabati bilan ko‘chib o‘tganda, turmush o‘rtog‘i yoki
          ota-onasi harbiy xizmat o‘tash joyini o‘zgartirganda, yoxud ota-onasi
          (turmush o‘rtog‘i) xorijdagi davlat xizmatidan qaytganda) bahorgi
          semestrda o‘quv mashg‘ulotlari boshlanishidan oldin ham amalga
          oshirilishi mumkin. Bunda: o‘qishini ko‘chirish bo‘yicha ariza
          topshirish — har yili 20 dekabrdan keyingi yilning 20 yanvariga qadar;
          o‘qishini ko‘chirish bo‘yicha arizani ko‘rib chiqib, qaror qabul
          qilish — har yili 25 yanvardan 15 fevralga qadar amalga oshiriladi.
          O‘qishini ko‘chirish istagini bildirgan fuqaro quyidagi hujjatlarni
          taqdim etadi: ko‘chirish (qayta tiklash)ni istagan ta’lim yo‘nalishi
          (mutaxassisligi), o‘quv tili va shakli ko‘rsatilgan holdagi ariza
          (arizada o‘qigan oliy ta’lim muassasasi va ta’lim yo‘nalishi
          (mutaxassisligi), ko‘chirish (qayta tiklash) sabablari, ko‘chirish
          (qayta tiklash) qoidalari bilan tanishganligi ko‘rsatiladi);
          talabaning reyting daftarchasi yoki belgilangan shakldagi akademik
          ma’lumotnoma nusxalari; pasportning nusxasi.  <br /> O‘qishning barcha
          shakllari bo‘yicha oliy ta’limning mos va turdosh yo‘nalishlari
          (mutaxassisligi) bo‘yicha davlat grantlari o‘rinlariga ko‘chirishga
          faqat davlat grantlari asosida tahsil olgan talabalar arizasiga ko‘ra
          oliy ta’lim muassasalarida tegishli o‘quv yilidagi qabul qilish
          kvotalarida belgilangan davlat grantlarining soni doirasida ruxsat
          etiladi.  <br /> Boshqa hollarda o‘qishni ko‘chirish to‘lov-kontrakt asosida
          amalga oshiriladi.  <br /> Xorijiy oliy ta’lim muassasalaridan o‘qishini
          O‘zbekiston Respublikasi oliy ta’lim muassasalariga ko‘chirish va
          ko‘chirib qayta tiklash istagini bildirgan fuqarolar tasarrufida oliy
          ta’lim muassasalari mavjud vazirlik va idoralarda tashkil qilingan
          komissiyalarda o‘zlari ta’lim olgan xorijiy oliy ta’lim muassasasidagi
          o‘qitish tili bo‘yicha muayyan ta’lim yo‘nalishidagi o‘qishga kirish
          fanlari bo‘yicha maxsus sinov (komissiya tomonidan belgilangan test
          yoki yozma ish shaklida) (turmush o‘rtog‘i yoki ota-onasi xorijiy
          davlatdagi davlat xizmatini o‘tash joyi Tashqi ishlar vazirligi
          (vakolatli idoralar) tomonidan O‘zbekiston Respublikasiga o‘tkazilgan,
          Hukumat qarorlari va topshiriqlari hamda oliy ta’lim muassasalariga
          ega vazirlik va idoralar tomonidan davlat buyurtmasi bilan xorijga
          o‘qishga yuborilganlar bundan mustasno) topshiradi.  <br /> Fuqaroning
          maxsus sinov (komissiya tomonidan belgilangan test yoki yozma ish
          shaklida) natijasi Idoralararo komissiyaga taqdim etiladi. Maxsus
          sinov (komissiya tomonidan belgilangan test yoki yozma ish shaklida)
          natijasidan kelib chiqib, fuqaro Idoralararo komissiya qarori bilan
          ko‘rsatilgan o‘quv shaklidagi guruhlarga ko‘chiriladi Oliy ta’lim
          muassasalari talabalari o‘qishini qayta tiklash. Oliy ta’lim
          muassasalari talabalarining o‘qishini qayta tiklash (keyingi
          o‘rinlarda Talabalar o‘qishini qayta tiklash deb ataladi) bo‘yicha
          arizalarni topshirish va ko‘rib chiqish bir yilda ikki marta amalga
          oshiriladi: o‘qishini kuzgi semestrga qayta tiklash bo‘yicha ariza
          topshirish — har yili 15 iyuldan 5 avgustga qadar; o‘qishini bahorgi
          semestrga qayta tiklash bo‘yicha ariza topshirish — har yili 20
          dekabrdan keyingi yilning 20 yanvariga qadar davom etadi.  <br /> Qayta
          tiklash bo‘yicha arizalarni oliy ta’lim muassasasi, tasarrufida oliy
          ta’lim muassasalari bo‘lgan vazirlik (idora) tomonidan ko‘rib chiqib
          qaror qabul qilish: kuzgi semestrga qayta tiklash uchun — har yili 5
          avgustdan 30 avgustga qadar; bahorgi semestrga qayta tiklash uchun —
          har yili 25 yanvardan 15 fevralga qadar amalga oshiriladi.  <br /> Talabalar
          safidan chetlashtirilgan fuqarolar o‘qishini boshqa oliy ta’lim
          muassasasiga mos (turdosh) ta’lim yo‘nalishi (mutaxassisligi)ga
          ko‘chirib tiklash to‘g‘risida ariza berish huquqiga ega. Bunda arizaga
          o‘qishni ko‘chirish tartibidagi hujjatlar taqdim etiladi. Oliy ta’lim
          muassasalari talabalarini o‘qishdan chetlashtirish.  <br /> Talaba oliy
          ta’lim muassasasidan quyidagi hollarda chetlashtirilishi mumkin: o‘z
          xohishiga binoan; o‘qishning boshqa ta’lim muassasasiga ko‘chirilishi
          munosabati bilan; salomatligi tufayli (tibbiy komissiya ma’lumotnomasi
          asosida); o‘quv intizomini va oliy ta’lim muassasasining ichki
          tartib-qoidalarini buzganligi uchun; bir semestr davomida darslarni
          uzrli sabablarsiz 74 soatdan ortiq qoldirganligi sababli; o‘qish uchun
          belgilangan to‘lov o‘z vaqtida amalga oshirilmaganligi sababli
          (to‘lov-kontrakt bo‘yicha tahsil olayotganlar uchun); talaba sud
          tomonidan ozodlikdan mahrum etilganligi munosabati bilan; vafot
          etganligi sababli.  <br /> Harbiy xizmatni o‘tash, salomatligini tiklash,
          homiladorlik va tug‘ish, shuningdek bolalarni parvarish qilish
          ta’tillari davrida talabaga Oliy va o‘rta maxsus ta’lim vazirligi
          tomonidan tasdiqlangan tartib asosida akademik ta’til berilishi
          mumkin.  <br /> Belgilangan muddatlarda fanlarni o‘zlashtira olmagan
          (akademik qarzdor bo‘lgan) talaba oliy ta’lim muassasasi rektori
          buyrug‘i bilan kursdan qoldiriladi.  <br /> Akademik qarzdorligi tufayli
          kursdan qoldirilgan talaba to‘lov-kontrakt asosida o‘qishini quyi
          kursdagi o‘quv semestri boshidan boshlashi mumkin.
        </div>
      </div>
      <div className="page10cha">
        <div className="kattaspan1">
          <span className="span1">
            <h1 className="h34">Ijtimoiy tarmoqlar</h1>
            <a data-turbo="true" href="https://t.me/sammu_education">
              <img className="telegram" src={img39}></img> Telegram
            </a>{" "}
          </span>
          <span className="span2">
            <a
              data-turbo="true"
              href="https://www.facebook.com/sammu.education"
            >
              <img className="facebook" src={img49}></img> Facebook
            </a>
          </span>
          <span className="span3">
            <a
              data-turbo="true"
              href="https://www.youtube.com/c/sammu_education"
            >
              <img className="youtube" src={img50}></img> Youtube
            </a>
          </span>
          <span className="span3">
            <a
              data-turbo="true"
              href="https://www.instagram.com/sammu_education"
            >
              <img className="ins" src={img51}></img> Instagram
            </a>
          </span>
          <span className="span4">
            <a data-turbo="true" href="https://twitter.com/sammu_education">
              <img src={img52} className="twi"></img> Twitter
            </a>
          </span>
        </div>
        <div className="kattaspan2">
          <span className="span5">
            <h1 className="h34">Bizning manzil</h1>
          </span>
          <span className="span6">
            <a data-turbo="true" href="https://yandex.uz/maps/-/CCUiqRVXoB">
              <img className="manzil" src={img53}></img>Samarqand sh., Amir
              Temur k.,18-uy
            </a>
          </span>
          <span className="span7">
            <a data-turbo="true" href="tel:+998 66 233 08 41">
              <img className="tel" src={img54}></img> +998 (90) 070 02 51
            </a>
          </span>
          <span className="sapn8">
            <a data-turbo="true" href="tel:+998 66 233 71 75">
              <img className="fax" src={img55}></img> +998 (66) 233 71 75
            </a>
          </span>
          <span className="span7">
            <a data-turbo="true" href="mailto:sammu@sammu.uz">
              <img className="email" src={img56}></img> sammu@sammu.uz
            </a>
          </span>
          <span className="span8">
            <a data-turbo="true" href="mailto:sammu@sammu.uz">
              <img className="email" src={img56}></img> sammI@sammu.ru
            </a>
          </span>
        </div>
        <div>
          <iframe
            className="map"
            src="https://yandex.ru/map-widget/v1/?z=17&amp;ol=biz&amp;oid=168327109761"
          ></iframe>
        </div>
      </div>
      <div className="kattaspan3">
        <img className="img-box" src={img57} />
        <p className="p44">
          Barcha huquqlar himoyalangan. Saytdagi barcha huquqlar O'zbekiston
          Respublikasi qonunlariga, shu jumladan mualliflik huquqi va turdosh
          huquqlarga muvofiq himoya qilinadi. Sayt materiallaridan
          foydalanganda, Samarqand davlat tibbiyot universiteti saytiga havola
          ko'rsatilishi shart
        </p>
        <div className="imgs-box">
          <a href="https://play.google.com/store/apps/details?id=uz.sammi.app&amp;utm_source=sammi.uz&amp;pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
            <img width="150px" src={img58} />
          </a>
          <a href="https://apps.apple.com/uz/app/samdtu-rasmiy-ilovasi/id1599322059">
            <img width="150px" src={img59} />
          </a>
        </div>
      </div>
      <div className="imss-box">
        <a
          data-turbo="true"
          href="https://www.uz/ru/res/visitor/index?id=46395"
          target="_top"
        >
          <img width="88px" height="28px" src={img63} alt="" />
        </a>
        <a href="https://www.liveinternet.ru/click" target="_blank">
          <img src={img61} />
        </a>
        <a
          href="https://metrika.yandex.ru/stat/?id=55237306&amp;from=informer"
          target="_blank"
          rel="nofollow"
        >
          <img src={img62} alt="" />
        </a>
        <a href="https://www.4icu.org/reviews/11937.htm" target="_parent">
          <img width="86px" height="30px" src={img60} />
        </a>
      </div>
    </div>
  );
};

export default Talabalarga;
