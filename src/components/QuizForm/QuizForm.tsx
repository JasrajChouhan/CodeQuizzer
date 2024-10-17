import { NavigateFunction } from 'react-router-dom';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import AlertDialogComponent from '../AlertDiagloag/AlertDialogComponent';
import SelectComponent, {
	optionsTypes,
} from '../SelectComponent/SelectComponent ';
import { FormData } from './QuizFormContainer';

interface QuizFormProps {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: () => void;
	handleSelectChange: (id: string, value: string) => void;
	categoryOptions: optionsTypes[];
	timeOptions: optionsTypes[];
	formData: FormData;
	navigate: NavigateFunction;
}
export function QuizForm({
	handleChange,
	handleSelectChange,
	handleSubmit,
	categoryOptions,
	timeOptions,
	formData,
	navigate,
}: QuizFormProps) {
	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Start Quiz</CardTitle>
				<CardDescription>Fill all fields.</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className="grid w-full items-center gap-4">
						{/* --------Name Field--------  */}
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Name</Label>
							<Input
								id="name"
								placeholder="Jasraj Chouhan"
								value={formData.name}
								onChange={handleChange}
							/>
						</div>

						{/* --------Category Select--------  */}
						<SelectComponent
							id="Category"
							placeholder="HTML"
							options={categoryOptions}
							onChange={value => handleSelectChange('Category', value)}
						/>

						{/* --------Time Select--------  */}
						<SelectComponent
							id="Time"
							placeholder="20 Minutes"
							options={timeOptions}
							onChange={value => handleSelectChange('Time', value)}
						/>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-between">
				{/* --------Cancel Button--------  */}
				<AlertDialogComponent
					btnText={'Cancel'}
					message="After continue you can cancel the quiz and return to home."
					onContinue={() => navigate('/')}
				/>

				{/* -------Submit Button-------- */}
				<AlertDialogComponent
					btnText={'Submit'}
					message="Quiz will start after this, and you cannot revert."
					onContinue={() => handleSubmit()}
				/>
			</CardFooter>
		</Card>
	);
}
