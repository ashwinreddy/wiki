---
bibliography: './Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib'
---

**Munchausen Reinforcement Learning**'s key idea is that a policy can be used for [[temporal difference learning]] in lieu of the [[Q function]] [@vieillard2020munchausen]. In any TD scheme, we simply perform the following replacement:

\begin{equation}
r'_t = r_t +\alpha \ln \pi(a_t \mid s_t), \tag{M-RL}
\end{equation}

where we assume the current agent's policy is stochastic.

# M-DQN

This approach can be extended to [[Deep-Q network]]. The issue is that DQNs computes deterministic policies. So instead of maximizing return, we'll also maximize entropy.

\begin{equation}
\hat{q}\_{\mathrm{s-dqn}}(r_t, s_{t+1}) = r_t + \gamma \sum_{a' \in \mathcal{A}} \pi_{\bar\theta}(a' \mid s_{t+1})\Big(q_{\bar\theta}(s_{t+1}, a') \color{blue} -\tau \ln \pi_{\bar\theta}(a' \mid s_{t+1})  \color{black} \Big) \text{ with } \color{blue} \pi_{\bar\theta} = \mathsf{softmax}\left(q_{\bar\theta} / \tau\right) \tag{S-DQN}
\end{equation}

Let $\alpha \in [0,1]$.

\begin{equation}
\hat{q}\_{\mathrm{m-dqn}}(r_t, s_{t+1}) = \hat{q}\_{\mathrm{s-dqn}}\color{red} + \alpha \tau\ln \pi_{\bar\theta}\left(a_t \mid s_t \right) \tag{M-DQN}
\end{equation}

# Theory

Let

$$
\langle f, g \rangle = \left( \sum_a f(s,a)g(s,a) \right)_s \in \mathbb{R}^\mathcal{S}
$$

---
