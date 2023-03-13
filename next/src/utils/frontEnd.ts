type Request<T> = {
  status: number;
  body?: T;
};

const request = async <T = unknown>(
  method: string,
  loc: string,
  body?: {}
): Promise<Request<T>> => {
  const res = await fetch("/api" + loc, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  try {
    return { status: res.status, body: await res.json() };
  } catch {
    return { status: res.status };
  }
};

export { request };
