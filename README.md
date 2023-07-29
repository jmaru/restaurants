This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the 

```bash
npm install
```

After that get an Api Key from [Yelp's authenticaton](https://www.yelp.com/developers/documentation/v3/authentication).

Create a file `.env.local`, and put your api key inside like this:
```
YELP_API_KEY={INSERT_HERE_YOUR_API_KEY}
```

You're ready to run the server.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app running!

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
