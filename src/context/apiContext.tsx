import { createContext, useContext, useEffect, useState } from 'react';
import {
	ApiContextTypes,
	ApiProviderChildrenProps,
	Question,
} from '../types/types';

const ApiContext = createContext<ApiContextTypes | undefined>(undefined);

function ApiContextProvider({ children }: ApiProviderChildrenProps) {
	const [questionData, setQuestionData] = useState<Question[]>();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	async function fetchQuestionData(signal: AbortSignal) {
		try {
			setIsLoading(true);
			setError('');
			const response = await fetch('http://localhost:3000', {
				signal: signal,
			});
			if (!response.ok) {
				throw new Error(`Data not found, please try again later.`);
			}
			const data = await response.json();

			setQuestionData(data);
		} catch (err: any) {
			if (err.name === 'AbortError') {
				console.log('Fetch request was aborted');
			} else {
				setError(err.message || 'Something went wrong');
			}
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		//-------Abort Controller
		const controller = new AbortController();

		fetchQuestionData(controller.signal);

		// Cleanup function to abort the fetch when the component unmounts
		return () => {
			controller.abort();
		};
	}, []);

	return (
		<ApiContext.Provider value={{ questionData, isLoading, error }}>
			{children}
		</ApiContext.Provider>
	);
}

function useApiData() {
	const context = useContext(ApiContext);
	if (!context) {
		throw new Error('useApiData must be used within a Provider');
	}

	return context;
}

export { ApiContext, ApiContextProvider, useApiData };
