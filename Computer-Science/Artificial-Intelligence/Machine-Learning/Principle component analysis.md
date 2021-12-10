**Principle component analysis (PCA)** is a dimension reduction technique. Let's say our data is given to us as $\mathbf{X} \in \RR^{n \times d}$. 

* Center the data by subtracting the mean. Call this $\bar{\mathbf{X}}$.
* Compute $\Sigma = \bar{X}^\mathsf{T}\bar{X}$
* Do an [[eigendecomposition]] on the [[covariance matrix]] $\Sigma = QDQ^\mathsf{T}$.
* Keep the $k$ eigenvectors with the highest variance (highest eigenvalues in $D$). $Q_k \equiv Q_{:,1:k}$

The **principal components**, i.e. projections, are $$\bar{X}_k \triangleq \bar{X}Q_k \in \mathbb{R}^{n \times k}.$$ We can expand back by doing

\begin{equation*}
\bar{X}_{\mathsf{reconstruction}} = \bar{X}_k Q_k^\mathsf{T}
\end{equation*}