The **determinant** of a [[square matrix]] compresses the information in a matrix to a scalar. 


\begin{equation}
\det: M_{n \times n}(F) \to F
\end{equation}

Clearly, there will be information loss for any matrix of rank greater than one, so what can the determinant really tell us? The sign of the scalar tells you whether the transformation flips the coordinate orientation, and the absolute value tells you the volume spanned by the vectors of the matrix. Critically, a matrix is singular if and only if its determinant is zero.

The determinant is a [[group homomorphism]]:

\begin{equation}
\det(AB) = \det(A)\det(B).
\end{equation}

# Properties

* A single swap of columns or rows introduces a change of sign in the output.

# Computation

The computation itself is probably the least interesting aspect of determinants, but it is important.

\begin{equation}
\begin{vmatrix} a & b \\\\\ c & d\end{vmatrix} = ad-bc \tag{$2\times 2$ determinant}
\end{equation}