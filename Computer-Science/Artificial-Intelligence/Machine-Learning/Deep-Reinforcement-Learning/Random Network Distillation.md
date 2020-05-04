**[Random network distillation](https://arxiv.org/pdf/1810.12894.pdf)** (RND) introduces an exploration bonus for deep reinforcement learning methods. It adds an intrinsic reward $i_t$ along with the usual extrinsic reward $e_t$:

$$
r_t = i_t + e_t
$$

How do we find $i_t$ ? You have two neural networks: 

* _target_ network $f: \mathcal{O} \to \RR^k$: fixed and randomly initialized, setting the prediction problem
* _predictor_ network $\hat{f}: \mathcal{O} \to \RR^k$: trained on data collected by the agent.

The predictor is trained to minimize

$$
\mathbb{E}_{x}\left[ \lVert \hat{f}(x; \theta) - f(x) \rVert^2 \right]
$$

\begin{equation}
\label{eq:intrinsic-reward}
\boxed{i_t = \lVert \hat{f}(s_{t+1}) - f(s_{t+1}) \rVert^2}
\end{equation}

# Reward and Observation Normalization

One issue is that the reward scales vary over environments/time. To remedy this, divide the intrinsic reward by running standard deviation of the intrinsic return.

We also want to normalize on the output side, so each dimension of the observation is whitened by subtracting the mean and dividing by the standard deviation. The output is also clipped from -5 to 5.

# Algorithm

1. Sample a trajectory of length $M$ by picking uniformly over actions.
2. Use each state to update the observation normalization parameters
3. For each step in a rollout, compute $i_t$ using Equation \ref{eq:intrinsic-reward}. Also, update the reward normalization.
4. Between rollouts, update observation normalization parameters. When optimizing the policy, also optimize the distillation loss.