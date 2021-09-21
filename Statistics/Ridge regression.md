**Ridge regression** is an extension of [[ordinary least squares]] [[linear regression]] where we add a multiple $\lambda$ of the [[identity matrix]] before inversion. If the [[design matrix]] is $X$,

\begin{equation}
\beta = (X\^\mathsf{T}X + \lambda I)\^{-1}X^\mathsf{T}y
\end{equation}

where $X \in \mathbb{R}^{n \times d}$ and $y \in \mathbb{R}^n$