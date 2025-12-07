---
title: Vibe Coding 101
last_updated: 2025-12-07
difficulty: beginner
duration: 120m
---

> 📅 **Looking for date/time/location?**  
> See the current [Event Page](./index.md)

![Vibe Coding workshop cover image](../assets/vibecode.png){ width="100%" }

# Vibe Coding 101 · Getting Started

**Audience:** Beginner — no coding experience required

**Duration:** 120 min (2 hours)

**Outcomes:** By the end, students will:

* Understand what vibe coding is and how it enables anyone to build software through AI prompts
* Create a GitHub account and set up a free GitHub Pages website
* Use GitHub Codespaces with AI agent mode to build a website entirely in the browser
* Deploy a live website to the internet without writing any code manually
* Understand that different AI models excel at different tasks

## Abstract

Vibe coding is a revolutionary approach that has emerged in the past year, allowing anyone to create software without technical experience — simply by having a conversation with AI. This workshop teaches participants how to build and deploy a real website using only their web browser and natural language prompts. By the end of the 2-hour session, every student will have a live website on the internet that they created through AI-assisted "vibe coding." No software installation or payment required.

---

## Concept Primer (10–15 min)

### What is Vibe Coding?

Vibe coding is the practice of creating software by describing what you want in plain English (or any language) to an AI assistant. Instead of learning programming languages, syntax, and frameworks, you simply tell the AI what you want to build, and it writes the code for you.

**Key benefits:**

* No coding experience required — just describe what you want
* Rapid iteration — see changes instantly
* Accessible to everyone — if you can describe it, you can build it

**The Magic of Vibe Coding**

The truly magical experience is the **tight feedback loop**:

1. You describe what you want in plain English
2. The AI writes the code
3. You see the result instantly in a preview
4. You describe what to change
5. You see those changes immediately

This instant back-and-forth conversation with an AI that can actually *build things* for you is what makes vibe coding feel like magic. By the end of this workshop, you'll experience this for yourself!

### What is a Repository?

A **repository** (or "repo") is simply a folder where your code lives on GitHub. Think of it as a project folder in the cloud that:

* Stores all your website files
* Keeps track of every change you make (like a super-powered undo button)
* Can be shared with others or kept private

### What is GitHub Pages?

GitHub Pages is a free service that lets you host a website directly from a GitHub repository.

**What you get:**

* A free URL like `yourusername.github.io/your-repo`
* Free hosting — no credit card required
* Automatic updates — push code, site updates automatically

### Why Build a Website?

Web development is the most flexible starting point for vibe coding because:

* **Cross-platform:** Works on any device with a browser — phones, tablets, computers
* **Instant sharing:** Just send someone a link
* **Visual feedback:** You can see your changes immediately
* **No app stores:** No approval process, no fees, instant publishing

**What is a "static" website?**

A static website displays the same content to everyone. Think of it like a digital flyer or brochure. You can have:

* ✅ Text, images, animations, hover effects
* ✅ Links to other pages or sites
* ✅ Beautiful, professional designs
* ❌ User accounts, comments, or forms that save data
* ❌ Content that changes based on who's viewing

For most personal projects, portfolios, and simple business pages, static is perfect!

### Different AI Models, Different Strengths

Not all AI models are created equal. During this workshop, you'll learn that:

* **GitHub Codespaces (auto mode)** — Great for general coding tasks, free to use
* **Google Gemini** — Excellent for creating beautiful UI/visual designs
* **Claude, ChatGPT, etc.** — Each has strengths in different areas

**Pro tip:** If your website looks too generic or plain, try asking Gemini to redesign the HTML and then paste it back into your project.

**A note on AI costs (for your future reference):**

In this workshop, we use free tools. But as you explore vibe coding further, you'll encounter paid options:

* More powerful AI models (like Claude Opus or GPT-4) cost more "credits" or "tokens" per use
* Simpler tasks don't need the most powerful models — you can save credits by using lighter models for basic work
* Tools like Cursor ($20/month) give you access to multiple models and more advanced features

