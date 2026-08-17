export const createJsonQueryFn = <Data>(url: string, validate: (value: unknown) => Data) => {
  return async () => {
    const response = await fetch(url);
    const data: unknown = await response.json();
    return validate(data);
  };
};

export const formatDate = (date: string) => new Date(date).toLocaleDateString("ru-RU");
