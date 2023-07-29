'use client'

import styles from './styles.module.scss'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { Restaurant, Category } from '@/types/restaurants'
import BusinessCard from '../business-card'
import EmptyCard from '../empty-card'
import BusinessCategories from '../business-categories'
import ScrollWrapper from '../scroll-wrapper'

interface CategoryMap{
  [key:string]:{active:boolean}
}

export default function BusinessesContainer() {

  const [restaurants, setRestaurants] = useState<Array<Restaurant>>([]);
  const [isLoading, setLoading] = useState(true)
  const [scrollTop, setScrollTop] = useState(0)
  const [categories, setCategories] = useState<CategoryMap>({});
  const [categoriesList, setCategoriesList] = useState<Array<Category>>([]);
  const [filter, setFilter] = useState("")
  const _totalEntries = useRef(0);

  const updateCategories = (businesses:Array<Restaurant>)=>{
    for(let rest of businesses){
      for(let cat of rest.categories){
        if(!categories[cat.alias]){
          categoriesList.push(cat);
          categories[cat.alias]={active:false};
        }
      }
    }
    setCategories(categories);
    setCategoriesList(categoriesList);
  }

  const getRestaurants = async () => {
    setLoading(true);
    try {
      const offset = restaurants.length;
      const response = await fetch(`/api/restaurants${offset && offset < _totalEntries.current ? '/' + offset : ''}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json();
      _totalEntries.current = result.total;
      setRestaurants(restaurants.concat(result.businesses));
      updateCategories(result.businesses);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  const getEmptyCards = () => {
    return Array(6).fill(undefined).map((_, index) => <EmptyCard key={index} />)
  }

  const filterCategory = (category:string)=>{
    if(filter===category){
      setFilter("");
    }
    else{
      setFilter(category);
    }
  }

  const checkIfExists = (cats:Array<Category>) => {

    for(let cat of cats){
      if(cat.alias===filter) return true;
    }

    return false;
  }

  const onWindowScroll = ()=>{
    setScrollTop(window.scrollY);   
  }

  useEffect(() => {
    setRestaurants([]);
    getRestaurants().catch(e => {
      console.error("An error ocured while fetching data");
    })
  }, [])

  useEffect(() => {
    if(!isLoading && filter==="" && scrollTop+window.innerHeight > window.document.body.offsetHeight - window.innerHeight){
      getRestaurants();
    }
  }, [scrollTop])

  return (
    <ScrollWrapper onWindowScroll={onWindowScroll}>
      <BusinessCategories categories={categoriesList} activeCategory={filter} handleOnClick={filterCategory}></BusinessCategories>
      <main className={styles.businessesContainer}>
        {restaurants ?
          (filter===""?
            restaurants.map((busi,index) => <BusinessCard key={busi.alias+index} restaurant={busi} />)
            : restaurants.filter((busi)=>{return checkIfExists(busi.categories)}).map((busi,index) => <BusinessCard key={busi.alias+index} restaurant={busi} />))
          : null}
        {isLoading?getEmptyCards():null}
      </main>
      {filter===""?
        <button className={styles.getMoreButton} onClick={() => { getRestaurants() }}>
          <Image src={'/expand_more.png'} alt="More restaurants" width={32} height={32}/>
        </button>
        : null}
    </ScrollWrapper>
  )
}
