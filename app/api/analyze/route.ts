// app/api/analyze/route.ts

export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch(
    "http://54.197.215.125:4000/analyze",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const data = await response.json();

  return Response.json(data);
}