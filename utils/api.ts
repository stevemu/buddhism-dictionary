const validateRes = async (res: Response) => {
  if (res.ok) return;

  const { message, error = '' } = await res.json();
  if (!message) {
    throw new Error(`Missing 'message' field from the response.`);
  }

  throw new Error(message + error);
};

type Option = {
  signal?: AbortSignal;
};

export async function getRequest<T>(pathname: string, { signal }: Option = {}): Promise<T> {
  const res = await fetch(pathname, { signal });
  await validateRes(res);
  if (res.status === 204) {
    return null;
  }
  return res.json();
}
