import { URL } from "url"


export async function GET(request:Request) {
    console.log(request)
    const {searchParams} = new URL(request.url)

    return Response.json({
        name:searchParams.get("name")
    })
    

}
export async function POST(request: Request) {
  const body = await request.json();
    console.log(request)
    console.log(body)
  return Response.json({
    name: body.name,
    age: body.age,
  });
}