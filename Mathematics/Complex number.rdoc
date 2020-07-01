A **complex number** is a number of the form $z = a+ b \iota$ where $\iota$ is the [[imaginary unit]]. The complex numbers naturally describe the 2D plane as [[Euler's formula]] allows us to use them both for polar and Cartesian coordinates. In addition, their algebra means that a complex number "encodes" a rotation through multiplication.

# Notation

It is useful to refer to the real and imaginary parts of a complex number without needing to label these explictly. 

\begin{equation}
z \equiv \Re(z) + \iota \Im(z)
\end{equation}

# Matrix Construction

Since $a + b\iota$ is just a linear combination of two vectors, we should be able to represent it using an appropriate 2-dimensional vector space. Of course, we could just equip $\RR^2$ with the right multiplication structure, but we can also use a matrix so that matrix multiplication _is_ complex multiplication. As we know from linear algebra, it suffices to just work out how the bases transform and let the rest flow from there:

\begin{equation}
1 = \begin{bmatrix}1 & 0 \\\\\ 0 & 1 \end{bmatrix},\quad \iota = \begin{bmatrix}0 & -1 \\\\ 1 & 0\end{bmatrix}
\end{equation}

\begin{equation}
a + b \iota = \begin{bmatrix}a & -b \\\\\ b & a\end{bmatrix}
\end{equation}