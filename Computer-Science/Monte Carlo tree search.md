---
bibliography: "./Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib"
---


**Monte Carlo tree search (MCTS)** is a [[tree]] search algorithm using Monte-Carlo evaluation introduced in @coulom2006efficient.

> Monte Carlo Tree Search has one main purpose: given a game state to choose the most promising next move. -- [Monte Carlo Tree Search – beginners guide](https://int8.io/monte-carlo-tree-search-beginners-guide)

It is [[Monte Carlo algorithm]] in the sense that it simulate the game many times and predict the most promising move based on the results. Let's define some terms.

Playout/Simulation
: The approximate evaluation of a game tree node by running a game starting at that node, following the **rollout policy**, and ending at a terminal node, where the game result can be computed.

In MCTS, however, we only consider **unvisited nodes**. 

Visited node
: A node that was selected as the root for playout[^caveat]

[^caveat]: N.B. this definition excludes a node visited during simulation from being a visited node.

Fully expanded node
: A node whose children have all been visited

**Backpropagation** is the traversal of the simulation result from a freshly visited node up to the root node, updating the **statistics** along the way. Every node $v$ gets a $Q(v)$ and a $N(v)$. $Q(v)$ is the **total simulation reward** and $N(v)$ is the total number of visits. Note that $Q_i$ is with respect to the player who moves at node $i$.

For a child node $v_i$ of a node $v$, the **upper confidence bound** is defined as

$$
\mathbb{UCT}(v_i, v) = \overbrace{\frac{Q(v_i)}{N(v_i)}}^{\text{exploitation component}} + \overbrace{ c \sqrt{ \frac{ \log N(v) }{ N(v_i) } } }^\text{exploration component}
$$

The exploitation component measures win ratio, the second gives a bonus for exploring states, and $c$ controls the weighting.

[[https://int8.io/wp-content/uploads/2018/03/exploration-uct.png]]

---