**Ridge regression** is an extension of [[ordinary least squares]] with regularization. The objective in ridge regression is to minimize

\begin{equation}
L = \lVert X\vec{w} - \vec{y} \rVert^2_2 + \lambda \lVert \vec{w} \rVert^2_2
\end{equation}

$$
\hat\beta = (X^\top X + \lambda I)^{-1} X^\top \vec{y}
$$

