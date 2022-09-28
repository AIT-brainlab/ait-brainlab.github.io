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

## 0. Title

Choose your verb wisely.

> investigate/explore/compare/develop ; what methods

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
```
- This explains what is the metric you use
- if you use very typical metric, just mention the equation, and finish....no need to say a lot....


#### For `HCI` research

```latex
\section{Methodology}
```

Experimental design - IV, DV, hypothesis, what is the goal.

```latex
\subsection{System}
```

Optional - if you develop something...

Here people should be
- able to replicate what you made.
- able to understand why.
- feel you "make" something very challenging.

```latex 
\subsection{Participants}
```

- You have enough participants

```latex
\subsection{Task and Procedure}
```

- Super detailed so that people can follow you
- order effects
- sequence of events....so that people know that your work is valid

```latex
\subsection{Evaluation}
```

- what is your DV


## 4. Introduction

Introduction is nothing but `abstract` but write in a paragraph. Some paper has a nice figure explaining the problem here.

### 1. Background
- Very specific background; hint the problem.
- Summary of `related work` section.
- No WHO statistics, no general knowledge, just go straight to executive summary of `related work`.
- Hint what is the problem.
- How many citations? If your related work has 25 citations, here should be at least half but in super summarized form.

### 2. Problem/Problem Statement
- Very very measurable problem; start with a signal word like "However", "Anyhow", or "Despite".
- Body is basically why this problem is worth solving? Why this is difficult?

### 3. Solution/Objective
- Use verb wisely; explore/investigate/develop/compare.
- Summary of `methodology`
- Choose "action verb" wisely.

### Scope

Talks about what you did not do to lower the expectation.

### Organization of the studies

It is always the same. Chapter 1 do this. Chapter 2 do that ...

### 4. Key finding (2 - 3 sentences)
- Summarize ONLY the key findings - it means interesting findings.
- Summary of `Result` section.
- Try to only talk about "surprising" findings.

### 5. Contributions
- Why this is important to be solved; what impact it can bring.
- Remind readers again, what did you do.
- Why your work is important.
- Release a dataset, code.




## 5. Results

The number of subsection you have should match the number of your research question. Let's say here are your research question in the introduction

- RQ1: Encoder vs Non-Encoder
- RQ2: Shuffled vs Non-Shuffled Dataset
- RQ3: Metrics Evaluation

Then here is what your `Results` looks like.

```tex
\chapter{Results}
```

- Many table and graph
- table is useful to summarize a lot of statistics together
  - put * for p < 0.05
  - put ** for p < 0.001
  - put *** for p < 0.0001
  - ANOVA should be done in all cases when possible
    - unless you have really huge data and, each time you run, it takes 1 week.
  - Pair t-tests
    - use Bonferroni
  - A, B,. C, D, E
    - A vs. B
    - A vs. C
    - A vs. D
    - A vs  E
    - B vs. C etc.
    - p-value = 0.0001
    - this is not ok because you have many pairs - Bonferonni correction
- Graph is better in highlighting certain trend
  - Box-plot: `y` is categorical and `x` is categorical or continuous
    - median, quartile, std, outliers
  - Scatter-plot: `y` is continuous and `x` is continuous
    - is nice... 3D - size can be the third features
- **NO opinion**
  - You DON'T need to talk about what your table tells already...
  - Write something that you want the readers to **see**


```tex
\section{Encoder vs Non-Encoder}
```

```tex
\section{Shuffled vs Non-Shuffled Dataset}
```

```tex
\section{Metrics Evaluation}
```




## 6. Discussion

- This is one of the most important part of your work.
- This is the part you talk about **insights**.
- Whether you are smart or not, readers will know, from this part.
- When you do not have anything to discuss, it means you have not thought about this enough.
- This should be one of the longest section.
  
```tex
\section{Did you find what you expect? Anysuprising findings - Hypothesis?}
```

2 paragraphs

```tex
\section{How do you compoare with the past work? Betterm conflicing results, same resuls? Consistent with them?}
```

2 paragraphs

```tex
\section{Did something goes wrong? Especially the experiments/methodology}
```

Talk about the issues in experimental design and possible interpretations.

```tex
\section{Recommendations, implications, guidelines}
```

People like to read "actionable" guidelines. Here is usually in a numerical and contextual. 

```tex
\section{Limitations and future work}
```

- What you did not do very well, or you should do
  - please ensure the readers that it does not damage the validity of your work
- Point to the future work (not obvious one...)


## 7. Conclusion

I still do not know how to write. How is this different from `Abstract`?

Maybe something about intention, achieve, yay. No more drama, introduction, happy ending.

> At first, I want to do chatbot for everyone, then we do this much, we achieve this. Yay~! Ending.






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

### A4. How do Chaky thing about picking research topic

> Chaky, 14/09/2022
> 
> I would like to help people. 
> 
> What do people want?
> 
> People want to be happy
> 
> How?
> 1. Knowledge
> 2. Well-being
>   - Blood, Fat, Sugar, Brain
> 3. Financial Freedom
> 
> What I do in this lab?
> 1. NLP.
>   - **Chatbot**: That can answer technical question (Intent, Q&A, Knowledge graph).
>   - **Writing assistant**: Help people to communicate better (Grammar, paraphrase, summarization).
>   - **Trading bot**: understand news, fundamental. The bot helps people to make a decision.
> 2. HCI.
>   - **EEG**: API for emotion, SSVEP, Motor Imagery, P300.
>   - **Virtual reality/AP**: to train people mind, to train skills.
>   - **spectroscopic sensor**: for blood, fat, glucose.
> 3. Brain.
>   - **Brain analyzer**: fMRI image
> 
> What I want is product, but publication is the way to get funded and feedback.

### A5. Recommended reading

#### Element of style, The

In one paragraph

- First sentence: Opening sentence, frame what you want to say.
- Support sentences: evidence (citation), arguments (logical reasoning)
- Last sentence: concluding sentence, conclude what you want to say.

Writing things you have to learn

- Use signal for your first sentence.
- Use "unambiguous verbs/adjective".
  - "My model is good" => what is "good" means?
  - Avoid using "always, never, very, so, true" => include emotion
- Try to write passively.
  - We performed the experiment with three participants. => not so good
  - Experiments were conducted with three participants. => better
- Avoid too long sentence.
- Definition of each work should be clear.
  - Emotion, Attention, Mindfulness, Well-being, Exam scores => Is it the same meaning?
  - Use consistent keyword. 

### A6. How to choose a good topic?

[chaklam.com](http://chaklam.com/node/7)

![image](http://chaklam.com/sites/default/files/inline-images/hedge.jpg)

- What are you deeply passionate about?
  - Can do repeatedly without getting bored
- What can you be the best in the world at?
  - Resource that help you become better
  - Improve what you are already good at
- What drives your economic engine?
  - What research problem that **people are doing** not the one you think it is important
- Is the topic will be relevant in the next 10 years?

![image](http://chaklam.com/sites/default/files/inline-images/feas.jpg)

- For new student, do the easy-small gain research. 
  - Improve an existing work. Mainly because there should be code available out there. Once you copy the code, you are there. Then, you need to do a little more

![image](http://chaklam.com/sites/default/files/inline-images/knowledge.png)
- Focus on depth
- High-level copying