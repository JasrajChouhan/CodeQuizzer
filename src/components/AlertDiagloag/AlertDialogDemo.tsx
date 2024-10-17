import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

interface AlertDiagloagProps {
	btnText: string;
	message: string;
	onCancelButtonHandler?: () => void;
	onContinueButtonHandler?: () => void;
}

export function AlertDialogDemo(props: AlertDiagloagProps) {
	const { btnText, message, onCancelButtonHandler, onContinueButtonHandler } =
		props;
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="outline">{btnText}</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>{message}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={onCancelButtonHandler}>
						Cancel
					</AlertDialogCancel>
					<AlertDialogAction onClick={onContinueButtonHandler}>
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
