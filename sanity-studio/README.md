# Vritti HeadHunters Sanity Studio

This folder contains the content editor for the website.

## Run locally

```powershell
cd sanity-studio
npm install
npm run dev
```

Open the URL Sanity prints, usually `http://localhost:3333`.

## Sanity project details

- Project ID: `53dzg6zi`
- Dataset: `production`
- Main document: `Site Content`

## Required CORS origins

In Sanity Manage, open the project, then go to **API** and add these CORS origins:

```text
http://localhost:5173
https://nishu-1703.github.io
```

Do not enable credentials for these public read-only origins.

## Client editing flow

1. Open the Studio.
2. Create or edit the `Site Content` document.
3. Update page text, services, mentors, partners, and contact info.
4. Publish.
5. The website reads the latest published content from Sanity.
