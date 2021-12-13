**Lasso (least absolute shrinkage and selection operator)** modifies [[ordinary least squares]] with regularization in the $\ell_1$-norm:

\begin{gather\*}
\hat{w} = \arg\min_\beta J(w) \\\\
J(w) = \lVert Xw - y \rVert ^2 + \lambda \lVert w \rVert_1
\end{gather\*}


Lasso encourages weights of 0, so it is good for feature subset selection.