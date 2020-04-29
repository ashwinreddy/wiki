**Ridge regression** is an extension of [[ordinary least squares]] where

$$
\hat\beta = (X^\top X + \lambda I)^{-1} X^\top \vec{y}
$$

$$
L = \lVert X\vec{w} - \vec{y} \rVert^2_2 + \lambda \lVert \vec{w} \rVert^2_2
$$