import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai';
import { apiKey } from '../config';

const configuration = new Configuration({
  apiKey,
});

const openai = new OpenAIApi(configuration);

export const getRandomFact = async (messages: ChatCompletionRequestMessage[]) => {
  const { data } = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages,
    // temperature: 0,
    top_p: 1,
    max_tokens: 150,
  });
  
  return data.choices[0].message?.content;
};
