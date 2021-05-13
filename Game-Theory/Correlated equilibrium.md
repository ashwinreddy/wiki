A **correlated equilibrium** is an equilibrium in a [[general sum game]] where it's better for players to not make choices independently. Let's say we have payoff matrices $A$ for player 1 and $B$ for player 2. Then, we have a correlated equilibrium if the strategy 

$$
z_{ij} = \mathbb{P}\left(\mathcal{R}= i, \mathcal{C} = j\right)
$$

\begin{align}
\sum_j z_{ij}a_{ij} \geqslant \sum_j z_{ij}a_{\ell j}, \qquad \forall i, \ell \tag{Player 1} \\\\
\sum_{i} z_{ij}b_{ij} \geqslant \sum_i z_{ij}b_{ik}, \qquad \forall j,k \tag{Player 2}
\end{align}

In other words, neither player has incentive to deviate from the moderator's instruction. We can also see if player $i$'s expected payoff conditioned on being told to play $j$ is at least as large as the expected payoff when playing $l$ conditioned on being told to play $j$.


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