**Lasso (least absolute shrinkage and selection operator)** modifies [[ordinary least squares]] with regularization in the $\ell_1$-norm:

$$
J(w) = \lVert Xw - y \rVert ^2 + \lambda \lVert w \rVert_1
$$

Lasso encourages weights of 0, so it is good for feature subset selection.