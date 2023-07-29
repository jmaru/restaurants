import Image from 'next/image'
import { Restaurant } from '@/types/restaurants'
import styles from './styles.module.scss'
import Link from 'next/link'

interface BusinessProps {
  restaurant:Restaurant
}

export default function BusinessCard({restaurant}:BusinessProps) {

  const getStars = (rating:number) => {
    let stars = []
    for(let i=1; i<=5 ; i++){
      if(i>rating){
        stars.push("empty");
      } else if(i<Math.floor(rating)){
        stars.push("full");
      } else{
        stars.push("half")
      }
    }
    return stars.map((starType,i)=><Image key={i} src={`/${starType}-star.png`} alt={`${starType}-star`} width={24} height={24}/>)
  };

  const handleCardClick = (url:string)=>{
    window.open(url,"_blank","noreferrer");
  };
  
  return (
    <div className={styles.businessCard} onClick={()=>{handleCardClick(restaurant.url)}}>
      <div className={styles.businessCard__image} style={{backgroundImage: `url('${restaurant.image_url}')`}}></div>
      <div className={styles.businessCard__information}>
          <h3 className={styles.businessCard__title}>{restaurant.name}</h3>
          <hr className={styles.businessCard__line}/>
          <div className={styles.businessCard__rates}>
            <div className={`${styles.businessCard__rating} ${styles['rating-'+Math.floor(restaurant.rating)]}`}>
              {getStars(restaurant.rating)}
            </div>
            <div className={styles.businessCard__price}>{restaurant.price}</div>
          </div>
          <Link className={styles.businessCard__url} href={restaurant.url} target='_blank'>View</Link>
        </div>
    </div>
  )
}
