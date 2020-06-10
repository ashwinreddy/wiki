A **complex number** is a number of the form $a+ b \iota$ where $\iota = \sqrt{-1}$. The complex numbers naturally describe the 2D plane as [[Euler's formula]] allows us to use them both for polar and Cartesian coordinates. In addition, their algebra means that a complex number "encodes" a rotation through multiplication.

\begin{equation}
\overbar{a+b\iota} = a - b\iota
\end{equation}

# Matrix Construction

Since $a + b\iota$ is just a linear combination of two vectors, we should be able to represent it using an appropriate 2-dimensional vector space. Of course, we could just equip $\RR^2$ with the right multiplication structure, but we can also use a matrix so that matrix multiplication _is_ complex multiplication. As we know from linear algebra, it suffices to just work out how the bases transform and let the rest flow from there:

\begin{equation}
1 = \begin{bmatrix}1 & 0 \\\\\ 0 & 1 \end{bmatrix},\quad \iota = \begin{bmatrix}0 & -1 \\\\ 1 & 0\end{bmatrix}
\end{equation}

\begin{equation}
a + b \iota = \begin{bmatrix}a & -b \\\\\ b & a\end{bmatrix}
\end{equation}
