**AlphaGo** is a program that plays Go using an [[artificial neural network]] and a [[tree search|graph traversal]]. It uses **value networks** to evaluate board positions and **policy networks** to select moves. There are three phases.

[[_TOC_]]

# Supervised learning 

We pre-train the weights $\sigma$ for a [[policy]] network $p_\sigma(a \mid s)$ using [[supervised learning]] on expert moves. If the human selected action $a$ in state $s$, then change $\sigma$ to make that likelihood higher

$$
\Delta \sigma \propto \frac{\partial \log p_\sigma(a \mid s)}{\partial \sigma}
$$

# RL for policy

Create a copy of $p_\sigma$ called $p_\rho$. We will now train $p_\rho$ with a [[policy gradient]] by playing against previous iterations of the policy network. Say it ends in terminal state $s_T$ and pays out reward $r(s_T)$. Let $z_t = \pm r(s_T)$ based on the perspective of current player. Make actions more likely if they result in a win and less if they result in a loss:

$$
\Delta \rho \propto \frac{\partial \log p_\rho(a_t \mid s_t)}{\partial \sigma}z_t
$$

# RL for value

We now want to estimate the [[value function]] $v^p(s)$ for policy $p$:

$$
v^p(s) = \mathbb{E}\left[z_t \mid s_t = s, a_{t \ldots T} \sim p\right]
$$

Let our approximation to the value function be $v_\theta(s)$. We can regress on state-outcome pairs $(s,z)$ to minimize MSE.

$$
\Delta \theta \propto \frac{\partial v_\theta(s)}{\partial \theta}\big(z - v_\theta(s)\big)
$$

# Searching with policy and value networks

Now, you have a policy and value function and you can do [[Monte Carlo Tree Search]] with it to select actions with a lookahead. Each edge $(s,a)$ of the search tree stores a $Q(s,a)$ and a visit count $N(s, a)$ and prior probability $P(s, a)$.

$$
a_t = \arg\max_a \big( Q(s_t, a) + u(s_t, a) \big)
$$

where

$$
u(s, a) \propto \frac{P(s,a)}{1 + N(s,a)}
$$

[[/uploads/mcts-alphago.png]]