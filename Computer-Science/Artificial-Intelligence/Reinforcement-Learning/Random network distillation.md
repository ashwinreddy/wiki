---
bibliography: './Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib'
csl: 'ieee.csl'
---


**Random network distillation (RND)** [@burda2018exploration] is an [[algorithm]] for generating exploration reward bonuses. The reward $r_t$ given to our algorithm at time $t$ is the sum of the explicit, extrinsic reward $e_t$ we give it as well as the intrinsic exploration reward $i_t$.

\begin{equation}
r_t = e_t + i_t
\end{equation}


It is a scheme by which we can assign rewards for seeing new states. We use an [[artificial neural network]].

---

