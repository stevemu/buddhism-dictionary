import { Stack } from '@mui/material';
import React, { useState } from 'react';
import { Search } from '@/screens/Dict/components/Search';
import { useEntries } from '@/screens/Dict/data';
import { EntryCard } from '@/screens/Dict/components/EntryCard';
import Skeleton from '@mui/material/Skeleton';

export const Dict = () => {
  const [word, setWord] = useState('');
  const { entries, isLoadingEntries } = useEntries(word);

  return (
    <Stack alignItems='center' sx={{ padding: 3 }}>
      <Search
        onSelect={(val) => {
          setWord(val);
        }}
      />
      {isLoadingEntries && (
        <Skeleton sx={{ mt: 2 }} variant='rectangular' width={'100%'} height={118} />
      )}
      {entries.map((entry) => {
        return <EntryCard entry={entry} key={entry._id} />;
      })}
    </Stack>
  );
};
