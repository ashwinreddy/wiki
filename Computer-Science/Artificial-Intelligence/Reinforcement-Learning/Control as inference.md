**Control as inference** is a way of seeing reinforcement learning and/or optimal control through the lens of inference.

Every timestep $t$ gets assigned an optimality random variable that depends on the state and the action taken.

$$
\Pr(e_t = 1 \mid S_t = s_t, A_t = a_t) = f(s_t, a_t)
$$

[[https://dibyaghosh.com/blog/assets/posts/controlasinference/state_action_reward.png|align=center,height=200px]]