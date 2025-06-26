import SideBar from "./components/SideBar";
import Vista from "./routes";

const App = () => {
  return ( 
    <div className="min-h-screen bg-[#d8edfe] p-2 sm:p-4">
      <div className="flex flex-col lg:flex-row h-full gap-2 sm:gap-5">
        {/* SideBar - Se coloca arriba en móvil y a la izquierda en desktop */}
        <div className="w-full lg:w-72 flex-shrink-0">
          <SideBar />
        </div>
        
        {/* Vista principal - Ocupa todo el ancho en móvil */}
        <div className="flex-grow overflow-x-hidden">
          <Vista />
        </div>
      </div>
    </div>
  );
}

export default App;