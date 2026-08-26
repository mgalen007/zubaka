const API_BASE_URL = import.meta.env.PUBLIC_API_BASE_URL;

export interface ParcelProperties {
  id: string;
  upi: string;
  zoning: string;
  area_m2: number | null;
}

export interface ParcelGeometry {
  type: string;
  coordinates: unknown;
}

export interface ParcelFeature {
  type: "Feature";
  geometry: ParcelGeometry;
  properties: ParcelProperties;
}

export interface ParcelFeatureCollection {
  type: "FeatureCollection";
  features: ParcelFeature[];
}

export interface LandReport {
  upi: string;
  zoning: string;
  area_m2: number | null;
  allowed_uses: string[];
  restricted_uses: string[];
  ai_explanation: string;
}

export async function getParcels(bbox?: string): Promise<ParcelFeatureCollection> {
  const url = bbox ? `${API_BASE_URL}/parcels?bbox=${bbox}` : `${API_BASE_URL}/parcels`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch parcels");
  return res.json();
}

export async function getParcelAtPoint(lng: number, lat: number): Promise<ParcelFeature | null> {
  const res = await fetch(`${API_BASE_URL}/parcels/point?lng=${lng}&lat=${lat}`);
  if (!res.ok) throw new Error("Point lookup failed");
  return res.json();
}

export async function getParcelReport(parcelId: string): Promise<LandReport> {
  const res = await fetch(`${API_BASE_URL}/parcels/${parcelId}/report`);
  if (!res.ok) throw new Error("Report lookup failed");
  return res.json();
}

export async function getLandReportByUpi(upi: string): Promise<LandReport> {
  const res = await fetch(`${API_BASE_URL}/land/report/${encodeURIComponent(upi)}`);
  if (!res.ok) throw new Error("UPI search failed");
  return res.json();
}
