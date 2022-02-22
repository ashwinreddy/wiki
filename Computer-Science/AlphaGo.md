**AlphaGo** is a program that plays Go using an [[artificial neural network]] and a [[tree search|graph traversal]]. It uses **value networks** to evaluate board positions and **policy networks** to select moves. 

1. Supervised learning for policy. Pre-train a [[policy]] network $p_\sigma(a \mid s)$ from expert moves. If the human selected action $a$ in state $s$, then change $\sigma$ to make that likelihood higher

$$
\Delta \sigma \propto \frac{\partial \log p_\sigma(a \mid s)}{\partial \sigma}
$$

2. RL for policy. Play the current $p_\rho$ aginst a randomly selected previous iteration of the policy network. It ends in terminal state $s_T$ and pays out reward $r(s_T)$. Let $z_t = \pm r(s_T)$ based on the perspective of current player. Make actions more likely if they result in win and less if they result in loss:

$$
\Delta \rho \propto \frac{\partial \log p_\rho(a_t \mid s_t)}{\partial \sigma}z_t
$$

3. RL for value. Let $v_\theta(s)$ be the [[value function]]. Regress on state-outcome pairs $(s,z)$ to minimize MSE.

$$
\Delta \theta \propto \frac{\partial v_\theta(s)}{\partial \theta}\big(z - v_\theta(s)\big)
$$

$$
v^p(s) = \mathbb{E}\left[ z_t \mid s_t = s, a_{t \dots T} \sim p \right]
$$

Now, you have a policy and value function and you can do [[Monte Carlo Tree Search]] with it to select actions with a lookahead. Each edge $(s,a)$ of the search tree stores a $Q(s,a)$ and a visit count $N(s, a)$ and prior probability $P(s, a)$.

$$
a_t = \arg\max_a \left( Q(s_t, a) + u(s_t, a) \right)
$$

[[/uploads/mcts-alphago.png]]