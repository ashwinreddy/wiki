**Universal hashing**. A class of hash functions $\mathcal{H}$ is universal if for any $x \neq y \in \mathcal{U}$, 

$$
\Pr_{h \in \mathcal{H}}\left[h(x) = h(y)\right] \leqslant \frac{1}{m}
$$

A stronger condition is [[pairwise independence]], which means for every fixed pair $(x,y)$ of keys $x \neq y$, and for any $h$ chosen uniformly at random from $\mathcal{H}$, the pair $(h(x), h(y))$ is equally likely to be any of the $m^2$ elements from $\\{0, 1, \dots, m-1\\}$.

$$
\text{pairwise independent} \implies \text{universal}
$$

$$
h_{a,b}(x) = ax + b \mod m
$$

is a pairwise independent hash family