**Ridge regression** is an extension of [[ordinary least squares]] where

$$
\hat\beta = (A^\top A + \lambda I)^{-1} A^\top \vec{y}
$$

$$
L = \lVert A\vec{w} - \vec{y} \rVert^2_2 + \lambda \lVert \vec{w} \rVert^2_2
$$