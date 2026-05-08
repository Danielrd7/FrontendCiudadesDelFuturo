const BASE_URL =
  import.meta.env.VITE_API_URL;

const headers: HeadersInit = {
  "Content-Type":
    "application/json",
};

export const getReadings =
  async (
    limit = 50,
    devEUI?: string,
  ) => {
    let url =
      `${BASE_URL}/readings?limit=${limit}`;

    if (devEUI) {
      url += `&devEUI=${devEUI}`;
    }

    const res = await fetch(url, {
      headers,
    });

    if (!res.ok) {
      throw new Error(
        "Error obteniendo readings",
      );
    }

    return res.json();
  };

export const getLatestReading =
  async (devEUI: string) => {
    const res = await fetch(
      `${BASE_URL}/readings/${devEUI}/latest`,
      {
        headers,
      },
    );

    if (!res.ok) {
      throw new Error(
        "Error obteniendo latest",
      );
    }

    return res.json();
  };