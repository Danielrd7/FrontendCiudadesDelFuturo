import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useArduinoEnergy } from "../hooks/useArduinoEnergy";

type EnergyBarProps = {
  value: number;
};

function EnergyBar({ value }: EnergyBarProps) {
  const segments = 8;
  const unitsPerSegment = 96;
  const active = Math.min(Math.floor(value / unitsPerSegment), segments);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column-reverse",
        gap: 0.8,
        height: 260,
        width: 80,
        p: 1.5,
        backgroundColor: "#1e293b",
        borderRadius: 2,
      }}
    >
      {Array.from({ length: segments }).map((_, i) => (
        <Box
          key={i}
          sx={{
            flex: 1,
            borderRadius: "4px",
            backgroundColor: i < active ? "#facc15" : "#334155",
            boxShadow: i < active ? "0 0 10px #facc15" : "none",
            transition: "all 0.3s ease",
          }}
        />
      ))}
    </Box>
  );
}

type CardProps = {
  title: string;
  value: string | number;
  color?: string;
};

function Card({ title, value, color }: CardProps) {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        borderRadius: 3,
        border: "1px solid #e5e5e5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          color: color || "#0ea5e9",
          mb: 1,
          fontWeight: "500",
          fontSize: "1.3rem", // 🔥 AUMENTA tamaño del título de la card
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "2.6rem", // 🔥 AUMENTA tamaño del valor de la card
        }}
      >
        {value}
      </Typography>
    </Paper>
  );
}

export default function Dashboard() {
  const energy = useArduinoEnergy();

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f8fafc", p: 4 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 5,
          fontWeight: "bold",
          color: "#1e293b",
        }}
      >
        Sistema de monitoreo de Energía Topante
      </Typography>

      <Box sx={{ display: "flex", gap: 4, maxWidth: 1100, mx: "auto" }}>
        <Paper
          elevation={4}
          sx={{
            p: 4,
            borderRadius: 4,
            border: "1px solid #e2e8f0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 220,
            backgroundColor: "#fff",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: "#f59e0b",
              mb: 3,
              fontWeight: "bold",
              letterSpacing: 1,
              fontSize: "1.6rem", // 🔥 AUMENTA tamaño del título "Energía"
            }}
          >
            Energía
          </Typography>

          <EnergyBar value={energy} />

          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                fontSize: "3rem", // 🔥 AUMENTA tamaño del valor de energía
                color: "#1e293b",
              }}
            >
              {energy}
            </Typography>
          </Box>
        </Paper>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 3,
            flex: 1,
          }}
        >
          <Card
            title="Cantidad de vehículos"
            value={49}
            color="#0ea5e9"
          />
          <Card
            title="Vehículos que cruzaron"
            value={342}
            color="#10b981"
          />
          <Card
            title="Distancia Total"
            value="2.4 km"
            color="#6366f1"
          />
          <Card
            title="Velocidad Promedio"
            value="23 km/h"
            color="#f59e0b"
          />
        </Box>
      </Box>
    </Box>
  );
}