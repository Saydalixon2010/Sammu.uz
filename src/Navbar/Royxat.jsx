import React, { useState, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { UserButton } from '@clerk/clerk-react';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import '../Navbar/Royxat.scss';

import img1 from '../assets/bayroq1.png';
import img2 from './gerb01-removebg-preview.png';
import img3 from './music-removebg-preview (1).png';
import img42 from '../assets/expand-solid (2).svg';

import img39 from '../Navbar/telegram.svg';
import img49 from '../Navbar/facebook-f.svg';
import img50 from '../Navbar/youtube.svg';
import img51 from '../Navbar/instagram.svg';
import img52 from '../Navbar/twitter.svg';
import img53 from '../Navbar/map-marker-alt-solid.svg';
import img54 from '../Navbar/phone-solid.svg';
import img55 from '../Navbar/fax-solid.svg';
import img56 from '../Navbar/envelope-solid.svg';
import img57 from '../Navbar/Blue and White Illustrative Doctor Health Care Logo.jpg';
import img58 from '../Navbar/play-market.svg';
import img59 from '../Navbar/app-store.svg';
import img60 from '../Navbar/un.webp';
import img62 from './collect (1).png';
import img61 from '../assets/hit (1).gif';
import img63 from '../Navbar/images.png';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Royxat = () => {
  const handle = useFullScreenHandle();
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = useCallback(() => {
    if (!isFullScreen) {
      handle.enter();
      setIsFullScreen(true);
    } else {
      handle.exit();
      setIsFullScreen(false);
    }
  }, [isFullScreen, handle]);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [captchaInput, setCaptchaInput] = useState("");
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState({
    message: "",
    severity: "success",
  });

  const generateCaptcha = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  };

  const [captcha, setCaptcha] = useState(generateCaptcha());

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const nameCheck = (event) => {
    const value = event.target.value;
    setNameError(value.length <= 6);
  };

  const phoneCheck = (event) => {
    const value = event.target.value;
    let phoneRegex = /^\+\d{7,}$/;
    setPhoneError(!phoneRegex.test(value));
  };

  const emailCheck = (event) => {
    const value = event.target.value;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailError(!emailRegex.test(value));
  };

  const messageCheck = (event) => {
    const value = event.target.value;
    setMessageError(value.length < 10);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (captchaInput !== captcha) {
      setNotification({
        message: "Please complete the CAPTCHA correctly.",
        severity: "error",
      });
      setOpen(true);
      return;
    }

    if (nameError || emailError || phoneError || messageError) {
      setNotification({
        message: "Please fix the errors before submitting the form.",
        severity: "error",
      });
      setOpen(true);
      return;
    }

    // Form submission logic here
    setNotification({
      message: "Form submitted successfully!",
      severity: "success",
    });
    setOpen(true);
  };

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

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
        <NavLink to="universitethaqida">
              <li className="li2">Universitet haqida</li>
              </NavLink>
          <NavLink to="/rector">
            <li className="li3">Rector</li>
          </NavLink>
          <NavLink to="/yo'riqnoma">
            <li className="li4">Talabalarga yo'riqnoma</li>
          </NavLink>
          <li className="li4">Ro'yxatdan o'tish</li>
          <UserButton />
        </ul>
      </div>
      <br /><br /><br /><br /><br />
      <div className="contacts">
        <div className="contact-in-all">
          <form onSubmit={handleSubmit} className="contact-one">
            <input
              required
              id="name"
              onChange={nameCheck}
              type="text"
              className="style_input"
              placeholder="Ism va Familiya"
            />
            {nameError && <p>Ism va familiya kamida 6 harfdan iborat!</p>}

            <input
              id="email"
              onChange={emailCheck}
              type="email"
              className="style_input"
              placeholder="Email"
            />
            {emailError && <p>Elektron pochtada xatolik!</p>}
            <input
              required
              id="phone"
              onChange={phoneCheck}
              type="text"
              className="style_input"
              placeholder="+998 (90)-440-59-10"
            />
            {phoneError && <p>Telefon raqamida xato!</p>}

           

            <div className="captcha-container">
              <span>{captcha}</span>
              <button  type="button" onClick={refreshCaptcha}>Yangi reCAPTCHA</button>
            </div>
            <input
              required
              id="captcha"
              onChange={(e) => setCaptchaInput(e.target.value)}
              type="text"
              className="style_input"
              placeholder="reCAPTCHA-ni kiriting*"
            />

            <Button className='btn' type="submit" variant="contained" color="primary">Yuborish</Button>
          </form>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={notification.severity}>
          {notification.message}
        </Alert>
      </Snackbar>
      <div className="page10cha">
        <div className="kattaspan1">
          <span className="span1">
            <h1 className="h34">Ijtimoiy tarmoqlar</h1>
            <a data-turbo="true" href="https://t.me/sammu_education">
              <img className="telegram" src={img39} alt="Telegram" /> Telegram
            </a>
          </span>
          <span className="span2">
            <a data-turbo="true" href="https://www.facebook.com/sammu.education">
              <img className="facebook" src={img49} alt="Facebook" /> Facebook
            </a>
          </span>
          <span className="span3">
            <a data-turbo="true" href="https://www.youtube.com/c/sammu_education">
              <img className="youtube" src={img50} alt="Youtube" /> Youtube
            </a>
          </span>
          <span className="span3">
            <a data-turbo="true" href="https://www.instagram.com/sammu_education">
              <img className="ins" src={img51} alt="Instagram" /> Instagram
            </a>
          </span>
          <span className="span4">
            <a data-turbo="true" href="https://twitter.com/sammu_education">
              <img src={img52} className="twi" alt="Twitter" /> Twitter
            </a>
          </span>
        </div>
        <div className="kattaspan2">
          <span className="span5">
            <h1 className="h34">Bizning manzil</h1>
          </span>
          <span className="span6">
            <a data-turbo="true" href="https://yandex.uz/maps/-/CCUiqRVXoB">
              <img className="manzil" src={img53} alt="Manzil" />Samarqand sh., Amir Temur k.,18-uy
            </a>
          </span>
          <span className="span7">
            <a data-turbo="true" href="tel:+998 66 233 08 41">
              <img className="tel" src={img54} alt="Tel" /> +998 (90) 070 02 51
            </a>
          </span>
          <span className="sapn8">
            <a data-turbo="true" href="tel:+998 66 233 71 75">
              <img className="fax" src={img55} alt="Fax" /> +998 (66) 233 71 75
            </a>
          </span>
          <span className="span7">
            <a data-turbo="true" href="mailto:sammu@sammu.uz">
              <img className="email" src={img56} alt="Email" /> sammu@sammu.uz
            </a>
          </span>
          <span className="span8">
            <a data-turbo="true" href="mailto:sammu@sammu.uz">
              <img className="email" src={img56} alt="Email" /> sammu@sammu.ru
            </a>
          </span>
        </div>
        <div>
          <iframe
            className="map"
            src="https://yandex.ru/map-widget/v1/?z=17&amp;ol=biz&amp;oid=168327109761"
            title="Map"
          ></iframe>
        </div>
      </div>
      <div className="kattaspan3">
        <img className="img-box" src={img57} alt="Logo" />
        <p className="p44">
          Barcha huquqlar himoyalangan. Saytdagi barcha huquqlar O'zbekiston
          Respublikasi qonunlariga, shu jumladan mualliflik huquqi va turdosh
          huquqlarga muvofiq himoya qilinadi. Sayt materiallaridan
          foydalanganda, Samarqand davlat tibbiyot universiteti saytiga havola
          ko'rsatilishi shart
        </p>
        <div className="imgs-box">
          <a href="https://play.google.com/store/apps/details?id=uz.sammi.app&amp;utm_source=sammi.uz&amp;pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
            <img width="150px" src={img58} alt="Play Market" />
          </a>
          <a href="https://apps.apple.com/uz/app/samdtu-rasmiy-ilovasi/id1599322059">
            <img width="150px" src={img59} alt="App Store" />
          </a>
        </div>
      </div>
      <div className="imss-box">
        <a
          data-turbo="true"
          href="https://www.uz/ru/res/visitor/index?id=46395"
          target="_top"
        >
          <img width="88px" height="28px" src={img63} alt="Visitor" />
        </a>
        <a href="https://www.liveinternet.ru/click" target="_blank" rel="noopener noreferrer">
          <img src={img61} alt="Live Internet" />
        </a>
        <a
          href="https://metrika.yandex.ru/stat/?id=55237306&amp;from=informer"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <img src={img62} alt="Metrika" />
        </a>
        <a href="https://www.4icu.org/reviews/11937.htm" target="_parent" rel="noopener noreferrer">
          <img width="86px" height="30px" src={img60} alt="4ICU" />
        </a>
      </div>
    </div>
  );
};

export default Royxat;
