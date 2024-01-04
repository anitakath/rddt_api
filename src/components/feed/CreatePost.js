



//STYLES
import styles from './Feed.module.css'

//FONT AWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const CreatePost = () => {
    return (
      <div className={styles.createPost_container}>
        <div className={styles.userImage_container}>
          <div className={styles.circle}>
            <FontAwesomeIcon icon={faUser} className={styles.user} />
          </div>
        </div>

        <div className={styles.form_container}>
          <form className={styles.createPost_form}>
            <input type="textarea" className={styles.textarea_input}></input>
            <button className={styles.photo_btn}>
              <FontAwesomeIcon icon={faImage} />
            </button>
            <button className={styles.link_btn}>
              <FontAwesomeIcon icon={faLink} />
            </button>
            <button className={styles.enlarge_btn}>
              <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
            </button>
            <button className={styles.createPost_btn} type="submit">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </form>
        </div>
      </div>
    );
}

export default CreatePost;