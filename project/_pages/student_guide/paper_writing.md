---
title: Paper Writing
layout: single
permalink: /student_guide/paper_writing
toc: true
toc_label: " Table of Contents"
toc_sticky: true
# classes: wide
sidebar:
  nav: student_guide
---

This guide is written following the `Thesis report workshop` of Dr. Chaklam during 2022 August semester.

Here is the link to workshop `Overleaf` [link](https://www.overleaf.com/project/630430e80aea50797a5b4fbe).

## 1. Abstract

- You have to write it NOW!
- You look at the `Abstract` very regularly!
- Real writing starts at after 15 revisions.
- This is NOT about writing; is about planning, thinking, making sure you will not have any serious errors.
- You should finish this by end of August.

### Steps

1. Background
  : Very specific background; hint the problem.
2. Problem
  : Very very measurable problem; start with a signal word like "However", "Anyhow", or "Despite".
3. Solution
  : Use verb wisely; explore/investigate/develop/compare.
4. Key finding (2 - 3 sentences)
  : Summarize ONLY the key findings - it means interesting findings.
5. Contributions
  : Why this is important to be solved; what impact it can bring.

## 2. Literature Review/Related Work

- By mid-September; why: because we want to propose on October!.
- No general knowledge.
- Group them by subsection for readability.
- How many pages: if like thesis format in double lines - you need 4-5 pages or 15-30 citations.
- Purpose of `related work`:
  1. Find the gap.
  2. Find the gap in IV, DV, hypothesis, methodology.
  3. Find the gap, so readers CAN BELIEVE that what you do is NEW NEW NEW.
- This is NOT the purpose of `related work`:
  1. To give lecture/Explain basic stuff: Because EVERY reader is Chaklam, Matthew, ...
- IF YOU ARE NEW TO THE FIELD, do not be arrogant... There are many people smarter than you 100%.

### Steps

1. Choose the recent work.
2. Choose the "relatively" high citation. 
3. Try to avoid some conferences that look sketchy.

### Cite style

#### Command example
`\shortciteA{jalilpour2020novel} hellooooo` => `Jalilpour et al. (2020) hellooooo`

```bib
Jalilpour, S., Sardouie, S. H., & Mijani, A. (2020). A novel hybrid bci speller
based on rsvp and ssvep paradigm. Computer methods and programs in
biomedicine, 187, 105326.
```

#### Subject form
- if you have <= two authors, the format is 
  - `author1lastname and author2lastname (2020) proposed....`; 
  - don't do `[5] proposed this...`; 
  - don't do.  `Some people [5] do this...`;  
- if you have > two authors, the format is 
  - `author1lastname et al. (2020) proposed....`

#### Indirect form
- if you have <= two authors, the format is 
  - `... (author1lastname and author2lastname , 2020)` 
  - `... (author1lastname and author2lastname , 2020; next guy....)` 
  - sometimes they use number format: `... [4];` `... [5, 7, 99]`;
- if you have > two authors, the format is 
  - `... (author1lastname et al., 2020)`

## 3. Methodology

You have to finish the `Literature Review/Related Work` by mid-September. Here the `Methodology` should be done by end-September. `Finished` here means `First-Draft` is ok.

### The purpose

- Make people believe you do everything `validly` (according to the principle of science)
  - read a lot of papers
- Other people should be able to replicate what you do 100%, not curse you later.
  -  You should be very detailed. 
  -  Please draw a figure. One good figured that explain everything from preprocessing till the end. 

### Step

`Methodology` is the easiest chapter/section to write. **Just follow this format**. 

#### For `Deep Learning` research

```latex
\section{Methodology}
```
You need to give a big picture. Here, you need to mention the whole experiment. What is the rationale, what is the different steps,  anything as a reader should know. This is the place where you mention the figure (the one good figure). 

THIS IS THE IMPORTANT PART.

```latex
\subsection{Dataset/Data Collection}
```
Describe the dataset you used, or described how you collect the data.
- Purpose:
  - Why you use this dataset? Why this source
  - They believe your data is valid

Collect data by yourself or use benchmark dataset?
1. Benchmark dataset
  - Reason: If you purposing a new technique or comparing technique
  - Challenge: You have many smart people to beat.
  - Pros: There is code/example out there
  - Another way: Look at different perspective that less people do, 
        so you do not have to go in the "crowded" space where people are 
        fighting
2. Collect data yourself
  - Reason: 1) No data 2) You want to create some unique applications
  - Challenge: 1) Many things can go wrong. 2) No one to compare with. 
      3) Usually very little people cite
  - Pros: You are new from the begining.

```latex
\subsection{Proprocessing}
```

