**Multiplicative weights**. We have $n$ experts who give advice. We follow expert $i_t \in [n]$ on day $t \in \\{1, \dots, T\\}$. The expert incurs a loss of $l_i^{(t)}$ on day $t$. Then, the total loss is

$$
L \equiv \sum_{t=1}^T \ell_{i_t}^{(t)}.
$$

Let us then define the regret

$$
R \equiv L - \min_{i \in [n]} \sum_{t=1}^T \ell_i^{(t)}
$$
