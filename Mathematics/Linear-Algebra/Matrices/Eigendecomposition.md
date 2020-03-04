Consider all the (linearly independent) eigenvectors $\vec{v}_i$ and corresponding eigenvalues $\lambda_i$ for a matrix $A$. If we collect these column vectors into a matrix $V$ and create $\Lambda = \mathrm{diag}(\lambda_1, \ldots, \lambda_n)$, we can say

\\[
AV = V\Lambda
\\]

The Eigendecomposition of $A$ is

\\[
A = V\Lambda V^{-1}
\\]

# Solving system of differential equations

Suppose we are solving

\\[
\frac{\rm d}{\mathrm{d}t}\vec{x} = \mathbf{A}\vec{x}
\\]

One way to solve this system is to diagonalize $\mathbf{A}$.

\\[
\frac{\rm d}{\mathrm{d}t}\vec{x} = V\Lambda V^{-1}\vec{x}
\\]

Let's multiply both sides by $V^{-1}$.

\\[
V^{-1}\cdot \frac{\rm d}{\mathrm{d}t}\vec{x} = V^{-1}V\Lambda V^{-1}\vec{x}
\\]

$V^{-1}$ is just a constant as far as the differentiation is concerned. Let's define $\vec{z} = V^{-1}\vec{x}$ and clean this all up:

\\[
\frac{\mathrm{d}}{\mathrm{d}t}\vec{z} = \Lambda \vec{z}
\\]

It's now fairly easy to solve for $\vec{z}$ since each $z_i$ depends only on itself. So once you've found a solution vector $\vec{z}$, push it back through the transformation to get the real solution $\vec{x}$.