- Purpoose
  - People can believe you really preprocess your data well
  - You are knowledeable in the domain

```latex
\subsection{Model}
```
- Purpose
  - if you **compare**, people can know `WHY` compare these models?
  - if you **propose**, people wants to believe that it is really amazing
    - so you have to be very detailed such that reaser can replicate
  - if you use typical software, `pytorch`, `sklearn`, `mne`, `nilearn`
      then you do not need to mention
  - Always mention the parameters of your model
  - if you did not create the model, no need to descrie the model in detail,
      just the parameters you use
  - if you are the one who create the model, please describe them in deep detail,
      so other people can copy
    - Please put your code into `GitHub`. Every publication of our lab must have a 
        `GitHub` link.

```latex
\subsection{Training and Validation}
```
- Purpose:
  - People can believe that you did not cause any data leakage
  - `Data leakage` means some statistics of training set goes to the testing set.
    - Split First before preprocessing
    - Ise statistics of the training set, and apply to the testing set
  - `ML`: Use Nested/Double cross validation
  - `DL`: Make sure you report the testing only, and **save the model based on the
      best validation loss**; NEVER TOUCH THE TESTING SET until the very end.
    - If you use the testing set, you are violating the **unseen data** law.
  - `Imbalance class` - fix it if possible
    - class_0: 900 and class_1: 10 ==> Your model will just predict 0 and gets 99%
    - Unless the real world cases is imbalance by nature, use f1-score?
      - Depressed 100 vs non-depressed 900: 
        - Take 100 non-depressed samples
        - Do CV on 200 samples, get the score
        - Redo but maybe 200 non-depressed, 300 non-depressed, ...
        - Show the robustness of your model
        - Report accuary and f1-score
  - `Anomaly` in your data
    - Do not just jump tp modeling very quickly
    - Look at your data long enough - be patient
  - `Time series/EEG`: Do not shuffle the data when you do cross-validation.
      Do **forward block corss validation** 
  - `NLP`: Save you tokenizer
  - `EEG`: Non-overlap segmentation, half-overlap segmentation. 
      One sample overlap is wrong
  - When you compare models
    - Cross Validation, you have many score -> use ANOVA
    - for DL, if your dataset is small enough -> use ANOVA
    - If dataset is hughe (200k samples) -> fine
    - If DL wants to do ANOVA -> emulate Cross Validation with different seeds

```latex
\subsection{Evaluation}
- This explains what is the metric you use
- if you use very typical metric, just mention the equation, and finish....no need to say a lot....
```

#### For `HCI` research

Will be done soon










## A1. Journal Impact Factor

Impact Factor:
- \> 1: high in AIT's standard
- \> 2: high
- \> 3: high in Chaky's standard

## A2. Conference Rank

This way, for ML, DL, HCI thesis, is better. Normally, when published, you have to go to conference.

For rank, we use `H-Index`
- For `AI`: [google-scholar](https://scholar.google.es/citations?view_op=top_venues&hl=en&vq=eng_artificialintelligence)
- For `HCI`: [google-scholar](https://scholar.google.com/citations?view_op=top_venues&hl=de&vq=eng_humancomputerinteraction)
- For `Neuro`: [google-scholar](https://scholar.google.com/citations?view_op=top_venues&hl=en&vq=med_neurology)
- For `NLP`: [google-scholar](https://scholar.google.co.th/citations?view_op=top_venues&hl=en&vq=eng_computationallinguistics)

## A3. What kind of work can I do?

### A3.1 Deep Learning
#### A. Propose new model

Propose new model usually better because the contribution is VERY clear. By propose, we do not mean "Attention is all you need" level. We mean `change` some component in the existing model, and try to do some ablation study to see that component is really important. However, it is risky because your idea might be totally wrong.

Propose new model Approach:
  - Copy some 2022 code from GitHub
  - Look at it for one month
  - Do not do anything
  - Try to change one component
  - If it improves, DONE

Automatically, you have to compare too but not very rigorously

#### B. Compare different models

Now, if you only compare, you need to do it very rigorously. By rigorously, look at least two IVs and two DVs. And, you need to do systematically.

Comparing is very hectic, boring, not easy to convince Matt and Mongkol that you do a good job. However, it is very safe.

### A3.2 HCI
#### A. Propose new system/technique

Similar to `Deep Learning - Propose`, if you can propose a new thing, usually you are good. Therefore, many attributes are shared. Risky. However, if you are creative and able to propose new technique/system then you should be OK.

#### B. Perform some user experiments (no system / technique)

Similar to `Deep Learning - Compare`, you have to think of an "interesting" experiment. Time-consuming and you have to do it rigorously. However, it is safe.