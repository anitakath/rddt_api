
import { useState } from 'react';

//STYLES
import styles from './styles/Header.module.css'

const Header = () =>{

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

    return (
      <div className={styles.container}>
        <h1> Title </h1>
        <div className={styles.search_container}>
          <input
            type="search"
            placeholder="SEARCH"
            className={styles.searchInput}
          ></input>

          <button className={styles.search_btn}> search ...</button>
        </div>
        <button onClick={menuHandler} className={styles.menu_btn}> menu </button>

        <div className={styles.menu_container} id="menu">
          MENUUUU :-)
        </div>
      </div>
    );
}


export default Header;