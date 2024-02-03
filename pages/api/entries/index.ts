import { baseHandler, appendFallbackHandler } from '@/utils/handlers/base';

const handler = baseHandler();

handler.get(async (req, res) => {
  return res.json([]);
});

appendFallbackHandler(handler);

export default handler;
