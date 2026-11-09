---
title: "AI for Research"
layout: "lab-page"
toc: false
draft: false
---

I’m building **Chaky** to put what I’ve learned about doing good research into a tool students can use with AI. I hope it helps you move faster through the work that supports research so you have more time to think deeply about your question. **You drive the research.** You choose the question, judge the evidence, and decide what to do next.

## Ask Chaky at any stage

**“Ask Chaky”** is the one place to start. Type it in Claude Code or select `/chaky:ask-chaky` from autocomplete. Chaky recommends a next step and draws on supporting skills for finding and reviewing literature, shaping ideas, designing studies, writing papers, and reviewing drafts. You can come to it at any point in your project.

- **Starting from scratch?** My recommendation is to start with an empty GitHub repository. Clone it, open Claude Code in that folder, and ask Chaky to set up the project folders, paper, and research board.
- **Already reviewing literature?** Tell Chaky your question and which papers you’ve read. Ask what it can help with next. It might suggest comparing the closest papers to see whether your proposed gap still holds.

## Get started

Install Claude Code and follow the [Chaky setup guide](https://github.com/chaklam-silpasuwanchai/research_skill#readme). In Claude Code, add the marketplace and install the plugin:

```text
/plugin marketplace add chaklam-silpasuwanchai/research_skill
/plugin install chaky@ask-chaky
```

Restart Claude Code in your research project folder and say **“ask Chaky.”** For a new project, it will ask a few questions and help you set up the paper and board.

## Let Chaky interview you and teach you

Ask Chaky to find out what you already know about your topic, then teach you what you’re missing. It can explain the key concepts, walk you through the closest papers, and show how their methods and findings relate to your question.

Try saying **“Interview me one question at a time about my topic. Then teach me the concepts and related work I need to understand. Show me which papers to read first and why.”**

Read the papers yourself and try explaining how each one relates to your question. Ask Chaky to check your understanding and point out gaps.

## Keep track of the work with tickets

After an hour of talking to AI, it’s easy to lose track of what you agreed to do. I use a board inspired by Agile to turn those decisions into **tickets**. The board in `components/tickets.md` shows priorities, what is blocked, and what is done. Ask Chaky to capture new tasks as they come up, give each one a clear “done when,” and show you what is ready to work on. **Adjust the priorities yourself** when the research changes.

In the screenshot, the right pane keeps the board visible while I work. Ask Claude Code: **“Help me set up a sidebar or split terminal pane that shows my research board.”** The bottom status line is another optional customisation. I use mine to see the active skill, token usage, and usage limits, which helps me see what to improve.

{{< figure src="/img/ask-chaky-board.png" link="/img/ask-chaky-board.png" alt="Claude Code session with an experiment update on the left and the research board showing open, blocked, and completed tickets on the right." caption="An example from the sales agent project. The left side shows what changed and what the tests established. The right side shows which tasks are ready, blocked, or done. Click to enlarge." >}}

## Work in small rounds

Pick one ticket. Ask Chaky what evidence would settle it. Check the sources and results yourself, then record the decision in the project and update the paper as the evidence changes.

Before meeting your supervisor, ask Chaky for a short update with **what you learned, what is blocking you, and what you propose to do next**. Chaky can organise the evidence and challenge your reasoning. You decide what is novel, what is missing, and what the evidence supports.


## Help improve Chaky

This is **version 0.1**. I’ve used it on one of my published papers, and I’ll keep improving it as I use it on more projects. If you try it and find a workflow that could be better, tell me what you were trying to do and where you got stuck. If you build an improvement, send a pull request for me to review and merge. [Chaky on GitHub](https://github.com/chaklam-silpasuwanchai/research_skill)
