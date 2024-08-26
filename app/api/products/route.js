import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';
import jwt from 'jsonwebtoken';

// Helper function to check JWT token
async function verifyToken(request) {
    const authHeader = request.headers.get('authorization');
    if (!authHeader) return null;

    const token = authHeader.split(' ')[1];
    if (!token) return null;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        return null;
    }
}

export async function GET() {
    await dbConnect();

    const products = await Product.find({});
    return NextResponse.json({ success: true, data: products });
}

export async function POST(request) {
    await dbConnect();

    const decoded = await verifyToken(request);
    if (!decoded) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const product = await Product.create(body);
        return NextResponse.json({ success: true, data: product }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 400 });
    }
}

export async function PUT(request) {
    await dbConnect();

    const decoded = await verifyToken(request);
    if (!decoded) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        const body = await request.json();
        const product = await Product.findByIdAndUpdate(id, body, { new: true });
        if (!product) {
            return NextResponse.json({ success: false }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: product });
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 400 });
    }
}

export async function DELETE(request) {
    await dbConnect();

    const decoded = await verifyToken(request);
    if (!decoded) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return NextResponse.json({ success: false }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 400 });
    }
}
