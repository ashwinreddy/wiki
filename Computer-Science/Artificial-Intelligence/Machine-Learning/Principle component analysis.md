**Principle component analysis (PCA)** is a dimension reduction technique. Let's say our data is given to us as $\mathbf{X} \in \RR^{n \times d}$. 

* Zero-mean each feature
* Compute $\Sigma = X^\mathsf{T}X$
* Do an eigendecomposition $\Sigma = QDQ^\mathsf{T}$.
* Keep the $k$ eigenvectors with the highest variance (highest eigenvalues in $D$)
* Project points back onto this subspace.