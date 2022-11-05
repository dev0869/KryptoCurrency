import { configureStore } from "@reduxjs/toolkit";
import { CryptoApi } from "../services/cryptoApi";
import { NewsApi } from "../services/newsAPi";
export default configureStore({

    reducer:{
    
        [NewsApi.reducerPath]:NewsApi.reducer,
        [CryptoApi.reducerPath]:CryptoApi.reducer
    
    
    }
});