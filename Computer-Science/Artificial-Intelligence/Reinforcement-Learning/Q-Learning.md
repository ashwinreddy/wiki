---
bibliography: './Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib'
---


**Q-Learning** is an algorithm that aims to get an accurate [[Q-function|action-value function]] estimation. It does this by iteratively applying the Bellman (optimality?) operator. Then, a greedy policy can be extracted by computing $\pi(s_t) = \arg\max_a Q(s_t,a)$ or in the stochastic case, $\pi(a_t \mid s_t) = \delta(a_t = \arg\max_a Q(s_t, a_t))$ using the [[Kronecker delta]].

# Algorithm

@levine2020offline provides a complete description. Basically, the algorithm just repeats the same loop of policy evaluation and then optimization to reduce the mean squared Bellman error.

1. For $k$ in $0$ to $K$,
    1. Run $S$ steps of policy and put transitions in replay buffer.
    2. Do $G$ steps of gradient descent.
        1. Sample batch $B \subset \mathcal{D}$.
        2. Estimate MSBE.
        3. Update weights to Q-function to minimize MSBE.

---
