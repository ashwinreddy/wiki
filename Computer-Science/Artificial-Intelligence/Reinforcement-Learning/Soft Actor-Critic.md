---
bibliography: './Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib'
link-citations: true
---

**Soft Actor-Critic** [@haarnoja2018soft] is an off-policy [[actor-critic]] [[maximum entropy reinforcement learning]] approach to optimizing a stochastic [[policy]] $\pi_\phi$ using critic Q-functions $Q_{\phi_1}$ and $Q_{\phi_2}$ (and in older versions, apparently, also a value function $V_\psi$).

It uses the reparameterization trick.

# Algorithm

1. Repeat for $n$ iterations
    1. Use policy to sample transitions that go into a dataset $\mathcal{D}$
    2. Update the parameters to the Q-functions and policy through gradient descent.

---