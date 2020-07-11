**Actor-critic** is an architecture/structure for an RL algorithm where you have an actor that updates the policy and a critic estimates the [[action-value function]] $Q$, and you alternate between policy evaluation and policy improvement. If $\phi_k$ are the parameters to $Q$, then policy evaluation is the step

$$
\phi_k = \arg\max_\theta \mathbb{E}_\mathcal{D}\left[\left( Q_\phi(s, a) - y \right)^2 \right]
$$