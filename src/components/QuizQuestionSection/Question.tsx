import { BookMarkedIcon } from 'lucide-react';

interface questionTypes {
	question: string;
	questionIndex: number;
}

function Question({ question, questionIndex }: questionTypes) {
	return (
		<div className="flex mt-6 sm:mt-8 lg:mt-10 justify-between items-center">
			<div className="flex gap-2 w-full">
				<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
					{questionIndex}. {question}
				</h1>
			</div>
			<BookMarkedIcon
				size={32}
				className="border-2 p-1 sm:p-2 rounded-lg hover:bg-zinc-900 cursor-pointer transition duration-300 ease-in-out mr-6 sm:mr-8 lg:mr-10"
			/>
		</div>
	);
}

export default Question;
