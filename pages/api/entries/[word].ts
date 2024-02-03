import { baseHandler, appendFallbackHandler } from '@/utils/handlers/base';
import { getEntries } from '@/services/dict';

const handler = baseHandler();

handler.get(async (req, res) => {
  const { word } = req.query;
  const entries = await getEntries(word as string);
  res.status(200).json(entries);
});

appendFallbackHandler(handler);

export default handler;
