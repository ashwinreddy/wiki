**Tikhonov regularization**

$$
J(w) = \lVert Xw - y\rVert^2 + \lVert \Gamma w \rVert_2^2.
$$

when $\Gamma = \lambda I$, we get [[ridge regression]]. The [[normal equation]] is given with $\nabla_w J = 0$, which yields

$$
w^* = \left(X^\mathsf{T}X + \Gamma\^\mathsf{T}\Gamma\right)^{-1} X^\mathsf{T}y
$$