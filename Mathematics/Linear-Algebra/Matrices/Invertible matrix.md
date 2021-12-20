An **invertible matrix** is a [[square matrix]] $\mathbf{A}$ whose operation can be "undone", that is we can find an $\mathbf{A}^{-1}$ such that

\begin{equation}
\mathbf{A}\mathbf{A}^{-1}=\mathbf{A}^{-1}\mathbf{A} = \mathbf{I}
\end{equation}

with $I$ the [[identity matrix]]. An invertible matrix must then be one that loses no information, which can happen if columns/rows are linearly dependent. If a matrix is not invertible, it is singular. There are no other options.

An operational definition for an invertible matrix is one whose [[determinant]] is nonzero.

# Properties

* The inverse, if it exists, is unique.
* A left inverse is a right inverse and vice versa.

# Formula

$$
\begin{bmatrix}
a & b \\\\ c & d
\end{bmatrix}^{-1} = \frac{1}{\det } \begin{bmatrix} d & - b \\\\ -c & a\end{bmatrix}
$$