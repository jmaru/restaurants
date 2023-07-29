import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { offset: string } }){
  const offset = params.offset?`&offset=${params.offset}`:'';
  try{
    const apiResponse = await fetch(`https://api.yelp.com/v3/businesses/search?location=San%20Jose%2C%20CA%20%2095127&term=restaurants&sort_by=best_match${offset}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.YELP_API_KEY}`
      },
      next:{
        revalidate:10
      }
    });
    if (!apiResponse.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await apiResponse.json()
    return NextResponse.json(data);
    
  } catch(err){
    return NextResponse.json({error:"unknown",message:"Unknown error ocurred"});
  }
}
