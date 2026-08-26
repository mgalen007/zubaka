export function getZoningColor(zoning: string | undefined | null): string {
  const z = (zoning || "").toLowerCase();
  if (z.includes("restricted") || z.includes("wetland") || z === "e" || z === "r-s") {
    return "#ef4444"; // Red hazard
  }
  if (z.includes("commercial") || z === "c1") {
    return "#191a23"; // Dark
  }
  if (z.includes("mixed") || z === "m") {
    return "#8b5cf6"; // Purple
  }
  return "#b9ff66"; // Default green
}

export function isHazardZoning(zoning: string | undefined | null): boolean {
  const z = (zoning || "residential").toLowerCase();
  return z.includes("restricted") || z.includes("wetland") || z === "e" || z === "r-s";
}
