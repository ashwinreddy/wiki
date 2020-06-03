The **Lie algebra** $\mathfrak{g}$ is the [[tangent space]] $T_eG$ at the identity of a [[Lie group]] $G$.


of a [[matrix Lie group]] $G$ is given by those $n \times n$ matrices $X$ such that the [[matrix exponential]] $e^{tX} \in G$ for $t \in \RR$. 

# Examples

Let's find the Lie algebra of the [[3D rotation group]] $SO(3)$. An infinitesimal transformation is given by $O = I + \epsilon J$, and we need to find $J$. But since $O$ is an [[orthogonal matrix]], we must have

\begin{gather}
(I + \epsilon J)^\mathsf{T} ( I + \epsilon J) = I \\\\\
I + \epsilon J^\mathsf{T} + \epsilon J + \cancelto{0}{\epsilon^2 J^\mathsf{T} J} = I \\\\\
J^\mathsf{T} + J = 0
\end{gather}

The above derivation came from [here](http://jakobschwichtenberg.com/naive-introduction-lie-theory/).