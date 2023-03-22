export const normalizeStringToId = (id = '') => {
  return id.trim().replace(/\s/g, '_').substring(0, 40).toLowerCase();
};
