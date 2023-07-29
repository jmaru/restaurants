This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Checking the app in dev mode

First, install the dependencies

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

## Use it online
This have have been deployed to Vercel visit [https://restaurants-beige.vercel.app/](https://restaurants-beige.vercel.app/) to give it a try!
