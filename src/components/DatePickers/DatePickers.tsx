
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

interface DatePickersProps {
  name: string;
  value: Date | null;
  setFieldValue: (field: string, value: Date | null) => void;
  placeholder: string;
  error: string;
  success: string;
  isOpen: boolean; // Доданий проп isOpen для відстеження відкритості календаря
  toggleCalendar: () => void; // Доданий обробник події натискання на кнопку з іконкою
}

const DatePickers = ({
  name,
  value,
  setFieldValue,
  placeholder,
  error,
  success,
  isOpen,
  toggleCalendar, // Отримуємо обробник події натискання на кнопку з іконкою
}: DatePickersProps) => {
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
  name={name}
  className="date-input"
  placeholder={"Booking date"} // Змінений текст placeholder
  value={value ? dayjs(value) : null}
  onChange={(newValue) => setFieldValue(name, newValue?.toDate() || null)}
  open={isOpen}
  onClose={() => toggleCalendar()}
  textField={(props) => (
    <input
      {...props}
      placeholder={"Booking date"} // Змінений текст placeholder
      className={`hidden ${
        error === 'true' && 'error'
      } ${success === 'true' && 'success'}`}
    />
  )}
/>
    </LocalizationProvider>
  </>
  );
};

export default DatePickers;
