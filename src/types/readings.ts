export interface Reading {
  id: number;

  dev_eui: string;

  device_name: string | null;

  device_type: string | null;

  f_cnt: number | null;

  f_port: number | null;

  distance_mm: number | null;

  battery: number | null;

  people_count: number | null;

  occupied: number | null;

  button_pressed: number | null;

  raw_object: string;

  gateway_time: string | null;

  received_at: string;
}