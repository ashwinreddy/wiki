A **discrete-time Markov chain (DTMC)** is a [[random process]] $(X_n)_{n \in \mathbb{N}}$ on a state space $\mathcal{X}$, satisfying the [[Markov property]]. We'll consider temporally homogenous Markov chains, which means

$$
p_{ij} \triangleq \Pr(X_{n+1} = j \mid X_n = i), \tag{Transition Probability Matrix}
$$

so $p_{ij}$ is the probability going from state $i$ to state $j$. Of course, these form a [[probability mass function]] so that $p_{ij} \geqslant 0$ and $\sum_{j \in S} p_{ij} = 1$.

[[_TOC_]]

# Classification

If there is a path in state-transition diagram from $i$ to $j$ (i.e. $P_{ij}^n > 0$ for some $n \geqslant 1$), then $j$ is _accessible_ from $i$, and we write $i \rightarrow j$. 

States $i$ and $j$ communicate if we have $i \longleftrightarrow j$, and defines an [[equivalence relation]] and [[equivalence class]]

Irreducible
: An irreducible Markov chain is one that has only one class, meaning all states communicate with each other.

Every irreducible finite-state MC is positive recurrent.

# Class properties

Recurrent state
: A state that returns to itself with probability one.

Transient state
: A state that returns to itself with probability less than one.

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

# Reversibility

We can run an irreducible Markov chain in reverse by defining

\begin{equation}
Y_n \triangleq X_{N - n},\qquad n = 0, 1, \dots N.
\end{equation}

If the original $X_n$ has stationary distribution $\pi$, then $Y_n$ has transition probabilities

\begin{equation}
\label{eq:dbe}
\hat{P}(x, y) = { \pi(y)P(y, x) \over \pi(x) } 
\end{equation}

The stationary distribution is also $\pi$. 

A **reversible MC** is one that has $\hat{P} = P$, therefore equation \ref{eq:dbe} reads the condition

\begin{equation}
\pi(x) P(x,y) \equiv \pi(y)P(y, x)
\end{equation}


Reversible MC
: An irreducible MC is reversible if there's a $\pi$ satisfying \ref{eq:reversible}

## Detailed Balance



# Stationary distribution

[[Stationary distribution]]

# Cut Property

Cut
: A cut of a Markov chain is a partition
of the states into two disjoint subsets. 

> If a Markov Chain is in stationarity, the net flow across every cut must be 0. 