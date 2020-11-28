---
bibliography: './Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib'
---

**Munchausen Reinforcement Learning**'s key idea is that a policy can be used for [[temporal difference learning]] in lieu of the [[Q function]] [@vieillard2020munchausen]. In any TD scheme, we simply perform the following replacement:

\begin{equation}
r'_t = r_t +\alpha \ln \pi(a_t \mid s_t) \tag{M-RL}
\end{equation}

# M-DQN

This approach can be extended to [[Deep-Q network]]


---
