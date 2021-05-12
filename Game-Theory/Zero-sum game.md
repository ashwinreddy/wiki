A **zero-sum game** is a [[general-sum game]] where the winner wins as much as the loser loses (ergo the name zero-sum). In a two-player finite zero-sum game, we use a [[matrix]] $C$ to represent the payoffs. Player 1 is by convention the row player while player 2 is the column player.

[[_TOC_]]

# Two-person zero-sum games

## Saddle Points

# Value

If player 1 is using strategy $x$ and player 2 is using $y$, then the payoff to player 1 is given by $x^\mathsf{T}Cy$. The **value** of the game is given by

\begin{equation}
V = \max_x \min_y x^\mathsf{T} C y = \min_y \max_x x^\mathsf{T} C y. \tag{Value}
\end{equation}

# Safety Strategies

How do we solve the game?

1. Look for [[saddle point]]. If there is one, that's the value of the game. 
2. Domination
3. Equalize payoffs


## Domination

* A row is (strictly) dominated if there exists a convex combination of other rows that is elementwise (strictly) larger than it.
* A column is (strictly) dominated if there exists a convex combination of other columns that is elementwise (strictly) smaller than it.

If a row/column is dominated, that means that the corresponding player can do better without needing to use it. If there is strict domination, the row/column can be discarded without changing the game at all.


## Equalizing payoff

Assume the optimal strategy is [[fully mixed|strategy]]. Then, you can find strategies by equating the payoffs. If you don't end up with fully mixed strategies, then this method "fails."

Let's look at an example. Say the payoff matrix is

$$
\begin{bmatrix}
1 & -2 \\\\
-3 & 5
\end{bmatrix}
$$

As the row player, you can go top or bottom. 

$$
1 \cdot x + (-3)(1-x) = (-2)x + 5(1-x)
$$

Let the $i$th column of the payoff matrix be $\vec{c}_i$. We are trying to solve for strategy $\vec{x}$ such that

\begin{equation}
\langle \vec{x}, \vec{c}_1 \rangle = \dots = \langle \vec{x}, \vec{c}_n \rangle \tag{Row Player Equalization}
\end{equation}

For the column player, we'd have for $i$th row $\vec{r}_i$ a strategy $\vec{y}$ such that

\begin{equation}
\langle \vec{y}, \vec{r}_1 \rangle = \dots = \langle \vec{y}, \vec{r}_m \rangle \tag{Column Player Equalization}
\end{equation}