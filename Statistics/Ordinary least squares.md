**Ordinary least squares (OLS)** finds the optimal parameters $\beta$ to a linear model $y = X\beta$ for [[design matrix]] $X$ by solving

$$
\hat\beta = \arg\min_\beta \lVert y - X\beta \rVert^2
$$

The closed form solution is

$$
\beta = (X\^\mathsf{T}X)\^{-1}X^\mathsf{T}y
$$