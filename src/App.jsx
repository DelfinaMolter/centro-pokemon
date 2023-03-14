import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
import { ContextProvider } from "./Hooks/ContextoFormulario";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/formularioIngreso" element={<Formulario />} />
        </Routes>
      </ContextProvider>
    </div>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
