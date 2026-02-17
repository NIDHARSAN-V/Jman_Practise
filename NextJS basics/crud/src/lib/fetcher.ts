export async function fetcher(url: string, options: any = {}) {
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    credentials: "include", // IMPORTANT
  });

  return res.json();
}
