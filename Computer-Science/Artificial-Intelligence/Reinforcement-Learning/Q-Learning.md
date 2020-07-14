---
bibliography: './Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib'
---


**Q-Learning** is an algorithm that aims to get an accurate [[Q-function|action-value function]] estimation. It does this by iteratively applying the Bellman (optimality?) operator. Then, a greedy policy can be extracted by computing $\pi(s_t) = \arg\max_a Q(s_t,a)$ or in the stochastic case, $\pi(a_t \mid s_t) = \delta(a_t = \arg\max_a Q(s_t, a_t))$ using the [[Kronecker delta]].

# Algorithm

[@levine2020offline pp. 6-10] provides a complete description. Basically, the algorithm just repeats the same loop of policy evaluation and then optimization to reduce the mean squared Bellman error.


---
