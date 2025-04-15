import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const BASIC_AUTH_USER = process.env.BASIC_AUTH_USER || 'with-user-next';
const BASIC_AUTH_PASSWORD =
  process.env.BASIC_AUTH_PASSWORD || 'with-password-next';

export function middleware(request: NextRequest) {
  const basicAuth = request.headers.get('authorization');

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    if (user === BASIC_AUTH_USER && pwd === BASIC_AUTH_PASSWORD) {
      return NextResponse.next();
    }
  }

  const response = new NextResponse('Unauthorized', { status: 401 });
  response.headers.set('WWW-Authenticate', 'Basic realm="Secure Area"');

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
