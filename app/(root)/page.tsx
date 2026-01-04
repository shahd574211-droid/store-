import Image from "next/image";
import download from '@/public/download.jpeg'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hero from "@/components/home/Hero";
import FeaturedProdects from "@/components/home/FeaturedProdects";
import { Suspense } from "react";
import{LoadingContainer} from "@/components/global/LoadingContainer";


export default function Home() {
  return (
   <>

   <Hero />
   <Suspense fallback ={<LoadingContainer />}>
     <FeaturedProdects />
   </Suspense>
  
   
   </>
  );
}
