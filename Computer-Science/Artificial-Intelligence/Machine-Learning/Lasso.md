**Lasso** is like [[ordinary least squares]] linear least-squares regression with regularization in the $\ell_1$-norm:

$$
J(w) = |Xw - y|^2 + \lambda \lVert w \rVert_1
$$

Lasso encourages weights of 0, so it is good for feature subset selection.