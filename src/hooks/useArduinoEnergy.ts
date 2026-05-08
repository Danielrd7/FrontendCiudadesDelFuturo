import { useEffect, useState } from "react";

export function useArduinoEnergy() {
  const [totalEnergy, setTotalEnergy] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://10.66.74.221/")
        .then((res) => {
          if (!res.ok) throw new Error("Error de red");
          return res.json();
        })
        .then((data) => {
          // data.energia = el progreso de la matriz actual (0-95)
          // data.ciclos = cuántas veces se ha llenado la matriz
          
          if (typeof data.energia === "number" && typeof data.ciclos === "number") {
            // CALCULAMOS EL TOTAL ACUMULADO:
            // Cada ciclo vale 96 unidades.
            const acumulado = (data.ciclos * 96) + data.energia;
            setTotalEnergy(acumulado);
          }
        })
        .catch((err) => {
          console.log("Arduino no disponible:", err.message);
        });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return totalEnergy;
}