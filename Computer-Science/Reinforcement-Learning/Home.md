A trajectory $\tau$ is a sequence of states and actions $(s_0, a_0, s_1, a_1, \dots, a_{T-1}, s_T)$. The undiscounted reward of a finite-horizon trajectory is

\\[
R(\tau) = \sum_{t=0}^T r_t
\\]

The discounted reward of an infinite-horizon trajectory is

\\[
R(\tau) = \sum_{t=0}^\infty \gamma^t r_t
\\]