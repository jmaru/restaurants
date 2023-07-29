// import Image from 'next/image'
import styles from './page.module.scss'
import Header from '../components/header'
import BusinessesContainer from '@/components/businesses-container'

export default async function Home() {
  return (
    <>
      <Header/>
      <BusinessesContainer/>
    </>
  )
}
