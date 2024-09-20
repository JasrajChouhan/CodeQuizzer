import { AlertDialogDemo } from "./AlertDialogDemo";

interface AlertDialogComponentProps {
    btnText : string;
    message : string;
    onCancel? : () => void
    onContinue? : () => void
}

const AlertDialogComponent = ({ 
    btnText, 
    message, 
    onCancel, 
    onContinue 
} : AlertDialogComponentProps) => (
    <AlertDialogDemo
        btnText={btnText}
        message={message}
        onCancelButtonHandler={onCancel}
        onContinueButtonHandler={onContinue}
    />
);

export default AlertDialogComponent
