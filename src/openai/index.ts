import { Configuration, OpenAIApi } from 'openai';
import { apiKey } from '../config';

const configuration = new Configuration({
  apiKey,
});

const openai = new OpenAIApi(configuration);

export const getRandomFact = async (prompt: string) => {
  const { data } = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: prompt,
      }
    ],
    // temperature: 0,
    top_p: 1,
    max_tokens: 150,
  });
  
  return data.choices[0].message?.content;
};
