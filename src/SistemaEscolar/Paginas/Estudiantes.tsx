import { useEffect } from "react";
import App from "../../../components/Table";
import { useSystemEstudiantes } from "../../Hooks/useSystemEstudiantes";
export const Estudiantes = () => {
  const { startSetEstudents } = useSystemEstudiantes();
  useEffect(() => {
    startSetEstudents();
  }, []);

  return (
    <div>
      <App />
    </div>
  );
};
