import SideBar from "../../components/SideBar"
import { useContext } from "react";
import Cards from "../Cards"
import Form from "../Form"
import { dashContext } from "../../Context";
const Dashboard = () => {
  const {render} = useContext(dashContext)
  return (
    <div className="w-full flex bg-white">
        <div>
            <SideBar/>
        </div>
        {render === false ? (
        <div>
            <Cards id={0} descricao={""} preco={0} estoque={0}/>
        </div>):
        <div>
            <Form/>
        </div>
        }
    </div>
  )
}

export default Dashboard