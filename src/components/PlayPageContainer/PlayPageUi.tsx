import OptionButton from '../QuizOptions/OptionButton';
import Question from '../QuizQuestionSection/Question';
import { Button } from '../ui/button';

interface Option {
	optionId: string;
	optionDescription: string;
}

interface QuestionData {
	questionHeading: string;
	questionDescription?: string;
	option: Option[];
}

interface PlayPageUiProps {
	currentQuestion: {
		data: QuestionData;
	};
	currentQuestionIndex: number;
	totalQuestions: number;
	handleNextQuestion: () => void;
	handlePreviousQuestion: () => void;
}

function PlayPageUi({
	currentQuestion,
	currentQuestionIndex,
	totalQuestions,
	handleNextQuestion,
	handlePreviousQuestion,
}: PlayPageUiProps) {
	return (
		<div className="ml-10 mt-10">
			{/* Display the current question */}
			<Question
				question={currentQuestion.data.questionHeading}
				questionIndex={currentQuestionIndex + 1}
			/>

			{currentQuestion.data.questionDescription && (
				<p>{currentQuestion.data.questionDescription}</p>
			)}

			{/* Render the options for the current question */}
			{currentQuestion.data.option.map(option => (
				<OptionButton
					key={option.optionId}
					optionNumber={option.optionId}
					optionText={option.optionDescription}
				/>
			))}

			{/* Navigation buttons for moving between questions */}
			<div className="mt-4">
				<Button
					onClick={handlePreviousQuestion}
					disabled={currentQuestionIndex === 0}
					className="mr-2"
					variant={'outline'}
				>
					Previous
				</Button>
				<Button
					onClick={handleNextQuestion}
					disabled={currentQuestionIndex === totalQuestions - 1}
					variant={'default'}
				>
					Next
				</Button>
			</div>
		</div>
	);
}

export default PlayPageUi;
