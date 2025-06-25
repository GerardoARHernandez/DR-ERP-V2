import SideBar from "./components/SideBar";
import Vista from "./routes";

const App = () => {
  return ( 
    <div className="min-h-screen bg-[#d8edfe] p-4">
      <div className="flex flex-row h-full gap-5">
        {/* SideBar ahora ocupará el ancho necesario y se mantendrá a la izquierda */}
        <div className="w-72 flex-shrink-0"> {/* Ancho fijo para la sidebar */}
          <SideBar />
        </div>
        
        {/* Vista ocupará el resto del espacio */}
        <div className="flex-grow">
          <Vista />
        </div>
      </div>
    </div>
  );
}

export default App;