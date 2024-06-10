import React from "react";

import "./Rector.css";

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
import img64 from "../Navbar/Rector.jpg";


import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { NavLink } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import "../MAIN/Main.css";

const Tuzilma = () => {
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

          <li className="li3">Rector </li>

          <NavLink to="/yo'riqnoma">
            <li className="li4">Talabalarga yo'riqnoma</li>
          </NavLink>
          <NavLink to={"/ro'xatdan o'tish"}>
            <li className="li4">
              Ro'yxatdan o'tish
            </li>
          </NavLink>
          <UserButton />
        </ul>
      </div>
      <div className="page29">
        <h1 className="h35">Universitet rektori</h1>
        <img src={img64} alt="" />
        <br />
        <br />
        <h1 className="h36">
          Rizayev Jasur Alimdjanovich <br /> tibbiyot fanlari doktori, professor
        </h1>
        <div className="pagecha1">
          <h1 className="h37">Qabul vaqti: 8:00 - 19:00</h1>
          <br />
          <h1 className="h37">Tel: +998 (90) 070 02 51</h1>
          <br />
          <h1 className="h37">Fax: +998 (90) 440 59 10</h1>
          <br />
          <h1 id="em" className="h37">
            E-mail:{" "}
            <a
              href="mailto:sammu@sammu.uz"
              rel="noopener noreferrer"
              aria-label="mailto:sammu@sammu.uz"
            >
              <em>sammu@sammu.uz</em>
            </a>{" "}
          </h1>
          <br />
          <h1 className="h37">
            Facebook:{" "}
            <a href="https://www.facebook.com/jasur.rizaev.1">
              https://www.facebook.com/jasur.rizaev.1
            </a>
          </h1>
          <br />
          <h1 className="h37">
            Instagram:{" "}
            <a href="https://www.instagram.com/jasur_rizayev">
              https://www.instagram.com/jasur_rizayev
            </a>
          </h1>
          <br />
          <h1 className="h37">
            Telegram:{" "}
            <a href="https://t.me/jasur_rizayev">https://t.me/jasur_rizayev</a>
          </h1>
          <br />
          <h1 className="h37">Manzil: Samarqand sh.,Amir Temur k.,18 uy</h1>
        </div>
      </div>
     
      <br />
      <div className="katta">
        <div className="page28">
          Rizayev Jasur Аlimdjanovich birinchi Toshkent davlat tibbiyot
          institutini 1996-yilda muvaffaqiyatli toʼgatgandan soʼng
          “Stomatologiya” mutaxasisligi boʼyicha klinik ordinatura xizmatini
          oʼtadi.
        </div>
        <br />
        <div className="page28">
          U 1997-2007-yillarda “terapevtik stomatologiya kafedrasida” avval
          laborant, assistent xamda kafedra dotsenti lavozimlarida ish olib
          bordi, ish jarayonida bemorlarga mustaqil yordam berish koʼnikmalarini
          mukammal egalladi.
        </div>
        <br />
        <div className="page28">
           Oʼz ish faoliyati davrida intizomli, bilimga chanqoq, yangilikka
          intiluvchan va oʼz ustida tinimsiz ishlovchi shifokor ekanligini
          koʼrsatdi va bemorlar, kafedra va boʼlim xodimlari orasida katta
          hurmatga sazovor boʼldi. Uning tashkilotchilik qobiliyatini eʼtiborga
          olib, klinika maʼmuriyati tomonidan 2007-yildan Toshkent tibbiyot
          akademiyasi 3-klinikasi bosh shifokor muovini lavozimiga tayinlandi,
          2009-yildan Uchtepa TTB rahbari, 2011-yilda Oʼzbekiston Respublikasi
          Sogʼliqni saqlash vazirligi tomonidan TTА 3-klinikasi bosh shifokori,
          2016-yil 26-avgustdan Toshkent davlat stomatologiya instituti rektori
          lavozimiga tayinlangan.
        </div>
        <br />
        <div className="page28">
          Rizayev Jasur Аlimdjanovich nafaqat yaxshi shifokor, balki saviyali
          murabbiy xamdir. U ish davrida oʼz bilim va orttirgan amaliy
          koʼnikmalarini talabalarga muntazam ravishda oʼrgatib bormoqda.
          J.А.Rizayev bir necha bor chet davlatlarda shu jumladan Fransiya,
          Italiya, Germaniya, Rossiya, Shveytsariya, Linxenshteyn, Koreya,
          Yaponiya davlatlarida boʼlib malakasini oshirgan. Shu bilan bir
          qatorda Rizayev Jasur Аlimjonovich chuqur ilmiy izlanishlar olib
          borishga layoqatli mutaxassisdir. U 2006-yilda “Клинико-функциональные
          показатели течения пародонтита и особенности лечения” nomzodlik
          himoyasini yoqlab boʼlgandan soʼng, 2015-yilda “Разработка концепции и
          программы профилактики заболеваний пародонта у населения Узбекистана
          на основе комплексных социально-гигиенических исследований” mavzusida
          doktorlik dissertatsiyasini himoya qildi. Uning olib borgan ilmiy
          izlanishlari boʼyicha tayyorlagan maqolalari АQSh, Koreya, Yaponiya,
          Rossiya va Qozogʼistonda oʼtkazilgan anjuman toʼplamlarida chop
          etilgan.
        </div>
        <br />
        <div className="page28">
          J.А.Rizayev Oʼzbekiston Respublikasi Sogʼliqni saqlash vazirining
          06.11.2013-yildagi 455-sonli buyrugʼi bilan “Oʼzbekiston Respublikasi
          sogʼliqni saqlash aʼlochisi” koʼkrak nishoniga sazovor boʼlgan,
          ”Mustaqillikning 20 yilligi”, ”Mustaqillikning 25 yilligi” koʼkrak
          nishonlari bilan mukofotlangan.
        </div>
        <br />
        <div className="page28">
          Soʼnggi yillarda oʼzining ishga chanqoqligi, yaxshi tashkilotchilik
          qobiliyati hamda Toshkent davlat stomatologiya institutining
          rivojlanishi va barkamolligi yoʼlida jadallik bilan olib borilgan
          ishlarning asosiy sababchilaridan biri xisoblanadi. U Institutda olib
          borgan faoliyati davomida qator ishlar amalga oshirildi, jumladan,
          institutda zamonaviy simulyatsion markaz tashkil qilinib, zamonaviy 3D
          simulyatorlar bilan jihozlangan, mazkur Virteasy Dental simulyatorlari
          Oʼrta Osiyo mamlakatlarida yagona boʼlib, jahon taʼlim standartlari
          talablarining biri hisoblanadi, 2017/2018-oʼquv yilidan boshlab
          fakultetlarning barcha kurslarida ayrim mutaxassislik fanlarini ingliz
          tilida oʼqitish yoʼlga qoʼyilgan. Bunday zamonaviy imkoniyatlar
          malakali kadrlar tayyorlash, stomatologiya sohasida jahon
          tibbiyotining ilgʼor amaliyotlarini keng joriy etish, xalqimizga
          koʼrsatilayotgan stamatologik xizmatni sifat jihatdan yangi bosqichga
          olib chiqishga muhim qadam boʼlmoqda. Shu yillarda xorijiy
          mamlakatlarning yetmish beshga yaqin nufuzli oliy taʼlim muassasalari
          va kompaniyalari bilan oʼzaro hamkorlik boʼyicha memorandum imzoladi.
          Mazkur hamkorlik doirasida 2018/2019-oʼquv yilidan Toshkent davlat
          stomatologiya institutida 2 ta qoʼshma taʼlim dasturi doirasida
          Italiyaning Turin universiteti hamda Moskva davlat tibbiyot
          stomatologiya universiteti bilan hamkorlikda Biotibbiy muhandislik va
          Stomatologiya yoʼnalishlarida qoʼshma fakultetlar tashkil etildi.
          Shuningdek, 2019/2020-yilda qoʼshma taʼlim dasturi doirasida
          bakalavriatda yana toʼrtta – Orenburg davlat tibbiyot universiteti
          bilan Klinik psixologiya, I.Ya.Gorbachevskiy nomidagi Ternopol milliy
          tibbiyot universiteti bilan Oliy hamshiralik ishi, Privoljsk tadqiqot
          tibbiyot universiteti bilan Davolash ishi yoʼnalishlari joriy qilindi.
          Bundan tashqari, Belarus davlat tibbiyot universiteti bilan 4 ta yangi
          magistratura yoʼnalishlari va Rossiya Halqlar doʼstligi universiteti
          bilan dermatovenarologiya yoʼnalishi boʼyicha klinik ordinatura
          yoʼnalishlari ochilishiga erishildi. Shu bilan bir qatorda,
          magistratura, klinik ordinatura yoʼnalishlarida bir qator
          mutaxassisliklar boʼyicha Finlyandiya, Rossiya, Belorus respublikasi
          va boshqa xorijiy mamalakatlarning ilm-fan va oliy taʼlim muassasalari
          bilan qoʼshma taʼlim dasturlari ishlab chiqildi. Bunday xalqaro
          hamkorlik ishlari tufayli 2018-2019-oʼquv yilida 100 dan ortiq nafar
          pedagoglar va talabalar xorijda malaka oshirib qaytdi. 2019-yil
          21-22-oktyabr kunlari X-xalqaro “Stomatologiya-yuga 2019” talabalar
          olimpiadasi oʼtkazilgan va unda Oʼzbekiston, Rossiya va
          Qozogʼistonning 18 ta yetakchi tibbiy oliy oʼquv yurtlar talabalari
          ishtirok etishdi.
        </div>
        <br />
        <div className="page28">
          2019-yilda J.А.Rizayev boshchiligida institut OʼzR Vazirlar Mahkamasi
          qoshidagi taʼlim sifatini nazorat qilish davlat inspeksiyasi tomonidan
          akkreditatsiyadan oʼtkazilgan va takomillashtirilgan indikatorlar
          asosida tashkil etilgan reytingga koʼra, Toshkent davlat stomatologiya
          instituti mamlakatimizdagi tibbiyot oliy oʼquv yurtlari orasida
          1-oʼrinni, barcha oliy oʼquv yurtlari oʼrtasidagi umumiy reytingda esa
          8-oʼrinni egallab, mamlakatimiz oliy oʼquv yurtlarining kuchli
          oʼntalagi tarkibiga kirdi.
        </div>
        <br />
        <div className="page28">
          2018-yildan boshlab J.А.Rizayev ilmiy darajalar beruvchi ilmiy kengash
          raisi sifatida ham faoliyat yuritib kelmoqda. Uning raisligidagi
          mazkur Kengashda jami 51 dissertatsiya ishi himoyadan oʼtkazilgan,
          ulardan 18 tasi tibbiyot fanlari doktori(DSc) va 33 tasi tibbiyot
          fanlari boʼyicha falsafa doktori (PHD).
        </div>
        <br />
        <div className="page28">
           J.А.Rizayevning ilmiy rahbarligida 3 ta fan doktorlik va 7 ta falsafa
          doktorlik dissertatsion ishlar himoya qilingan.
        </div>
        <br />
        <div className="page28">
          Oʼz mehnat faoliyatida Rizayev Jasur Аlimdjanovich muntazam ravishda
          oʼz ustida ishlaydi, oʼz malakaviy faoliyatini muntazam ravishda
          takomillashtirib bormoqda. U oʼziga va yonidagilarga nisbatan
          talabchan, oʼz oldiga qoʼyilgan maqsad va vazifalarni aniq belgilash
          va uni oʼz vaqtida bajarish, ishchi xodimlarga vazifalarni aniq
          belgilash, turli masalalarni hal etishda initsiativ va ijodiy
          yondashish xususiyatiga ega, shu bilan jamoadagi sogʼlom muhitni
          yaratishda koʼmaklashadi, bu esa uning tafsifnomasidagi kuchli tarafi
          xisoblanadi.
        </div>
        <br />
        <div className="page28">
          Shuningdek Rizayev Jasur Аlimdjanovich Аmerika stomatologlari
          assotsiatsiyasi, Yevropa kariesologiya assotsiatsiyasi, hamda MDX
          davlatlar stomatologiya assotsiatsiya boshqaruv kengashi aʼzosi.
        </div>
        <br />
        <div className="page28">
        Uylangan, 2 nafar farzandi bor.
        </div>
      </div>
      <br />
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

export default Tuzilma;

