---
bibliography: './Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib'
link-citations: true
---

**Soft Actor-Critic (SAC)** is an off-policy [[actor-critic]] [[maximum entropy reinforcement learning]] approach to optimizing a stochastic [[policy]] $\pi_\theta$ using critic [[value-function]] $Q_{\phi_1}$ and $Q_{\phi_2}$ (and in older versions, apparently, also a value function $V_\psi$), introduced in @haarnoja2018soft.

The Q-functions we learn through mean squared Bellman error. We want the policy to maximize value.

$$
V^\pi(s) = \mathop{\mathbb{E}}_{a \sim \pi}\left[ Q^\pi(s, a) - \alpha \log \pi(a \mid s) \right]
$$

This is an expectation over actions sampled from the policy, but we use the [[reparameterization trick]] to make it an expectation over Gaussian noise $\xi \sim \mathcal{N}(0, I)$. 

$$
\tilde{a}\_\theta(s, \xi) = \mu_\theta(s) + \sigma_\theta(s) \odot \xi
$$

We make the policy Gaussian and then represent this Gaussian using mean and variance and the standard normal distribution.

The policy update is

$$
\max_\theta \mathop{\mathbb{E}}\_{\substack{s \sim \mathcal{D} \\\\\ \xi \sim \mathcal{N}}}\left[ \min_j Q_{\phi_j}(s, \tilde{a}\_\theta(s, \xi)) - \alpha \log \pi\_\theta \left( \tilde{a}_\theta(s, \xi) \mid s \right) \right] \tag{policy improvement}
$$

# Algorithm

1. Repeat for $n$ iterations
    1. Use policy to sample transitions that go into a dataset $\mathcal{D}$
    2. Update the parameters to the Q-functions and policy through gradient descent.

---