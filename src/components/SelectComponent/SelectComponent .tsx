import { Label } from "../ui/label";
import {
    Select,
    SelectContent,
    SelectItem, 
    SelectTrigger, 
    SelectValue
} from "../ui/select";


export interface optionsTypes {
    value: string;
    label : string;
}

interface selectComponentProps {
    id: string;
    placeholder: string;
    options: optionsTypes[];
    onChange: (value: string) => void;

}



const SelectComponent = ({
    id,
    placeholder,
    options,
    onChange
}: selectComponentProps) => (
    <div className="flex flex-col space-y-1.5">
        <Label htmlFor={id}>{id}</Label>
        <Select onValueChange={onChange}>
            <SelectTrigger id={id}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent position="popper">
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    </div>
);

export default SelectComponent;