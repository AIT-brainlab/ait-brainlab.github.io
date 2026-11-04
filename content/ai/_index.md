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

**Start with one assistant: ChatGPT or Claude.** The setup, five research stages, and save prompt work with either. A second assistant, coordinator, or coding tool is optional; add one for a specific need.

| Role | Suggested tool | Responsibility |
| --- | --- | --- |
| Coordinator | **Grok Bot**, when available | Keep tasks and files current, arrange handoffs, and bring decisions back to you. It has a persistent cloud computer, beyond ordinary Grok chat. [Documentation](https://docs.x.ai/grok-bot/overview). |
| Research assistant | **ChatGPT or Claude** | Synthesise literature, propose ideas, and critically review the reasoning. Use a second assistant for an optional independent critique. [ChatGPT search](https://learn.chatgpt.com/docs/web-search) · [Claude research](https://support.claude.com/en/articles/11088861-use-research-on-claude). |
| Experiment access | **OpenRouter**, if needed | Access models through an API. Record model, provider, routing, and settings. [Routing guidance](https://openrouter.ai/docs/guides/routing/provider-selection). |
| Implementation | An AI coding assistant | Implement and check experiments; update the paper alongside the code. Verify what actually ran. |

Use supported integrations and authorised accounts, or pass outputs yourself. Features and access change.

### Set Up the Project Once

**Keep the paper current and give every record one job.** The files below live in the student's project repository. They are short working documents, not extra assignments: start unknown fields as pending and update them when the work changes.

Use `research_review_skill.md` for the three [Research Checks](/scorecards/): novelty, validity, and writing. The skill files describe your research workflow in plain Markdown; tell the assistant to read them rather than assuming it loads them automatically.

```text
Set up a research workspace for: [topic, degree, and project location].
Paper format or venue: [specify, or write undecided].

1. Inspect existing files first. Preserve useful work and adapt this structure.
   Initialise Git and create/connect a private GitHub repository when authorised.
   If access is unavailable, prepare locally and give me the remaining steps.
2. Create these folders with a short README and an appropriate .gitignore:
   paper/       manuscript, references, figures, official template
   research/    the working documents below
   src/         implementation
   prompts/     versioned research and model-evaluation prompts
   scripts/     preparation, experiment, analysis, and paper-build commands
   data/        data documentation, sources, versions, and split definitions
   tests/       checks of code, scoring, and data integrity
   runs_log/    one record per run: configuration, outputs, failures, and cost
   results/     analysis and figures linked to their source run IDs
   Keep secrets, protected data, caches, and large generated files out of Git.
3. Create these Markdown files, each with the following purpose:
   research/terms.md
     Preferred terms, definitions, abbreviations, and deprecated synonyms.
     Use the same terms in the paper, code, prompts, and figures.
   research/research_process_skill.md
     How we iterate: question, literature, design, implementation, evidence,
     writing, and revision; include budgets, review points, and stop/pivot rules.
   research/research_review_skill.md
     Separate novelty, validity, and writing checks. For each concern, record
     evidence, consequence, and repair. Never treat AI agreement as validation.
   research/experimental_design.md
     Questions, hypotheses, IVs, DVs, measures, baselines, confounds, controls,
     sampling, analysis, uncertainty, data splits, and protocol changes.
     For non-experimental work, document the appropriate design and rationale.
   research/implementation.md
     Components and tasks: planned, implemented, tested, blocked, or dropped.
     Link code, tests, and run evidence; implemented does not mean validated.
   research/decisions.md
     Dated research decisions: options, evidence, rationale, consequences,
     and what would make us revisit the decision.
   research/related_work.md
     Verified citations, closest-work comparisons, methods, limitations,
     novelty counterexamples, and search dates.
   research/research_questions.md
     Three to five related key questions, why each matters, intended evidence,
     and status. Mark one core question; do not invent questions to fill a quota.
   research/current_status.md
     A short roadmap: done, in progress, blocked, and next; evidence links,
     unresolved concerns, and the next decision needed from me.
   AI_getting_started.md
     Entry point for a fresh AI: project purpose, file map, exact setup/run
     commands, constraints, and update rules. Read the current status, terms,
     research questions, and paper, then the records relevant to the task.
4. Obtain the current official venue or programme template; record its source
   and version/date. If undecided, create a simple paper outline and mark the
   template pending. Never invent a download or a requirement.
5. Start the paper with background, problem, related work, and planned methods.
   Label findings pending. If notes/research-note.md already exists, transfer
   useful content into the relevant records; preserve it until reviewed.
6. Add this rule to AI_getting_started.md: after meaningful work, update the
   paper and affected records, log actual runs, and update current_status.md.
   Mark work done only when the stated check has evidence. Ask me to resolve
   changes to the research question, claims, or agreed experimental design.

Report what you created, changed, committed, or pushed, and what remains.
Never claim execution, access, or results that did not happen.
```

### Keep the Paper and Records in Sync

**The paper is the project's source of truth for its research argument.** Ground claims in verified literature and actual results; keep plans and findings distinct. GitHub holds the versioned evidence and work history.

`research/current_status.md` replaces the single shared research note. Keep it short and link to the detailed records. Record implementation progress in `implementation.md`, reasoning in `decisions.md`, and the closest papers in `related_work.md`.

**Save progress** at the end of a work session or before changing conversations:

```text
Read AI_getting_started.md and save this session's progress.
Update the paper and only the research/ records affected by this work.
Log each actual run in runs_log/ with its run ID, configuration, code/data/model
versions, outputs, failures, and cost. Link results back to that run.
Keep terms.md consistent with the manuscript and figures.
Record research choices and reasons in decisions.md, task states and evidence
in implementation.md, and the roadmap and next decision in current_status.md.
Separate evidence from assumptions, and planned from completed work.
If you cannot save directly, give me the exact updates to save.
Report what you actually saved and what remains. Finish with a short handoff
that tells a fresh AI to read AI_getting_started.md and current_status.md.
```

### Two Useful Additions

- **Give every experiment a stable run ID.** Link the configuration, code commit, data split, model/provider version, raw output, and paper result so a number can be traced back to what ran.
- **Freeze evaluation cases before comparison.** Keep development and held-out data separate, record the baseline budget, and log protocol changes. Code tests check implementation; research evaluation checks the claim.

## 1. Idea Generation

**Start with a domain, interest, or real problem.** Find promising questions by comparing the closest work.

```text
Read AI_getting_started.md and research/current_status.md first.
Use research/terms.md, research/research_questions.md, and the paper.
Open other research/ records as needed; if unavailable, ask me to paste them.

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
3. Propose directions, then critically review them against verified evidence.
   If a second assistant is available, prepare a handoff for an independent
   critique. Report who participated; never pretend another model was consulted.
4. Compare proposals: overlap with prior work, important unanswered question,
   strongest objection, and smallest useful investigation.
5. Revise through up to three discussion rounds, stopping earlier if another
   round adds no meaningful evidence. Do not treat agreement as proof.
6. Present three candidate ideas in a table: problem, closest verified work,
   potential distinction, why the answer matters, feasibility, and biggest risk.
   Recommend one with trade-offs. Ask me what seems missing and worth pursuing.

Keep the verified-paper comparison and the chosen direction in the project
records. Do not claim that an idea is novel before validation.
```

## 2. Idea Refinement

**Turn the direction into a testable plan.** Use thinking tools to expose weaknesses. A pilot helps diagnose feasibility; it does not establish the contribution.

```text
Read AI_getting_started.md and research/current_status.md first.
Use research/terms.md, research/research_questions.md, and the paper.
Open other research/ records as needed; if unavailable, ask me to paste them.

Our chosen direction is: [paste the idea or point to research/current_status.md].
Use research/related_work.md, constraints, and unresolved issues already recorded.

1. Use first principles: define the problem, concepts, and observable measures.
2. Challenge assumptions and simpler explanations. Use systems thinking to trace
   feedback loops and second-order effects. Explain what changes the idea.
3. Refine three to five related key research questions and their objectives.
   Identify the anticipated contributions as one coherent project.
   Align them in a table with example methodology and evidence for each.
   Label contributions as intended, not demonstrated. If the questions
   make the project too broad, identify the core question and a smaller scope.
4. Plan a first investigation: reproduce a baseline, inspect data, or pilot code
   if useful. Report what ran, what it showed, and what it cannot establish.
5. Critically review the plan; optionally seek a second assistant’s critique.
   Resolve the main disagreement through
   a source, diagnostic test, or supervisor discussion. Avoid needless components.

Deliver the revised question-objective-contribution-method table, the strongest
alternative explanation, feasibility limits, and the proposed next step.
Update the project records with decisions and any pilot evidence.
```

## 3. Idea Validation

**Check the distinction against the closest work.** Aim for a defensible judgment with clear uncertainty, not certainty that an idea is novel.

```text
Read AI_getting_started.md and research/current_status.md first.
Use research/terms.md, research/research_questions.md, and the paper.
Open other research/ records as needed; if unavailable, ask me to paste them.

Validate this idea: [paste the refined plan or point to research/current_status.md].
Target research community or venue: [specify, if known].

1. Search the closest terms, alternative terminology, neighbouring fields,
   theories, methods, references, and newer papers citing the closest work.
   Prioritise peer-reviewed evidence but include relevant preprints and resources.
2. Verify sources and compare their actual claims, methods, and findings with
   ours. Maintain a closest-work table with links and a search date.
3. Take a critic’s perspective and find the strongest counterexample: work that
   already answers the question or makes our difference unimportant. Optionally
   ask another assistant to check independently; label a self-review honestly.
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
Update the project records and the proposed gap statement in the paper.
```

## 4. Idea Testing

**Design evidence that can answer the question.** Learn from closely related studies and test competing explanations.

```text
Read AI_getting_started.md and research/current_status.md first.
Use research/terms.md, research/research_questions.md, and the paper.
Open other research/ records as needed; if unavailable, ask me to paste them.

Develop and carry out a rigorous study for: [plan or project location].
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
5. Reuse the project repository and paper template from setup. Check the README,
   dependencies, configurations, and run logs are sufficient to reproduce the work.
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
9. After each meaningful iteration, update the paper, evidence table, and project
   records. Report the biggest unresolved threat, the next decisive investigation,
   and when to narrow, stop, or change the approach with me.

Do not optimise for the number of experiments or for positive findings.
Optimise for evidence that answers the question and tests the strongest alternative.
```

## 5. Idea Storytelling

**Build the five-part story:** background → problem → methodology → findings → contribution/significance. Let writing expose gaps that need further testing.

```text
Read AI_getting_started.md and research/current_status.md first.
Use research/terms.md, research/research_questions.md, and the paper.
Open other research/ records as needed; if unavailable, ask me to paste them.

Help communicate this research: [paper/project location and target venue].
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
5. Review novelty, validity, and communication separately from drafting.
   Optionally seek another assistant’s independent critique; label self-review.
   For each concern, quote the relevant evidence, explain the consequence,
   and suggest a concrete repair. Rank the three most consequential concerns.
6. Revise one concern at a time and recheck it. If a claim needs more evidence,
   return to Idea Testing and update both experiments and paper. Do not cover
   an evidence gap with persuasive language.

Deliver the story, revisions, evidence gaps, Figure 1, and my next decision.
Update the manuscript and affected research/ records. Check authorship, AI disclosure, and the venue’s
current AI policy before submission. Never promise publication acceptance.
```

> ### Optional: Accelerate with Grok Bot
>
> **Once your workflow is clear, automate the routine work.** Grok Bot has a persistent cloud computer with a browser, files, and terminal; it can continue working while your laptop is closed. [Official documentation](https://docs.x.ai/grok-bot/overview).
>
> **Suggested roles:** Grok Bot coordinates; ChatGPT challenges; Claude implements; OpenRouter provides model access for testing. Configure authorised access, or pass the handoffs yourself. OpenRouter is the testing route, not a separate research judge.
>
> **Start with one bounded task:** specify the inputs, time or compute budget, what “done” means, and when to return for your decision. Review the evidence before expanding the automation.
>
> **You remain the researcher.** Check sources and results; judge the gap, novelty, significance, and next direction. Faster execution is useful only when the work answers a worthwhile question.
>
> **Give Grok Bot this coordinator prompt:**
>
> ```text
> Coordinate this research project: [repository and task].
> Read AI_getting_started.md, the paper, and research/current_status.md first.
> Use the research/ records for terms, questions, literature, design, and decisions.
> My time/compute budget is: [specify]. Bring research decisions back to me.
>
> 1. Check access to GitHub, ChatGPT, Claude, and OpenRouter. Use configured,
>    authorised connections or browser sessions. If unavailable, prepare the
>    exact handoff for me. Never claim a tool was used when it was not.
> 2. ChatGPT is the challenger. Give it the question, closest verified work,
>    intended claims, study plan, and constraints. Ask for the three strongest
>    objections to novelty, significance, or validity, with evidence and repairs.
>    Request counterexamples and tests that could disprove the claim.
> 3. Bring me the objections and recommended changes before changing the question,
>    study design, or scope. Record decisions and reasons in research/decisions.md.
> 4. Claude is the implementer. Give it the agreed plan, acceptance checks,
>    repository, baselines, and constraints. Ask it to implement the smallest
>    useful change, run checks, and report changed files, actual runs, failures,
>    and limitations. Keep the paper's methods aligned with the implementation.
> 5. Use OpenRouter for the agreed model comparison. Fix a versioned test set,
>    scoring rules, prompts, tool access, and fair resource budgets before testing.
>    Keep development examples separate from held-out evaluation. Record actual
>    model IDs, provider/routing, settings, date, raw outputs, errors, latency,
>    and cost. Analyse repeated runs and uncertainty where relevant; never pick
>    only favourable outputs. Keep API keys outside commits and handoff messages.
> 6. Return results and implementation details to ChatGPT for critique. Check
>    its objections against sources, code, and logs. Send necessary fixes to
>    Claude within the agreed plan; escalate changes to claims or design to me.
>    Neither assistant's approval establishes novelty or correctness.
> 7. After each cycle, update the paper and affected research/ records, including
>    current_status.md. Distinguish planned, completed, and exploratory work.
>    Report evidence, biggest remaining
>    gap, next proposed action, and the decision needed from me.
>
> Run one cycle, then report. Continue only within the agreed task and budget;
> stop when blocked, over budget, or when a research decision is needed.
> ```
