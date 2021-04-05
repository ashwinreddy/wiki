A **Markov chain** is a random process $(X_n)_{n \in \mathbb{N}}$ where $X_i \in \mathcal{X}$ where $\mathcal{X}$ is a state space satisfying [[Markov property]].

The $X_n$ is the state of the process at a discrete time. We'll consider temporally homogenous Markov chains, which means

$$
p_{ij} \triangleq \Pr(X_{n+1} = j \mid X_n = i)
$$

So $p_{ij}$ is the probability going from state $i$ to state $j$. Of course, these form a [[probability mass function]] so that $p_{ij} \geqslant 0$ and $\sum_{j \in S} p_{ij} = 1$.

[[_TOC_]]

# Classification

If there is a path in state-transition diagram from $i$ to $j$ (i.e. $P_{ij}^n > 0$ for some $n \geqslant 1$), then $j$ is _accessible_ from $i$, and we write $i \rightarrow j$. 

States $i$ and $j$ communicate if we have $i \longleftrightarrow j$, and defines an [[equivalence relation]] and [[equivalence class]]

Irreducible
: An irreducible Markov chain is one that has only one class, meaning all states communicate with each other.

Every irreducible finite-state MC is positive recurrent.

# Class properties

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

Reversible MC
: An irreducible MC is reversible if there's a $\pi$ s.t. \begin{equation}\forall x, y \in \mathcal{X}: \pi(x) P(x,y) \equiv \pi(y) P(y,x) \tag{Detailed Balance Equations}\end{equation}

# Stationary distribution

[[include:stationary-distribution]]

# Cut Property

Cut
: A cut of a Markov chain is a partition
of the states into two disjoint subsets. 

> If a Markov Chain is in stationarity, the net flow across every cut must be 0. 