The $k$th **order statistic** $X_{(k)}$ is the $k$th smallest of a set of [[random variables|random variable]] $X_1, \dots, X_n$.

$$
F_{X_{(r)}} = \sum_{j=r}^n \binom{n}{j} \left[ F_X(x) \right]^j \left[ 1 - F_x(x) \right]^{n-j}
$$

The $n$th order statistic is the biggest.

$$
F_{X_{(n)}}(x) = \left[ F_X(x) \right]^n
$$


Because if $\max \leq t$, then every one is $\leq t$.

$$
F_{X_{(1)}}(x) = 1 - \left[1 - F_X(x) \right]^n
$$
