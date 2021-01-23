The **determinant** of a [[square matrix]] compresses the information in a matrix to a scalar via a [[multilinear map]].  Clearly, there will be information loss for any matrix of rank greater than one, so what can the determinant really tell us? The sign of the scalar tells you whether the transformation flips the coordinate orientation, and the absolute value tells you the volume spanned by the vectors of the matrix. Critically, a matrix is singular if and only if its determinant is zero.

The determinant is a [[group homomorphism]]:

\begin{equation}
\det(AB) = \det(A)\det(B).
\end{equation}

# Properties

* $\det(I) = 1$.
* A single swap of columns or rows introduces a change of sign in the output.
* The determinant is invariant to [[transpose]].
* The determinant of a matrix is equal to the product of its eigenvalues. $\det A = \prod_i \lambda_i$.

# Computation

The computation itself is probably the least interesting aspect of determinants, but it is important.

\begin{equation}
\begin{vmatrix} a & b \\\\\ c & d\end{vmatrix} = ad-bc \tag{$2\times 2$ determinant}
\end{equation}