**Principle component analysis (PCA)** is a dimension reduction technique that takes a [[design matrix]] $\mathbf{X} \in \RR^{n \times d}$ (therefore of dimensionality $d$) and tries to reduce it to dimension $k < d$.

# Procedure

* Center the data by subtracting the mean. Call this $\bar{\mathbf{X}}$.
* Compute $\Sigma = \bar{X}^\mathsf{T}\bar{X}$
* Do an [[eigendecomposition]] on the [[covariance matrix]] $\Sigma = QDQ^\mathsf{T}$.
* Keep the $k$ eigenvectors with the highest variance (highest eigenvalues in $D$). $Q_k \equiv Q_{:,1:k}$

The **principal components** are the right singular vectors of $\mathbf{\bar{X}}$, i.e. the eigenvectors of the sample [[covariance matrix]].

$$\bar{X}_k \triangleq \bar{X}Q_k \in \mathbb{R}^{n \times k}.$$ We can expand back by doing

\begin{equation*}
\bar{X}_{\mathsf{reconstruction}} = \bar{X}_k Q_k^\mathsf{T}
\end{equation*}