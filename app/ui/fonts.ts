// I'll use this file to keep the fonts that will be used throughout your application.
// all theses fonts I took it from google
import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

// exporting the variable that contains the font
export const inter = Inter({ subsets: ['latin']});
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
})
