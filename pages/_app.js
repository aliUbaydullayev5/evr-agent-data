import '@/styles/globals.css'
import {Provider} from 'react-redux'
import store from '../redux/store/index'
import Message from "@/components/Message";
import {useEffect} from "react";
import {useRouter} from "next/router";
export default function App({ Component, pageProps }) {

  const router = useRouter()

  useEffect(()=> {
    if(!(localStorage.getItem('accessToken'))) {
      router.push('/login')
    }
  }, [])

  return <Provider store={store}>
    <Message />
    <Component {...pageProps} />
  </Provider>
}
