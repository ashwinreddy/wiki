The **Z-transform** $X$ of a DT signal $x[n]$ is

$$
X(z) = \sum_{n=-\infty}^\infty x[n] z^{-n}
$$

The region of convergence is $R_x = \\{z\in \mathbb{C} \mid  |X(z)| < \infty \\}$.

# [[Discrete Fourier Transform]]

$$
X[k]= X(z)|_{z = e^{\iota \frac{2\pi}{N} k}}
$$

# Common Transforms

|Signal|Transform|ROC|
|------|---------|---|
|$\delta[n]$|1|all $z$|
|$\delta[n-m]$|$z^{-m}$|all $z$ except $z=0$ if $m>0$, all $z$ except $z=\infty$ if $m < 0$|
|$u[n]$|$1 \over 1 - z^{-1}$|$|z| > 1$|