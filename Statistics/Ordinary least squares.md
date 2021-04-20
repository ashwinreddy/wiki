**Ordinary least squares (OLS)** finds the optimal parameters $\beta$ to a linear model $y = X\beta$ for [[design matrix]] $X$ by solving

$$
\hat\beta = \arg\min_\beta \lVert y - X\beta \rVert^2
$$

The closed form solution is

$$
\beta = (X\^\mathsf{T}X)\^{-1}X^\mathsf{T}y
$$

To see it, hit both sides with $X^\mathsf{T}$:

$$
X^\mathsf{T}y = X^\mathsf{T}X \beta \implies (X\^\mathsf{T}X)^{-1} X^\mathsf{T}y =  \beta
$$