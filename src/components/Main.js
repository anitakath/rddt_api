
import { useState, useEffect } from 'react'



//STYLES
import styles from './styles/Main.module.css'


const Main = () =>{

    const [posts, setPosts] = useState([])



    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://www.reddit.com/r/all/hot.json",
            {
              headers: {
                Authorization: "Bearer DVRz32O6REDwuxl07s_SQQ",
              },
            }
          );
          setPosts(response.formData.data.children);
        } catch (error) {
          console.error("Error fetching dataaaa");
        }
      };

      fetchData();
    }, []);

    console.log(posts);

    return(
        <div className={styles.container}>
            MAIN
            <div className={styles.output_field}>
                output field
            </div>
        </div>
    )
}

export default Main 