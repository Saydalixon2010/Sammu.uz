import React, { useState, useCallback } from "react";
import "./Universitet.css";
import img1 from "../assets/bayroq1.png";
import img2 from "./gerb01-removebg-preview.png";
import img3 from "./music-removebg-preview (1).png";
import img42 from "../assets/expand-solid (2).svg";
import img64 from "../Navbar/samarqand.png";
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

import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { NavLink } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

const Universitet = () => {
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
    <>
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

            <li className="li2">Universitet haqida</li>
            

            <NavLink to="/rector">
            <li className="li3">Rector</li>
            </NavLink>
        
            <NavLink to="/yo'riqnoma">

            <li className="li4">Talabalarga yo'riqnoma</li>
            </NavLink>
            <NavLink to="/ro'xatdan o'tish">
              <li className="li4">
                Ro'yxatdan o'tiklash
              </li>
            </NavLink>
            <UserButton />
          </ul>
        </div>
        <div className="katta">
          <div className="page11">
            <img className="samar" src={img64} alt="" />
            <br /><br />
            <h1 className="h35">Universitet haqida umumiy ma'lumot</h1>
          </div>
          <div className="page12">
            Respublika hukumatining qarori bilan Samarqand davlat tibbiyot
            universiteti 1930-yilda, bundan 90 yil muqaddam tashkil etilgan.
            Universitetimiz o‘zining shonli tarixi davomida nafaqat O‘zbekiston,
            balki butun Markaziy Osiyo mintaqasidagi yetakchi tibbiyot oliy
            o‘quv yurtlaridan biriga aylanish yo‘lida uzoq yo‘lni bosib o‘tdi.
          </div>
          <br />
          <div className="page13">
              1930-yilda Oʻzbekiston Xalq Komissarlari Sovetining 1930-yil
            7-maydagi 80-sonli qarori bilan Samarqand shahrida Oʻzbekiston
            Davlat Tibbiyot instituti (O`zDTI) tashkil etildi. Bu Markaziy Osiyo
            mintaqasi aholisi uchun katta voqea bo'ldi, chunki bu mintaqada
            mustaqil tibbiyot oliy ta'lim muassasasi yo'q edi.
          </div>
          <br />
          <div className="page14">
             Respublika mustaqillikka erishgandan keyin, Samarqand davlat
            tibbiyot instituti (2022-yil aprel oyidan boshlab – Universitet)
            alohida rivojlandi. 1997-yilda mamlakatimizda “Kadrlar tayyorlash
            milliy dasturi”, 1998-yilda sogʻliqni saqlashni isloh qilish davlat
            dasturi qabul qilindi, uning natijasida 1999-yilda Oliy hamshiralik
            ishi fakulteti tashkil etildi. 2001-yilda bo’lim ochildi va
            2005-yildan boshlab, tibbiy pedagogika fakulteti, keyingi yillarda
            stomatologiya, tibbiy profilaktika, tibbiy biologiya, farmatsevtika
            fakultetlari va 2020-yildan boshlab talabalar yangi yo'nalish "Xalq
            tabobati" yo'nalishi bo'yicha tahsil olyaptilar.
          </div>
          <br />
          <div className="page15">
            2020-yilda COVID-19 koronavirus pandemiyasi dunyoning deyarli barcha
            mamlakatlaridagi barcha hayot sohalariga tubdan ta'sir ko'rsatdi.
            Hatto, o'zgarishlar shu qadar chuqur bo’ldiki,
            sanitariya-epidemiologiya talablariga doimiy rioya qilish ma'nosida
            ularga moslashishimiz kerak degan fikrlar ham mavjud.
          </div>
          <br />
          <div className="page16">
            Pandemiya - ta'lim va tarbiyaga ham katta ta'sir ko'rsatdi. Bizning
            universitetimiz, respublikaning barcha ta'lim muassasalari singari,
            pandemiyaning birinchi kunlaridanoq masofaviy o'qishga o'tdi.
            2013-yildan boshlab, o'zining elektron ta'lim platformasi yaratildi
            va o'quv yilining aprel oyidan butun o'quv jarayoni oxirigacha
            muvaffaqiyatli faoliyat ko'rsatdi.
          </div>
          <br />
          <div className="page17">
            Universitetimizning o‘ziga xos xususiyatlari va kadrlar
            salohiyatining asosiy tayanchini tibbiyot xodimlari tashkil
            etib,karantin joriy etilishining boshidanoq ular masofaviy o'qitish
            talablari asosida barcha ishlarni tezda qayta qurishga muvaffaq
            bo'lishlari tabiiydir. 2020-2021- o'quv yili boshidan onlayn dars
            o'tish uchun institutning mutlaqo yangi elektron platformasi ish
            boshladi, barcha asosiy o'quv materiallari elektron formatga
            o'tkazildi va maxsus yaratilgan virtual resurs bazalariga
            joylashtirildi, ularga barcha o'qituvchi va talabalar kirish
            imkoniyatiga ega.
          </div>
          <br />
          <div className="page18">
            Universitet Privoljskiy tadqiqot tibbiyot universiteti, I.N. Ulyanov
            nomidagi Chuvash milliy universiteti (Rossiya), Y.Gorbachevskiy
            nomidagi Ternopil milliy tibbiyot universiteti (Ukraina), Biznes
            milliy Louis universiteti oliy maktabi (Polsha), Belarus davlat
            tibbiyot universiteti (Belarus Respublikasi) kabi taniqli xorijiy
            universitetlar bilan bir nechta mutaxassisliklar bo'yicha bakalavr
            va magistr darajalarida ta'lim olish uchun hamkorlik aloqalarini
            o'rnatgan. Koreya tomoni bilan birgalikda ikkinchi oliy ta'lim
            dasturi bo'yicha kadrlar faol ta'lim olmoqda. Shuningdek, 2020-2021-
            o'quv yilidan boshlab, universitet devorlari ichida oliy tibbiy
            ma'lumot olish niyatida bo'lgan IRP va Hindiston talabalarini qabul
            qilish boshlandi.
          </div>
          <br />
          <div className="page19">
             2021-yil 24-dekabr kuni O'zbekiston Respublikasi Prezidenti
            tomonidan oliy ta'lim tizimida "Davlat oliy ta'lim muassasalarining
            o'quv-uslubiy va boshqaruv mustaqilligini ta'minlashga doir
            qo'shimcha chora-tadbirlar to'g'risida"gi va "Davlat oliy ta'lim
            muassasalarining moliyaviy mustaqilligini ta'minlash
            chora-tadbirlari to'g'risida"gi ikki muhim hujjat imzolandi.
          </div>
          <br />
          <div className="page20">
            Qabul qilingan hujjatlar mamlakat oliy o'quv yurtlarini
            rivojlantirishda yangi sahifa ochdi. Mazkur hujjatlarga muvofiq oliy
            taʼlim muassasalari va uning filiallari uchun oʻz rejasi asosida
            oʻquv-uslubiy va boshqa oʻquv-uslubiy adabiyotlar yaratilishi va
            nashr etilishi kabi huquq va imkoniyatlarga; ta'lim sifatini ichki
            nazorat qilish mexanizmlarini yaratish va joriy etish; ta'lim, fan,
            uning natijalarini amaliyotga joriy etish va tijoratlashtirish,
            nodavlat tuzilmalar, tijorat va notijorat tashkilotlarini yaratish
            bilan bog'liq asosiy faoliyatni amalga oshirish; oliy ta'lim
            muassasalari uchun belgilangan standartlardan qat'iy nazar, muassasa
            tuzilishini tasdiqlash va kadrlarni aniqlash; mehnat bozori
            ehtiyojlariga asoslangan yangi yo'nalish va ixtisosliklar ochish,
            mavjud soha va ixtisosliklarni tugatish; professor-o'qituvchilar va
            boshqa xodimlarni qabul qilish, ishdan bo'shatish va ichki rotatsiya
            qilish tartib-taomillarini joriy etish; xorijiy fuqarolarni haq
            to'lanadigan asoslarda qabul qilish va masofaviy ta'limni tashkil
            etish huquqiga ega boʻladi. Universitet rektori ushbu hujjatlar
            nafaqat huquq va mustaqillikni ta'minlash, balki ularning amalga
            oshirilishi uchun universitet xodimlari zimmasiga alohida mas'uliyat
            yuklashini ta'kidladi.
          </div>
          <br />
          <div className="page21">
            Mazkur hujjatlarga muvofiq, davlat oliy ta'lim muassasalari
            ro'yxatiga Samarqand davlat tibbiyot universiteti 2022-yil
            1-yanvardan boshlab, moliyaviy mustaqillik erishganligi tarkibiga
            kiritilganligi tasdiqlandi. Universitetlarga haq to'lanadigan
            kontrakt asosida o'qitish xarajatlarini belgilash, talabalar
            tomonidan to'lanadigan kontrakt bo'yicha to'lov-kontrakt shartlarini
            belgilash va uzaytirish, shartnoma asosida mahalliy va xorijiy
            professor-o'qituvchilarni va mutaxassislarni o'quv jarayoniga
            zamonaviy pedagogik texnologiyalarni tatbiq etish va ilmiy-tadqiqot
            ishlarini olib borish, o'quv-uslubiy va ilmiy jarayonlar bilan
            shug'ullanuvchi, professor-o'qituvchilarning to'liq vaqtli
            birliklarini joriy etish bo'yicha standartlarni ishlab chiqish,
            xorijiy yuqori malakali mutaxassislarga ish haqi , talabalar uchun
            stipendiyalar va grantlarni o'z mablag'lari hisobidan ajratish,
            mualliflik huquqiga ega bo'lgan ishlab chiqaruvchilardan chet
            davlatlardan o'quv va ilmiy adabiyotlar, o'quv-uslubiy qo'llanmalar
            va o'quv-metodik qo'llanmalarni to'g'ridan-to'g'ri sotib olish,
            bo'sh bino va inshootlarda haq to'lanadigan xizmatlar ko'rsatish
            tartibini belgilash, avtotransport vositalarining yillik kilometr
            chegarasini va ularni ta'mirlashga qo'yiladigan talablarni belgilash
            bo'yicha mustaqil ravishda qaror qabul qilish vakolati beriladi.
          </div>
          <br />
          <div className="page22">
             2022-2023-o'quv yilidan boshlab, o'quv-uslubiy sohada ro'yxatga
            kiritilgan universitetlarga o'quv rejalari va rejalarini, shuningdek
            malaka talablarini tasdiqlash vakolati beriladi; ta'lim tili va
            shaklini aniqlash; doktorantlar va talabgorlar tomonidan ilmiy
            rahbarligini amalga oshirish tartibini tasdiqlaydi; magistraturada
            sirtqi, kechki, sirtqi ta'limni joriy etish; oliy o'quv yurtlari
            uchun darsliklar va boshqa o'quv-uslubiy va ilmiy adabiyotlarni
            ishlab chiqish va nashr etish; ta'lim sifatini ichki nazoratni
            belgilash va amalga oshirish; bakalavriat va magistraturada o'qish
            shartlarini belgilaydi. Shuningdek, ular chet el fuqarolarini
            xorijiy oliy o'quv yurtlaridan ko'chirish to'g'risida qaror qabul
            qilishlari, imtihonlar o'tkazish tartibi va baholash mezonlarini
            tasdiqlashlari mumkin.
          </div>
          <br />
          <div className="page23">
             2022-2023-o'quv yilidan universitetlarda ta'lim, fan, shuningdek,
            tadqiqot natijalarini amaliyotga joriy etish va tijoratlashtirish
            sohasidagi faoliyat bilan shug'ullanuvchi tarkibiy birliklar
            imkoniyati yaratiladi. Shuningdek, universitetlar ichki qoidalarini,
            xususan kiyinish madaniyatini mustaqil ravishda belgilaydilar.
            Nazorat-taftish komissiyasi tuziladi, unda universitet boʻlimlari va
            vazirliklari rahbarlari, shuningdek, aholi vakillari ishtirok etadi.
            Universitet faoliyatida keng huquq va vakolatlarga ega bo'ladilar.
            Qarorlarga ko'ra, talabalar, tadqiqotchilar va o'qituvchilar xalqaro
            ma'lumotlar bazalariga bepul kirish imkoniyatiga ega bo'ladilar.
            Universitet kutubxonalaridagi adabiyotlar raqamlashtiriladi va
            O'zbekiston Respublikasi Oliy ta'lim vazirligining "Elektron
            kutubxona" platformasida chop etiladi. Universitetlardagi barcha
            hisobotlar onlayn formatga o'tkaziladi va shu maqsadda Oliy ta'lim
            vazirligi Jahon banki bilan birgalikda bosqichma-bosqich oliy ta'lim
            jarayonlarini boshqarish axborot tizimini joriy etadi. Shuningdek,
            2024-yilgacha o'quv- uslubiy, ilmiy-laboratoriya va maxsus texnika,
            o'quv-uslubiy adabiyotlar, importi bo'yicha bojxona bojlaridan ozod
            qilish, universitetning moddiy-texnik bazasi va salohiyatini yanada
            mustahkamlashga xizmat qiladi.
          </div>
          <br />
          <div className="page24">
            O'zbekiston Respublikasi Prezidenti Shavkat Mirziyoyevning 2022-yil
            1-apreldagi "Samarqand davlat tibbiyot universitetini tashkil etish
            va kadrlar tayyorlash tizimini yanada takomillashtirish
            to'g'risida"gi qarori Samarqand davlat tibbiyot instituti bazasida
            mamlakatimiz va xalqaro tajribalarning eng ilg'or yutuqlarini
            o'zgacha aks ettirib, zamonaviy tibbiyot universitetini yaratish
            ma'nosini anglatadi. Universitetimiz buning uchun zarur bo'lgan
            barcha narsaga ega, jumladan kuchli ilmiy-pedagogik potensial, boy
            moddiy-texnik baza va malakali tibbiyot xodimlarini tayyorlashning
            uzoq vaqtdan beri urf-odatlari mavjud. Prezident farmoniga binoan,
            o'quv jarayonini amaliy ko'nikmalarni shakllantirishga yo'naltirish,
            ilg'or pedagogik texnologiyalar, o'quv dasturlari va innovatsion
            materiallarni xalqaro ta'lim standartlari asosida keng joriy etish,
            klinika va o'quv-uslubiy bazada nazariy bilimlar va amaliyotning
            kombinatsiyasini ta'minlash uchun zarur shart-sharoitlar yaratish,
            chet el universitetlari bilan hamkorlik doirasida talabalar,
            professor-o'qituvchilar va tadqiqotchilar uchun akademik mobillik
            dasturlarini ishlab chiqish, tibbiyot oliy o'quv yurtlari tibbiyot
            amaliyotidagi mavjud muammolarni hal qilish bo'yicha fundamental,
            amaliy va innovatsion tadqiqotlar olib borish, "Universitet 3.0"
            konsepsiyasini bosqichma-bosqich joriy etish, bu tibbiyot ta'limi,
            fan, amaliy sog'liqni saqlashni iqtisodiyotning real sektorlari
            bilan uzviy bog'liqligini ta'minlaydi.
          </div>
          <div className="page25">
            Ushbu qarorda universitetning amaliy yo'nalishini rivojlantirishga,
            xususan, Samarqand viloyat sog'liqni saqlash ilmiy-tadqiqot
            shifoxonasi negizida ilmiy-tadqiqot reabilitatsiyasi va sport
            tibbiyoti instituti, bolalar xirurgiya klinikasinining birinchi va
            ikkinchi klinikalari negizida universitetning ko'p tarmoqli
            klinikasi, L.M.Isayev nomidagi epidemiologiya, mikrobiologiya,
            yuqumli va parazitar kasalliklar ilmiy-amaliy tibbiyot markazi va
            L.M.Isayev nomidagi klinikasi filial asosida ixtisoslashtirilgan
            Mikrobiologiya, virusologiya, yuqumli va parazitar kasalliklar
            ilmiy-tekshirish instituti va uning klinikalari, Neyroxirurgiya va
            neyroreabilitatsiyasiga ixtisoslashtirilgan ilmiy-amaliy markazi,
            Immunologiya, allergologiya va inson genomikasi ilmiy markaziga
            alohida e'tibor qaratilmoqda.
          </div>
          <br />
          <div className="page26">
            Hozirgi kunda universitetda bakalavriatning 9 ta yo'nalishi bo'yicha
            9 ta fakultetda o'qitish ishlari amalga oshirilmoqda:
          </div>
        </div>
          <br />
          <br />
        <div className="page27">
          <ul>
          <h2 className="h2Style">Fakultetlar:</h2>
            <li>"Davolash fakulteti";</li>
            <li>"Pediatriya fakulteti";</li>
            <li>"Tibbiy pedagogika fakulteti";</li>
            <li>"Oliy hamshiralik ishi fakulteti";</li>
            <li>"Stomatologiya fakulteti";</li>
            <li>"Farmatsiya fakulteti";</li>
            <li>
              Tibbiy profilaktika, sog'liqni saqlash va tibbiy biologiya
              fakulteti";
            </li>
            <li>"Xalqaro fakultet";</li>
            <li>"Oliy o'quv yurtidan keyingi ta'lim fakulteti"</li>
          </ul>
          <ul>
           
          <h2 className="h2Style">
            Bakalavr ta'lim yo'nalishi mutaxassisligi:
          </h2>
       
            <li>"Umumiy tibbiyot (davolash ishi)";</li>
            <li>"Pediatriya ishi";</li>
            <li>"Kasbiy ta'limi (davolash ishi)";</li>
            <li>"Oliy hamshiralik ishi";</li>
            <li>"Stomatologiya";</li>
            <li>"Tibbiy profilaktika";</li>
            <li>"Farmatsiya";</li>
            <li>“Tibbiy biologiya ishi”;</li>
            <li>"Xalq tabobati";</li>
            <li>"Klinik psixologiya";</li>
            <li>"Menejment: Sog'liqni saqlash sohasida menejment";</li>
          </ul>
        </div>
        <br />
        <div className="page28">
          <br />
          <h3>
             Ushbu fakultetlar o'z faoliyatini 74 ta kafedralar asosida olib
            bormoqdalar. Ularda 1190 ta o'quv xonalari, zamonaviy kompyuterlar
            va 75 ta multimedia auditoriyalari bilan jihozlangan. Samarqand
            tibbiyot institutida akademik litsey ham faoliyat ko'rsatmoqda.
          </h3>
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
    </>
  );
};

export default Universitet;
