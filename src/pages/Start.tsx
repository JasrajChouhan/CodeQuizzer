import HomeToggleMode from '@/components/HomeToggleMode';
import QuizFormContainer from '@/components/QuizForm/QuizFormContainer';

function Start() {
	return (
		<div>
			<HomeToggleMode />
			<div className="flex justify-center items-center mt-20">
				<QuizFormContainer />
			</div>
		</div>
	);
}

export default Start;
