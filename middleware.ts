import { surveyConfig } from '@/configs/surveyConfig';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	if (!pathname.startsWith('/survey/')) {
		const firstQuestionId = surveyConfig.firstQuestionId;
		return NextResponse.redirect(new URL(`/survey/${firstQuestionId}`, request.url));
	}
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