For today, everything is free! But understanding that "different models = different costs" will help you make smart choices later.

---

## Agenda (suggested timing)

1. **Welcome & Concepts** (15 min)
2. **Create GitHub Account** (10 min)
3. **Set Up Repository & GitHub Pages** (15 min)
4. **Your First Vibe Coded Website** (30 min)
5. **Customizing Your Site** (25 min)
6. **Improving the Design with Gemini** (15 min)
7. **Q&A / Troubleshooting** (10 min)

---

## Prerequisites (tell students ahead)

* **Laptop** — Required (any operating system works)
* **Email address** — For creating a GitHub account
* No coding experience needed
* No software installation required
* No payment or credit card required

**Instructor prep**

* Test the full workflow before class on a fresh browser/incognito
* Have the Luma event link ready to display
* Prepare a sample "pizza website" prompt for demonstration
* Have screenshots ready of each step in case of technical difficulties

---

## Section 1: Create a GitHub Account (10 min)

If you don't already have a GitHub account, let's create one.

1. Go to [github.com](https://github.com)
2. Click **Sign up**
3. Enter your email address
4. Create a password
5. Choose a username (this will be part of your website URL!)
6. Complete the verification puzzle
7. Check your email for a verification code and enter it

**⚠️ Troubleshooting:**

* If the verification email doesn't appear, check your spam folder
* The visual puzzles may require multiple attempts — this is normal
* If using a temporary email, verification may be slower

---

## Section 2: Create Repository & Enable GitHub Pages (15 min)

Now we'll create a place to store our website code and enable free hosting.

### Create a New Repository

1. In the top-right corner of GitHub, click the **+** button
2. Select **New repository**
3. Name your repository (e.g., `my-website`, `pizza-shop`, `portfolio`)
4. Leave it as **Public** (required for free GitHub Pages)
5. ✅ Check **Add a README file**
6. Click **Create repository**

> **📝 Public vs Private:** Public repositories let anyone see your code — this is required for free GitHub Pages hosting. For a simple website with no sensitive information, public is perfectly fine! If you later work on projects with passwords or private data, you'd want private repositories (which require a paid GitHub plan for Pages hosting).

### Enable GitHub Pages

1. In your new repository, click **Settings** (gear icon)
2. In the left sidebar, click **Pages**
3. Under "Build and deployment", click the **Source** dropdown
4. Select **GitHub Actions**
5. Click **Configure** next to "Static HTML"
6. Click **Commit changes** (don't modify any code)
7. Click **Commit changes** again in the popup

Your GitHub Pages site is now being set up! It will be live at:
`https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

---

## Section 3: Your First Vibe Coded Website (30 min)

Here's where the magic happens. We'll use GitHub's built-in AI coding assistant to create a website just by describing what we want.

### Start the AI Coding Environment

1. In your repository, click the **Issues** tab
2. Click **New issue**
3. Give it a title like "Create pizza website"
4. In the description, write what you want to build. Example:

```
Create a pizza website called "Toshi's Pizzeria" that gives a 
nod to Bitcoin and Pizza Day. Make it fun and colorful.
```

5. Click **Submit new issue**
6. Look for the **Code with Agent mode** button and click it
7. If prompted to sign in or authorize, click through the prompts
8. Select **auto** for the model (it's free!)

### Watch the AI Build Your Website

The AI will:

* Analyze your request
* Write the HTML, CSS, and JavaScript code
* Show you what it's creating

When it presents changes:

1. Click **Keep** to accept the changes
2. Say: "Can you open a preview of my site?"
3. Click **Allow** when it asks to run a command
4. Click **Open in Browser** to see your website!

### Deploy Your Website to the Internet

Now let's make it live:

1. Ask the AI: "Please give me the terminal commands to commit and push these changes. Be direct and opinionated. I will paste them in myself."
2. Click the **Insert into terminal** button (or copy the commands)
3. Press **Enter** in the terminal to run them
4. Go back to your repository on GitHub (the main Code tab)
5. Look for the **deployment indicator** next to your latest commit:
   * 🟡 **Yellow dot** = Still deploying (wait...)
   * ✅ **Green checkmark** = Deployed! Your site is ready
6. Once you see the green checkmark, visit `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

> **💡 Tip:** The yellow dot usually turns green within 30-60 seconds. If you visit your site too early, you'll see the old version. Just wait for the green checkmark!

🎉 **Congratulations! Your website is live on the internet!**

---

## Section 4: Customizing Your Site (25 min)

Let's make changes to personalize your website.

### Making More Changes

Each time you want to make changes after committing:

1. Go to your repository's **Issues** tab
2. Create a **New issue** describing what you want
3. Click **Code with Agent mode**
4. Describe your changes
5. Preview → Keep → Commit → Push

> **💡 Why create a new Issue each time?**  
> Creating a new Issue and clicking "Code with Agent mode" gives you a fresh Codespace that has all your latest code. This avoids sync problems and ensures you're always working with the most up-to-date version of your site.

**Example prompts to try:**

* "Add a contact section with my email"
* "Change the color scheme to blue and gold"
* "Add a photo gallery section"
* "Make the navigation menu sticky at the top"

### Adding Images

To add images to your website:

1. Find or create an image you want to use
2. Go to your repository on GitHub
3. Click **Add file** → **Upload files**
4. Drag and drop your image
5. Click **Commit changes**
6. Create a new issue and ask: "Add the image I just uploaded as a header"

**Tip:** You can generate custom images using AI tools like:

* [Gemini](https://gemini.google.com) — Free image generation
* [ChatGPT](https://chat.openai.com) with DALL-E
* [Grok](https://grok.x.ai) — No watermarks

**🧠 Pro tip — Using AI to write prompts for AI:**

Not sure how to describe the image you want? Ask one AI to write the prompt for another! For example, in your Codespace, ask:

```
Give me a prompt for an image header for this site. 
I'll paste it into an image generation AI.
```

Then copy that prompt into Gemini or another image generator. This "AI writing prompts for AI" technique is surprisingly effective!

---

## Section 5: Improving the Design with Gemini (15 min)

If your website looks too plain or generic, Google Gemini can help create more polished designs.

### The Gemini Workflow

1. Go to [gemini.google.com](https://gemini.google.com)
2. Copy your current `index.html` content
3. Paste it into Gemini with a prompt like:

```
Here is my HTML for a website. Can you make it look pretty 
and professional? Give me back a new HTML file that I can paste 
into my project. Make it look like a modern pizzeria website 
with a hero section, menu cards, and a footer.
```

4. Copy Gemini's response
5. Go back to your GitHub Codespace
6. Select all the content in `index.html`
7. Paste the new HTML from Gemini
8. Save and preview
9. Commit and push

**Why use Gemini for design?**

Different AI models have different strengths. Gemini is particularly good at creating visually appealing, well-structured HTML layouts. The model in GitHub Codespaces is great for general tasks but may produce more basic designs.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Too many codespaces open" | Go to [github.com/codespaces](https://github.com/codespaces), delete old ones |
| Site not updating | Wait for green checkmark on repository; hard refresh (Ctrl+Shift+R) |
| Can't find "Code with Agent mode" | Make sure you're on an Issue page, not the main repository |
| Terminal commands won't run | Copy the commands manually and paste into terminal |
| Preview won't open | Ask AI: "Can you open a preview of my site?" |
| GitHub verification stuck | Check spam folder; try a different browser |
| "Unable to read clipboard" | Click the "Insert into terminal" button instead of copying |
| Codespace seems stuck or confused | Close it and create a new Issue to start fresh |
| Changes not showing in Codespace | Your local code may be out of sync; create a new Issue to get a fresh Codespace |

### Managing Your Codespaces

GitHub gives you a limited number of free Codespaces. Here's how to manage them:

**After each set of changes:**

1. Once you've committed and pushed your changes, you can close the Codespace browser tab
2. When you want to make more changes, create a **new Issue** and click **Code with Agent mode** again
3. This gives you a fresh environment with all your latest code

**If you see "Too many codespaces" error:**

1. Go to [github.com/codespaces](https://github.com/codespaces)
2. You'll see a list of all your active Codespaces
3. Click the **...** menu next to old Codespaces
4. Select **Delete** to remove ones you're no longer using
5. Go back to your repository and try "Code with Agent mode" again

> **⚠️ Important:** Don't worry about deleting Codespaces — your actual code is safely stored in your GitHub repository. Codespaces are just temporary workspaces for editing.

### Understanding Commits (The Magic Undo Button)

When you "commit and push" your changes, you're creating a **checkpoint** — like saving your game in a video game. 

* Every commit is saved forever in your repository's history
* If you ever mess something up badly, you can go back to a previous checkpoint
* This is called **version control** — it's like having an infinite undo button

You don't need to understand the technical details for this workshop, but knowing that your work is safely checkpointed every time you commit should give you confidence to experiment!

---

## Homework / Further Study

Now that you have a live website, here are ways to expand your skills:

* **Custom domain:** Purchase a domain (e.g., from Namecheap, GoDaddy) and connect it via GitHub Pages settings
* **Add more pages:** Ask the AI to create an "About" page or "Contact" page
* **Experiment with prompts:** Try building different types of sites (portfolio, blog, business)
* **Try different AI models:** Compare results from Gemini, ChatGPT, Claude, and Codespaces
* **Learn the basics:** If you're curious, start learning HTML/CSS to better understand what the AI is creating

### Reference Links

* GitHub Pages documentation: [https://docs.github.com/en/pages](https://docs.github.com/en/pages)
* GitHub Codespaces: [https://github.com/codespaces](https://github.com/codespaces)
* Google Gemini: [https://gemini.google.com](https://gemini.google.com)
* Domain registrars: [Porkbun](https://porkbun.com), [Namecheap](https://namecheap.com), [Cloudflare](https://www.cloudflare.com/products/registrar/)
* HTML basics: [https://developer.mozilla.org/en-US/docs/Learn/HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML)

---

## Instructor Notes 

**Target flow:** intro (15) → GitHub setup (25) → first website (30) → customize (25) → design polish (15) → Q&A (10)

**Key teaching moments:**

* The "magic moment" is when students see their AI-generated website preview for the first time
* Emphasize that different AI models have different strengths — this is important for their future vibe coding journey
* When students ask "can I do X?", encourage them to just try asking the AI

**Common friction points:**

1. GitHub account creation — verification puzzles can be frustrating
2. Understanding when to make a new Issue vs continuing in same Codespace
3. Remembering to commit and push after making changes
4. "Too many codespaces" error — walk students through [github.com/codespaces](https://github.com/codespaces) to delete old ones
5. Codespace getting out of sync — always create a new Issue to get a fresh Codespace with latest code

**Prompting tips to share:**

* Be specific about what you want
* If the AI gives you multiple options, tell it: "Please be direct and opinionated and only give one option"
* If something looks wrong, just tell the AI what's wrong in plain English

**If students want to go deeper (Cursor):**

Some students may ask about more advanced tools like Cursor. Explain that:

* Cursor requires a $20/month subscription for full features
* It's installed software (not browser-based)
* It offers more power but more complexity
* Great for a future "Part 2" workshop!

**Gauge interest for Part 2:**

At the end of the session, consider asking: "Who would be interested in a Part 2 workshop where we use Cursor and learn more advanced vibe coding techniques?" This helps plan future classes and identifies engaged students.

**Sample pizza website prompt that works well:**

```
Turn index.html into a fake pizza website called Toshi's Pizzeria 
that gives a nod to Bitcoin and Pizza Day. Make it fun and include 
a menu section, contact info, and a hero banner.
```

---

> 📅 **Looking for date/time/location?**  
> See the current [Event Page](./index.md)
