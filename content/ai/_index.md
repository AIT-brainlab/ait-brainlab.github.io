---
title: "AI for Research"
layout: "lab-page"
toc: true
copyPrompts: true
draft: false
---

Use AI to challenge ideas, develop writing, explain code, design figures, and inspect reasoning. Keep responsibility for the research question, verified literature, methods, data, and claims. The prompts below are starting points; adapt them to the evidence and stage of your project.

## A Practical Research Setup

**Start with one main assistant, your verified papers, and a research notebook.** Add a second assistant for a fresh critique, and an API platform when your research needs model experiments. The roles below are a suggested workflow, not a ranking of which model is “best”.

| Tool | Suggested role | How to use it well |
| --- | --- | --- |
| ChatGPT | Main research conversation: develop questions, plan searches, inspect arguments, and revise writing. | Keep a concise project brief and verified sources together. When using web search, open the cited sources and check that they support the claim. [Official search guidance](https://learn.chatgpt.com/docs/web-search). |
| Claude | An additional assistant for critique, alternative explanations, or a second reading of a draft. It can also serve as your main assistant. | Give it the research question and evidence in a fresh conversation before showing the first assistant's conclusions. Ask for specific weaknesses and minimum repairs. [Claude research guidance](https://support.claude.com/en/articles/11088861-use-research-on-claude). |
| OpenRouter | Optional access to multiple models for a computational study or a controlled comparison. It is a model-access and routing platform, not another model. | Specify the model and provider when your design requires it. Record routing, fallbacks, settings, date, prompts, and raw outputs. Automatic routing can change what actually answered. [Provider-routing documentation](https://openrouter.ai/docs/guides/routing/provider-selection). |
| Grok | Optional additional perspective or a search-based route to recent discussion and source leads. | Use it when it adds coverage your current workflow lacks. Trace claims to original papers and official sources; public discussion is not research validation. [xAI search-tool documentation](https://docs.x.ai/developers/tools/web-search). |

You do not need subscriptions to all four. Use the tools available through your institution or budget, and add a service when it solves a named problem. Features and access vary by plan and can change. A different assistant can reveal another weakness, but agreement between assistants is not independent scientific validation.

### Set Up One Project, Not Many Disconnected Chats

1. **Write a project brief:** question, intended contribution, closest verified papers, available evidence, constraints, and the next decision.
2. **Keep sources outside the chat:** save papers and citation details in a reference library. Maintain the [research decision note](/downloads/research-decision-note.md) as the current record of your reasoning.
3. **Use one main assistant:** discuss and revise the brief there. Start new conversations for distinct tasks rather than relying on an increasingly confusing chat history.
4. **Request a fresh critique at a milestone:** provide the evidence and question to a second assistant or a fresh conversation. Ask it to identify the strongest competing explanation before revealing your preferred answer.
5. **Resolve disagreement with evidence:** inspect the paper, run the relevant check, or discuss the unresolved issue with your supervisor. Do not decide by counting model votes.
6. **Save the decision:** record what you accepted, rejected, verified, and will do next. For experiments, keep code and configuration under version control.

For coding, add an AI coding assistant in your editor if it helps you work in the actual project. Inspect changes, run meaningful checks, and understand the analysis. A reference manager such as Zotero, a writing environment such as Word or Overleaf, and a reproducible code environment remain part of the setup.

### A Simple Weekly Workflow

**Read and verify → develop a question → request critique → investigate → record the decision.** Bring your verified evidence, bottleneck, interpretation, and proposed next step to supervision. Use AI to improve that thinking, not to replace the discussion.

### Reusable Project Brief

```text
You are helping with my research. Treat the following as a working brief.

Research question:
Intended contribution:
Closest verified papers and links:
Evidence already available:
Important uncertainties and alternative explanations:
Constraints: time, data, participants, compute, and expertise:
Decision I need to make next:

Separate source-supported facts, my assumptions, and your suggestions.
Do not invent citations or findings. State when a source has not been checked.
Challenge the strongest alternative explanation and propose the smallest
useful next investigation. Explain what result would change our interpretation.
Keep proposed outcomes separate from observed results.
```

### When You Compare Models Experimentally

Use the same task definition, data split, information access, and evaluation criteria. Record exact model identifiers, providers, prompts, generation settings, tool access, run dates, costs, and failures. Keep development examples separate from held-out evaluation. Do not treat a consumer chat session with changing search tools and hidden settings as equivalent to a controlled API experiment.

Use approved storage for protected research data. Before sending it to any assistant or routed provider, check project permissions and the relevant data-handling settings. Keep API keys out of prompts, papers, screenshots, and public repositories.

## Use AI advice as a claim to check

Constructed examples of plausible advice. These are teaching examples, not outputs from a recorded model run.

| Convincing advice | Why it needs checking |
| --- | --- |
| “This combination is new, so your work is novel.” | A new combination may add no meaningful capability or knowledge. Check the closest work and the consequential difference. |
| “Users liked it, so it preserves agency.” | Preference is not evidence of meaningful control. Define agency and collect evidence that reflects it. |
| “The simulated users agree, so real users will benefit.” | Simulation results do not establish human outcomes. State what the simulation can test and what still needs human evidence. |

### A Useful Verification Habit

Ask AI for the source and the reasoning. Open the source, locate the supporting evidence, and explain the conclusion in your own words. Keep the original suggestion and your correction. If you cannot verify the claim, label it unverified rather than adding it to the paper.

## Put AI into the whole research loop

- **Write the question and study plan early.** Draft the introduction, related work, and proposed methodology. Keep expected outcomes in a separate planning note. Leave result tables empty until real evidence is available.

- **Build and run the study.** For computational work, ask AI to help implement and run the experiments. For human studies, ask it to help prepare the apparatus, tasks, protocol, measures, and analysis plan.

- **Connect claims to evidence.** Add the real results to the paper. Revise the claims and discussion, and ask what additional experiments or analyses are needed.

- **Loop between writing and experiments.** Let weaknesses in the paper suggest the next experiment; let new evidence reshape the paper. Keep exploratory analyses separate from planned tests. Log changes and failures; do not keep changing the evaluation until a preferred result appears.

- **Run the final checks.** Check novelty; construct, internal, and external validity; coherence; terminology; overclaims; and writing quality. Fix the most serious problem first and repeat.

- **Choose the venue and prepare submission.** Identify a suitable journal or conference. Ask AI agents to prepare the files and submission information, but verify every claim, author detail, policy, and uploaded file before you authorize submission.

## Test and Refine the Novelty

Search, judge the idea honestly, improve it, and repeat until the contribution is clear.

- **Search widely:** Check nearby terms, fields, theories, methods, and papers.

- **Judge:** Substantial overlap, a distinction needing verification, or a supported distinction within the searched literature.

- **Refine:** Challenge assumptions and rethink the idea from several angles.

**Prompt**

```text
My research question or topic is: [your question or topic idea]. My target venue is [CHI / ACL / NeurIPS / other].

Work with me in a repeated novelty loop:
1. Find nearby terms, neighboring fields, related theories, and the closest papers. Give me searches I can run and links I can verify.
2. Compare my idea with the verified papers. Judge it as substantial overlap, a possible distinction needing verification, or a supported distinction within the searched literature. Explain the evidence and uncertainty behind the judgment.
3. Suggest several stronger versions of the idea. Use challenging assumptions, alternative explanations, first-principles thinking, systems thinking, and second-order effects.
4. For each version, explain what changed, why it may be more novel, and what new evidence would be needed.
5. Ask me which version to continue. Then repeat Steps 1–4 until the research gap and contribution are convincing.

Do not invent papers. Clearly mark anything I still need to verify.
```

## Build the Paper Slowly

Begin with one connected story. Strengthen it before writing the full paper.

**Working sequence:** Five sentences → five paragraphs → check and revise → draft one section → check again.


```text
Help me write this paper slowly for [target venue]. Use only my verified literature, study plan, and results.

1. Write five sentences: Background, Problem beginning with “However,” Methodology, Findings, and Contribution. If the study is not complete, write “findings pending” and keep any predictions in a separate planning note.
2. Expand the five sentences into five short paragraphs.
3. Check coherence, strength of argument, persuasiveness, and novelty. Identify weak links, revise them with me, and repeat this check until I approve the story.
4. Draft one section at a time in this order: Abstract → Introduction → Related Work → Methodology → Results → Conclusion. After each section, stop and wait for my approval before continuing.
5. When reviewing the methodology, check construct validity, internal validity, external validity, controls, baselines, confounds, measures, and whether each analysis supports a claim.
6. Challenge the mathematical, technical, and experimental rigor. Suggest several useful angles of analysis, explain what each reveals, and distinguish essential analyses from optional ones.

Never invent citations, data, results, equations, or implementation details. Mark missing information and ask me for it.

My materials: [paste verified notes, study plan, and available results]
```

## Draw Figure 1

Show the key idea, how it differs from existing practice, and why that difference matters.

**Figure structure:** Without our idea → key insight → with our idea → what changes.

**Prompt**

```text
Help me design Figure 1 for this paper: [paste the five-part story]. Also study these verified Figure 1 examples from strong [CHI / ACL / other] papers: [paste figures or links].

The figure must:
1. make our proposed idea visually dominant;
2. compare how the work is done without our technique and with our technique;
3. show what our technique changes in the process, behavior, or outcome;
4. let a new reader understand the key contribution in a few seconds.

First, explain the visual patterns you learned from the example papers. Then propose three visual concepts and state what each makes easy to understand. Wait for my choice before drawing. After I choose, create an editable SVG with short labels and meaningful relationships. Do not copy the example figures or add unsupported claims.
```

## Draw the Methodology Figure

Explain the important research idea—not merely the order of the steps.

**Figure elements:** Core idea, components, relationships, evidence, and insight.

**Prompt**

```text
Help me design a methodology figure from this study: [paste protocol]. Study these verified methodology figures from strong [CHI / ACL / other] papers: [paste figures or links].

Do not draw a simple left-to-right pipeline. Identify the most important methodological idea and organize the components around it. Show the relationships, comparisons, feedback, or levels that help readers understand the general essence of the method and gain insight from the figure.

First, explain what the example papers do well and propose three possible visual structures. For each structure, explain what insight it reveals. Wait for my choice before drawing. Then create an editable SVG. Include only components supported by my protocol and clearly distinguish data, model or system components, experimental conditions, measures, and analyses.
```

## Ask AI to Review the Paper

Run three focused checks. Fix the most serious concern, then check again.

### Novelty check

Is the gap real? Is the contribution clearly different from the closest verified work?

### Validity check

Are construct, internal, and external validity strong enough for the claims?

### Communication check

Is the story coherent, consistent, clear, and free from overclaiming?


```text
Act as a critical reviewer for [target venue]. Review my paper in three separate passes.

Novelty: Compare the claimed gap and contribution with the closest verified papers. Judge the novelty as substantial overlap, a possible distinction needing verification, or a supported distinction within the searched literature, and explain why.
Validity: Check construct validity, internal validity, and external validity. Identify weak measures, confounds, unfair comparisons, unsupported generalization, and analyses that do not support the claims.
Communication: Check coherence, conflicting statements, confusing or inconsistent terms, missing argument links, and overclaims.

For every concern, quote the exact evidence, label it Major or Minor, and propose a concrete fix. Rank the three concerns most likely to affect acceptance. Let me revise them one at a time; after each revision, check whether the concern is resolved.
```

## Keep yourself responsible

### AI may assist

Search planning, outlining, language revision, diagrams, code explanation, alternative explanations, and reviewer simulation.

### You must verify

Citations, novelty, data, analysis, figures, interpretations, authorship, disclosure, and the target venue's current AI policy.

- **Never upload:** identifiable participant data, confidential reviews, or protected project material without authorization.

- **Never accept:** invented papers, fabricated results, silent changes to numbers, or claims unsupported by your evidence.

- **Keep a record:** save important prompts, outputs, decisions, and human corrections when reproducibility or disclosure matters.

## Keep the Research Process in View

Return to the [Research Guide](/researchguide/) for the five-stage learning flow. Use [Resources](/resources/) for templates and examples, and [Journals](/journals/) for publication planning.
