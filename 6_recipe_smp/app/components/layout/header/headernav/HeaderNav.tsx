import Head from 'next/head';
import style from './headernav.module.scss';
import React from 'react';
import LoginModal from '../../../modal/LoginModal'
import MenuModal from '../../../modal/MenuModal'
import  { useState }  from 'react';
import { LoginedUserData } from '../../../../＠types/basicdata'
import {useContext} from "react";
import {UserContext} from "../../../userprovider/AuthUser";



const HeaderNav = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  // const [LoginedUserData, setLoginedUserData] = useState<LoginedUserData |null>(null)
  const [showMenuModal, setShowMenuModal] = useState(false);
  const  {userInfo, setUserInfo } = useContext(UserContext);
  const [err, setErr]=useState("")

  const showLoginModalClick= ()=>{
        showLoginModal ? (setShowLoginModal(false)):(setShowLoginModal(true));
        setErr("");
  }

  // console.log(LoginedUserData, "LoginUserInfd");

  const showLoginIcon=()=>{
    if(!userInfo){
      return( 
        <a onClick={showLoginModalClick}>
          <i className={'commonIcon iconSmp_login'}></i>
        </a>
      )
    }
  }

  const showMenuModalClick=()=>{
    showMenuModal ? (setShowMenuModal(false)):(setShowMenuModal(true));
  }


  return (
    
    <div className={style.wrapper}>
            
      <LoginModal setUserInfo={setUserInfo} showLoginModal={showLoginModal} showLoginModalClick={showLoginModalClick}  setErr={setErr} err={err}/>

      <ul>
          <li>
            <a href="https://oceans-nadia.com/search">
              <i className={'commonIcon iconSmp_search'}></i>
            </a>
          </li>
          <li>
            <a href="https://oceans-nadia.com/ranking">
              <i className={'commonIcon iconSmp_ranking'}></i>
            </a>
          </li>
            <li>{showLoginIcon()}
            </li>
          <li>
            <a href="#">
              <i className={'commonIcon iconSmp_menu'} onClick={showMenuModalClick}></i>
            </a>
          </li>
          <MenuModal userInfo={userInfo} showMenuModal={showMenuModal}  showMenuModalClick={showMenuModalClick} showLoginModalClick={showLoginModalClick}></MenuModal>
      
      </ul>
    
    </div>
   
  );
};
export default HeaderNav;
