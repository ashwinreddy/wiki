---
bibliography: './Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib'
---

**Advantage weighted actor critic (AWAC)** [@nair2020accelerating] is an [[actor-critic]] algorithm with a weighted actor/policy update. 

\begin{equation}
\pi_{k + 1} = \arg\max_{\pi \in \Pi} \mathbb{E}_{a \sim \pi(\cdot \mid s)} \left[ A^{\pi_k}(s, a) \right] \text{ s.t. } D_{KL}(\pi(\cdot \mid s) \parallel \pi_\beta(\cdot \mid s)) \leq \epsilon
\end{equation}



The new parameters $\theta_{k+1}$ are given by trying to maximize the expected probability under the replay buffer $\beta$ using and weighted using the [[advantage function]] $A^{\pi_k}$

\begin{equation}
\theta_{k+1} = \arg\max_\theta \mathop{\mathbb{E}}_{\mathbf{s}, \mathbf{a} \sim \beta}\left[ \log \pi(\mathbf{a} \mid \mathbf{s}) \frac{1}{Z(\mathbf{s})} \exp\left( \frac{1}{\lambda}A^{\pi_k}(\mathbf{s}, \mathbf{a}) \right) \right]
\end{equation}

We're only going to base our actions based off the dataset, whereas SAC is totally unconstrained. The actions are always on distribution.

---