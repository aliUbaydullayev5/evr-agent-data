import '@/styles/globals.css'
import {Provider} from 'react-redux'
import store from '../redux/store/index'
import Message from "@/components/message";
export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <Message />
    <Component {...pageProps} />
  </Provider>
}
