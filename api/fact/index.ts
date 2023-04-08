import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getRandomFact } from '../../src/openai';
import { messages } from '../../src/config';
import { tweet } from '../../src/twitter';
 
const handler = async (request: VercelRequest, response: VercelResponse) => {
  try {
    const randomFact = await getRandomFact(messages);
    await tweet(randomFact as string);
    response.send(randomFact);
  } catch (error) {
    response.status(500).send(error);
  }
};

export default handler;
