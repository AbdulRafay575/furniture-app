// app/api/auth/route.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const users = [
    { username: 'admin', password: bcrypt.hashSync('password', 10) }
];

export async function POST(request) {
    const { username, password } = await request.json();

    const user = users.find((u) => u.username === username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });

    return NextResponse.json({ token }, { status: 200 });
}
