**Ordinary least squares (OLS)** finds the optimal parameters $\beta$ to a linear model $y = X\beta$ by solving

$$
\arg\min \lVert y - X\beta \rVert^2
$$



$$
\beta = (X\^\mathsf{T}X)\^{-1}X^\mathsf{T}y
$$