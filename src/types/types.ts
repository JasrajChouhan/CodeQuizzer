import { ReactNode } from 'react';

export interface optionTypes {
	optionId: string;
	optionDescription: string;
}

export interface dataTypes {
	id: string;
	questionHeading: string;
	questionDescription?: string;
	option: optionTypes[];
	answer?: { correctOptionId: string };
}

export interface Question {
	category: string;
	level: 'easy' | 'medium' | 'heard';
	data: dataTypes;
}

export interface ApiContextTypes {
	questionData: Question[] | undefined;
	isLoading: boolean;
	error: string;
}

export interface ApiProviderChildrenProps {
	children: ReactNode;
}
