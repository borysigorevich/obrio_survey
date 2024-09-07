import { useRouter } from 'next/navigation';

export const useNavigateToParentQuestion = (parentId: string) => {
	const router = useRouter();

	const goBack = () => {
		router.push(`/${parentId}`);
	};

	return goBack;
};
