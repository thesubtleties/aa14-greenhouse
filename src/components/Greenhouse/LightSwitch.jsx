import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {
  const { themeName, setThemeName } = useTheme();

  const handleDayClick = () => setThemeName('day');
  const handleNightClick = () => setThemeName('night');
  return (
    <div className="light-switch day">
      <div
        className={themeName === 'day' ? 'on' : 'off'}
        onClick={handleDayClick}
      >
        DAY
      </div>
      <div
        className={themeName === 'night' ? 'on' : 'off'}
        onClick={handleNightClick}
      >
        NIGHT
      </div>
    </div>
  );
}

export default LightSwitch;
