export default async function SSRPage() {
  const res = await fetch("http://localhost:3000/api/time", {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div>
      <h1>SSR Page</h1>
      <p>{data.time}</p>
    </div>
  );
}
