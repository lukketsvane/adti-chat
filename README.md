# ADTI-Wiki 📚
ADTI-Wiki lets users interact with an internal wiki or online database centralizing information about ABB's Digital Twin initiatives. 

## What is ADTI?
ADTI, or the ABB Wiki-Twin Initiative, is a single source of truth for capturing, organizing, and sharing knowledge internally. It allows every team member to access, create, or edit content about important processes, values, and policies related to our digital twin technology.

## Setup
You'll need an ABB API key, which you can get from our internal portal.
Copy your API key to a new file named .env, following the .envExample structure.
Voila! You're ready to get started! 🚀

## Run it Locally
Open the terminal.
Clone the repo or download the ZIP `git clone [github https url]`.
Install packages: Run `npm install yarn -g` to install yarn globally (if you haven't already).
Then run: `yarn install`.
After installation, you should now see a node_modules folder.
Setup your .env file: Copy .env.example into .env. Your .env file should look like this:
    ```
    OPENAI_API_KEY=
    PINECONE_INDEX_NAME=
    PINECONE_ENVIRONMENT=
    PINECONE_API_KEY=
    ```
Visit the ABB internal portal to retrieve your API key and insert into your .env file.
Run `npm run dev` to start your server on http://localhost:3000
Having trouble? Make sure you have Node.js installed, and that you're running the latest version of npm. Otherwise open an issue and we'll help you out!

## Deploy to the World
Push all your changes to Github (or another git provider).
Head to [vercel.app](https://vercel.com/), import your repo, and hit deploy.
Go to settings of the deployment, add your .env, and rebuild.
Not working? Double check your Vercel logs, if there's any timeouts you may need to change plans. You can also host this on your own server!

## Using ADTI-Wiki
You can interact with the wiki in a number of ways. Create new entries, edit existing ones, or browse the vast amount of knowledge already present. The wiki is structured in a tree-like hierarchy, enabling easy navigation and efficient searchability.

## Troubleshooting
If you run into issues, please review the troubleshooting section further down this page.
Make sure you're running the latest Node version. Run `node -v`.
Console.log the env variables and make sure they are exposed.
Make sure you're using the same versions of the relevant libraries as this repo.
Check that you've created an .env file that contains your valid (and working) API key.
Try to hard code your API key into the process.env variables if there are still issues.

Enjoy your exploration through ADTI-Wiki! 📚 If you love this project, please give it a star ⭐️

Say hi on Twitter! @ABB
