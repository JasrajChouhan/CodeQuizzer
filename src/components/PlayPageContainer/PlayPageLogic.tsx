import { useState } from 'react';

import { useApiData } from '@/context/apiContext';
import PlayPageUi from './PlayPageUi';

function PlayPageLogic() {
	const { questionData, isLoading, error } = useApiData();

	// Get quizData from localStorage and safely parse it
	const localStorageData = localStorage.getItem('quizData');
	const parsedLocalStorageData = localStorageData
		? JSON.parse(localStorageData)
		: null;

	// If no category data exists in localStorage, don't proceed
	const selectedCategory = parsedLocalStorageData?.Category;

	// Find questions that match the category from localStorage
	const matchedCategory = questionData?.filter(
		data => data.category === selectedCategory,
	);

	// State to track the current question index
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!matchedCategory || matchedCategory.length === 0) {
		return <div>No questions found for the selected category</div>;
	}

	// Get the current question based on the current index
	const currentQuestion = matchedCategory[currentQuestionIndex];

	// go to the next question
	const handleNextQuestion = () => {
		if (currentQuestionIndex < matchedCategory.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		}
	};

	// go to the previous question
	const handlePreviousQuestion = () => {
		if (currentQuestionIndex > 0) {
			setCurrentQuestionIndex(currentQuestionIndex - 1);
		}
	};

	return (
		<PlayPageUi
			currentQuestion={currentQuestion}
			currentQuestionIndex={currentQuestionIndex}
			totalQuestions={matchedCategory.length}
			handleNextQuestion={handleNextQuestion}
			handlePreviousQuestion={handlePreviousQuestion}
		/>
	);
}

export default PlayPageLogic;
