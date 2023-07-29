import { useEffect } from "react";

interface Props {
    onWindowScroll: ()=>void,
    children: any
}

export default function ScrollWrapper({onWindowScroll,children}:Props) {

  useEffect(() => {
    const handleScroll = (event:any)=>{
        onWindowScroll();
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (children);
}
