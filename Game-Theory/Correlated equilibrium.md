A **correlated equilibrium** is an equilibrium in a [[general sum game]] where it's better for players to not make choices independently. We have a correlated equilibrium if the strategy 

$$
\sum_j z_{ij}a_{ij} \geqslant \sum_j z_{ij}a_{\ell j}, \qquad \forall i, \ell
$$

In other words, it is better to follow the moderator than do something different.


~~([[probability mass function]]) $z_{ij} = \mathbb{P}(\mathcal{R}=i, \mathcal{C}=j)$ in a two-player game where a person has no reason to deviate when a mediator tells them which move they should take.~~

# Motivation

Consider a "battle of the sexes" game where the row player is wife and column player is husband and they are deciding what to do for the evening:

||Opera|Baseball|
|-|-|-|
|**Opera**|(4,1)|(0,0)|
|**Baseball**|(0,0)|(1,4)|

The [[Nash equilibria|Nash equilibrium]]:

* pure; do the same thing (opera/opera or baseball/baseball)
* mixed; $\left(\frac{4}{5}, \frac{1}{5}\right)$ and $\left(\frac{1}{5}, \frac{4}{5}\right)$.

But notice that the mixed equilibrium gives a worse expected payoff than if they decided to just do what the other one does. So a simple solution is to flip a coin and let that decide where both are going.

# Technical Construction

It is a correlated strategy pair () in a two-player game with payoff matrices $A$ and $B$ such that

\begin{gather}
\mathbb{P}(\mathcal{R} = i) > 0 \implies \mathbb{E}\left( a_{i,\mathcal{C}} \mid \mathcal{R} = i\right) \geqslant \mathbb{E}\left( a_{\ell, \mathcal{C}} \mid \mathcal{R} = i\right), \qquad \forall i,\ell \in [n] \\\\
\mathbb{P}(\mathcal{C} = j) > 0 \implies \mathbb{E}\left( b_{\mathcal{R},j} \mid \mathcal{C} = j\right) \geqslant \mathbb{E}\left( b_{\mathcal{R}, k} \mid \mathcal{C} = j\right), \qquad \forall j,k \in [m]
\end{gather}

Alternatively, we want

\begin{gather}
\sum_j z_{ij}a_{ij} \geqslant \sum_j z_{ij}a_{\ell j}, \qquad \forall i, \ell \\\\
\sum_{i} z_{ij}b_{ij} \geqslant \sum_i z_{ij}b_{ik}, \qquad \forall j,k
\end{gather}