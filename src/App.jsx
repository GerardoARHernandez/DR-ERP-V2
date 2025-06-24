import SideBar from "./components/SideBar";
import Vista from "./routes";

const App = () => {
  return ( 
    <div className="min-h-screen bg-white p-5">
      <div className="flex flex-row h-full gap-5">
        {/* SideBar ahora ocupará el ancho necesario y se mantendrá a la izquierda */}
        <div className="w-64 flex-shrink-0"> {/* Ancho fijo para la sidebar */}
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