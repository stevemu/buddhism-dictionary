import { Stack, Typography } from '@mui/material';
import React from 'react';

export const Copyright = () => {
  return (
    <Stack sx={{ padding: 3 }}>
      <Typography variant='h5'>About</Typography>
      <Typography>
        This dictionary app is developed by{' '}
        <a href='https://www.middle-way.org/'>Middle Way Society</a>. The main developer is{' '}
        <a href='https://www.linkedin.com/in/qistevemu/'>Steve Mu</a>. The database of this
        dictionary is created from free dictionaries published by{' '}
        <a href='https://glossaries.dila.edu.tw/glossaries?locale=zh-TW'>DILA</a>.
      </Typography>
      <Typography variant='h5' sx={{ mt: 2 }}>
        Dictionaries included in the database
      </Typography>
      <ul>
        <li>
          <a href='https://glossaries.dila.edu.tw/glossaries/PLC?locale=zh-TW'>{`Dama Bhikkhu: A Chinese Translation of A.P. Buddhadatta's "Concise Pali-English
          Dictionary" : Digital Edition`}</a>
        </li>
      </ul>
      <Typography variant='h5' sx={{ mt: 2 }}>
        Roadmap
      </Typography>
      <ul>
        <li>{'Add more dictionaries to the database'}</li>
      </ul>
    </Stack>
  );
};
