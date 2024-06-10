import React, { useState } from "react";
import img1 from "../assets/bayroq1.png";
import img2 from "./gerb01-removebg-preview.png";
import img3 from "./music-removebg-preview.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import img22 from "../assets/doctor.jpg";
import img23 from "../assets/student.jpg";
import img8 from "../assets/file-signature-solid.svg";
import img9 from "../assets/graduation-cap-solid.svg";
import img10 from "../assets/newspaper-solid.svg";
import img11 from "../assets/book-solid.svg";
import img12 from "../assets/chalkboard-teacher-solid.svg";
import img13 from "../assets/user-graduate-solid.svg";
import img14 from "../assets/book-reader-solid.svg";
import img15 from "../assets/layer-group-solid.svg";
import img17 from "../assets/uchrashuv.jpg";
import img16 from "../assets/gaplash.jpg";
import img18 from "../assets/yutuq.jpg";
import img19 from "../assets/yigilash.jpg";
import img20 from "../assets/aperatsiya.jpg";
import img21 from "../assets/majlis.jpg";
import video1 from "../video/SamDTU_bitiruvchilarining_III_Forumida_ishtirok_etishga_taklif.mp4";
import img24 from "../assets/elon.jpg";
import img25 from "../assets/universiteet.jpg";
import img26 from "../assets/samdtu.jpg";
import img27 from "../assets/karyera.jpg";
import img28 from "../assets/Marifat.jpg";
import img29 from "../assets/xitoy.jpg";
import img30 from "../assets/propessr.svg";
import img31 from "../assets/talabvalr.svg";
import img32 from "../assets/bitiruvchilar.svg";
import img33 from "../assets/qr.svg";
import img34 from "../assets/mobile_app_uz.jpg";

import img36 from "../assets/Saqlash_Vazirligi-removebg-preview (1).png";

import img38 from "../assets/hukumat1.jpg";
import img39 from "../assets/telegram.svg";
import img49 from "../assets/facebook-f.svg";
import img50 from "../assets/youtube.svg";
import img42 from "../assets/expand-solid (2).svg";
import img51 from "../assets/instagram.svg";
import img52 from "../assets/twitter.svg";
import img53 from "../assets/map-marker-alt-solid.svg";
import img54 from "../assets/phone-solid.svg";
import img55 from "../assets/fax-solid.svg";
import img56 from "../assets/envelope-solid.svg";
import img57 from "../assets/Blue and White Illustrative Doctor Health Care Logo.jpg";
import img58 from "../assets/play-market.svg";
import img59 from "../assets/app-store.svg";
import img60 from "../assets/un.webp";
import img61 from "../assets/hit (1).gif";
import img62 from "./collect (1).png";
import img63 from "./images.png";

import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

import { UserButton } from "@clerk/clerk-react";
import "./Main.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link, NavLink } from "react-router-dom";
// import { useEffect } from 'react';
// import { Fragment } from 'react';

