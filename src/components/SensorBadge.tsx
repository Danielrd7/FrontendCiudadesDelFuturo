// ✅ NUEVO
// Componente para visualizar el tipo de sensor

interface Props {
  type: string | null;
}

export const SensorBadge = ({ type }: Props) => {
  return (
    <span
      style={{
        padding: "4px 8px",
        borderRadius: 8,
        backgroundColor: "#ddd",
        marginLeft: 10,
      }}
    >
      {type ?? "UNKNOWN"}
    </span>
  );
};