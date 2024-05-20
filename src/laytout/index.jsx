import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";



function Layout({children}){
   return(
      <>
         <Header/>
            {children}
         <Footer />
      </>
   )
}

export default Layout