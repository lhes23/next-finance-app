export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "http://192.168.100.10:3000"
