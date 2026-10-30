---
title: "Industry Development and Research"
layout: "lab-page"
toc: true
draft: false
---

[Research Tips](/research-tips/) / Industry Development and Research

**A working system shows that you can build it. Research establishes something that others did not already know.** For a research project, explain both the artifact and the knowledge it makes possible.

Industry development and research often overlap. Companies conduct research; universities build production systems. The distinction is the purpose and evidence of the work, not the employer, prestige, difficulty, or project duration.

## Different Questions, Often the Same Project

| | Product or engineering development | Research |
| --- | --- | --- |
| Main question | Can we deliver a useful, dependable solution under these constraints? | What important uncertainty can we resolve, and what is new relative to existing knowledge? |
| Success evidence | Requirements, reliability, usability, cost, and operational performance. | Evidence appropriate to the claim, positioned against the closest work and competing explanations. |
| Main output | A functioning product, service, workflow, or apparatus. | A defensible contribution: a finding, method, artifact, dataset, benchmark, theory, or design insight. |
| What others can reuse | The implementation or service. | The knowledge, method, evidence, or design rationale, with its scope and limitations. |

An A/B test can be product optimisation or research. Research requires a meaningful knowledge claim and defensible positioning; the existence of an experiment alone is insufficient. Equally, research need not always introduce an algorithm or run a controlled experiment.

## The Apparatus Is Part of the Study

A chatbot, sensor, interface, or multi-agent pipeline may be the instrument through which you investigate a question. It can also be the contribution when its design establishes an original capability or reusable design knowledge through appropriate evaluation.

Ask: **“If another team could build this tomorrow, what would they still learn from our paper?”**

| Building milestone | Research direction it could support |
| --- | --- |
| “The sales agent retrieves product facts.” | When do correct facts still lead to misleading recommendations, and which intervention changes that failure? |
| “The agent has customer memory.” | Can it distinguish an outdated preference from a current one, and does that improve decisions compared with a credible simpler memory system? |
| “The medical VQA model runs.” | Under a defined image shift, which answer errors arise, and does a proposed method reduce them against matched baselines? |

These are illustrative questions requiring literature and feasibility checks. Replacing a domain name or combining familiar components does not establish novelty by itself.

Our [human–AI negotiation paper](https://arxiv.org/abs/2603.22766) illustrates the connection: it studies the effect of negotiation complexity and evaluates visual support, rather than only reporting that a negotiation interface was built.

## Turn a Prototype into an Investigation

Consider the proposed customer-memory question above.

1. **Establish the unresolved problem.** Compare the closest memory systems. Identify whether they already handle corrections, changing preferences, or temporal conflicts.
2. **Make the baseline credible.** Give a simpler approach the same information, task opportunities, and a reasonable tuning budget. Correct shared implementation defects before comparing methods.
3. **Choose a discriminating test.** Include stable preferences, explicit changes, and ambiguous updates. Hold task facts and evaluation rules consistent; test on cases not used to tune the method.
4. **Measure the intended claim.** Correct retrieval supports a memory claim. Appropriate recommendations require separate evidence. Customer understanding or agency requires direct evidence of those outcomes.
5. **Explain the result and its limits.** Inspect failures and simpler explanations, not only an average score. A simulated customer can test behaviour under assumptions; it cannot establish real customer benefit.

For a qualitative, design, or theoretical contribution, use methods suited to that question. Causal hypotheses, IVs, and DVs are useful for causal experiments, not universal forms every study must imitate.

## What Deep Work Looks Like

A depth-focused update explains **which assumption was tested, what the evidence rules out, what remains uncertain, and what decision follows**.

For example: “The new memory method improves retrieval on our development cases. We have not shown better recommendations. Next we will test held-out preference changes against the corrected baseline.” That is more informative than listing modules completed.

More features, architectures, models, or benchmarks help only when they address an unresolved question. A well-supported negative finding or replication can be valuable when it changes understanding; a failed run alone is not yet such a contribution.

Grant deliverables and engineering work still matter. Agree which tasks deliver the application and which establish the student's research contribution. A master's student can own a bounded investigation within the larger system; a PhD student should increasingly lead the original contribution.

## Before Building the Next Component

Write three sentences:

- **We need to understand …**
- **The current evidence cannot establish this because …**
- **Our next comparison or investigation will distinguish … from …**

If these are unclear, bring the bottleneck to your supervisor. Narrow the investigation before expanding the apparatus.

## Sources and Adaptation

Reworked from Chaklam's [research contributions](https://chaklam.com/articles/what-is-and-is-not-research-contributions/), [purpose of a PhD](https://chaklam.com/articles/what-is-the-purpose-of-ph-d/), and [essence of great research](https://chaklam.com/articles/essence-of-great-research/). This version recognises industry research and multiple valid contribution types; see [CHI's contribution guidance](https://chi2026.acm.org/contributions-to-chi/).
