import { useContext } from "react";
import { dashContext } from "../../Context";

const SideBar = () => {
  const { setRender } = useContext(dashContext)

  return (
    <div className="h-full bg-black w-56 text-white border border-r-4 border-gray-900">
      <h1 className="flex justify-center p-4 font-bold text-xl">MangerProduct</h1>
      <div className="flex flex-col">
        <ul className="text-center mt-6">
          <li className="mb-3" onClick={() => setRender(false)}>Todos os Produtos</li>
          <li className="mb-3" onClick={() => setRender((prev) => !prev)}>
            Criar Produto
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
