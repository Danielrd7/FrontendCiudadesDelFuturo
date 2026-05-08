interface Props {
  devices: string[];

  onSelect: (
    devEUI: string,
  ) => void;
}

export const DeviceSelector = ({
  devices,
  onSelect,
}: Props) => {
  return (
    <div
      style={{
        marginBottom: 20,
      }}
    >
      <label>
        Filtrar dispositivo:
      </label>

      <select
        onChange={(e) =>
          onSelect(
            e.target.value,
          )
        }
        style={{
          marginLeft: 10,
        }}
      >
        <option value="">
          Todos
        </option>

        {devices.map((d) => (
          <option
            key={d}
            value={d}
          >
            {d}
          </option>
        ))}
      </select>
    </div>
  );
};