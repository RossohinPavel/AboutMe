export const fetchJson = async (url: string) => {
  const response = await fetch(url);
  return response.json() as Promise<unknown>;
};

export const formatDate = (date: string) => new Date(date).toLocaleDateString("ru-RU");
