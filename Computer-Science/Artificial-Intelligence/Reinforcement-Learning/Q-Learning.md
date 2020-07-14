**Q-Learning** is an algorithm that aims to get an accurate [[Q-function|action-value function]] estimation. It does this by iteratively applying the Bellman (optimality?) operator. Then, a greedy policy can be extracted by computing $\pi(s_t) = \arg\max_a Q(s_t,a)$ or in the stochastic case, $\pi(a_t \mid s_t) = \delta(a_t = \arg\max_a Q(s_t, a_t))$ using the [[Kronecker delta]].



[@levine2020offline]