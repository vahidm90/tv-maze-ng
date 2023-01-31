export const UTIL: {
  sanitizeSearchTerm: (input: string) => string;
} = {
  sanitizeSearchTerm: input => {
    return input.replace(/[\w\s]/g, '').trim();
  }
};
