import { Client, Account, Databases, Storage, Avatars } from 'react-native-appwrite';
import "react-native-url-polyfill/auto";

export const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('YOUR_PROJECT_ID') // Get this from Appwrite Console
    .setPlatform('com.yourname.yourapp'); // Must match app.json bundleIdentifier

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);