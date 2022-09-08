**Ridge regression** estimates the weights for a $X\mathbf{w} \approx y$.

$$
\mathbf{w}^\star = \arg\min_{\mathbf{w}} \lVert X\mathbf{w} - y\rVert_2^2 + \lambda \lVert \mathbf{w} \rVert_2^2
$$

The closed-form solution is given by

$$
\mathbf{w}^\star = \left(X^\mathsf{T}X + \lambda I\right)\^{-1}X^\mathsf{T}y
$$