**Principle component analysis (PCA)** is a dimension reduction technique. Let's say our data is given to us as $\mathbf{X} \in \RR^{n \times d}$. 

* Center the data by subtracting the mean. Call this $\bar{X}$.
* Compute $\Sigma = \bar{X}^\mathsf{T}\bar{X}$
* Do an [[eigendecomposition]] on the [[covariance matrix]] $\Sigma = QDQ^\mathsf{T}$.
* Keep the $k$ eigenvectors with the highest variance (highest eigenvalues in $D$)
* Project points back onto this subspace.