import React, { useState } from 'react';
import style from "./registration.module.css";
import img from "./logo.png";
import { Register } from './register/register';
import { Login } from './login/login';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [tabs, setTabs] = useState(0);

  const changeTabs = (index) => {
    setTabs(index);
  };
const navigate =  useNavigate();
const handleClick = () => {
  navigate("/");
}
  return (
    <>
      <div className={style.bg_image}>
        <div className={style.overlay}></div>
        <div className={style.form}>
          <div className={style.head_img}>
            <img src={img} alt="logo image"  onClick={handleClick}/>
            <div className={style.form_start}>
              <div className={style.d_flex}>
                <ul>
                  <li
                    onClick={() => changeTabs(0)}
                    className={tabs === 0 ? style.changespart : ""}
                  >
                    Login
                  </li>
                  <li
                    onClick={() => changeTabs(1)}
                    className={tabs === 1 ? style.changespart : ""}
                  >
                    Register
                  </li>
                </ul>
              </div>
              <div className={style.tab_content}>
            {tabs === 0 ? <Login /> : <Register />}
          </div>
            </div>
          </div>

   
        </div>
      </div>
    </>
  );
};

export default Registration;
