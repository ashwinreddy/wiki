**Ridge regression** is an extension of [[ordinary least squares]] [[linear regression]].

$$
\mathbf{w}_{\mathrm{ridge}} = \min_{\mathbf{w} \in \RR^d} \lVert \mathbf{X}\mathbf{w} - \mathbf{y} \rVert_2^2 + \lambda \lVert \mathbf{w} \rVert_2^2
$$

If the [[design matrix]] is $X$,

\begin{equation}
\beta = (X\^\mathsf{T}X + \lambda I)\^{-1}X^\mathsf{T}y
\end{equation}

where $X \in \mathbb{R}^{n \times d}$ and $y \in \mathbb{R}^n$