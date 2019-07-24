A trajectory $\tau$ is a sequence of states and actions $(s_0, a_0, s_1, a_1, \dots, a_{T-1}, s_T)$. The undiscounted reward of a finite-horizon trajectory is

\\[
R(\tau) = \sum_{t=0}^T r_t
\\]

The discounted reward of an infinite-horizon trajectory is

\\[
R(\tau) = \sum_{t=0}^\infty \gamma^t r_t
\\]

The probability of a trajectory is

\\[
P(\tau \vert \pi) = \rho_0(s_0)\prod_{t=0}^{T} P(s_{t+1} \vert s_t, a_t)\pi(a_t \vert s_t)
\\]

The expected return is 

\\[
J(\pi) = \mathbb{E}_{\tau \sim \pi}\left[R(\tau)\right]
\\]

\\[
\pi^\star = \arg\max_\pi J(\pi)
\\]