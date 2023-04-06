import { TwitterApi } from 'twitter-api-v2';
import { twitter } from '../config';

const twitterClient = new TwitterApi({
  appKey: twitter.appKey,
  appSecret: twitter.appSecret,
  accessToken: twitter.accessToken,
  accessSecret: twitter.accessSecret,
});

const readWriteClient = twitterClient.readWrite;

export const tweet = async (text: string) => {
  await readWriteClient.v2.tweet(text);
};
