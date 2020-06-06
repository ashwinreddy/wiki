A **complex number** is a $z = a + b \iota$ for $a, b \in \RR$ and $\iota$ the [[imaginary unit]].


# As a Matrix

One way to represent a complex number is with a matrix. We let

\begin{align\*}
1 &= \begin{bmatrix}1 & 0 \\\\ 0 & 1\end{bmatrix} = I \\\\\ 
\iota &= \begin{bmatrix}0 & -1 \\\\ 1 & 0\end{bmatrix} \\\\\
\end{align\*}

Notice that $\iota^2 = -1$.

This gives us

$$
a + b \iota = \begin{bmatrix} a & -b \\ b & a \end{bmatrix}
$$

$$
\det(a + b \iota) = a^2 + b^2
$$

# Rotation

Take two arbitrary points $v$ and $w$. Their distance after multiplication by a complex number $u$ with absolute value 1 is preserved. In more technical terms, multiplication by $u$ is an [[isometry]]

$$
|uv - uw| = |u| \cdot |v-w| = |v-w|
$$