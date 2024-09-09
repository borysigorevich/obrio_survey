import { surveyConfig } from '@/configs/surveyConfig';
import { routes } from '@/routes';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	if (!pathname.startsWith(`${routes.questions}/`) && pathname !== routes.results) {
		const firstQuestionId = surveyConfig.firstQuestionId;
		return NextResponse.redirect(new URL(`${routes.questions}/${firstQuestionId}`, request.url));
	}
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
