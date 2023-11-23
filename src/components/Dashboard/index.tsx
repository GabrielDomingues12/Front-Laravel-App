import SideBar from "../SideBar"
import { useContext } from "react";
import Cards from "../Cards"
import Form from "../Form"
import { dashContext } from "../../Context";
const Dashboard = () => {
  const {render} = useContext(dashContext)
  return (
    <div className="w-full flex bg-black">
        <div>
            <SideBar/>
        </div>
        {render === false ? (<div>
            <Cards/>
        </div>):
        <div>
            <Form/>
        </div>
        }
    </div>
  )
}

export default Dashboard