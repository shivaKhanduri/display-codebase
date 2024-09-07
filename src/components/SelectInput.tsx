interface SelectedInputProps {
  label: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectInput({
  label,
  options,
  onChange,
}: SelectedInputProps) {
  return (
    <div className='col-md-12'>
      <label htmlFor={label}>{label}:</label>
      <select
        name={label.toLowerCase()}
        id={label}
        className='form-control'
        onChange={onChange}
      >
        <option value='' className='text-white'>
          Select {label}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
