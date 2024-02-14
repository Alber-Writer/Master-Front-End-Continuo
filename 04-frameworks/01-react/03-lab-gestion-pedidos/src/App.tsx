import './global-css/App.css'
import {SupplierOrderContainer} from '@/pods'

export default function App() {
  return (
    <>
      <div className="container flex-rows box">
        <SupplierOrderContainer orderId='240201_11'></SupplierOrderContainer>
      </div>
    </>
  )
}
