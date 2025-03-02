import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useDarkMode } from '@/context/DarkModeProvider';

const DarkMode = () => {
  const { theme, setTheme } = useDarkMode();

  return (
    <Select
      value={theme}
      onValueChange={(value) => setTheme(value as 'dark' | 'light')}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Appearance" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="dark">Dark Mode</SelectItem>
          <SelectItem value="light">Light Mode</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default DarkMode;
