export interface InputFormProps {
    type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    required?: boolean;
    error?: string;
    options?: string[];
    name?: string;
    rows?: number;
}

export function InputForm({
                              type,
                              placeholder,
                              value,
                              onChange,
                              required = true,
                              error,
                              options,
                              name,
                              rows = 5
                          }: InputFormProps) {
    const baseStyles = "w-full px-4 py-2 rounded border-2 focus:outline-none focus:border-orange";
    const errorStyles = error ? "border-red-500" : "border-gray-200";

    if (type === 'textarea') {
        return (
            <div className="flex flex-col gap-1">
                <textarea
                    name={name}
                    placeholder={placeholder}
                    className={`${baseStyles} ${errorStyles} resize-none`}
                    value={value}
                    onChange={onChange}
                    required={required}
                    rows={rows}
                />
                {error && <span className="text-red-500 text-sm">{error}</span>}
            </div>
        );
    }

    if (type === 'select') {
        return (
            <div className="flex flex-col gap-1">
                <select
                    name={name}
                    className={`${baseStyles} ${errorStyles}`}
                    value={value}
                    onChange={onChange}
                    required={required}
                >
                    <option value="">{placeholder}</option>
                    {options?.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                {error && <span className="text-red-500 text-sm">{error}</span>}
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-1">
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={`${baseStyles} ${errorStyles}`}
                value={value}
                onChange={onChange}
                required={required}
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
}