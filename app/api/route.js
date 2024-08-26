import { NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnect'; // Adjust the path if necessary
import Product from '@/models/Product'; // Adjust the path if necessary

export async function GET() {
  try {
      await dbConnect(); // Ensure the DB is connected
      const products = await Product.find({}); // Fetch all products
      return NextResponse.json(products);
  } catch (error) {
      console.error('Failed to fetch products:', error);
      return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}