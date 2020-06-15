**[Random network distillation](https://arxiv.org/abs/1810.12894)** is an algorithm for assigning an **intrinsic reward** for  exploration. In other words, given an environment that would emit extrinsic reward $e_t$ at time $t$, we want to give reward

\begin{equation}
r_t = e_t + i_t
\end{equation}

In discrete settings, we could track the number of times we visit a state and give intrisinc reward according to a decreasing function of the count (the more you see the state, the less reward you get for visiting). RND is an approach to this problem that uses two networks, a target $f: \mathcal{O} \to \RR^k$ and a predictor $\hat{f}: \mathcal{O} \to \RR^k$ whose goal is to match the target. Thus, the loss is the MSE $\lVert \hat{f}(x; \theta) - f(x) \rVert^2$. The idea is that the random target network will be distilled into the predictor by exposure to the outputs. 

# Implementation details

Both the reward and observation have to be normalized.