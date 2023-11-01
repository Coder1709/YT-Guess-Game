"use client"
import Image from 'next/image';
import Header from './component/Header';
import Footer from './component/Footer';
import Songs from './component/Songs';
import { AuthProvider, useAuth }  from "./auth/auth"


export default function Home() {
  



  return (
    <AuthProvider>
      <div>
      <div>
      <h2>Your score is: </h2>
      
      </div>
        <Header />
        <Songs />
        <h1>Arpit pathak</h1>
        <Footer />
      </div>
    </AuthProvider>
  );
}




