# Tisgrow Website

This is the launch-ready website for **Tisgrow**.

Tisgrow is an AI consultant and AI agent brand that helps businesses grow by automating customer communication, lead capture, booking, support and sales.

The project is built with React + Tailwind CSS and is prepared for publishing on Vercel.

## What Is Inside

- `src/content.ts` - the easiest place to edit website content.
- `src/App.tsx` - the website layout and sections.
- `src/styles.css` - colors, buttons, cards and form styles.
- `public/media/` - images, thumbnails, logos and portfolio media.
- `index.html` - browser title and Google-style description text.
- `package.json` - project commands.
- `dist/` - generated production website after running the build.

You usually only need to edit `src/content.ts`.

## How To Run The Website On Your Computer

1. Open this project folder in a code editor.
2. Open the terminal inside this folder.
3. Install the website files:

```bash
npm install
```

4. Start the local website:

```bash
npm run dev
```

5. Open the link shown in the terminal. It usually looks like:

```text
http://127.0.0.1:5173
```

## How To Check That The Website Is Ready

Run:

```bash
npm run build
```

If you see a success message and a `dist` folder is created, the website is ready for Vercel.

## Where To Change Website Content

Open:

```text
src/content.ts
```

### Change Texts

Most reusable text blocks are in `src/content.ts`.

For example:

- `industries` - service and industry cards.
- `capabilities` - what the AI consultant can do.
- `examples` - portfolio/example use cases.
- `pricing` - pricing cards.

Some large section titles are inside:

```text
src/App.tsx
```

Search for the text you want to change and replace it.

### Change Prices

Open `src/content.ts` and find:

```text
pricing
```

Change the plan names, prices and descriptions there.

### Change Contact Links

Open `src/content.ts` and find:

```text
contactLinks
```

Change these placeholder links:

- Telegram
- WhatsApp
- Instagram
- Email

The WhatsApp phone number is used only inside the WhatsApp link. It is not shown as large public text on the page.

### Change AI Assistant Cards

Open `src/content.ts` and find:

```text
assistants
```

You can change:

- assistant name
- assistant category
- description
- card color
- image path

Assistant image paths look like this:

```text
/media/assistants/avtologik.jpg
/media/assistants/waterstop.jpg
/media/assistants/levka.jpg
/media/assistants/pigulkin.jpg
/media/assistants/pizzahot.jpg
/media/assistants/makar.jpg
/media/assistants/janis.jpg
/media/assistants/photologic.jpg
/media/assistants/chiprepair.jpg
/media/assistants/tisgrow-dental.jpg
```

If an image file is missing, the card will still look good and will show a gradient placeholder.

### Change Videos

Open `src/content.ts` and find:

```text
videos
```

These are currently placeholder video titles.

The video blocks are displayed in `src/App.tsx` in the `Videos` section. When real videos are ready, replace the placeholder block there with YouTube, Vimeo, or uploaded video embeds.

### Change Images

This website uses modern graphic blocks and optional image placeholders.

To add assistant images:

1. Put the image inside:

```text
public/media/assistants
```

2. Use a simple file name, for example:

```text
sofia-beauty.jpg
```

3. Open `src/content.ts`.
4. Find the assistant card.
5. Change the image path:

```text
/media/assistants/sofia-beauty.jpg
```

You can also put other images in:

```text
public/media/backgrounds
public/media/logos
public/media/portfolio
```

Then use paths like:

```text
/media/backgrounds/home-bg.jpg
/media/logos/tisgrow-logo.png
/media/portfolio/salon-example.jpg
```

## Media And Demo Materials

Use this folder for website media:

```text
public/media
```

Inside it, there are clear folders:

- `assistants` - photos for AI consultants.
- `videos` - video thumbnails or very small demo videos.
- `logos` - brand logos.
- `backgrounds` - website background images.
- `portfolio` - portfolio images or example projects.

Recommended file names:

