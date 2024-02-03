import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getHumanReadableDictName, UiEntry } from '@/types/dict';
import { DamaPali } from '@/screens/Dict/components/EntryCard/DamaPali';

type Props = {
  entry: UiEntry;
};

export function EntryCard({ entry }: Props) {
  return (
    <Card sx={{ width: '100%', mt: 2 }}>
      <CardContent>
        {entry.dictCode === 'DAMA_CHINESE_TRANSLATION_CONCISE_PALI_ENGLISH' && (
          <DamaPali entry={entry} />
        )}
        <Typography sx={{ mt: 3 }} component='p' variant='caption'>
          {getHumanReadableDictName(entry.dictCode)}
        </Typography>
      </CardContent>
    </Card>
  );
}
