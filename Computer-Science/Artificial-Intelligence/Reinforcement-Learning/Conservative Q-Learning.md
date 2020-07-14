---
bibliography: './Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib'
---

**Conservative Q-Learning** [@kumar2020conservative] is an [[offline reinforcement learning]] algorithm that modifies [[Q-learning]] so not to be erroneously optimistic (i.e. giving high value to states it has not seen before). In practice, it adds a Q-value regularizer, denoted $\mathcal{R}(\mu)$.


The algorithm comes up with a lower bound on the Q value, thereby making it conservative. However, we don't want a lower bound that is point-wise for each input to $Q$; we want one that is a lower bound in expectation.

As an offline algorithm, we have access to a dataset $\mathcal{D}$. We write the action-conditional for the dataset as $\pi_\beta(a \mid s)$ and the marginal state distribution as $d^{\pi_\beta}(s)$ so that $\mathcal{D}$ samples from the product of these two. We can also track empirically what $\hat{\pi}_\beta(a_0 \mid s_0)$ is.

The modification that conservative Q-learning makes is to try to maximize Q-values under a distribution $\mu$ (which we restrict to obey $\mu(s) =d^{\pi_\beta}(s)$) in addition to trying to minimze mean squared Bellman error. This will result in lower bounded $\hat{Q}^\pi$, but we can make this a tighter bound if the goal is ultimately to use Q as a way to estimate the [[value function]] V by trying to maximize $Q$ under $\hat{\pi}_\beta$ and selecting $\mu(a \mid s) = \pi(a \mid s)$.

$$
\hat{Q}^\pi_\text{CQL} = \arg\min_Q \alpha\left( \underbrace{\mathbb{E}\_{s \sim \mathcal{D}, a \sim \mu(a \mid s)}\left[Q(s,a)\right]}\_{\text{minimize Q-values}} - \underbrace{\color{red}{\mathbb{E}\_{s \sim \mathcal{D}, a \sim \hat{\pi}\_\beta(a \mid s)}\left[Q(s,a)\right]}}\_{\text{maximize Q-values under data}} \right) + \underbrace{\frac{1}{2}\mathbb{E}\_{s,a,s' \sim \mathcal{D}}\left[ \left(Q - \hat{B}^\pi Q\right)^2 \right]}_{\text{standard Bellman error}}
$$

It says the Q-functions for OOD actions are pushed down. 

# Implementation

CQL can be added to an [[actor-critic]] or [[Q-learning]] algorithm.

We just need to add CQL regularization term to the Q-function update. 

## Algorithm

1. Learn $\hat{Q}^\pi_{\text{CQL}}$ using offline data $\mathcal{D}$
2. Optimize policy w.r.t. $\hat{Q}^\pi_{\text{CQL}}$: $$\pi \leftarrow \arg\max_\pi \mathbb{E}_\pi\left[\hat{Q}^\pi_{\text{CQL}}\right]$$
3. Repeat

---