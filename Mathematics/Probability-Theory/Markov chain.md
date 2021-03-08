A **Markov chain** is a random process $X_n$ where $X_i \in S$ where $S$ is a state space satisfying Markov property.

\begin{equation}
\Pr\left( X_{n+1} = j \mid X_n = i, X_{n-1}=x_{n-1}, \dots, X_0 = x_0 \right) = \Pr(X_{n+1} = j \mid X_n = i) \triangleq p_{ij}
\end{equation}

# Classification

If there is a path in state-transition diagram from $i$ to $j$ (i.e. $P_{ij}^n > 0$ for some $n \geqslant 1$), then $j$ is _accessible_ from $i$, and we write $i \rightarrow j$. 

States $i$ and $j$ communicate if we have $i \longleftrightarrow j$, and defines an [[equivalence relation]] and [[equivalence class]]

Irreducible
: An irreducible Markov chain is one that has only one class, meaning all states communicate with each other.

A state $i \in S$ is recurrent if given that $X_0 = i$, the process revisits state $i$ with probability one.