const Main = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(true); // Yangi holat

  const toggleFullScreen = () => {
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
  };

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div
      id="container"
      className={`container ${isLightMode ? "light-mode" : "dark-mode"}`}
    >
      <div className="navbar1">
        <a href="https://archive.uz/ozbekiston-respublikasining-davlat-bayrogi">
          <img className="src1" width="30px" src={img1} />
        </a>
        <a href="https://archive.uz/ozbekiston-respublikasi-davlat-gerbi">
          <img className="src1" width="30px" src={img2} />
        </a>
        <a href="https://archive.uz/ozbekiston-respublikasi-davlat-madhiyasi">
          <img className="src1" width="30px" src={img3} />
        </a>
        <img
          className="src1"
          onClick={toggleFullScreen}
          width="30px"
          src={img42}
        />
        <p id="a" onClick={toggleMode}>
          {isLightMode ? "🔆 " : "🌙"}
        </p>
      </div>
      <div className="navbar2">
        <ul className="ul1">
          <li className="li1">Bosh sahifa</li>
          <NavLink to="universitethaqida">
            <li className="li2">Universitet haqida</li>
          </NavLink>
          <NavLink to="rector">
            <li className="li3">Rector</li>
          </NavLink>
          <NavLink to="yo'riqnoma">
            <li className="li4">Talabalarga yo'riqnoma</li>
          </NavLink>
          <NavLink to="ro'xatdan o'tish">
            <li className="li4">Ro'xatdan o'tish</li>
          </NavLink>
          <UserButton />
        </ul>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="img22">
            <img src={img22} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img23} />
          </SwiperSlide>
        </Swiper>
      </div>

      <main>
        <div className="page2">
          <h3 className="h3">Tezkor havolalar</h3>
          <div className="kattadivcha">
            <div className="divcha">
              <img className="rasm1" width="100px" src={img8} />
              <h1 className="h100">Elektron hujjat aylanmasi</h1>
            </div>
            <div className="divcha2">
              <img className="rasm2" width="100px" src={img9} />
              <h1 className="h10">Masofaviy talim</h1>
            </div>
            <div className="divcha3">
              <img className="rasm3" width="100px" src={img10} />
              <h1 className="h11">Universitet jurnallari</h1>
            </div>
            <div className="divcha4">
              <img className="rasm4" width="100px" height="90px" src={img11} />
              <h1 className="h12">Elektron kutubxona</h1>
            </div>
          </div>
          <div className="kattadivcha2">
            <div className="divcha5">
              <img className="rasm5" width="100px" src={img12} />
              <h1 className="h13">HEMIS OTM</h1>
            </div>
            <div className="divcha6">
              <img className="rasm6" width="100px" height="90px" src={img13} />
              <h1 className="h14">HEMIS Student</h1>
            </div>
            <div className="divcha7">
              <img className="rasm7" width="100px" height="90px" src={img14} />
              <h1 className="h15">Unilibrary</h1>
            </div>
            <div className="divcha8">
              <img className="rasm8" width="100px" src={img15} />
              <h1 className="h16">Interaktiv xizmatlar</h1>
            </div>
          </div>
        </div>
        <div className="page3">
          <h3 className="h3">Yangiliklar</h3>
          <div className="bb">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="uchrashuv">
                <img src={img17} />
                <h1 className="h17">
                  SamDTU Fransiyaning Oliy Psixomotorterapiya instituti bilan
                  hamkorlik qiladi
                </h1>
              </SwiperSlide>
              <SwiperSlide className="gaplash">
                <img src={img16} />
                <h1 className="h18">
                  SamDTU talabasi tomonidan umumta’lim maktabida salomatlik
                  profilaktik davra suhbati oʻtkazildi
                </h1>
              </SwiperSlide>
              <SwiperSlide>
                <img src={img18} />
                <h1 className="h19">
                  “Qon tomir jarrohligining dolzarb muammolari” mavzusidagi
                  xalqaro ilmiy-amaliy anjuman o‘tkazildi
                </h1>
              </SwiperSlide>
              <SwiperSlide>
                <img src={img19} />
                <h1 className="h20">
                  SamDTU Neyroxirurglari Turkiyada malaka oshirdilar
                </h1>
              </SwiperSlide>
              <SwiperSlide>
                <img src={img20} />
                <h1 className="h21">
                  Arm Wrestling bo‘yicha “Rektor kubogi” musobaqasi o‘tkazildi
                </h1>
              </SwiperSlide>
              <SwiperSlide>
                <img src={img21} />
                <h1 className="h22">
                  SamDTUda “Travmatologiya va ortopediyaning dolzarb masalalari”
                  mavzusidagi xalqaro ilmiy-amaliy konferensiya o‘tkazildi
                </h1>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="page4">
          <h1 className="h3">
            SamDTU bitiruvchilarining III Forumida ishtirok etishga taklif
            qilamiz!
          </h1>
          <video className="video1" controls src={video1}></video>
        </div>
        <div className="page5">
          <h3 className="h3">E'lonlar</h3>
          <div className="bmw"></div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img24} />
              <h1 className="hh24">
                Oliy ta’lim muassasalarida “Kimyo”, “Biologiya”, “Fizika” hamda
                “Informatika va axborot texnologiyalari” fanlaridan respublika
                fan olimpiadasi o‘tkaziladi
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img25} />
              <h1 className="hh25">
                ILHOM mukofotiga hujjatlar qabul qilish boshlandi
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img26} />
              <h1 className="hh26">
                SamDTU bitiruvchilarining III Forumida ishtirok etishga taklif
                qilamiz!
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img27} />
              <h1 className="hh27">
                SamDTU da “Karyera kuni” mehnat yarmarkasi o‘tkaziladi
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img28} />
              <h1 className="hh28">
                “Ma’rifat ulashib” loyihasi doirasida adiblar bilan uchrashuv!
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img29} />
              <h1 className="hh29">Xitoy tilidan onlayn kurslar boshlandi!</h1>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="page6">
          <h1 className="h3">Asosiy ko'rsatkichlar</h1>
          <div className="page6cha">
            <div className="divcha9">
              <img className="rasm9" width="70px" src={img30} />
              <p className="p1">648</p>
              <h1 className="h24">
                Professor- <br /> o'qituvchilar
              </h1>
            </div>
            <div className="divcha10">
              <img className="rasm10" width="70px" src={img31} />
              <p className="p2">11479</p>
              <h1 className="h25">Talabalar</h1>
            </div>
            <div className="divcha11">
              <img className="rasm11" width="70px" src={img31} />
              <p className="p3">2270</p>
              <h1 className="h26">Xorijiy talabalar</h1>
            </div>
            <div className="divcha12">
              <img className="rasm12" width="70px" src={img32} />
              <p className="p4">1080</p>
              <h1 className="h27">Bitiruvchilar</h1>
            </div>
          </div>
        </div>
        <div className="page7">
          <h1 className="h3">FAQs</h1>
          <h1 className="h3">Samarqand davlat tibbiyot universiteti</h1>
          {/* FAQ qismini kiritish uchun kodni o'z ichiga oling */}
        </div>
        <div className="page8">
          <div className="page8cha">
            <h1 className="h30">Mobile App</h1>
            <h1 className="h31">Har bir joyda</h1>
            <h1 className="h33">
              Samarqand davlat tibbiyot universiteti rasmiy mobil ilovasini
              yuklab oling va qo'shimcha imkoniyatlardan foydalaning!
            </h1>
            <img className="rasm13" width="350px" src={img33} />
          </div>
          <img className="rasm14" src={img34} />
        </div>
        <div className="page9cha">
          <h1 className="h3">Foydali saytlar</h1>
        </div>
        <div className="page9">
          <div className="gerb">
            <a href="https://president.uz/oz">
              <img className="rasm100" src={img38} />
              <button className="btn1">
                O'zbekiston Respublikasi Prezidenti
              </button>
            </a>
          </div>
          <div className="gerb">
            <a href="https://gov.uz/ssv/">
              <img className="rasm100" src={img36} />
              <button className="btn1">
                Sog'liqni saqlash <br /> vazirligi
              </button>
            </a>
          </div>
          <div className="gerb">
            <a href="https://edu.uz/uz#gsc.tab=0">
              <img className="rasm100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJtJJHZwQ5G1G0GSzIcjk0F087xMulckVXw&s" />
              <button className="btn1">
                Oliy ta'lim, fan innovat- <br /> siyalar vazirligi
              </button>
            </a>
          </div>
          <div className="gerb">
            <a href="https://gov.uz/">
              <img className="rasm100" src={img38} />
              <button className="btn1">
                O'zbekiston Respublikasi hukumat partali
              </button>
            </a>
          </div>
        </div>
      </main>
      <footer>
        <div className="page10">
          <div className="page10cha">
            <div className="kattaspan1">
              <span className="span1">
                <h1 className="h34">Ijtimoiy tarmoqlar</h1>
                <a data-turbo="true" href="https://t.me/sammu_education">
                  <img className="telegram" src={img39}></img> Telegram
                </a>
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
              Respublikasi qonunlariga, shu jumladan mualliflik huquqi va
              turdosh huquqlarga muvofiq himoya qilinadi. Sayt materiallaridan
              foydalanganda, Samarqand davlat tibbiyot universiteti saytiga
              havola ko'rsatilishi shart
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
      </footer>
    </div>
  );
};

export default Main;
