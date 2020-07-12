**Actor-critic** is an architecture/structure for an RL algorithm where you have an actor that updates the policy and a critic estimates the [[action-value function]], and you alternate between policy evaluation and policy improvement. 

$$
\hat{Q} \leftarrow \arg\min_Q \mathbb{E}_\mathcal{D}\left[\left( Q(s, a) - y \right)^2 \right] \tag{Policy Evaluation}
$$

If $\theta_k$ are the parameters to $\pi$, the policy improvement step is

$$
\hat{\pi} = \arg\max_{\pi} \mathbb{E}_{s \sim \mathcal{D}}\left[ \mathbb{E}\_{\pi_\theta(a \mid s)} \left[ Q_{\phi_k}(s,a) \right] \right] \tag{Policy Improvement}
$$