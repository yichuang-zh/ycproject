import { NextResponse } from 'next/server';

export function middleware(request) {
  const host = request.headers.get('host');
  if (host === 'ycproject.cn' && request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/old.html', request.url));
  }
  return NextResponse.next();
} 
