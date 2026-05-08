import Box from "@mui/material/Box";

type EnergyBarProps = {
  value: number; // Este valor vendrá directamente del hook (0 a 96)
};

export function EnergyBar({ value }: EnergyBarProps) {
  const segments = 8;
  const maxEnergy = 96; // El total de LEDs de la matriz del Arduino

  // Calculamos cuántos de los 8 bloques deben prenderse
  // Si value es 96, active será 8. Si es 48, active será 4.
  const active = Math.min(Math.round((value / maxEnergy) * segments), segments);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column-reverse", // Llena de abajo hacia arriba
        gap: 0.8,
        height: 300,
        width: 60,
        p: 1.5,
        backgroundColor: "#1e293b", // Fondo oscuro para que resalte el amarillo
        borderRadius: 3,
        border: "2px solid #334155",
      }}
    >
      {Array.from({ length: segments }).map((_, i) => (
        <Box
          key={i}
          sx={{
            flex: 1,
            borderRadius: "4px",
            // i < active determina si el bloque se ilumina
            backgroundColor: i < active ? "#facc15" : "#334155",
            boxShadow: i < active ? "0 0 12px #facc15" : "none",
            transition: "all 0.3s ease-in-out", // Transición suave
          }}
        />
      ))}
    </Box>
  );
}