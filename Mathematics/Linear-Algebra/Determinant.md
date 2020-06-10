The **determinant** of a square matrix compresses the information in a matrix to a scalar. Clearly, there will be information loss since a scalar is a one-dimensional number.[^technicality] Instead, the sign of the scalar tells you whether the transformation flips the coordinate orientation, and the absolute value tells you how much a unit hypercube scales under the linear transformation.

[^technicality]: Assuming you have a matrix of rank greater than 1.

\begin{equation}
\det: M_{n \times n}(F) \to F
\end{equation}