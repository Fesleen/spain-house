import { configureStore } from "@reduxjs/toolkit";
import Aksesuars from "./houseblog/index";
import Insta from "./instaBlog/index";
import CitysGet from "./city/index"
import HouseGet from './house/index'; 
import ContactSlice from './contact/index';

export const store = configureStore({
    reducer : {
        aksesuars: Aksesuars ,
        insta : Insta,
        citys : CitysGet,
        house : HouseGet,
        contact: ContactSlice
    } 
})
