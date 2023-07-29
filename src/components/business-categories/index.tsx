'use client'

import styles from './styles.module.scss';
import { Category } from '@/types/restaurants';

interface BusinessCategoriesProps {
  categories:Array<Category>,
  activeCategory:string,
  handleOnClick:(alias:string)=>void
}

export default function BusinessesCategories({categories,activeCategory,handleOnClick}:BusinessCategoriesProps) {

  return (
    <div className={styles.business_categories__container} >
        {categories?.map((cat)=>{
          return <button className={`${styles.business_category} ${activeCategory===cat.alias?styles.active:''}`} key={cat.alias} onClick={()=>{handleOnClick(cat.alias)}} >{cat.title}</button>}
        )}
    </div>
  )
}
