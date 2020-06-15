**[Random network distillation](https://arxiv.org/abs/1810.12894)** is an algorithm for assigning an **intrinsic reward** for  exploration. In other words, given an environment that would emit extrinsic reward $e_t$ at time $t$, we want to give reward

\begin{equation}
r_t = e_t + i_t
\end{equation}