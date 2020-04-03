Any matrix $A \in \mathbb{R}^{m \times n}$ of [[rank]] $r$ admits a decomposition

\\[
A = U\Sigma V^T
\\]

\\[
\Sigma_{ii} = \sigma_i = \sqrt{\lambda_i(A^TA)}
\\]

with $U \in O(m)$ and $V \in O(n)$ (see [[orthogonal group]]) and $\Sigma$ [[diagonal matrix]].

# Derivation

By the [[spectral theorem]], we can say the following:

\\[
A^TA = V \Lambda V^T
\\]

\\[
AA^T = U\Lambda U^T
\\]


\\[
\Lambda = \Sigma^T\Sigma
\\]

\\[
AV = U\Sigma
\\]