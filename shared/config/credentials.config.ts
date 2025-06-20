import dotenv from 'dotenv';

dotenv.config();

export const CREDENTIALS = {
  url: process.env.URL as string
};
