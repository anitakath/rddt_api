
import { useState, useEffect } from 'react';


//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store/authSlice';


//COMPONENTS
import LoggedInMenu from './LoggedInMenu';

//STYLES
import styles from './styles/Header.module.css'

const Header = () =>{

  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const currentFilter = useSelector((state) => state.filter)

  console.log(isLoggedIn)
  console.log(currentFilter);

    const [menuIsOpen, setMenuIsOpen] = useState(false)


    const menu = document.getElementById('menu')


    const menuHandler = (e) =>{

       if(menuIsOpen === true){
           setMenuIsOpen(false)
           menu.style.left = "-800px";
       } else{
           setMenuIsOpen(true)
           menu.style.left = "0px";
       }
    }


    const [loggedInMenuIsOpen, setLoggedInMenuIsOpen] = useState(false)

    const loginHandler = () =>{
      dispatch(login())
  
    }

    const loggedInMenuHandler = () =>{

      if (loggedInMenuIsOpen === true) {
        setLoggedInMenuIsOpen(false);
      } else if (loggedInMenuIsOpen === false) {
        setLoggedInMenuIsOpen(true);
      }

    }

   console.log(loggedInMenuIsOpen);




    return (
      <div className={styles.container}>
        <h1 className={styles.title}> Title </h1>
        <div className={styles.search_container}>
          <input
            type="search"
            placeholder="SEARCH"
            className={styles.searchInput}
          ></input>

          <button className={styles.search_btn}> search ...</button>
        </div>

        <div className={styles.login_container}>
          <button onClick={menuHandler} className={styles.menu_btn}>
            menu
          </button>

          <div className={styles.loginWrapper}>
            {isLoggedIn && (
              <div className={styles.loggedIn_wrapper}>
                <button className={styles.loggedInMenu_btn} onClick={loggedInMenuHandler}> logged in</button>
                {loggedInMenuIsOpen && (
                  <div className={styles.loggedInMenu}>
                    <LoggedInMenu />
                  </div>
                )}
              </div>
            )}

            {!isLoggedIn && (
              <div>
                <button className={styles.login} onClick={loginHandler}>
                  login
                </button>
                <button className={styles.register}> register</button>
              </div>
            )}
          </div>
        </div>

        <div className={styles.menu_container} id="menu">
          MENUUUU :-)
        </div>
      </div>
    );
}


export default Header;