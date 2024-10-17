import { Separator } from '@/components/ui/separator';

interface SeperatorCompProps {
	className?: string;
}

function SeperatorComp(props: SeperatorCompProps) {
	const { className } = props;
	return (
		<div className={className}>
			<Separator />
		</div>
	);
}

export default SeperatorComp;
