**Singular value decomposition (SVD)** is a [[matrix decomposition]] that can be applied to any $m \times n$ matrix $A$ of rank $r$. SVD comes in many variants. The full SVD decomposes $A$ into two rotations represented by [[orthogonal matrices|orthogonal matrix]] $U$ and $V$ and a stretching by [[diagonal matrix]] $\Sigma$:

\begin{equation}
\label{eq:full-svd}
A = U\Sigma V^\top
\end{equation}

Every variant, however, of SVD is just a description of

$$
A = \sum_{i=1}^r \sigma_i \vec{u}_i \vec{v}_i^\top
$$

# Interpretation

$$
A^\top A = V\Sigma U^\top U \Sigma V^\top = V \Sigma^2 V^\top
$$

$$
AA^\top = U\Sigma V^\top V \Sigma U^\top = U\Sigma^2 U^\top
$$

## Range and Null Space



The column space of $A$ comes from the first $r$ columns of $U$ (i.e. $\vec{u}_1,\dots,\vec{u}_r$). As a quick proof,

$$
A\vec{x} = \sum_{i=1}^r \sigma_i \vec{u}_i \vec{v}_i^\top\vec{x} = \sum_{i=1}^r   \langle \sigma_i\vec{v}_i, \vec{x} \rangle \vec{u}_i
$$

By the [[fundamental theorem of linear algebra]], the null space of $A$ comes from the last right singular vectors $\vec{v}_{r+1}, \dots, \vec{v}_n$.

# Connection to Eigenpairs

Notice an alternate way of writing Equation \ref{eq:full-svd} is similar to [[diagonalizable matrix]]

$$
AV = U \Sigma
$$

# Variants

The dimensions of these matrices depend on the variant.

|Type|$U$|$\Sigma$|$V$|
|----|---|--------|----|
|Full|orthogonal, $m \times m$|$m \times n$|orthogonal, $n \times n$|
|Compact|$m \times r$|$r \times r$|$n \times r$|


# Intuition

The key equations here are

$$
AA^\top \vec{u}_i = \lambda_i \vec{u}_i, \quad i =1, \dots, m.
$$

$$
A^\top A \vec{v}_i = \lambda_i \vec{v}_i,\quad i=1, \dots, n.
$$



$$
\sigma_i = \sqrt{\lambda_i},\quad i = 1, \dots, r
$$

The straightforward decomposition, known as the **compact SVD**, is

$$
A_{m \times n} = U_{m \times r} \Sigma_{r \times r} V^\top_{r \times n}
$$

The full SVD is

$$
A_{m \times n} = U_{m \times m} \Sigma_{m \times n} V^\top_{n \times n}
$$

# Computation

You may choose to use either $A^\top A$ or $AA^\top$ to find the SVD. In either case, the first step is to find the eigenvalues of your chosen square matrix. Next, you need to find the eigenvectors $\lambda_i$. Collect the non-negative eigenvalues (if you find any negative $\lambda$, you messed up). 


|Step|$A^\top A$|$AA^\top$|
|----|-----------|--------|
|1. Find eigenvalues|||
|2. Find one set of eigenvectors|$\vec{v}_i$|$\vec{u}_i$|
|3. Obtain the other set by computation|$\vec{u}_i = \frac{1}{\sigma_i}A\vec{v}_i$|$\vec{v}_i = \frac{1}{\sigma_i}A^\top \vec{u}_i$|

