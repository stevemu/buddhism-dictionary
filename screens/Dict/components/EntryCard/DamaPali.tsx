import * as React from 'react';
import Typography from '@mui/material/Typography';
import { DamaChineseTranslationConciseApliEnglishEntry } from '@/types/dict';

type Props = {
  entry: DamaChineseTranslationConciseApliEnglishEntry;
};

export function DamaPali({ entry }: Props) {
  return (
    <Typography variant='h5' component='div'>
      {entry.definition}
    </Typography>
  );
}
