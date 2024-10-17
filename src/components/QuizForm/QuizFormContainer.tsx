import { useToast } from '@/hooks/use-toast';
import React, { useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { ToastAction } from '../ui/toast';

import { QuizForm } from './QuizForm';

export type FormData = {
	name: string;
	Category: string;
	Time: string;
};

function QuizFormContainer() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		Category: '',
		Time: '',
	});

	const { toast } = useToast();
	const navigate: NavigateFunction = useNavigate();

	// Handle input changes
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	const handleSelectChange = (id: string, value: string) => {
		setFormData({
			...formData,
			[id]: value,
		});
	};

	const handleSubmit = () => {
		console.log(formData);
		if (!formData.name || !formData.Category || !formData.Time) {
			toast({
				title: 'Error',
				description: 'Please fill all fields before submitting.',
				variant: 'destructive',
				action: <ToastAction altText="Close">Close</ToastAction>,
			});
			return;
		}

		localStorage.setItem('quizData', JSON.stringify(formData));
		navigate('/play');
	};

	const categoryOptions = [
		{ value: 'next', label: 'Next.js' },
		{ value: 'html', label: 'HTML' },
		{ value: 'css', label: 'CSS' },
		{ value: 'js', label: 'JS' },
		{ value: 'reactjs', label: 'ReactJs' },
	];

	const timeOptions = [
		{ value: '5-Minutes', label: '5 Minutes' },
		{ value: '10-Minutes', label: '10 Minutes' },
		{ value: '15-Minutes', label: '15 Minutes' },
		{ value: '20-Minutes', label: '20 Minutes' },
		{ value: 'custom-time', label: 'Custom' },
	];

	return (
		<QuizForm
			handleChange={handleChange}
			handleSubmit={handleSubmit}
			handleSelectChange={handleSelectChange}
			categoryOptions={categoryOptions}
			timeOptions={timeOptions}
			formData={formData}
			navigate={navigate}
		/>
	);
}

export default QuizFormContainer;