- `avtologik.jpg`
- `waterstop.jpg`
- `levka.jpg`
- `pigulkin.jpg`
- `pizzahot.jpg`
- `sofia-beauty.jpg`
- `makar-architecture.jpg`
- `janis-beauty.jpg`
- `photologic-studio.jpg`
- `chiprepair-service.jpg`
- `tisgrow-dental.jpg`
- `beauty-demo-thumbnail.jpg`
- `construction-leads-example.jpg`

Use file names without spaces. This makes the website easier to publish.

For assistant images, edit `src/content.ts` and change the `image` line inside an assistant card.

The assistant gallery also has a language selector. Ukrainian is the default language. The supported language labels are:

```text
UA, EN, RU, ES, FR, AR, ZH, HI
```

To change the words used by this selector, open `src/content.ts` and find:

```text
assistantGalleryCopy
```

For video thumbnails, put the image in:

```text
public/media/videos
```

Then connect it in the video section when you add real demo videos.

Keep the website fast:

- Use local images for cards, thumbnails and small portfolio screenshots.
- Do not store very large videos inside the project.
- Use YouTube, Vimeo or Google Drive for large videos.
- Add a link or embed to the video instead of uploading a huge file to the project.

### Change Browser Title And Description

Open:

```text
index.html
```

Change:

- `<title>`
- the description meta tag

## Contact Form

The form does not need a backend right now.

When someone submits it, it opens an email draft to the email address from `src/content.ts`.

Later, you can connect a real form service such as:

- Formspree
- Tally
- Typeform
- HubSpot
- a Vercel serverless form

## Simple Vercel Launch Steps

### Step 1: Create A GitHub Account

1. Go to [github.com](https://github.com).
2. Create an account or log in.

### Step 2: Create A New Repository

1. Click the `+` button in GitHub.
2. Choose `New repository`.
3. Name it something like:

```text
tisgrow-website
```

4. Choose `Public` or `Private`.
5. Click `Create repository`.

### Step 3: Upload This Project To GitHub

Simple browser method:

1. Open your new GitHub repository.
2. Click `uploading an existing file`.
3. Drag the project files into GitHub.
4. Do not upload these folders:

```text
node_modules
dist
.npm-cache
```

5. Click `Commit changes`.

Better desktop method:

1. Install GitHub Desktop from [desktop.github.com](https://desktop.github.com).
2. Sign in to GitHub Desktop.
3. Choose `File` → `Add local repository`.
4. Select this project folder.
5. Publish it to GitHub.

### Step 4: Connect GitHub To Vercel

1. Go to [vercel.com](https://vercel.com).
2. Create an account or log in.
3. Choose `Continue with GitHub`.
4. Allow Vercel to access your GitHub account.

### Step 5: Import The Website In Vercel

1. Click `Add New`.
2. Choose `Project`.
3. Select the `tisgrow-website` repository.
4. Vercel should detect it as a Vite project.

Use these settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

5. Click `Deploy`.

After deployment, Vercel will give you a live website link.

### Step 6: Publish Updates Later

When you change the website:

1. Save the files.
2. Upload or commit the changes to GitHub.
3. Vercel will automatically rebuild and publish the new version.

## Connect Your Own Domain Or Subdomain

### Connect A Main Domain

Example:

```text
tisgrow.com
```

1. Open your project in Vercel.
2. Go to `Settings`.
3. Open `Domains`.
4. Add your domain.
5. Vercel will show DNS records.
6. Open the website where you bought your domain.
7. Add the DNS records exactly as Vercel shows them.
8. Wait until Vercel marks the domain as connected.

This can take a few minutes or a few hours.

### Connect A Subdomain

Example:

```text
ai.yourdomain.com
```

1. Open your project in Vercel.
2. Go to `Settings` → `Domains`.
3. Add the subdomain.
4. Vercel will usually ask for a `CNAME` record.
5. Open your domain provider.
6. Add the `CNAME` record exactly as Vercel shows it.
7. Wait for Vercel to confirm it.

## Final Pre-Launch Checklist

- Replace Telegram, WhatsApp, Instagram and email links in `src/content.ts`.
- Check pricing in `src/content.ts`.
- Replace placeholder videos when real demos are ready.
- Check the contact form email.
- Run `npm run build`.
- Deploy to Vercel.
