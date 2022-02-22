**AlphaGo** is a program that plays Go using an [[artificial neural network]] and a tree search. It uses **value networks** to evaluate board positions and **policy networks** to select moves. The networks are supervised from human expert games and also engage in RL through self-play.

1. Supervised learning for policy. Pre-train a policy network $p_\sigma(a \mid s)$ from expert moves. If the human selected action $a$ in state $s$, then change $\sigma$ to make that likelihood higher

$$
\Delta \sigma \propto \frac{\partial \log p_\sigma(a \mid s)}{\partial \sigma}
$$

2. RL for policy. Play the current $p_\rho$ aginst a randomly selected previous iteration of the policy network. It ends in terminal state $s_T$ and pays out reward $r(s_T)$. Let $z_t = \pm r(s_T)$ based on the perspective of current player.

$$
\Delta \rho \propto \frac{\partial \log p_\rho(a_t \mid s_t)}{\partial \sigma}z_t
$$

3. RL for value. 

$$
v^p(s) = \mathbb{E}\left[ z_t \mid s_t = s, a_{t \dots T} \sim p \right]
$$

[[/uploads/mcts-alphago.png]]