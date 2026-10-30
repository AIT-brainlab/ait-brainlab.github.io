---
title: "AI for Research"
layout: "lab-page"
toc: true
copyPrompts: true
draft: false
---

**AI is most useful for synthesising knowledge:** connecting papers, comparing approaches, and organising evidence. **The wisdom must come from you:** judging what is missing, what may be novel, and which question is worth pursuing. AI can challenge your judgment; it cannot take responsibility for it.

Follow the five stages in our [Research Guide](/researchguide/). Copy the prompt for your current stage and return to earlier stages when evidence changes.

## Set Up a Research Team

Start with tools you already have. Add one only when it solves a specific need.

| Role | Suggested tool | Responsibility |
| --- | --- | --- |
| Coordinator | **Grok Bot**, when available | Keep tasks and files current, arrange handoffs, and bring decisions back to you. It has a persistent cloud computer, beyond ordinary Grok chat. [Documentation](https://docs.x.ai/grok-bot/overview). |
| Research partners | **ChatGPT and Claude** | Independently synthesise literature, propose ideas, and challenge each other's reasoning. [ChatGPT search](https://learn.chatgpt.com/docs/web-search) · [Claude research](https://support.claude.com/en/articles/11088861-use-research-on-claude). |
| Experiment access | **OpenRouter**, if needed | Access models through an API. Record model, provider, routing, and settings. [Routing guidance](https://openrouter.ai/docs/guides/routing/provider-selection). |
| Implementation | An AI coding assistant | Implement and check experiments; update the paper alongside the code. Verify what actually ran. |

Use supported integrations and authorised accounts, or pass outputs yourself. With one assistant, use separate proposer and critic conversations; this is a self-check, not independent review. Features and access change.

### Keep One Shared Research Note

**Use the paper as the project's source of truth.** Keep its research question, methods, evidence, and current claims up to date as you read, code, test, and revise. Ground claims in verified sources and actual results; clearly label plans and untested ideas.

**Document every research action in GitHub:** what you changed or ran, why, the result, and the next decision. Use commits for code and paper changes, and issues or experiment logs for investigations, failed attempts, and decisions. After each work session, update the paper and link the relevant record. Use a private repository and keep protected data and secrets in approved storage.

Keep a short note beside the paper and code: **question → closest verified work → evidence → unresolved issues → next decision**. It helps you resume work; the paper remains the main account. Use the [research decision note](/downloads/research-decision-note.md) if helpful.

### Discuss, Then Decide

Ask assistants to work independently before comparing arguments. Each criticism should identify a claim, evidence or missing evidence, why it matters, and a possible repair. Resolve disagreements through sources or experiments. **Agreement between models is not evidence of novelty. You and your supervisor decide.**

## 1. Idea Generation

**Start with a domain, interest, or real problem.** Find promising questions by comparing the closest work.

```text
My domain, interest, or observed problem is: [describe it].
My degree, preparation, available resources, and timeline are: [describe them].

Synthesise the evidence and help me find a worthwhile, feasible direction.
Leave the judgment of significance and the final choice to me.

1. Map problems, search terms, and research communities. Prioritise verified
   peer-reviewed work, including relevant ACL, CHI, NeurIPS, specialist, and
   foundational papers. Include preprints, clearly labelled.
2. Read the closest papers beyond their abstracts. Record the question,
   contribution, evidence, limitations, and verified link for each.
   Distinguish an author's finding from your own interpretation.
3. Ask ChatGPT and Claude to propose directions independently. Use authorised
   integrations or provide a handoff I can pass myself. Report who actually
   participated; never pretend another model was consulted.
4. Compare proposals: overlap with prior work, important unanswered question,
   strongest objection, and smallest useful investigation.
5. Revise through up to three discussion rounds, stopping earlier if another
   round adds no meaningful evidence. Do not treat agreement as proof.
6. Present three candidate ideas in a table: problem, closest verified work,
   potential distinction, why the answer matters, feasibility, and biggest risk.
   Recommend one with trade-offs. Ask me what seems missing and worth pursuing.

Keep the verified-paper comparison and the chosen direction in the shared
research note. Do not claim that an idea is novel before validation.
```

## 2. Idea Refinement

**Turn the direction into a testable plan.** Use thinking tools to expose weaknesses. A pilot helps diagnose feasibility; it does not establish the contribution.

```text
Our chosen direction is: [paste the idea or point to the research note].
Use the verified papers, constraints, and unresolved issues already recorded.

1. Use first principles: define the problem, concepts, and observable measures.
2. Challenge assumptions and simpler explanations. Use systems thinking to trace
   feedback loops and second-order effects. Explain what changes the idea.
3. Develop three related research questions, three corresponding objectives,
   and three anticipated contributions as one coherent project.
   Align them in a table with example methodology and evidence for each.
   Label contributions as intended, not demonstrated. If the three questions
   make the project too broad, identify the core question and a smaller scope.
4. Plan a first investigation: reproduce a baseline, inspect data, or pilot code
   if useful. Report what ran, what it showed, and what it cannot establish.
5. Have the partners challenge the plan. Resolve the main disagreement through
   a source, diagnostic test, or supervisor discussion. Avoid needless components.

Deliver the revised question-objective-contribution-method table, the strongest
alternative explanation, feasibility limits, and the proposed next step.
Update the shared research note with the reasoning and any pilot evidence.
```

## 3. Idea Validation

**Check the distinction against the closest work.** Aim for a defensible judgment with clear uncertainty, not certainty that an idea is novel.

```text
Validate this idea: [paste the refined plan or point to the research note].
Target research community or venue: [specify, if known].

1. Search the closest terms, alternative terminology, neighbouring fields,
   theories, methods, references, and newer papers citing the closest work.
   Prioritise peer-reviewed evidence but include relevant preprints and resources.
2. Verify sources and compare their actual claims, methods, and findings with
   ours. Maintain a closest-work table with links and a search date.
3. Ask a fresh critic to find the strongest counterexample: work that already
   answers the question or makes our claimed difference unimportant.
4. Judge the idea as substantial overlap, a possible distinction needing more
   evidence, or a supported distinction within the searched literature.
   Explain both novelty and significance; a new combination alone is insufficient.
   Present evidence for my judgment, not a model verdict to accept uncritically.
5. If overlap is substantial, refine and search again within an agreed time
   budget. Continue while finding closer work or changing the idea; stop at
   the budget, a defensible distinction, or a decision to change direction.
6. Report what was searched, the closest counterevidence, the precise difference,
   what remains unverified, and whether to proceed, refine, or change direction.

Do not say “definitely novel” or keep looping until models agree.
If the evidence is insufficient, say so and name the next source or test needed.
Update the shared note and the proposed gap statement in the paper.
```

## 4. Idea Testing

**Design evidence that can answer the question.** Learn from closely related studies and test competing explanations.

```text
Develop and carry out a rigorous study for: [plan or research-note location].
Use the validated gap, verified literature, intended claims, and constraints.

1. Compare methods in strong related papers: frameworks, models, tools, tasks,
   samples, measures, and analyses. Cite what to reuse, adapt, or reject and why.
2. State clear hypotheses and competing explanations where appropriate.
   For experiments, define IVs, DVs, operational measures, confounds, controls,
   randomisation, counterbalancing/order effects, and fair comparisons.
   For exploratory or design work, use questions, sampling, interpretation,
   and credibility checks appropriate to that contribution.
3. Build credible simple and strong relevant baselines. Match information,
   training/tuning effort, tool access, and resources as the comparison requires.
   Explain construct validity, internal validity, generalisation limits,
   sample justification, uncertainty, leakage, and reproducibility.
4. Map each claim to a comparison, measure, analysis, competing explanation,
   and limitation. Choose ablations, robustness tests, error analysis, or human
   evaluation for a reason. Separate essential from optional work.
5. Set up Git with paper/, src/, experiments/, results/, README, environment/
   configuration, and the research note. Create a private GitHub repository
   when authorised and available; otherwise prepare locally and explain setup.
   Keep secrets and protected data outside the repository.
6. Work iteratively: write the introduction, related work, and planned methodology;
   implement and pilot; inspect evidence; revise the paper and the next experiment.
   Keep planned, completed, and exploratory work distinct. Never fill results
   with invented numbers or silently change a hypothesis after seeing outcomes.
7. Record what really ran: code/data/model versions, provider and routing when
   applicable, prompts, settings, seeds where relevant, outputs, failures, and cost.
   Analyse confirming patterns and surprising results. Check bugs and measurement
   defects before interpreting an unexpected outcome as a scientific discovery.
8. Design the methodology figure: learn from good examples, propose three
   structures, and let me choose. Show the core idea, conditions, components,
   relationships, and evidence in an editable figure. Include only supported claims.
9. After each meaningful iteration, update the paper, evidence table, and shared
   note. Report the biggest unresolved threat, the next decisive investigation,
   and when to narrow, stop, or change the approach with me.

Do not optimise for the number of experiments or for positive findings.
Optimise for evidence that answers the question and tests the strongest alternative.
```

## 5. Idea Storytelling

**Build the five-part story:** background → problem → methodology → findings → contribution/significance. Let writing expose gaps that need further testing.

```text
Help communicate this research: [paper/research-note location and target venue].
Use only verified literature, actual methods, and available results.

1. Write five connected sentences: background, problem, methodology, findings,
   and contribution/significance. Use “However” where it clarifies the gap.
   If the study is incomplete, write “findings pending”; keep predictions apart.
2. Expand to five short paragraphs. Check whether the problem follows from
   the literature, the method answers the question, and the evidence supports
   the contribution. Revise weak reasoning before polishing the English.
3. Draft or revise one section at a time in the venue's required structure.
   Keep claims, terminology, figures, methods, and numbers consistent across
   the paper. Separate interpretation from observation and state limitations.
4. Write a clear, searchable title. For Figure 1, show the problem, insight,
   difference from existing practice, and what changes. Learn from verified
   examples; offer three concepts for me to choose. Make it editable, original,
   and faithful to demonstrated evidence.
5. Ask a fresh critic to review novelty, validity, and communication separately.
   For each concern, quote the relevant evidence, explain the consequence,
   and suggest a concrete repair. Rank the three most consequential concerns.
6. Revise one concern at a time and recheck it. If a claim needs more evidence,
   return to Idea Testing and update both experiments and paper. Do not cover
   an evidence gap with persuasive language.

Deliver the story, revisions, evidence gaps, Figure 1, and my next decision.
Update the manuscript and note. Never promise publication acceptance.
```

## Keep the Work Verifiable

Keep the verified sources, code and data provenance, raw results, changes of direction, and important AI corrections. Use approved storage and access for protected material; do not place API keys, identifiable participant data, or confidential reviews in prompts or public repositories without authorisation. Check authorship, disclosure, and the target venue's current AI policy before submission.

The [Research Guide](/researchguide/) teaches the reasoning behind these stages. [Resources](/resources/) provides templates and examples, and [Journals](/journals/) supports venue selection.
