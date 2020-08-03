---
bibliography: './Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib'
csl: 'ieee.csl'
---


**Random network distillation (RND)** [@burda2018exploration] is an [[algorithm]] for generating exploration reward bonuses. It is a scheme by which we can assign rewards for seeing new states. The reward $r_t$ given to our algorithm at time $t$ is the sum of the explicit, extrinsic reward $e_t$ we give it as well as the intrinsic exploration reward $i_t$.

\begin{equation}
r_t = e_t + i_t
\end{equation}

Typically, we want $i_t$ to be a decreasing function of the visitation count $n_t(s)$, but doing a tabular count of $n_t(s)$ may be infeasible.


We use two [[neural nets|artificial neural network]], a target and a predictor.

# Algorithm



---

