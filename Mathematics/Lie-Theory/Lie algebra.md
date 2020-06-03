The **Lie algebra** $\mathfrak{g}$ of a [[matrix Lie group]] $G$ is given by those $n \times n$ matrices $X$ such that the [[matrix exponential]] $e^{tX} \in G$ for $t \in \RR$. 

# Examples

Let's find the Lie algebra of the [[3D rotation group]] $SO(3)$. An infinitesimal transformation is given by $O = I + \epsilon J$, and we need to find $J$. But since $O$ is an [[orthogonal matrix]], we must have

\begin{gather}
(I + \epsilon J)^\mathsf{T} ( I + \epsilon J) = I \\\\\
I + \epsilon J^T + \epsilon J + \epsilon^2 J^\mathsf{T} J = I
\end{gather}

The above derivation came from [here](http://jakobschwichtenberg.com/naive-introduction-lie-theory/)