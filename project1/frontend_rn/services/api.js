import axios from 'axios';

// ─── HOW TO FIND YOUR IP ─────────────────────────────────────────────────────
// Run  ipconfig  in Command Prompt and look for "IPv4 Address" under your
// active Wi-Fi or Ethernet adapter.  Make sure your phone and PC are on the
// SAME Wi-Fi network, then paste the IP below.
// Examples: 192.168.1.x  or  192.168.0.x
// ─────────────────────────────────────────────────────────────────────────────
const BASE_URL = 'http://192.168.1.4:8000';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default api;
export { BASE_URL };
