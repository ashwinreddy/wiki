**Multiplicative weights**. 

# Setting

We have $n$ experts who give advice over the course of $T$ days. We have a [[probability distribution]] over the experts, i.e. $x^{(t)}_i$ is the probability of picking expert $i$ on day $t$. 

$$
L_t = \sum_{i=1}^n x_i^{(t)} \ell_i^{(t)}
$$

We don't aim to minimize the loss, we instead aim to minimize regret:

$$
R \equiv \sum_{t=1}^T L_t - \min_{i} \sum_{t=1}^T \ell_i^{(t)}.
$$


# Algorithm

Pick $0 \leqslant \epsilon \leqslant \frac{1}{2}$. We define weights $w_i^{(t)}$. The distribution $x^{(t)}_i$ will directly come from the weights by normalizing, i.e.

$$
x^{(t)}\_i = \frac{ w_i^{(t)} }{ \sum_{j=1}^n w_j^{(t)} }
$$

We initially do a uniform distribution: $w_i^{(0)} = 1$. Then we do multiplicative updates

$$
w_i^{(t+1)} = w_i^{(t)} \cdot (1 - \epsilon)\^{\ell_i^{(t)}}
$$

The regret is bounded as 

$$
R_T \leqslant \epsilon T + \frac{\ln n}{\epsilon}, \quad R_T \leqslant 2\sqrt{T \ln n}
$$

## Example

Let $\epsilon = \frac{1}{2}$ and $n=3$. Suppose $\ell^{(1)} = [0, 0.5, 1]$, $\ell^{(2)} = [7/8, 5/8, 4/8]$, and $\ell^{(3)} = [3/8, 1/8, 0]$.