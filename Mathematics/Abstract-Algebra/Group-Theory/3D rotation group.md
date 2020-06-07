The **3D rotation group** $SO(3)$ is the [[special orthogonal group]] of order $3$. It is a [[simple Lie group]].

# [[Lie algebra]]

The Lie algebra $\mathfrak{so}(3)$ is [[isomorphic|isomorphism]] to the Lie algebra $\RR^3$ with [[cross product]].

An infinitesimal transformation is given by $O = I + \epsilon J$, and we need to find $J$. But since $O$ is an [[orthogonal matrix]], we must have

\begin{gather}
(I + \epsilon J)^\mathsf{T} ( I + \epsilon J) = I \\\\\
I + \epsilon J^\mathsf{T} + \epsilon J + \cancelto{0}{\epsilon^2 J^\mathsf{T} J} = I \\\\\
J^\mathsf{T} + J = 0
\end{gather}

The above derivation came from [here](http://jakobschwichtenberg.com/naive-introduction-lie-theory/).