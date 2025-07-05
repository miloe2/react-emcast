import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'en');

  const handleChange = (event: React.MouseEvent<HTMLElement>, newLang: string | null) => {
    if (newLang) {
      i18n.changeLanguage(newLang);
      setLang(newLang);
    }
  };

  return (
    <ToggleButtonGroup
      value={lang}
      exclusive
      onChange={handleChange}
      aria-label="language toggle"
      size="small"
      sx={{ height: 28 }}
    >
      <ToggleButton 
        value="en" 
        aria-label="english" 
        sx={{ px: 1.2, py: 0.3, fontSize: '0.75rem' }}
      >
        EN
      </ToggleButton>
      <ToggleButton 
        value="ko" 
        aria-label="korean"
        sx={{ px: 1.2, py: 0.3, fontSize: '0.75rem' }}
      >
        KO
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
