**Maximum entropy (MaxEnt) inverse reinforcement learning (IRL)** is an [[inverse reinforcement learning]] method that uses a probabilistic model of behavior. We're going to track a learned reward function $R_\psi(t) = \sum_t r_\psi(s_t, a)$ and some expert demonstration [[trajectories|trajectory]] $\mathcal{D}: \\{\tau_i\\} \sim \pi^* $. 

The MaxEnt formulation imposes

$$
p(\tau) = \frac{1}{Z} \exp R_\psi(\tau).
$$

To infer the reward function, we just do [[maximum likelihood estimation]]:

$$
\arg\max_\psi L(\psi), \quad L(\psi) = \sum_{\tau \in \mathcal{D}} \log p_{r_\psi}(t)
$$