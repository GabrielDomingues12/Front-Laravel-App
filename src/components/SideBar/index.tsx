import { useContext } from "react";
import { dashContext } from "../../Context";

const SideBar = () => {
  const { setRender } = useContext(dashContext)

  return (
    <div className="h-full bg-slate-900 w-56 text-white">
      <h1 className="flex justify-center p-4 font-bold text-xl border-solid bg-slate-800">ManegerProduct</h1>
      <div className="flex flex-col">
        <ul className="text-center mt-6">
          <li className="mb-3 cursor-pointer hover:bg-gray-700 rounded-lg p-2" onClick={() => setRender(false)}>Todos os Produtos</li>
          <li className="mb-3 cursor-pointer hover:bg-gray-700 rounded-lg p-2 delay-100" onClick={() => setRender((prev) => !prev)}>
            Criar Produto
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
