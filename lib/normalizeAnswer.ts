function singularize(normalized: string): string {
  if (normalized.endsWith("ies") && normalized.length > 4) {
    return `${normalized.slice(0, -3)}y`;
  }

  if (normalized.endsWith("es") && normalized.length > 4) {
    return normalized.slice(0, -2);
  }

  if (
    normalized.endsWith("s") &&
    !normalized.endsWith("ss") &&
    normalized.length > 3
  ) {
    return normalized.slice(0, -1);
  }

  return normalized;
}

export function normalizeAnswer(value: string): string {
  const joined = value.toLowerCase().trim().replace(/[\s-]+/g, "");
  return singularize(joined);
}
