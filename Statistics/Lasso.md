**Lasso** is a regression with a regularization $\ell_1$ penalty on the weights

$$
\vec{w}^* = \arg\min_{\vec{w}} \lVert X\vec{w}-\vec{y}\rVert_2^2 + \lambda \lVert \vec{w} \rVert_1
$$

The benefit of Lasso is that it can zero out irrelevant features. weight sparsity

[[https://leimao.github.io/blog/Group-Lasso/]]