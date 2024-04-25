# JobTracker

JobTracker is a Next.js web application that helps you keep track of your job applications!

Features:
* Searching
* Filtering
* Stats on how many total applications vs active vs pending

![JobTracker](https://github.com/mattbal/JobTracker/assets/55065240/eefac11c-ff82-4527-bf65-3493e4033a14)



## Getting Started

First, make sure [Node.js](https://nodejs.org/en) and [Docker Desktop](https://www.docker.com/products/docker-desktop/) are installed.

Then, setup the database by running:
`docker run -p 5432:5432 -e POSTGRES_HOST_AUTH_METHOD=trust postgres`

Then, clone this repo and run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
