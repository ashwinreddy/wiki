**Multiplicative weights or Hedge** is an [[algorithm]].

# Setting

We have $n$ experts who give advice over the course of $T$ days. We have a [[probability distribution]] over the experts, i.e. $x^{(t)}_i$ is the probability of picking expert $i$ on day $t$. 

$$
L_t = \sum_{i=1}^n x_i^{(t)} \ell_i^{(t)}
$$

We don't aim to minimize the loss, we instead aim to minimize regret:

$$
\text{Offline Optimum} = \min_{x \in \Delta} \sum_{t=1}^T \sum_{i=1}^n x_i \ell_i^{(t)} =  \min_{i \in [n]} \sum_{t=1}^T \ell_i^{(t)}
$$

$$
R \equiv \overbrace{ \sum_{t=1}^T L_t }^{\text{Our Loss}} - \text{Offline Optimum}
$$


# Algorithm

Pick $0 \leqslant \epsilon \leqslant \frac{1}{2}$. We define weights $w_i^{(t)}$. The distribution $x^{(t)}_i$ will directly come from the weights by normalizing. 

Define $W_t$ to be the sum of weights at time $t$.

$$
W_t \triangleq \sum_{i=1}^n w_i^{(t)}
$$

$$
x^{(t)}\_i = \frac{ w_i^{(t)} }{ W_t }
$$

We initially do a uniform distribution: $w_i^{(0)} = 1$. Then we do multiplicative updates

$$
w_i^{(t+1)} = w_i^{(t)} \cdot (1 - \epsilon)\^{\ell_i^{(t)}}
$$

_Theorem_. Assume losses are in $[0,1]$. Then the regret after $T$ steps is

$$
R_T \leqslant \epsilon T + \frac{\ln n}{\epsilon}
$$

If $T > 4 \ln n$ and $\epsilon = \sqrt{\ln n \over T}$

$$
R_T \leqslant 2\sqrt{T \ln n}
$$
