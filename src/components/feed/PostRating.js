

//STYLES
import styles from './Feed.module.css'

//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const PostRating = () =>{

    return (
      <div className={styles.postRating}>
        <div>
          <FontAwesomeIcon icon={faArrowUp} className={styles.postArrows} />
        </div>
        <p className={styles.amountOfRatings}> 10 </p>
        <div>
          <FontAwesomeIcon icon={faArrowDown} className={styles.postArrows} />
        </div>
      </div>
    );
}

export default PostRating;