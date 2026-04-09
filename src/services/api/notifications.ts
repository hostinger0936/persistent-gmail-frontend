import axios from "axios";
import { ENV, apiHeaders } from "../../config/constants";

const base = ENV.API_BASE;

export async function listAppNotifications(deviceId: string): Promise<any[]> {
  const res = await axios.get(
    `${base}/api/devices/app-notifications/device/${encodeURIComponent(deviceId)}`,
    { headers: apiHeaders(), timeout: 10000 },
  );
  return Array.isArray(res.data) ? res.data : [];
}

export async function deleteAppNotification(deviceId: string, notifId: string): Promise<void> {
  // Single delete not in backend yet — use full device delete as fallback
  // For now we filter client-side after delete-all
  await axios.delete(
    `${base}/api/devices/app-notifications/device/${encodeURIComponent(deviceId)}`,
    { headers: apiHeaders(), timeout: 8000 },
  );
}

export async function deleteAllAppNotifications(deviceId: string): Promise<void> {
  await axios.delete(
    `${base}/api/devices/app-notifications/device/${encodeURIComponent(deviceId)}`,
    { headers: apiHeaders(), timeout: 8000 },
  );
}