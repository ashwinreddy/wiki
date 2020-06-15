**[Random network distillation](https://arxiv.org/abs/1810.12894)** is an algorithm for assigning an **intrinsic reward** for  exploration. In other words, given an environment that would emit extrinsic reward $e_t$ at time $t$, we want to give reward

\begin{equation}
r_t = e_t + i_t
\end{equation}

In discrete settings, we could track the number of times we visit a state and give intrisinc reward according to a decreasing function of the count (the more you see the state, the less reward you get for visiting).