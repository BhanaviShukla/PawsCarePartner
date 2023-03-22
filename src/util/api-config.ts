const errorHandler = async (res: Response) => {
  const responseText = await res.text();

  const parseResponse = (text: string) => {
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  };

  if (res.ok) {
    return (
      parseResponse(responseText) || {
        info: 'Success - No response body',
        status: res.status
      }
    );
  }

  throw {
    info: parseResponse(responseText) || 'Something went wrong - No error response body',
    status: res.status
  };
};

export const apiConfig = {
  GET: async (url: RequestInfo, options?: RequestInit) => {
    const response = await fetch(url, {
      ...options,
      body: undefined,
      method: 'GET'
    });

    return errorHandler(response);
  },
  POST: async (url: RequestInfo, options: RequestInit) => {
    const { body, headers, ...rest } = options;
    const response = await fetch(url, {
      ...rest,
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    });

    return errorHandler(response);
  },
  PUT: async (url: RequestInfo, options: RequestInit) => {
    const { body, headers, ...rest } = options;
    const response = await fetch(url, {
      ...rest,
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    });
    return errorHandler(response);
  },
  DELETE: async (url: RequestInfo, options: RequestInit) => {
    const response = await fetch(url, {
      ...options,
      method: 'DELETE'
    });
    return errorHandler(response);
  }
};
