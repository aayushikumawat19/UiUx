import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@layout": path.resolve(__dirname, "src/components/layout"),
      "@comman": path.resolve(__dirname, "src/components/comman"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@capacityBuilding": path.resolve(__dirname, "src/components/capacityBuilding"),
      "@circulars": path.resolve(__dirname, "src/components/circulars"),
      "@dashboard": path.resolve(__dirname, "src/components/dashboard"),
      "@inventory": path.resolve(__dirname, "src/components/inventory"),
      "@logistics": path.resolve(__dirname, "src/components/logistics"),
      "@maintenance": path.resolve(__dirname, "src/components/maintenance"),
      "@memo": path.resolve(__dirname, "src/components/memo"),
      "@notifications": path.resolve(__dirname, "src/components/notifications"),
      "@officeBudget": path.resolve(__dirname, "src/components/officeBudget"),
      "@paymentVoucher": path.resolve(__dirname, "src/components/paymentVoucher"),
      "@payroll": path.resolve(__dirname, "src/components/payroll"),
      "@procurements": path.resolve(__dirname, "src/components/procurements"),
      "@staff": path.resolve(__dirname, "src/components/staff"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://192.168.0.12:8080",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
