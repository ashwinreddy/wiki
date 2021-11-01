**Multiplicative weights**. We have $n$ experts who give advice over the course of $T$ days. We have a [[probability distribution]] over the experts, i.e. $x^{(t)}_i$ is the probability of picking expert $i$ on day $t$. 

$$
L_t = \sum_{i=1}^n x_i^{(t)} \ell_i^{(t)}
$$

$$
R \equiv \sum_{t=1}^T L_t - \min_{i} \sum_{t=1}^T \ell_i^{(t)}
$$