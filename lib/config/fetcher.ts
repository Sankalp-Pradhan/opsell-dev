// export async function apiFetch<T>(
//   url: string,
//   apiKey?: string
// ): Promise<T> {
//   const res = await fetch(url, {
//     headers: {
//       "Content-Type": "application/json",
//       ...(apiKey
//         ? {
//             Authorization: `Bearer ${apiKey}`,
//           }
//         : {}),
//     },

//     next: {
//       revalidate: 300,
//     },
//   });

//   if (!res.ok) {
//     throw new Error(`API Error ${res.status}`);
//   }

//   return res.json();
// }



type HttpMethod = "GET" | "POST";

export async function apiFetch<T>(
  url: string,
  apiKey?: string,
  method: HttpMethod = "GET",
  body?: Record<string, unknown>
): Promise<T> {
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${res.statusText} — ${url}`);
  }

  return res.json() as Promise<T>;
}