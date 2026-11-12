---
title: "AI for Research"
layout: "lab-page"
toc: true
copyPrompts: true
draft: false
---

I’m building a Claude Code plugin called **Chaky** to share what I’ve learned about doing good research. I developed these skills through trial and error in my own work, and I hope they help you move faster through yours. This guide follows version 0.21.1 of the plugin. [Research skill on GitHub](https://github.com/chaklam-silpasuwanchai/research_skill)

## The skill mindset

1. **Keep track of tickets and priorities.** After an hour of talking to AI, it’s easy to forget what you agreed to do. Use `/update-board` to capture tasks in `components/tickets.md`, see what is blocked, and decide what to work on next. Change the priorities as you learn more.
2. **You drive the research.** You choose the question, judge what is novel, and decide what the evidence supports. I use `/think-deeply` when I want AI to consider other explanations or read more papers, and `/clarify` when I need plain English and an example.
3. **Define terms early.** Agree on one name and meaning for each important concept in `terms.md`. Use those terms consistently in the paper, study materials, and conversations with AI. The plugin also includes a shared glossary in `components/lab-terms.md`.

## How to set up

Install Claude Code and Git, and make sure you can sign in to Claude Code. The repository has platform-specific setup instructions. [Installation guide](https://github.com/chaklam-silpasuwanchai/research_skill#how-to-set-up)

1. Run `claude` in your terminal and sign in. Then enter these commands inside Claude Code.

   ```text
   /plugin marketplace add chaklam-silpasuwanchai/research_skill
   /plugin install chaky@ask-chaky
   ```

2. Restart Claude Code from your research folder. If you’re starting from scratch, I recommend cloning an empty GitHub repository and opening Claude Code there. If you already have a draft or notes, point Claude to them.
3. Type **“guide me”** or select `/chaky:guide-me` from autocomplete. Tell it what you’re working on and where you’re stuck. It will suggest the next step and the skill that can help.

## Which skill when?

| When you… | Use | What it helps with |
| --- | --- | --- |
| Feel lost | `/guide-me` | See where you are and decide what to do next. |
| Need to see or reprioritise your tasks | `/update-board` | Update the ticket board and review what is ready or blocked. |
| Find an answer hard to follow | `/clarify` | Get a plain-English explanation with context and an example. |
| Need to learn a topic or its related work | `/teach-me <topic>` | Learn the background, key concepts, and papers you need to read. |
| Want AI to think more deeply | `/think-deeply` | Challenge assumptions, consider other explanations, and consult papers. |
| Have thoughts you want to talk through | `/brain-dump` | Answer one question at a time and save what you tell Claude. |
| Want to sharpen an idea or update the paper | `/update-paper` | Compare the closest work, clarify what is new, and revise the paper. |
| Need a method that answers your question | `/plan-method` | Learn from related methods, plan a fair test, and start with a pilot. |
| Want reviewer feedback | `/review` | Get critiques of the paper and decide which fixes matter most. |
| Want the draft to sound like you | `/setup-writing-style` | Use samples of your writing to set the style and agree on terms. |
| Need to bring the repository up to date | `/update-repo` | Update project records and organise the files. |

These skills support the same five stages I teach in the lab. They are **idea generation, idea refinement, idea validation, idea testing, and idea storytelling**. Start where you are and go back a stage when the evidence changes your idea. [Research Guide](/researchguide/)

## Claude mods I use

Ask Claude to **set up a right-hand pane that shows your ticket board** and **make a cheat sheet of your available skills**. In my setup, the bottom status line also shows the active skill and usage so I can see what I use and what I should improve.

{{< figure src="/img/ask-chaky-board.png" link="/img/ask-chaky-board.png" alt="Claude Code session with an experiment update on the left and a research ticket board on the right." caption="My Claude Code setup during the sales agent project. The right pane shows which tickets are ready, blocked, or done. Click to enlarge." >}}

## Help improve Chaky

If you try it, tell me which part of your research it helped with and where you got stuck. If you build an improvement, send me a pull request. The README also credits the projects and people whose ideas helped shape these skills. [GitHub repository](https://github.com/chaklam-silpasuwanchai/research_skill)
