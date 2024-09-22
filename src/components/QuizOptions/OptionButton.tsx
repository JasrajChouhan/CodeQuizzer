interface OptionsProps {
    optionNumber?: string | undefined;
    optionText: string;
}

function OptionButton(props: OptionsProps) {
    const {
        optionNumber,
        optionText
    } = props;

    return (
        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] flex items-center gap-4 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 h-auto my-6 transition duration-200 ease-in-out focus-within:ring-2 hover:ring-2 ring-offset-2 dark:ring-offset-gray-900 hover:ring-gray-400 dark:hover:ring-gray-500 cursor-pointer">


            <input
                type="checkbox"
                name={optionNumber}
                id={optionNumber}
                className="w-5 h-5 rounded border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 dark:bg-gray-800"
            />


            <span className="text-left text-lg md:text-xl lg:text-2xl font-medium text-gray-900 dark:text-gray-100">
                {optionText}
            </span>
        </div>
    );
}

export default OptionButton;
