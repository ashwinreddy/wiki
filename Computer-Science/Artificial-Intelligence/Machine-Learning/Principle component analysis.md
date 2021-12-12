**Principle component analysis (PCA)** is a dimension reduction technique that takes a [[design matrix]] $\mathbf{X} \in \RR^{n \times d}$ (therefore of dimensionality $d$) and tries to reduce it to dimension $k < d$. The general idea is to see which directions in the $d$ dimensional space capture the most information (measured by variance), then project the data down to those directions. These directions should be orthogonal to each other.

> PCA is just a low rank approximation of the sample covariance matrix.

The technique relies on [[diagonalization|diagonalizable matrix]].

# Procedure

1. Center the data by subtracting the mean. Call this $\bar{\mathbf{X}}$. $$\bar{\mathbf{X}} = \mathbf{X} - \begin{bmatrix} \bar{x}_1 & \dots & \bar{x}_d \end{bmatrix}$$


Consider $\Sigma = \bar{X}^\mathsf{T}\bar{X} \in \RR^{d \times d}$ and do an [[eigendecomposition]] on it:

$$
\bar{X}^\mathsf{T}\bar{X} = \Sigma = QDQ^\mathsf{T}
$$

Principal axes
: The $Q$ matrix

Keep the $k$ eigenvectors with the highest variance (highest eigenvalues in $D$). $Q_k \equiv Q_{:,1:k}$

The **principal components** are the right singular vectors of $\mathbf{\bar{X}}$, i.e. the eigenvectors of the sample [[covariance matrix]].

$$\bar{X}_k \triangleq \bar{X}Q_k \in \mathbb{R}^{n \times k}.$$ We can expand back by doing

\begin{equation*}
\bar{X}_{\mathsf{reconstruction}} = \bar{X}_k Q_k^\mathsf{T}
\end{equation*}