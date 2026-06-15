export const storageKeys = {
  project: "gravitytech_project_requests",
  career: "gravitytech_career_applications",
};

export function readEntries(key) {
  try {
    const value = window.localStorage.getItem(key);
    const parsed = value ? JSON.parse(value) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("Unable to read saved GravityTech entries", error);
    return [];
  }
}

export function saveEntry(key, entry) {
  const existing = readEntries(key);
  existing.unshift(entry);

  try {
    window.localStorage.setItem(key, JSON.stringify(existing.slice(0, 8)));
    return true;
  } catch (error) {
    console.warn("Unable to save GravityTech entry", error);
    return false;
  }
}
