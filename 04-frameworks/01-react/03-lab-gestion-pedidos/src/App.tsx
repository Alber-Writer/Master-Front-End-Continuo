import './global-css/App.css'
import {OrderToProvider} from '@/pods'

export default function App() {
  return (
    <>
      <h1>Hi</h1>
      <div className="container flex-rows box">
        <h2 className="fwidth">Full width</h2>
        <OrderToProvider></OrderToProvider>
      </div>
    </>
  )
}
