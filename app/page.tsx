
export const metadata= {
    title: "Home Pge",
  description: "Welcome to my website",
}

export default async function Home() {
  const res = await fetch(
    "http://localhost:3000/api/user",
    {
      method:"POST",
      body:JSON.stringify({
        name :"ajshay",
        age:34
      })
    }
  );

  const data = await res.json();

  return <div>{data.name}</div>;
}