Any matrix $A \in \mathbb{R}^{m \times n}$ of [[rank]] $r$ admits a decomposition

\\[
A = U\Sigma V^T
\\]

\\[
\Sigma_{ii} = \sigma_i = \sqrt{\lambda_i(A^TA)}
\\]

with $U \in O(m)$ and $V \in O(n)$ (see [[orthogonal group]]) and $\Sigma $ an $m \times n$ matrix.

# Derivation

By the [[spectral theorem]], we can say the following:

\\[
A^TA = V \Lambda V^T
\\]

\\[
AA^T = U\Lambda U^T
\\]

However, we know that both $A^TA$ and $AA^T$ are PSD, so their eigenvalues are guaranteed non-negative. That means we can take their square roots, so we have no problem decomposing $\Lambda$ itself into 

\\[
\Lambda = \Sigma^T\Sigma
\\]

We can then insert this into both of our equations.

\\[
A^TA = V \Sigma^T\Sigma V^T
\\]

\\[
AA^T = U\Sigma^T\Sigma U^T = (U\Sigma)
\\]