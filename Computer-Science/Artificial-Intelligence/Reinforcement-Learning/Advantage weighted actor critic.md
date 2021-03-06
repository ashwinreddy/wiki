---
bibliography: './Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib'
---

**Advantage weighted actor critic (AWAC)** is an [[actor-critic]] [[reinforcement learning]] algorithm designed to handle a buffer $\beta$ of any kind of experience: demonstrations, suboptimal data, random exploration data, introduced in @nair2020accelerating. This lets us do [[offline reinforcement learning]] and then online fine-tuning.


The main difference is a new policy improvement optimization goal where we don't allow big steps from the buffer policy as measured by the [[KL divergence|Kullback-Leibler Divergence]]. Intuitively, we're only going to base our actions based off the dataset, whereas [[SAC|Soft Actor-Critic]] is totally unconstrained. The actions are always on distribution.


The new objective for the actor update is given by the optimization problem below, where we constrain the steps.

\begin{equation}
\max_\pi \mathbb{E}\_{a \sim \pi(\cdot \mid s)} \left[ A^{\pi_k}(s, a) \right] \text{ s.t. } D_{KL}\left(\pi(\cdot \mid s) \parallel \pi_\beta(\cdot \mid s)\right) \leq \epsilon
\end{equation}



The new parameters $\theta_{k+1}$ are given by trying to maximize the expected probability under the replay buffer $\beta$ using and weighted using the [[advantage function]] $A^{\pi_k}$

\begin{equation}
\label{eq:actor-update}
\max_\theta \mathop{\mathbb{E}}_{\mathbf{s}, \mathbf{a} \sim \beta}\left[ \log \pi_\theta(\mathbf{a} \mid \mathbf{s}) \frac{1}{Z(\mathbf{s})} \exp\left( \frac{1}{\lambda}A^{\pi_k}(\mathbf{s}, \mathbf{a}) \right) \right] \tag{policy improvement}
\end{equation}

# Benefits

* No need to fit a model $\hat{\pi}_\beta$ for the buffer data.

# Algorithm

1. Put dataset of transitions into buffer $\beta$
2. Repeat for $n$ iterations
    1. Sample batch
    2. Update critic in usual manner.
    3. Update $\theta$ according to equation \ref{eq:actor-update}.
    4. If $i$ > `num_offline_steps`, sample on-policy trajectories and put in buffer $\beta$

# Implementation

The paper says to drop the computation of $Z(s)$.

# Related Work

Very similar to [[advantage-weighted regression]].

---