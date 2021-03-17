A **Markov chain** is a random process $X_n$ where $X_i \in S$ where $S$ is a state space satisfying Markov property.

\begin{equation}
\Pr\left( X_{n+1} = j \mid X_n = i, X_{n-1}=x_{n-1}, \dots, X_0 = x_0 \right) = \Pr(X_{n+1} = j \mid X_n = i)
\end{equation}

The $X_n$ is the state of the process at a discrete time. We'll consider temporally homogenous Markov chains, which means

$$
p_{ij} \triangleq \Pr(X_{n+1} = j \mid X_n = i)
$$

So $p_{ij}$ is the probability going from state $i$ to state $j$. Of course, $p_{ij} \geqslant 0$ and $\sum_{j \in S} p_{ij} = 1$.

# Classification

If there is a path in state-transition diagram from $i$ to $j$ (i.e. $P_{ij}^n > 0$ for some $n \geqslant 1$), then $j$ is _accessible_ from $i$, and we write $i \rightarrow j$. 

States $i$ and $j$ communicate if we have $i \longleftrightarrow j$, and defines an [[equivalence relation]] and [[equivalence class]]

Irreducible
: An irreducible Markov chain is one that has only one class, meaning all states communicate with each other.

Recurrent state
: A state $i \in S$ is recurrent if given that $X_0 = i$, the process revisits state $i$ with probability one.

Define a [[random variable]] to track the first time entering state $i$:

$$
T_i = \min \left\\{ n \geqslant 1: X_n = i \right\\}
$$

Positive recurrent
: A recurrent state where $\mathbb{E}(T_i \mid X_0 = i) < \infty.$

Null recurrent
: A recurrent state where $\mathbb{E}(T_i \mid X_0 = i) = \infty.$

Period
: $\mathsf{period}(i) = \mathsf{GCD}\\{ n \geqslant 1: P_{ii}^n > 0\\}.$