# Energía Topante - Sistema de Monitoreo en Tiempo Real

Este proyecto es una plataforma de visualización de datos industriales diseñada para monitorear la generación de energía y el tráfico vehicular. El sistema integra hardware basado en **Arduino UNO R4 WiFi** con una interfaz web moderna desarrollada en **React**.

## 📊 Descripción del Sistema

El core del proyecto es la sincronización entre el conteo físico de energía (LEDs en Arduino) y la representación lógica en el Dashboard. La interfaz está diseñada para ofrecer una experiencia de usuario limpia, con datos centrados y una barra de progreso acumulativa.

### Características Principales:
- **Monitoreo Acumulativo**: La barra de energía cuenta con 12 segmentos. Cada segmento se activa de forma permanente cada vez que el Arduino completa un ciclo de 96 unidades.
- **Hardware Integrado**: Uso de la matriz LED 8x12 nativa del Arduino UNO R4.
- **Dashboard Profesional**: Construido con Material UI (MUI), con tarjetas estadísticas alineadas y estados de conexión en tiempo real.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React.js, TypeScript, Material UI (MUI).
- **Hardware**: Arduino UNO R4 WiFi, Modulino Buttons (C++).
- **Comunicación**: Protocolo HTTP mediante servidor REST JSON embebido en el microcontrolador.

---

## 📁 Estructura del Código

### 1. Hardware (Arduino)
El archivo `.ino` gestiona:
- Servidor Web en la IP `10.66.74.221`.
- Lógica de matriz LED: Dibuja el progreso actual (0-96).
- Contador de Ciclos: Cada vez que la matriz se llena, incrementa un contador y reinicia la visualización física.

### 2. Frontend (React)
- **Hook `useArduinoEnergy`**: Realiza el polling cada 500ms y calcula la energía total:
  `Total = (Ciclos * 96) + Energía Actual`.
- **Componente `EnergyBar`**: Renderiza 12 bloques robustos. Se llena de abajo hacia arriba basándose en los múltiplos de 96.
- **Componente `Dashboard`**: Organiza las métricas de vehículos, distancia y velocidad en un grid equilibrado.

---

## 🔌 Instalación y Despliegue

### Configuración del Arduino
1. Abre el archivo en Arduino IDE.
2. Ingresa tus credenciales de Red en `ssid` y `password`.
3. Carga el código y confirma la IP en el monitor serial.

### Configuración del Dashboard
1. Instala las dependencias:
   ```bash
   npm install @mui/material @emotion/react @emotion/styled

2. Asegúrate de que la IP en useArduinoEnergy.ts apunte a tu Arduino.

3. Ejecute el entorno de desarrollo con "npm run dev"



   