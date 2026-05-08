import { Reading } from "../types/readings";

import { SensorBadge } from "./SensorBadge";

interface Props {
  reading: Reading;
}

export const ReadingCard = ({
  reading,
}: Props) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
      }}
    >

      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <h2>{reading.device_name}</h2>

        <SensorBadge
          type={reading.device_type}
        />
      </div>

      <p>
        <b>DevEUI:</b>{" "}
        {reading.dev_eui}
      </p>

      {reading.distance_mm !== null && (
        <p>
          <b>Distancia:</b>{" "}
          {reading.distance_mm} mm
        </p>
      )}

      {reading.battery !== null && (
        <p>
          <b>Batería:</b>{" "}
          {reading.battery}%
        </p>
      )}

      {reading.people_count !== null && (
        <p>
          <b>Personas:</b>{" "}
          {reading.people_count}
        </p>
      )}

      {reading.occupied !== null && (
        <p>
          <b>Ocupado:</b>{" "}
          {reading.occupied
            ? "Sí"
            : "No"}
        </p>
      )}

      {reading.button_pressed !== null && (
        <p>
          <b>Botón presionado:</b>{" "}
          Sí
        </p>
      )}

      <p>
        <b>Fecha:</b>{" "}
        {new Date(
          reading.received_at,
        ).toLocaleString()}
      </p>
    </div>
  );
};