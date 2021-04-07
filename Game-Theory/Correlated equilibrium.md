A **correlated equilibrium** 

# Motivation

Consider a game

||A|B|
|-|-|-|
|A|(4,1)|(0,0)|
|B|(0,0)|(1,4)|



# Technical Construction

It is a correlated strategy pair ($z_{ij} = \mathbb{P}(\mathcal{R}=i, \mathcal{C}=j)$) in a two-player game with payoff matrices $A$ and $B$ such that

\begin{gather}
\mathbb{P}(\mathcal{R} = i) > 0 \implies \mathbb{E}\left( a_{i,\mathcal{C}} \mid \mathcal{R} = i\right) \geqslant \mathbb{E}\left( a_{\ell, \mathcal{C}} \mid \mathcal{R} = i\right), \qquad \forall i,\ell \in [n] \\\\
\mathbb{P}(\mathcal{C} = j) > 0 \implies \mathbb{E}\left( b_{\mathcal{R},j} \mid \mathcal{C} = j\right) \geqslant \mathbb{E}\left( b_{\mathcal{R}, k} \mid \mathcal{C} = j\right), \qquad \forall j,k \in [m]
\end{gather}

Alternatively, we want

\begin{gather}
\sum_j z_{ij}a_{ij} \geqslant \sum_j z_{ij}a_{\ell j}, \qquad \forall i, \ell \\\\
\sum_{i} z_{ij}b_{ij} \geqslant \sum_i z_{ij}b_{ik}, \qquad \forall j,k
\end{gather}